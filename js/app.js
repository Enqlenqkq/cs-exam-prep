/**
 * app.js
 * 메인 애플리케이션 진입점 및 초기화 모듈
 */

window.addEventListener("DOMContentLoaded", () => {
  // 1. 4개 과목 실전 퀴즈 뱅크 초기화
  if (typeof startNewRandomQuiz === "function") {
    startNewRandomQuiz("algorithms");
    startNewRandomQuiz("it");
    startNewRandomQuiz("os");
    startNewRandomQuiz("db");
  }

  // 2. 4개 과목 실시간 필기장 초기화
  if (typeof initNotes === "function") initNotes();
  if (typeof initItNotes === "function") initItNotes();
  if (typeof initOsNotes === "function") initOsNotes();
  if (typeof initDbNotes === "function") initDbNotes();

  // 3. KaTeX 수식 자동 렌더링
  if (window.renderMathInElement) {
    renderMathInElement(document.body, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false },
      ],
      throwOnError: false,
    });
  }
});

