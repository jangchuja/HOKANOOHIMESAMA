// 타이핑 애니메이션
const typingText = "代表の紹介サイトへようこそ！";
const typingElement = document.getElementById("typing");
let index = 0;

function type() {
  if (index < typingText.length) {
    typingElement.textContent += typingText.charAt(index);
    index++;
    setTimeout(type, 100);
  }
}

window.addEventListener("load", () => {
  type();
});

// 메뉴 클릭 시 섹션 전환 및 메뉴 활성화 표시
const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("main section");

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);

    // 섹션 활성화 토글
    sections.forEach(section => {
      section.classList.toggle("active", section.id === targetId);
    });

    // 메뉴 활성화 토글
    navLinks.forEach(a => a.classList.remove("active"));
    link.classList.add("active");

    // 모바일 메뉴 닫기
    navLinksContainer.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
  });
});

// 인터뷰 질문-답변 기능
const questionList = document.getElementById("question-list");
const answerBox = document.getElementById("answer-box");
const questions = questionList.querySelectorAll("li");

function clearActive() {
  questions.forEach(q => q.classList.remove("active"));
}

questions.forEach(question => {
  question.addEventListener("click", () => {
    clearActive();
    question.classList.add("active");
    const answer = question.getAttribute("data-answer");
    answerBox.textContent = answer;
  });
});

// 모바일 햄버거 메뉴 토글 기능
const hamburger = document.getElementById("hamburger");
const navLinksContainer = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  const expanded = hamburger.getAttribute("aria-expanded") === "true";
  hamburger.setAttribute("aria-expanded", String(!expanded));
  navLinksContainer.classList.toggle("active");
});
