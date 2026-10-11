/**
 * history.js
 * 풀이 히스토리 세션화, 성취도 통계 대시보드, 필터링 및 오답 재시험 모듈
 *
 * 세션 단위 포맷:
 * <맞춘 문제/푼 문제> <과목> <타임스탬프>
 * 카드를 클릭하여 해당 세션의 문제 목록과 상세 해설을 펼쳐보기 지원
 */

const SESSIONS_STORAGE_KEY = "exam_quiz_sessions";
let historyFilterSubject = "all";
let historyFilterStatus = "all";

// 세션 데이터 로드 (구버전 개별 기록 자동 마이그레이션 호환)
function getSessions() {
  try {
    const raw = localStorage.getItem(SESSIONS_STORAGE_KEY);
    if (raw) return JSON.parse(raw);

    // 구버전 flat history 마이그레이션
    const oldHistory = localStorage.getItem("exam_quiz_history");
    if (oldHistory) {
      const flat = JSON.parse(oldHistory);
      if (Array.isArray(flat) && flat.length > 0) {
        const grouped = [];
        const groupMap = new Map();
        flat.forEach((item) => {
          const key = `${item.subject}_${item.timestamp}`;
          if (!groupMap.has(key)) {
            const newSession = {
              id:
                "session_migrated_" +
                Math.random().toString(36).substr(2, 7),
              timestamp: item.timestamp,
              subject: item.subject,
              subjectName: item.subjectName,
              questions: [],
            };
            groupMap.set(key, newSession);
            grouped.push(newSession);
          }
          groupMap.get(key).questions.push(item);
        });
        grouped.forEach((s) => {
          s.totalCount = s.questions.length;
          s.correctCount = s.questions.filter((q) => q.isCorrect).length;
          s.wrongCount = s.totalCount - s.correctCount;
          s.scorePct = Math.round((s.correctCount / s.totalCount) * 100);
        });
        localStorage.setItem(SESSIONS_STORAGE_KEY, JSON.stringify(grouped));
        return grouped;
      }
    }
    return [];
  } catch (e) {
    console.error("Failed to parse sessions from localStorage", e);
    return [];
  }
}

// 퀴즈 제출 시 단일 세션으로 일괄 저장
function saveQuizSession(sessionRecord) {
  const sessions = getSessions();
  // 최신 세션을 맨 앞에 추가
  const merged = [sessionRecord, ...sessions];
  // 최대 300개 세션 보관
  const trimmed = merged.slice(0, 300);
  try {
    localStorage.setItem(SESSIONS_STORAGE_KEY, JSON.stringify(trimmed));
  } catch (e) {
    console.error("Failed to save session to localStorage", e);
  }
}

// 이전 호환용 더미 함수
function saveHistoryBatch(records) {
  if (records && records.length > 0) {
    const first = records[0];
    const total = records.length;
    const correct = records.filter((r) => r.isCorrect).length;
    saveQuizSession({
      id: "session_" + Date.now() + "_" + Math.random().toString(36).substr(2, 5),
      timestamp: first.timestamp,
      subject: first.subject,
      subjectName: first.subjectName,
      totalCount: total,
      correctCount: correct,
      wrongCount: total - correct,
      unansweredCount: 0,
      scorePct: Math.round((correct / total) * 100),
      questions: records,
    });
  }
}

function clearAllHistory() {
  if (
    confirm("지금까지 저장된 모든 퀴즈 세션 풀이 기록과 오답노트를 삭제하시겠습니까?")
  ) {
    localStorage.removeItem(SESSIONS_STORAGE_KEY);
    localStorage.removeItem("exam_quiz_history");
    renderHistoryView();
    alert("풀이 히스토리가 초기화되었습니다.");
  }
}

function deleteSession(sessionId, event) {
  if (event) event.stopPropagation();
  if (confirm("해당 문제풀이 세션을 삭제하시겠습니까?")) {
    const sessions = getSessions();
    const updated = sessions.filter((s) => s.id !== sessionId);
    localStorage.setItem(SESSIONS_STORAGE_KEY, JSON.stringify(updated));
    renderHistoryView();
  }
}

function toggleSession(sessionId) {
  const body = document.getElementById(`session-body-${sessionId}`);
  const indicator = document.getElementById(`toggle-indicator-${sessionId}`);
  if (!body) return;

  const isOpen = body.classList.contains("open");
  if (isOpen) {
    body.classList.remove("open");
    if (indicator) {
      indicator.innerHTML = '▼ 자세히 보기';
    }
  } else {
    body.classList.add("open");
    if (indicator) {
      indicator.innerHTML = '▲ 세션 접기';
    }
    // KaTeX re-render for newly opened session
    if (window.renderMathInElement) {
      renderMathInElement(body, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false },
        ],
        throwOnError: false,
      });
    }
  }
}

function setHistFilter(type, value, btnEl) {
  if (type === "subject") historyFilterSubject = value;
  if (type === "status") historyFilterStatus = value;

  if (btnEl && btnEl.parentElement) {
    btnEl.parentElement
      .querySelectorAll(".filter-btn")
      .forEach((b) => b.classList.remove("active"));
    btnEl.classList.add("active");
  }
  renderHistoryView();
}

function getSubjectBadgeStyle(subject) {
  switch (subject) {
    case "algorithms":
      return { bg: "#2563eb", name: "📘 알고리즘 분석" };
    case "it":
      return { bg: "#0891b2", name: "💾 정보처리기술" };
    case "os":
      return { bg: "#7c3aed", name: "⚙️ 운영체제론" };
    case "db":
      return { bg: "#d97706", name: "🗄️ 데이터베이스" };
    default:
      return { bg: "#475569", name: subject };
  }
}

function renderHistoryView() {
  const sessions = getSessions();

  // 1. 전체 인사이트 통계 계산 (기존 대시보드 유지)
  let totalCount = 0;
  let correctCount = 0;

  sessions.forEach((s) => {
    totalCount += s.totalCount || 0;
    correctCount += s.correctCount || 0;
  });

  const wrongCount = totalCount - correctCount;
  const rate =
    totalCount > 0 ? ((correctCount / totalCount) * 100).toFixed(1) : "0.0";

  const statTotalEl = document.getElementById("hist-stat-total");
  const statRateEl = document.getElementById("hist-stat-rate");
  const statCorrectEl = document.getElementById("hist-stat-correct");
  const statWrongEl = document.getElementById("hist-stat-wrong");

  if (statTotalEl) statTotalEl.textContent = totalCount;
  if (statRateEl) statRateEl.textContent = rate + "%";
  if (statCorrectEl) statCorrectEl.textContent = correctCount;
  if (statWrongEl) statWrongEl.textContent = wrongCount;

  // 2. 과목별 성취도 현황 계산 (기존 바 유지)
  const subjects = ["algorithms", "it", "os", "db"];
  subjects.forEach((sub) => {
    const subSessions = sessions.filter((s) => s.subject === sub);
    let subTotal = 0;
    let subCorrect = 0;
    subSessions.forEach((s) => {
      subTotal += s.totalCount || 0;
      subCorrect += s.correctCount || 0;
    });
    const subPct = subTotal > 0 ? Math.round((subCorrect / subTotal) * 100) : 0;

    const barEl = document.getElementById(`bar-${sub}`);
    const statEl = document.getElementById(`stat-${sub}`);
    if (barEl) barEl.style.width = subPct + "%";
    if (statEl) statEl.textContent = `${subCorrect} / ${subTotal} (${subPct}%)`;
  });

  // 3. 필터 적용 (과목 필터 & 오답 여부 필터)
  let filteredSessions = [...sessions];
  if (historyFilterSubject !== "all") {
    filteredSessions = filteredSessions.filter(
      (s) => s.subject === historyFilterSubject
    );
  }
  if (historyFilterStatus === "wrong") {
    filteredSessions = filteredSessions.filter((s) => s.wrongCount > 0);
  } else if (historyFilterStatus === "correct") {
    filteredSessions = filteredSessions.filter((s) => s.wrongCount === 0);
  }

  const container = document.getElementById("history-items-container");
  if (!container) return;

  if (filteredSessions.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:60px 20px; background:white; border-radius:12px; border:1px solid #e2e8f0; color:#64748b;">
        <div style="font-size:3rem; margin-bottom:12px;">📭</div>
        <div style="font-size:1.1rem; font-weight:700; color:#1e293b; margin-bottom:6px;">풀이 세션 기록이 없습니다</div>
        <p style="font-size:0.9rem;">각 과목의 [실전 퀴즈 뱅크] 탭에서 문제를 풀고 채점을 완료하면 여기에 세션별로 자동 저장됩니다.</p>
      </div>
    `;
    return;
  }

  // 4. 세션 단위 목록 렌더링
  let html = "";
  filteredSessions.forEach((session, sessionIdx) => {
    const subMeta = getSubjectBadgeStyle(session.subject);
    const scorePct = session.scorePct;
    let rateClass = "mid";
    let scoreTagClass = "good";
    let statusLabel = `정답률 ${scorePct}%`;

    if (scorePct === 100) {
      rateClass = "high";
      scoreTagClass = "perfect";
      statusLabel = "💯 만점 (100%)";
    } else if (scorePct < 70) {
      rateClass = "low";
      scoreTagClass = "retry";
      statusLabel = `복습 권장 (${scorePct}%)`;
    }

    // 첫 번째 세션만 기본 펼침 처리하거나 모두 접힌 상태로 제공 (기본: 첫 세션 펼침)
    const isFirst = sessionIdx === 0;
    const bodyOpenClass = isFirst ? "open" : "";
    const toggleText = isFirst ? "▲ 세션 접기" : "▼ 자세히 보기";

    html += `
      <div class="session-card" id="session-card-${session.id}">
        <!-- 세션 요약 헤더 (클릭 시 펼치기/접기) -->
        <div class="session-card-header" onclick="toggleSession('${session.id}')">
          <div class="session-main-info">
            <!-- <맞춘 문제/푼 문제> -->
            <div class="session-score-tag ${scoreTagClass}">
              <span>🎯</span> ${session.correctCount} / ${session.totalCount} 문제 정답
            </div>
            <!-- <과목> -->
            <span class="session-subject-tag" style="background:${subMeta.bg};">
              ${subMeta.name}
            </span>
            <!-- <타임스탬프> -->
            <div class="session-time-tag">
              <span>⏱️</span> ${session.timestamp}
            </div>
          </div>

          <div class="session-meta-right">
            <span class="session-rate-badge ${rateClass}">${statusLabel}</span>
            <span class="session-toggle-pill" id="toggle-indicator-${session.id}">${toggleText}</span>
            <button onclick="deleteSession('${session.id}', event)" class="session-del-btn" title="이 세션 삭제">🗑️</button>
          </div>
        </div>

        <!-- 세션 상세 본문 (문제 목록 및 해설) -->
        <div class="session-body ${bodyOpenClass}" id="session-body-${session.id}">
          <div class="session-summary-strip">
            <div>
              <strong>응시 요약:</strong> 총 ${session.totalCount}문항 중 ${session.correctCount}문제 정답 (${scorePct}점) | 오답: ${session.wrongCount}개
            </div>
            ${
              session.wrongCount > 0
                ? `<button onclick="retrySessionWrongQuestions('${session.id}')" class="btn btn-primary" style="padding:5px 12px; font-size:0.8rem;">🔄 이 세션 오답(${session.wrongCount}문제) 다시 풀기</button>`
                : `<span style="color:#15803d; font-weight:700;">🎉 모든 문제를 맞혔습니다!</span>`
            }
          </div>

          <div class="session-questions-list">
    `;

    // 해당 세션의 각 문제 카드
    (session.questions || []).forEach((item, qIdx) => {
      const isCorrect = item.isCorrect;
      const cardClass = isCorrect ? "is-correct" : "is-wrong";
      const statusBadge = isCorrect
        ? '<span class="badge-status correct">⭕ 정답 (+1)</span>'
        : '<span class="badge-status wrong">❌ 오답</span>';

      html += `
        <div class="history-card ${cardClass}" style="margin-bottom:12px;">
          <div class="history-card-header">
            <div class="history-badges">
              <span class="badge-sub" style="font-weight:700;">#${qIdx + 1}</span>
              <span class="badge-sub">${item.topic}</span>
            </div>
            <div>
              ${statusBadge}
            </div>
          </div>

          <div style="font-size:0.95rem; font-weight:600; color:#1e293b; margin-bottom:10px; line-height:1.5;">
            ${item.question}
          </div>

          <div class="history-options-list">
      `;

      (item.options || []).forEach((opt, optIdx) => {
        let optClass = "";
        let tag = "";
        if (optIdx === item.correctAnswer) {
          optClass = "target-correct";
          tag = '<span style="font-size:0.76rem; font-weight:700;">✅ 실제 정답</span>';
        }
        if (optIdx === item.userAnswer && !isCorrect) {
          optClass = "user-wrong";
          tag = '<span style="font-size:0.76rem; font-weight:700;">❌ 내가 고른 오답</span>';
        } else if (optIdx === item.userAnswer && isCorrect) {
          tag = '<span style="font-size:0.76rem; font-weight:700;">⭕ 내가 선택함</span>';
        }

        html += `
          <div class="history-opt-item ${optClass}">
            <span>${opt}</span>
            ${tag}
          </div>
        `;
      });

      html += `
          </div>
          <div class="history-explanation">
            <strong>💡 문제 해설:</strong> ${item.explanation}
          </div>
        </div>
      `;
    });

    html += `
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;

  // KaTeX formatting
  if (window.renderMathInElement) {
    renderMathInElement(container, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false },
      ],
      throwOnError: false,
    });
  }
}

// 특정 세션의 오답들로만 다시 풀기
function retrySessionWrongQuestions(sessionId) {
  const sessions = getSessions();
  const session = sessions.find((s) => s.id === sessionId);
  if (!session) return;

  const wrongQuestions = (session.questions || []).filter((q) => !q.isCorrect);
  if (wrongQuestions.length === 0) {
    alert("🎉 이 세션에는 틀린 문제가 없습니다!");
    return;
  }

  launchRetryQuiz(session.subject, wrongQuestions);
}

// 전체 히스토리의 오답들로 재시험 치기
function retryWrongQuestions() {
  const sessions = getSessions();
  const allWrong = [];
  sessions.forEach((s) => {
    (s.questions || []).forEach((q) => {
      if (!q.isCorrect) allWrong.push(q);
    });
  });

  if (allWrong.length === 0) {
    alert("🎉 축하합니다! 현재 풀이 히스토리에 틀린 문제가 없습니다.");
    return;
  }

  // 중복 문제 제거
  const uniqueMap = new Map();
  allWrong.forEach((item) => {
    if (!uniqueMap.has(item.question)) {
      uniqueMap.set(item.question, item);
    }
  });
  const uniqueWrongs = Array.from(uniqueMap.values());
  const targetSubject = uniqueWrongs[0].subject || "algorithms";

  alert(
    `총 ${uniqueWrongs.length}개의 고유 오답 문제를 발견했습니다. [${getSubjectName(
      targetSubject
    )}] 탭으로 이동하여 오답 탈출 세트를 시작합니다!`
  );

  launchRetryQuiz(targetSubject, uniqueWrongs);
}

// 오답 리스트로 퀴즈 화면 전환 및 렌더링 공통 함수
function launchRetryQuiz(targetSubject, questionsList) {
  if (typeof CURRENT_ACTIVE_QUIZ !== "undefined") {
    CURRENT_ACTIVE_QUIZ[targetSubject] = questionsList.map((w) => ({
      id: w.id,
      subject: w.subject,
      topic: w.topic,
      type: "mcq",
      question: w.question,
      options: w.options,
      answer: w.correctAnswer,
      explanation: w.explanation,
    }));
  }

  if (typeof switchSubject === "function") {
    switchSubject(targetSubject);
  }

  if (targetSubject === "algorithms") switchMainTab("quiz-choice");
  else if (targetSubject === "it") switchItMainTab("quiz-subjective");
  else if (targetSubject === "os") switchOsMainTab("quiz");
  else if (targetSubject === "db") switchDbMainTab("quiz");

  if (typeof renderDynamicQuiz === "function") {
    renderDynamicQuiz(targetSubject);
  }
}
