/**
 * quiz.js
 * 4개 과목 퀴즈 뱅크(100제) 랜덤 추출, 셔플, 렌더링, 자동 채점 및 빈칸 퀴즈 모듈
 */

const QUIZ_SETTINGS = {
  algorithms: 20,
  it: 20,
  os: 20,
  db: 20,
};

const CURRENT_ACTIVE_QUIZ = {
  algorithms: [],
  it: [],
  os: [],
  db: [],
};

function getSubjectName(subject) {
  switch (subject) {
    case "algorithms":
      return "알고리즘 분석";
    case "it":
      return "정보처리기술";
    case "os":
      return "운영체제론";
    case "db":
      return "데이터베이스";
    default:
      return subject;
  }
}

function setQuizCount(subject, count, btnEl) {
  QUIZ_SETTINGS[subject] = count;
  if (btnEl && btnEl.parentElement) {
    btnEl.parentElement
      .querySelectorAll(".count-pill")
      .forEach((b) => b.classList.remove("active"));
    btnEl.classList.add("active");
  }
  startNewRandomQuiz(subject);
}

function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function startNewRandomQuiz(subject) {
  if (!window.QUIZ_BANK || !window.QUIZ_BANK[subject]) {
    console.warn("QUIZ_BANK not ready for subject:", subject);
    return;
  }
  const pool = window.QUIZ_BANK[subject];
  const count = Math.min(QUIZ_SETTINGS[subject] || 20, pool.length);
  const shuffled = shuffleArray(pool).slice(0, count);
  CURRENT_ACTIVE_QUIZ[subject] = shuffled;

  renderDynamicQuiz(subject);

  // Hide score banner
  const bannerId =
    subject === "algorithms"
      ? "algo-score-banner"
      : `${subject}-score-banner`;
  const banner = document.getElementById(bannerId);
  if (banner) banner.style.display = "none";
}

function renderDynamicQuiz(subject) {
  const listContainerId =
    subject === "algorithms"
      ? "choice-quiz-list"
      : `${subject}-quiz-list`;
  const container = document.getElementById(listContainerId);
  if (!container) return;

  const questions = CURRENT_ACTIVE_QUIZ[subject];
  if (!questions || questions.length === 0) {
    container.innerHTML =
      '<div style="text-align:center; padding:40px; color:#94a3b8;">문제를 불러오는 중입니다...</div>';
    return;
  }

  let html = "";
  questions.forEach((q, idx) => {
    const qNum = idx + 1;
    html += `
      <div class="quiz-card" id="${subject}-qcard-${idx}">
        <div class="quiz-question">
          <span class="quiz-num">Q${qNum}</span>
          <span class="badge" style="background:#f1f5f9; color:#475569; border:1px solid #cbd5e1; margin-right:8px; font-size:0.78rem;">${q.topic}</span>
          <span style="font-weight:600;">${q.question}</span>
        </div>
        <div class="quiz-options">
    `;

    q.options.forEach((opt, optIdx) => {
      html += `
        <label class="quiz-option" id="${subject}-q-${idx}-opt-${optIdx}">
          <input type="radio" name="${subject}_q_${idx}" value="${optIdx}">
          <span>${opt}</span>
        </label>
      `;
    });

    html += `
        </div>
        <div class="explanation" id="${subject}-explain-${idx}" style="display:none;">
          <strong>💡 정답 및 해설:</strong><br>
          <span id="${subject}-explain-text-${idx}">${q.explanation}</span>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;

  // Trigger KaTeX math rendering
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

function gradeDynamicQuiz(subject) {
  const questions = CURRENT_ACTIVE_QUIZ[subject];
  if (!questions || questions.length === 0) return;

  let correctCount = 0;
  let unansweredCount = 0;
  const solvedRecords = [];
  const nowStr = new Date().toLocaleString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

  questions.forEach((q, idx) => {
    const card = document.getElementById(`${subject}-qcard-${idx}`);
    const checkedInput = document.querySelector(
      `input[name="${subject}_q_${idx}"]:checked`
    );
    const userChoice = checkedInput ? parseInt(checkedInput.value, 10) : null;
    const correctChoice = q.answer;
    const isCorrect = userChoice === correctChoice;

    // Reset styles
    if (card) {
      card.classList.remove("correct", "wrong");
      q.options.forEach((_, optIdx) => {
        const optLabel = document.getElementById(
          `${subject}-q-${idx}-opt-${optIdx}`
        );
        if (optLabel) {
          optLabel.classList.remove("correct", "wrong");
          optLabel.style.borderColor = "";
          optLabel.style.background = "";
          optLabel.style.fontWeight = "";
        }
      });
    }

    if (userChoice === null) {
      unansweredCount++;
    }

    if (isCorrect) {
      correctCount++;
      if (card) {
        card.classList.add("correct");
        const targetOpt = document.getElementById(
          `${subject}-q-${idx}-opt-${correctChoice}`
        );
        if (targetOpt) {
          targetOpt.style.background = "#dcfce7";
          targetOpt.style.borderColor = "#16a34a";
          targetOpt.style.fontWeight = "bold";
        }
      }
    } else {
      if (card) {
        card.classList.add("wrong");
        if (userChoice !== null) {
          const wrongOpt = document.getElementById(
            `${subject}-q-${idx}-opt-${userChoice}`
          );
          if (wrongOpt) {
            wrongOpt.style.background = "#fee2e2";
            wrongOpt.style.borderColor = "#dc2626";
          }
        }
        const targetOpt = document.getElementById(
          `${subject}-q-${idx}-opt-${correctChoice}`
        );
        if (targetOpt) {
          targetOpt.style.background = "#dcfce7";
          targetOpt.style.borderColor = "#16a34a";
          targetOpt.style.fontWeight = "bold";
        }
      }
    }

    // Show explanation
    const explainBox = document.getElementById(`${subject}-explain-${idx}`);
    if (explainBox) {
      explainBox.style.display = "block";
    }

    // History record
    solvedRecords.push({
      id: Date.now() + "_" + idx + "_" + Math.random().toString(36).substr(2, 4),
      timestamp: nowStr,
      subject: subject,
      subjectName: getSubjectName(subject),
      topic: q.topic,
      question: q.question,
      options: q.options,
      userAnswer: userChoice !== null ? userChoice : -1,
      correctAnswer: correctChoice,
      isCorrect: isCorrect,
      explanation: q.explanation,
    });
  });

  // Score calculation
  const total = questions.length;
  const scorePct = Math.round((correctCount / total) * 100);

  // Save complete session to history
  const sessionRecord = {
    id: "session_" + Date.now() + "_" + Math.random().toString(36).substr(2, 5),
    timestamp: nowStr,
    subject: subject,
    subjectName: getSubjectName(subject),
    totalCount: total,
    correctCount: correctCount,
    wrongCount: total - correctCount,
    unansweredCount: unansweredCount,
    scorePct: scorePct,
    questions: solvedRecords,
  };

  if (typeof saveQuizSession === "function") {
    saveQuizSession(sessionRecord);
  } else if (typeof saveHistoryBatch === "function") {
    saveHistoryBatch(solvedRecords);
  }


  const bannerId =
    subject === "algorithms"
      ? "algo-score-banner"
      : `${subject}-score-banner`;
  const textId =
    subject === "algorithms" ? "algo-score-text" : `${subject}-score-text`;
  const detailId =
    subject === "algorithms"
      ? "algo-score-detail"
      : `${subject}-score-detail`;

  const banner = document.getElementById(bannerId);
  const textEl = document.getElementById(textId);
  const detailEl = document.getElementById(detailId);

  if (banner && textEl && detailEl) {
    banner.style.display = "block";
    textEl.textContent = `${correctCount} / ${total} 정답 (${scorePct}점)`;
    detailEl.textContent = `정답: ${correctCount}개 | 오답: ${
      total - correctCount
    }개 (미응시: ${unansweredCount}개) | 정답률: ${scorePct}%`;
    banner.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}

/* ========================================================
   알고리즘 분석 주관식 빈칸 채우기 퀴즈 함수
   ======================================================== */
function gradeBlankQuiz() {
  const inputs = document.querySelectorAll(".blank-input");
  let correctCount = 0;
  let totalCount = inputs.length;

  inputs.forEach((inp) => {
    const userVal = inp.value.trim().toLowerCase().replace(/\s+/g, "");
    const targetAns = inp
      .getAttribute("data-ans")
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "");
    const altAnswers = (inp.getAttribute("data-alt") || "")
      .toLowerCase()
      .split(",")
      .map((s) => s.trim().replace(/\s+/g, ""));

    const isMatch =
      userVal === targetAns || (altAnswers[0] && altAnswers.includes(userVal));

    if (isMatch) {
      correctCount++;
      inp.classList.remove("wrong");
      inp.classList.add("correct");
    } else {
      inp.classList.remove("correct");
      inp.classList.add("wrong");
    }
  });

  const banner = document.getElementById("blank-score-banner");
  const num = document.getElementById("blank-score-num");
  const detail = document.getElementById("blank-score-detail");

  const scorePct = Math.round((correctCount / totalCount) * 100);
  num.textContent = `${correctCount} / ${totalCount} 빈칸 정답 (${scorePct}점)`;
  detail.textContent = `정답: ${correctCount}개 | 오답/미입력: ${
    totalCount - correctCount
  }개 (각 빈칸의 정답은 아래 해설 블록을 참고하세요)`;

  banner.classList.add("show");
  document.getElementById("blank-explain-1").style.display = "block";
  document.getElementById("blank-explain-2").style.display = "block";

  banner.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function resetBlankQuiz() {
  document.querySelectorAll(".blank-input").forEach((inp) => {
    inp.value = "";
    inp.classList.remove("correct", "wrong");
  });
  document.getElementById("blank-explain-1").style.display = "none";
  document.getElementById("blank-explain-2").style.display = "none";
  document.getElementById("blank-score-banner").classList.remove("show");
}

