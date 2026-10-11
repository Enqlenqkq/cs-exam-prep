/**
 * navigation.js
 * 과목(Subject), 탭(Tab), 강의/챕터(Chapter) 전환 네비게이션 제어 모듈
 */

// 1. 전체 수강 과목 전환
function switchSubject(subjectId) {
  document
    .querySelectorAll(".subject-tab-btn")
    .forEach((btn) => btn.classList.remove("active"));
  document.querySelectorAll(".subject-panel").forEach((panel) => {
    panel.classList.remove("active");
    panel.style.display = "none";
  });

  if (window.event && window.event.currentTarget) {
    window.event.currentTarget.classList.add("active");
  } else {
    const btn = document.querySelector(
      `.subject-tab-btn[onclick*="${subjectId}"]`
    );
    if (btn) btn.classList.add("active");
  }

  const targetPanel = document.getElementById("subject-" + subjectId);
  if (targetPanel) {
    targetPanel.classList.add("active");
    targetPanel.style.display = "block";
  }

  if (subjectId === "history") {
    if (typeof renderHistoryView === "function") {
      renderHistoryView();
    }
  }

  if (window.renderMathInElement) {
    renderMathInElement(targetPanel || document.body);
  }
}

// 2. 알고리즘 분석 메인 탭 전환
function switchMainTab(tabId) {
  const panel = document.getElementById("subject-algorithms");
  panel
    .querySelectorAll(".tab-btn")
    .forEach((b) => b.classList.remove("active"));
  panel.querySelectorAll(".view-section").forEach((s) => {
    s.classList.remove("active");
    s.style.display = "none";
  });

  if (window.event && window.event.currentTarget) {
    window.event.currentTarget.classList.add("active");
  } else if (window.event && window.event.target) {
    window.event.target.classList.add("active");
  }

  const targetSection = document.getElementById("view-" + tabId);
  if (targetSection) {
    targetSection.classList.add("active");
    targetSection.style.display = "block";
  }

  if (tabId === "quiz-choice") {
    if (
      typeof CURRENT_ACTIVE_QUIZ !== "undefined" &&
      (!CURRENT_ACTIVE_QUIZ["algorithms"] ||
        CURRENT_ACTIVE_QUIZ["algorithms"].length === 0)
    ) {
      if (typeof startNewRandomQuiz === "function") {
        startNewRandomQuiz("algorithms");
      }
    }
  }

  if (tabId === "notes") {
    if (typeof renderAllNotes === "function") renderAllNotes();
  }
  if (window.renderMathInElement) {
    renderMathInElement(targetSection || document.body);
  }
}

// 3. 알고리즘 강의(Lec 2~6) 서브탭 전환
function switchLecture(lecKey) {
  document
    .querySelectorAll(".sub-btn")
    .forEach((b) => b.classList.remove("active"));
  document
    .querySelectorAll(".lecture-block")
    .forEach((b) => (b.style.display = "none"));

  if (window.event && window.event.target) {
    window.event.target.classList.add("active");
  }
  const target = document.getElementById("lec-content-" + lecKey);
  if (target) {
    target.style.display = "block";
  }

  if (window.renderMathInElement) {
    renderMathInElement(target || document.body);
  }
}

// 4. 정보처리기술 메인 탭 전환
function switchItMainTab(tabId) {
  const panel = document.getElementById("subject-it");
  panel
    .querySelectorAll(".tab-btn")
    .forEach((b) => b.classList.remove("active"));
  panel.querySelectorAll(".view-section").forEach((s) => {
    s.classList.remove("active");
    s.style.display = "none";
  });

  if (window.event && window.event.currentTarget) {
    window.event.currentTarget.classList.add("active");
  } else if (window.event && window.event.target) {
    window.event.target.classList.add("active");
  }

  const targetSection = document.getElementById("it-view-" + tabId);
  if (targetSection) {
    targetSection.classList.add("active");
    targetSection.style.display = "block";
  }

  if (tabId === "quiz-subjective") {
    if (
      typeof CURRENT_ACTIVE_QUIZ !== "undefined" &&
      (!CURRENT_ACTIVE_QUIZ["it"] || CURRENT_ACTIVE_QUIZ["it"].length === 0)
    ) {
      if (typeof startNewRandomQuiz === "function") {
        startNewRandomQuiz("it");
      }
    }
  }

  if (tabId === "notes") {
    if (typeof renderItNotes === "function") renderItNotes();
  }
  if (window.renderMathInElement) {
    renderMathInElement(targetSection || document.body);
  }
}

// 5. 정보처리기술 장별 서브탭 전환
function switchItChapter(chKey) {
  document
    .querySelectorAll("#subject-it .sub-btn")
    .forEach((b) => b.classList.remove("active"));
  document
    .querySelectorAll(".it-chapter-block")
    .forEach((b) => (b.style.display = "none"));

  if (window.event && window.event.target) {
    window.event.target.classList.add("active");
  }
  const target = document.getElementById("it-content-" + chKey);
  if (target) {
    target.style.display = "block";
  }

  if (window.renderMathInElement) {
    renderMathInElement(target || document.body);
  }
}

// 6. 운영체제론 메인 탭 전환
function switchOsMainTab(tabId) {
  const panel = document.getElementById("subject-os");
  panel
    .querySelectorAll(".tab-btn")
    .forEach((b) => b.classList.remove("active"));
  panel.querySelectorAll(".view-section").forEach((s) => {
    s.classList.remove("active");
    s.style.display = "none";
  });

  if (window.event && window.event.currentTarget) {
    window.event.currentTarget.classList.add("active");
  } else if (window.event && window.event.target) {
    window.event.target.classList.add("active");
  }

  const targetSection = document.getElementById("os-view-" + tabId);
  if (targetSection) {
    targetSection.classList.add("active");
    targetSection.style.display = "block";
  }

  if (tabId === "quiz") {
    if (
      typeof CURRENT_ACTIVE_QUIZ !== "undefined" &&
      (!CURRENT_ACTIVE_QUIZ["os"] || CURRENT_ACTIVE_QUIZ["os"].length === 0)
    ) {
      if (typeof startNewRandomQuiz === "function") {
        startNewRandomQuiz("os");
      }
    }
  }

  if (tabId === "notes") {
    if (typeof renderOsNotes === "function") renderOsNotes();
  }
  if (window.renderMathInElement) {
    renderMathInElement(targetSection || document.body);
  }
}

// 7. 운영체제론 주차별 서브탭 전환
function switchOsChapter(chKey) {
  document
    .querySelectorAll("#subject-os .sub-btn")
    .forEach((b) => b.classList.remove("active"));
  document
    .querySelectorAll(".os-chapter-block")
    .forEach((b) => (b.style.display = "none"));

  if (window.event && window.event.target) {
    window.event.target.classList.add("active");
  }
  const target = document.getElementById("os-content-" + chKey);
  if (target) {
    target.style.display = "block";
  }

  if (window.renderMathInElement) {
    renderMathInElement(target || document.body);
  }
}

// 8. 데이터베이스 메인 탭 전환
function switchDbMainTab(tabId) {
  const panel = document.getElementById("subject-db");
  panel
    .querySelectorAll(".tab-btn")
    .forEach((b) => b.classList.remove("active"));
  panel.querySelectorAll(".view-section").forEach((s) => {
    s.classList.remove("active");
    s.style.display = "none";
  });

  if (window.event && window.event.currentTarget) {
    window.event.currentTarget.classList.add("active");
  } else if (window.event && window.event.target) {
    window.event.target.classList.add("active");
  }

  const targetSection = document.getElementById("db-view-" + tabId);
  if (targetSection) {
    targetSection.classList.add("active");
    targetSection.style.display = "block";
  }

  if (tabId === "quiz") {
    if (
      typeof CURRENT_ACTIVE_QUIZ !== "undefined" &&
      (!CURRENT_ACTIVE_QUIZ["db"] || CURRENT_ACTIVE_QUIZ["db"].length === 0)
    ) {
      if (typeof startNewRandomQuiz === "function") {
        startNewRandomQuiz("db");
      }
    }
  }

  if (tabId === "notes") {
    if (typeof renderDbNotes === "function") renderDbNotes();
  }
  if (window.renderMathInElement) {
    renderMathInElement(targetSection || document.body);
  }
}

// 9. 데이터베이스 장별 서브탭 전환
function switchDbChapter(chKey) {
  document
    .querySelectorAll("#subject-db .sub-btn")
    .forEach((b) => b.classList.remove("active"));
  document
    .querySelectorAll(".db-chapter-block")
    .forEach((b) => (b.style.display = "none"));

  if (window.event && window.event.target) {
    window.event.target.classList.add("active");
  }
  const target = document.getElementById("db-content-" + chKey);
  if (target) {
    target.style.display = "block";
  }

  if (window.renderMathInElement) {
    renderMathInElement(target || document.body);
  }
}

