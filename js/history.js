/**
 * history.js
 * 풀이 히스토리, 성취도 통계 대시보드, 필터링 및 오답 재시험 모듈
 */

const HISTORY_STORAGE_KEY = "exam_quiz_history";
let historyFilterSubject = "all";
let historyFilterStatus = "all";

function getHistory() {
  try {
    const raw = localStorage.getItem(HISTORY_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error("Failed to parse history from localStorage", e);
    return [];
  }
}

function saveHistoryBatch(newRecords) {
  const history = getHistory();
  // Prepend new records to top
  const merged = [...newRecords, ...history];
  // Limit to max 2000 items to avoid localStorage overflow
  const trimmed = merged.slice(0, 2000);
  try {
    localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(trimmed));
  } catch (e) {
    console.error("Failed to save history to localStorage", e);
  }
}

function clearAllHistory() {
  if (
    confirm("지금까지 저장된 모든 퀴즈 풀이 기록과 오답노트를 삭제하시겠습니까?")
  ) {
    localStorage.removeItem(HISTORY_STORAGE_KEY);
    renderHistoryView();
    alert("풀이 히스토리가 초기화되었습니다.");
  }
}

function deleteHistoryItem(id) {
  const history = getHistory();
  const updated = history.filter((item) => item.id !== id);
  localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(updated));
  renderHistoryView();
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

function renderHistoryView() {
  const history = getHistory();

  // Calculate Stats
  const total = history.length;
  const correctCount = history.filter((h) => h.isCorrect).length;
  const wrongCount = total - correctCount;
  const rate = total > 0 ? ((correctCount / total) * 100).toFixed(1) : "0.0";

  const statTotalEl = document.getElementById("hist-stat-total");
  const statRateEl = document.getElementById("hist-stat-rate");
  const statCorrectEl = document.getElementById("hist-stat-correct");
  const statWrongEl = document.getElementById("hist-stat-wrong");

  if (statTotalEl) statTotalEl.textContent = total;
  if (statRateEl) statRateEl.textContent = rate + "%";
  if (statCorrectEl) statCorrectEl.textContent = correctCount;
  if (statWrongEl) statWrongEl.textContent = wrongCount;

  // Subject breakdown
  const subjects = ["algorithms", "it", "os", "db"];
  subjects.forEach((sub) => {
    const subItems = history.filter((h) => h.subject === sub);
    const subTotal = subItems.length;
    const subCorrect = subItems.filter((h) => h.isCorrect).length;
    const subPct = subTotal > 0 ? Math.round((subCorrect / subTotal) * 100) : 0;

    const barEl = document.getElementById(`bar-${sub}`);
    const statEl = document.getElementById(`stat-${sub}`);
    if (barEl) barEl.style.width = subPct + "%";
    if (statEl) statEl.textContent = `${subCorrect} / ${subTotal} (${subPct}%)`;
  });

  // Filter
  let filtered = [...history];
  if (historyFilterSubject !== "all") {
    filtered = filtered.filter((h) => h.subject === historyFilterSubject);
  }
  if (historyFilterStatus === "wrong") {
    filtered = filtered.filter((h) => !h.isCorrect);
  } else if (historyFilterStatus === "correct") {
    filtered = filtered.filter((h) => h.isCorrect);
  }

  const container = document.getElementById("history-items-container");
  if (!container) return;

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:60px 20px; background:white; border-radius:12px; border:1px solid #e2e8f0; color:#64748b;">
        <div style="font-size:3rem; margin-bottom:12px;">📭</div>
        <div style="font-size:1.1rem; font-weight:700; color:#1e293b; margin-bottom:6px;">풀이 기록이 없습니다</div>
        <p style="font-size:0.9rem;">각 과목의 [실전 퀴즈 뱅크] 탭에서 문제를 풀고 채점을 완료하면 여기에 자동으로 누적됩니다.</p>
      </div>
    `;
    return;
  }

  let html = "";
  filtered.forEach((item) => {
    const isCorrect = item.isCorrect;
    const cardClass = isCorrect ? "is-correct" : "is-wrong";
    const statusBadge = isCorrect
      ? '<span class="badge-status correct">⭕ 정답 (+1)</span>'
      : '<span class="badge-status wrong">❌ 오답</span>';

    html += `
      <div class="history-card ${cardClass}">
        <div class="history-card-header">
          <div class="history-badges">
            <span class="badge" style="background:#2563eb; color:white; font-size:0.78rem;">${
              item.subjectName
            }</span>
            <span class="badge-sub">${item.topic}</span>
            <span class="badge-time">⏱️ ${item.timestamp}</span>
          </div>
          <div style="display:flex; align-items:center; gap:8px;">
            ${statusBadge}
            <button onclick="deleteHistoryItem('${
              item.id
            }')" style="background:none; border:none; color:#94a3b8; cursor:pointer; font-size:0.9rem;" title="이 기록 삭제">🗑️</button>
          </div>
        </div>

        <div style="font-size:0.98rem; font-weight:600; color:#1e293b; margin-bottom:12px; line-height:1.5;">
          ${item.question}
        </div>

        <div class="history-options-list">
    `;

    item.options.forEach((opt, optIdx) => {
      let optClass = "";
      let tag = "";
      if (optIdx === item.correctAnswer) {
        optClass = "target-correct";
        tag =
          '<span style="font-size:0.78rem; font-weight:700;">✅ 실제 정답</span>';
      }
      if (optIdx === item.userAnswer && !isCorrect) {
        optClass = "user-wrong";
        tag =
          '<span style="font-size:0.78rem; font-weight:700;">❌ 내가 고른 오답</span>';
      } else if (optIdx === item.userAnswer && isCorrect) {
        tag =
          '<span style="font-size:0.78rem; font-weight:700;">⭕ 내가 선택함</span>';
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

function retryWrongQuestions() {
  const history = getHistory();
  const wrongItems = history.filter((h) => !h.isCorrect);

  if (wrongItems.length === 0) {
    alert("🎉 축하합니다! 현재 풀이 히스토리에 틀린 문제가 없습니다.");
    return;
  }

  // Deduplicate by question text
  const uniqueMap = new Map();
  wrongItems.forEach((item) => {
    if (!uniqueMap.has(item.question)) {
      uniqueMap.set(item.question, item);
    }
  });
  const uniqueWrongs = Array.from(uniqueMap.values());

  const targetSubject = uniqueWrongs[0].subject || "algorithms";
  alert(
    `총 ${
      uniqueWrongs.length
    }개의 고유 오답 문제를 발견했습니다. [${getSubjectName(
      targetSubject
    )}] 탭으로 이동하여 오답 탈출 세트를 시작합니다!`
  );

  // Set to current active quiz
  CURRENT_ACTIVE_QUIZ[targetSubject] = uniqueWrongs.map((w) => ({
    id: w.id,
    subject: w.subject,
    topic: w.topic,
    type: "mcq",
    question: w.question,
    options: w.options,
    answer: w.correctAnswer,
    explanation: w.explanation,
  }));

  // Switch to that subject view
  if (typeof switchSubject === "function") {
    switchSubject(targetSubject);
  }

  // Switch to quiz tab in that subject
  if (targetSubject === "algorithms") switchMainTab("quiz-choice");
  else if (targetSubject === "it") switchItMainTab("quiz-subjective");
  else if (targetSubject === "os") switchOsMainTab("quiz");
  else if (targetSubject === "db") switchDbMainTab("quiz");

  if (typeof renderDynamicQuiz === "function") {
    renderDynamicQuiz(targetSubject);
  }
}

