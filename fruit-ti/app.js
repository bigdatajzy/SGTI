import {
  QUESTIONS,
  computeResult,
  FRUIT_EMOJI,
} from "./scoring.mjs";

const SYS_REMARKS = [
  "系统备注：你刚才那几题选得很像人类，而不是像果篮。",
  "系统备注：本结果不保证与你真实口味一致，只保证与当下选择一致。",
  "系统备注：若你与结果不符，请以你为准，结果仅供参考。",
  "系统备注：你不是水果，你只是暂时长得像某一种。",
  "系统备注：匹配度越高，越说明你最近很稳定地在重复自己。",
];

function pickRemark(seed) {
  const i = Math.abs(seed) % SYS_REMARKS.length;
  return SYS_REMARKS[i];
}

const el = (id) => document.getElementById(id);

const views = {
  intro: el("view-intro"),
  quiz: el("view-quiz"),
  result: el("view-result"),
};

/** @type {number[]} */
let answers = [];

function show(view) {
  document.body.classList.toggle("result-mode", view === "result");
  views.intro.classList.toggle("hidden", view !== "intro");
  views.quiz.classList.toggle("hidden", view !== "quiz");
  views.result.classList.toggle("hidden", view !== "result");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function seedFromAnswers(arr) {
  return arr.reduce((s, v, i) => s + (i + 1) * (v + 1), 0);
}

function updateQuizProgress() {
  const n = answers.filter((x) => typeof x === "number").length;
  el("progress-text").textContent = `已答 ${n} / ${QUESTIONS.length}`;
  el("btn-submit").disabled = n !== QUESTIONS.length;
}

function renderAllQuestions() {
  const container = el("quiz-all");
  container.innerHTML = "";
  for (let qi = 0; qi < QUESTIONS.length; qi++) {
    const q = QUESTIONS[qi];
    const block = document.createElement("section");
    block.className = "q-block";
    const h2 = document.createElement("h2");
    h2.className = "q-title";
    h2.textContent = `${qi + 1}. ${q.q}`;
    const ul = document.createElement("ul");
    ul.className = "opts";
    for (let i = 0; i < q.options.length; i++) {
      const li = document.createElement("li");
      const label = document.createElement("label");
      label.className = "opt";
      const input = document.createElement("input");
      input.type = "radio";
      input.name = `q${qi}`;
      input.value = String(i);
      if (answers[qi] === i) input.checked = true;
      input.addEventListener("change", () => {
        answers[qi] = i;
        updateQuizProgress();
      });
      const span = document.createElement("span");
      span.textContent = q.options[i].t;
      label.append(input, span);
      li.append(label);
      ul.append(li);
    }
    block.append(h2, ul);
    container.append(block);
  }
  updateQuizProgress();
}

function renderResult(res) {
  const m = res.main;
  el("result-name-cn").textContent = m.name;
  el("result-name-en").textContent = m.code;
  el("result-emoji").textContent = FRUIT_EMOJI[res.mainId] || "🍊";
  el("result-quote").textContent = `“${m.tagline || m.blurb.slice(0, 40)}”`;
  el("result-right-title").textContent = `${m.code}（${m.name}）`;
  el("result-badge").textContent = `匹配度 ${res.match}% · 精准命中 ${res.exactHits}/15 项`;
  const brief =
    m.blurb.length > 140 ? `${m.blurb.slice(0, 140)}…` : m.blurb;
  el("result-summary").textContent = brief;
  el("result-sys").textContent = pickRemark(seedFromAnswers(answers));
  el("result-blurb").textContent = m.blurb;

  const dimUl = el("result-dimensions");
  dimUl.innerHTML = "";
  for (const row of res.dimensionRows) {
    const li = document.createElement("li");
    li.className = "dim-row";
    const left = document.createElement("div");
    const t = document.createElement("p");
    t.className = "dim-left-title";
    t.textContent = `${row.code} ${row.name}`;
    const d = document.createElement("p");
    d.className = "dim-left-desc";
    d.textContent = row.desc;
    left.append(t, d);
    const sc = document.createElement("div");
    sc.className = "dim-score";
    sc.textContent = `${row.band} / ${row.points}分`;
    li.append(left, sc);
    dimUl.append(li);
  }

  closeAuthorPanel();
}

function submitQuiz() {
  if (answers.length !== QUESTIONS.length || answers.some((x) => typeof x !== "number")) {
    return;
  }
  const res = computeResult(answers);
  renderResult(res);
  show("result");
}

function startQuiz() {
  answers = Array(QUESTIONS.length).fill(undefined);
  show("quiz");
  renderAllQuestions();
}

const authorPanel = el("author-panel");
const authorBtn = el("btn-author-toggle");
const authorChevron = el("author-chevron");

function closeAuthorPanel() {
  authorPanel.classList.add("hidden");
  authorPanel.hidden = true;
  authorBtn.setAttribute("aria-expanded", "false");
  authorChevron.textContent = "展开";
}

function toggleAuthorPanel() {
  const isHidden = authorPanel.classList.contains("hidden");
  if (isHidden) {
    authorPanel.classList.remove("hidden");
    authorPanel.hidden = false;
    authorBtn.setAttribute("aria-expanded", "true");
    authorChevron.textContent = "收起";
  } else {
    closeAuthorPanel();
  }
}

function bind() {
  el("btn-start").addEventListener("click", startQuiz);
  el("btn-submit").addEventListener("click", submitQuiz);
  el("link-home-quiz").addEventListener("click", (e) => {
    e.preventDefault();
    show("intro");
  });
  el("btn-retry").addEventListener("click", startQuiz);
  el("btn-home-result").addEventListener("click", () => show("intro"));
  authorBtn.addEventListener("click", toggleAuthorPanel);
}

bind();
