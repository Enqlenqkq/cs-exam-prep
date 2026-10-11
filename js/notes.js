/**
 * notes.js
 * 4개 과목 실시간 필기장(Notes) 관리, localStorage 자동 저장 및 모아보기 모듈
 */

function escapeHtml(text) {
  if (!text) return "";
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/* ========================================================
   1. 알고리즘 분석 필기장
   ======================================================== */
const algoNoteKeys = [
  "note-lec2-p1",
  "note-lec2-p2",
  "note-lec2-p3",
  "note-lec3-p1",
  "note-lec3-p2",
  "note-lec4-p1",
  "note-lec4-p2",
  "note-lec5-p1",
  "note-lec5-p2",
  "note-lec6-p1",
  "note-lec6-p2",
];

const algoNoteTitles = {
  "note-lec2-p1": "Lec 2: 선형 회귀 & MSE 비용함수",
  "note-lec2-p2": "Lec 2: 퍼셉트론 원리 & 가중치 학습 규칙",
  "note-lec2-p3": "Lec 2: 퍼셉트론의 XOR 한계 & 다층 퍼셉트론(MLP)",
  "note-lec3-p1": "Lec 3: 활성화 함수 비교 (Sigmoid, Tanh, ReLU, Leaky ReLU)",
  "note-lec3-p2": "Lec 3: 경사하강법 원리, 편미분, 학습률, 로컬 미니마",
  "note-lec4-p1": "Lec 4: 역전파 알고리즘 & 연쇄 법칙(체인룰)",
  "note-lec4-p2": "Lec 4: 합성곱 신경망(CNN) 커널, 스트라이드, 패딩, 풀링",
  "note-lec5-p1": "Lec 5: 순환 신경망(RNN) 은닉상태 & BPTT 장기의존성",
  "note-lec5-p2": "Lec 5: 크로스 엔트로피 정보이론 유도 & MSE와의 비교",
  "note-lec6-p1": "Lec 6: LSTM 셀 상태 & 3대 게이트(망각/입력/출력)",
  "note-lec6-p2": "Lec 6: 경사하강법 3대 유형 (BGD vs SGD vs Mini-batch)",
};

function initNotes() {
  algoNoteKeys.forEach((key) => {
    const el = document.getElementById(key);
    if (!el) return;
    const saved = localStorage.getItem("algo_exam_" + key);
    if (saved !== null) el.value = saved;

    const statusEl = document.getElementById(key + "-status");
    el.addEventListener("input", () => {
      localStorage.setItem("algo_exam_" + key, el.value);
      if (statusEl) {
        statusEl.textContent = "저장됨 (실시간)";
        statusEl.style.color = "#16a34a";
      }
    });
  });
}

function renderAllNotes() {
  const display = document.getElementById("all-notes-display");
  if (!display) return;
  let html = "";
  algoNoteKeys.forEach((key) => {
    const text = localStorage.getItem("algo_exam_" + key) || "";
    html += `
      <div class="concept-card" style="margin-bottom:16px;">
        <div class="card-title"><span>📌 ${algoNoteTitles[key]}</span></div>
        <div style="background:#fffdf5; border:1px solid #fde68a; border-radius:8px; padding:12px; font-size:0.9rem; white-space:pre-wrap; min-height:48px;">${
          text.trim()
            ? escapeHtml(text)
            : '<span style="color:#94a3b8; font-style:italic;">작성된 필기 내용이 없습니다. 개념 정리 탭에서 필기를 남겨보세요.</span>'
        }</div>
      </div>
    `;
  });
  display.innerHTML = html;
}

function copyAllNotes() {
  let combined = "=== 알고리즘 분석 중간고사 대비 내 필기 요약 ===\n\n";
  algoNoteKeys.forEach((key) => {
    const text = localStorage.getItem("algo_exam_" + key) || "";
    if (text.trim()) {
      combined += `[${algoNoteTitles[key]}]\n${text}\n\n`;
    }
  });
  navigator.clipboard.writeText(combined).then(() => {
    alert("알고리즘 분석 필기 내용이 클립보드에 복사되었습니다!");
  });
}

/* ========================================================
   2. 정보처리기술 필기장
   ======================================================== */
const itNoteKeys = [
  "note-it-ch1-p1",
  "note-it-ch1-p2",
  "note-it-ch5-p1",
  "note-it-ch5-p2",
  "note-it-ch6-p1",
  "note-it-ch6-p2",
  "note-it-ch7-p1",
  "note-it-ch7-p2",
  "note-it-ch8-p1",
  "note-it-ch8-p2",
];

const itNoteTitles = {
  "note-it-ch1-p1": "1장: IT기술 발전과 디지털 혁명 (엘빈 토플러, 마샬 맥루한)",
  "note-it-ch1-p2": "1장: 정보화사회의 역기능 (정보 격차, 유비쿼터스)",
  "note-it-ch5-p1": "5장: 정보통신 전송 방식 & 네트워크 토폴로지",
  "note-it-ch5-p2":
    "5장: 네트워크 장비(게이트웨이/라우터) & 보안 3요소(기밀성/무결성/가용성)",
  "note-it-ch6-p1": "6장: 인터넷 역사(ARPANET), TCP/IP, IP주소 체계(IPv4 vs IPv6)",
  "note-it-ch6-p2":
    "6장: 웹 2.0, 클라우드 서비스 모델(SaaS/PaaS/IaaS) 및 차세대 웹",
  "note-it-ch7-p1": "7장: 멀티미디어 4대 특성 & 그래픽스(비트맵 vs 벡터)",
  "note-it-ch7-p2":
    "7장: 멀티미디어 데이터 압축(무손실/손실) 및 오디오/비디오 코덱",
  "note-it-ch8-p1": "8장: 모바일 컴퓨팅, 위치기반서비스(LBS) 및 스마트 디바이스",
  "note-it-ch8-p2": "8장: 모바일 앱 3대 개발 방식(네이티브/웹/하이브리드)",
};

function initItNotes() {
  itNoteKeys.forEach((key) => {
    const el = document.getElementById(key);
    if (!el) return;
    const saved = localStorage.getItem("it_exam_" + key);
    if (saved !== null) el.value = saved;

    const statusEl = document.getElementById(key + "-status");
    el.addEventListener("input", () => {
      localStorage.setItem("it_exam_" + key, el.value);
      if (statusEl) {
        statusEl.textContent = "저장됨 (실시간)";
        statusEl.style.color = "#16a34a";
      }
    });
  });
}

function renderItNotes() {
  const display = document.getElementById("it-all-notes-display");
  if (!display) return;
  let html = "";
  itNoteKeys.forEach((key) => {
    const text = localStorage.getItem("it_exam_" + key) || "";
    html += `
      <div class="concept-card" style="margin-bottom:16px;">
        <div class="card-title"><span>📌 ${itNoteTitles[key]}</span></div>
        <div style="background:#fffdf5; border:1px solid #fde68a; border-radius:8px; padding:12px; font-size:0.9rem; white-space:pre-wrap; min-height:48px;">${
          text.trim()
            ? escapeHtml(text)
            : '<span style="color:#94a3b8; font-style:italic;">작성된 필기 내용이 없습니다. 개념 정리 탭에서 필기를 남겨보세요.</span>'
        }</div>
      </div>
    `;
  });
  display.innerHTML = html;
}

function copyItNotes() {
  let combined = "=== 정보처리기술 중간고사 대비 내 필기 요약 ===\n\n";
  itNoteKeys.forEach((key) => {
    const text = localStorage.getItem("it_exam_" + key) || "";
    if (text.trim()) {
      combined += `[${itNoteTitles[key]}]\n${text}\n\n`;
    }
  });
  navigator.clipboard.writeText(combined).then(() => {
    alert("정보처리기술 필기 내용이 클립보드에 복사되었습니다!");
  });
}

/* ========================================================
   3. 운영체제론 필기장
   ======================================================== */
const osNoteKeys = [
  "note-os-w2-p1",
  "note-os-w2-p2",
  "note-os-w3-p1",
  "note-os-w3-p2",
  "note-os-w4-p1",
  "note-os-w4-p2",
];

const osNoteTitles = {
  "note-os-w2-p1": "W1~W2: 시스템 구조와 인터럽트(Interrupt) 처리",
  "note-os-w2-p2":
    "W2: 이중 모드(Dual-mode), 특권 명령, 시스템 호출(System Call)",
  "note-os-w3-p1": "W3: 메모리 계층 구조 & 주소 변환(MMU)",
  "note-os-w3-p2": "W3: 메모리 단편화(내부/외부) & 페이징(Paging) 기법",
  "note-os-w4-p1": "W4: ELF 바이너리 구조 & 프로세스 메모리 레이아웃",
  "note-os-w4-p2":
    "W4: 프로세스 5가지 상태 전이도 & 문맥 교환(Context Switch)",
};

function initOsNotes() {
  osNoteKeys.forEach((key) => {
    const el = document.getElementById(key);
    if (!el) return;
    const saved = localStorage.getItem("os_exam_" + key);
    if (saved !== null) el.value = saved;

    const statusEl = document.getElementById(key + "-status");
    el.addEventListener("input", () => {
      localStorage.setItem("os_exam_" + key, el.value);
      if (statusEl) {
        statusEl.textContent = "저장됨 (실시간)";
        statusEl.style.color = "#16a34a";
      }
    });
  });
}

function renderOsNotes() {
  const display = document.getElementById("os-all-notes-display");
  if (!display) return;
  let html = "";
  osNoteKeys.forEach((key) => {
    const text = localStorage.getItem("os_exam_" + key) || "";
    html += `
      <div class="concept-card" style="margin-bottom:16px;">
        <div class="card-title"><span>📌 ${osNoteTitles[key]}</span></div>
        <div style="background:#fffdf5; border:1px solid #fde68a; border-radius:8px; padding:12px; font-size:0.9rem; white-space:pre-wrap; min-height:48px;">${
          text.trim()
            ? escapeHtml(text)
            : '<span style="color:#94a3b8; font-style:italic;">작성된 필기 내용이 없습니다. 개념 정리 탭에서 필기를 남겨보세요.</span>'
        }</div>
      </div>
    `;
  });
  display.innerHTML = html;
}

function copyOsNotes() {
  let combined = "=== 운영체제론 중간고사 대비 내 필기 요약 ===\n\n";
  osNoteKeys.forEach((key) => {
    const text = localStorage.getItem("os_exam_" + key) || "";
    if (text.trim()) {
      combined += `[${osNoteTitles[key]}]\n${text}\n\n`;
    }
  });
  navigator.clipboard.writeText(combined).then(() => {
    alert("운영체제 필기 내용이 클립보드에 복사되었습니다!");
  });
}

/* ========================================================
   4. 데이터베이스 필기장
   ======================================================== */
const dbNoteKeys = [
  "note-db-ch1-p1",
  "note-db-ch2-p1",
  "note-db-ch3-p1",
  "note-db-ch3-p2",
  "note-db-ch3-p3",
];

const dbNoteTitles = {
  "note-db-ch1-p1":
    "Chap 1: DBMS 개요, 3단계 스키마(외부/개념/내부), 데이터 독립성",
  "note-db-ch2-p1":
    "Chap 2: ERD 구성 요소(엔티티, 관계, 다중값 속성, 약한 엔티티)",
  "note-db-ch3-p1":
    "Chap 3: 관계 모델과 Key의 종류(슈퍼키, 후보키, 기본키, 외래키)",
  "note-db-ch3-p2":
    "Chap 3: 무결성 제약조건 (개체 무결성, 참조 무결성, CASCADE)",
  "note-db-ch3-p3":
    "Chap 3-1: ER-to-Relational Mapping (1:N 사상, M:N 사상, 약한엔티티 사상)",
};

function initDbNotes() {
  dbNoteKeys.forEach((key) => {
    const el = document.getElementById(key);
    if (!el) return;
    const saved = localStorage.getItem("db_exam_" + key);
    if (saved !== null) el.value = saved;

    const statusEl = document.getElementById(key + "-status");
    el.addEventListener("input", () => {
      localStorage.setItem("db_exam_" + key, el.value);
      if (statusEl) {
        statusEl.textContent = "저장됨 (실시간)";
        statusEl.style.color = "#16a34a";
      }
    });
  });
}

function renderDbNotes() {
  const display = document.getElementById("db-all-notes-display");
  if (!display) return;
  let html = "";
  dbNoteKeys.forEach((key) => {
    const text = localStorage.getItem("db_exam_" + key) || "";
    html += `
      <div class="concept-card" style="margin-bottom:16px;">
        <div class="card-title"><span>📌 ${dbNoteTitles[key]}</span></div>
        <div style="background:#fffdf5; border:1px solid #fde68a; border-radius:8px; padding:12px; font-size:0.9rem; white-space:pre-wrap; min-height:48px;">${
          text.trim()
            ? escapeHtml(text)
            : '<span style="color:#94a3b8; font-style:italic;">작성된 필기 내용이 없습니다. 개념 정리 탭에서 필기를 남겨보세요.</span>'
        }</div>
      </div>
    `;
  });
  display.innerHTML = html;
}

function copyDbNotes() {
  let combined = "=== 데이터베이스 중간고사 대비 내 필기 요약 ===\n\n";
  dbNoteKeys.forEach((key) => {
    const text = localStorage.getItem("db_exam_" + key) || "";
    if (text.trim()) {
      combined += `[${dbNoteTitles[key]}]\n${text}\n\n`;
    }
  });
  navigator.clipboard.writeText(combined).then(() => {
    alert("데이터베이스 필기 내용이 클립보드에 복사되었습니다!");
  });
}
