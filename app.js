const SUBJECTS = {
  soft: {
    name: "Softwarové inženýrství (SOFT)",
    description: "23 okruhů z oblasti softwarového inženýrství, databází, grafiky a UI.",
    topics: SOFT_TOPICS
  },
  tsp: {
    name: "Technické a softwarové prostředky (TSP)",
    description: "19 okruhů z architektury počítačů, OS, sítí, IoT a programování.",
    topics: TSP_TOPICS
  }
};

const app = document.getElementById("app");
const breadcrumbs = document.getElementById("breadcrumbs");

const MODE_KEY = "quiz.viewMode";
function getMode() {
  return localStorage.getItem(MODE_KEY) || "one";
}
function setMode(mode) {
  localStorage.setItem(MODE_KEY, mode);
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function parseHash() {
  const hash = window.location.hash.replace(/^#\/?/, "");
  if (!hash) return { view: "home" };
  const parts = hash.split("/");
  if (parts.length === 1) return { view: "subject", subject: parts[0] };
  if (parts.length === 2) return { view: "topic", subject: parts[0], topic: parseInt(parts[1], 10) };
  return { view: "home" };
}

function navigate(path) {
  window.location.hash = path;
}

function renderBreadcrumbs(route) {
  const parts = [`<a href="#/">Domů</a>`];
  if (route.subject && SUBJECTS[route.subject]) {
    parts.push(`<span class="sep">/</span>`);
    if (route.view === "subject") {
      parts.push(`<span>${SUBJECTS[route.subject].name}</span>`);
    } else {
      parts.push(`<a href="#/${route.subject}">${SUBJECTS[route.subject].name}</a>`);
    }
  }
  if (route.view === "topic" && route.subject) {
    const topic = SUBJECTS[route.subject].topics.find(t => t.id === route.topic);
    if (topic) {
      parts.push(`<span class="sep">/</span>`);
      parts.push(`<span>${topic.id}. ${topic.title}</span>`);
    }
  }
  breadcrumbs.innerHTML = parts.join("");
}

function renderHome() {
  app.innerHTML = `
    <div class="grid">
      ${Object.entries(SUBJECTS).map(([key, s]) => `
        <a class="card" href="#/${key}">
          <h2>${s.name}</h2>
          <p>${s.description}</p>
          <p style="margin-top:0.6rem;color:var(--accent-2);font-size:0.85rem;">${s.topics.length} okruhů</p>
        </a>
      `).join("")}
    </div>
  `;
}

function renderSubject(subjectKey) {
  const subject = SUBJECTS[subjectKey];
  if (!subject) return renderHome();
  app.innerHTML = `
    <div class="quiz-header">
      <h2>${subject.name}</h2>
      <p>${subject.description}</p>
    </div>
    <ul class="topic-list">
      ${subject.topics.map(t => `
        <li>
          <a href="#/${subjectKey}/${t.id}">
            <span class="num">${t.id}.</span>
            <strong>${t.title}</strong>
            <div style="color:var(--muted);font-size:0.85rem;margin-top:0.2rem;">${t.description}</div>
          </a>
        </li>
      `).join("")}
    </ul>
  `;
}

let quizState = null;

function renderTopic(subjectKey, topicId) {
  const subject = SUBJECTS[subjectKey];
  if (!subject) return renderHome();
  const topic = subject.topics.find(t => t.id === topicId);
  if (!topic) return renderSubject(subjectKey);

  quizState = {
    subjectKey,
    topicId,
    topic,
    current: 0,
    questions: shuffle(topic.questions).map(q => {
      const opts = q.options.map((text, i) => ({ text, originallyCorrect: i === q.correct }));
      const shuffledOpts = shuffle(opts);
      const newCorrect = shuffledOpts.findIndex(o => o.originallyCorrect);
      return {
        q: q.q,
        options: shuffledOpts.map(o => o.text),
        correct: newCorrect,
        explanation: q.explanation,
        selected: null,
        revealed: false
      };
    })
  };

  renderQuiz();
}

function renderQuestionCard(q, qi, displayNum, hideInlineCheck) {
  return `
    <div class="question" data-qi="${qi}">
      <div class="q-text">${displayNum}. ${q.q}</div>
      <div class="options">
        ${q.options.map((opt, oi) => {
          let cls = "option";
          if (q.revealed) {
            if (oi === q.correct) cls += " correct";
            else if (oi === q.selected) cls += " incorrect";
          } else if (q.selected === oi) {
            cls += " selected";
          }
          return `
            <label class="${cls}">
              <input type="radio" name="q${qi}" value="${oi}" ${q.selected === oi ? "checked" : ""} ${q.revealed ? "disabled" : ""} />
              ${opt}
            </label>
          `;
        }).join("")}
      </div>
      ${q.revealed ? `<div class="explanation"><strong>Vysvětlení:</strong> ${q.explanation}</div>` : ""}
      ${!q.revealed && !hideInlineCheck ? `<div class="actions"><button data-action="check" data-qi="${qi}" ${q.selected === null ? "disabled" : ""}>Zkontrolovat</button></div>` : ""}
    </div>
  `;
}

function renderQuiz() {
  const { topic, questions, current } = quizState;
  const mode = getMode();
  const answered = questions.filter(q => q.revealed).length;
  const correct = questions.filter(q => q.revealed && q.selected === q.correct).length;
  const allDone = answered === questions.length;

  let body = "";
  if (mode === "one") {
    const qi = current;
    const q = questions[qi];
    const onLast = qi === questions.length - 1;
    let primary;
    if (!q.revealed) {
      primary = `<button data-action="check" data-qi="${qi}" ${q.selected === null ? "disabled" : ""}>Zkontrolovat</button>`;
    } else if (!onLast) {
      primary = `<button data-action="next">Další →</button>`;
    } else {
      primary = `<button data-action="next" disabled>Konec</button>`;
    }
    body = `
      ${renderQuestionCard(q, qi, qi + 1, true)}
      <div class="actions">
        <button data-action="prev" class="secondary" ${qi === 0 ? "disabled" : ""}>← Předchozí</button>
        ${primary}
      </div>
    `;
  } else {
    body = `<div id="questions">${questions.map((q, qi) => renderQuestionCard(q, qi, qi + 1)).join("")}</div>`;
  }

  app.innerHTML = `
    <div class="quiz-header">
      <h2>${topic.id}. ${topic.title}</h2>
      <p>${topic.description}</p>
      <div class="mode-toggle">
        <span>Zobrazení:</span>
        <button data-action="mode" data-mode="all" class="${mode === "all" ? "" : "secondary"}">Vše</button>
        <button data-action="mode" data-mode="one" class="${mode === "one" ? "" : "secondary"}">Po jedné</button>
      </div>
      <div class="progress">
        ${mode === "one" ? `Otázka ${current + 1}/${questions.length} · ` : ""}Zodpovězeno: ${answered}/${questions.length} · Správně: ${correct}
      </div>
      <div class="progressbar" aria-label="Postup kvízu">
        <div class="progressbar-fill" style="width: ${(answered / questions.length) * 100}%"></div>
        ${mode === "one" ? `<div class="progressbar-marker" style="left: ${(current / Math.max(questions.length - 1, 1)) * 100}%"></div>` : ""}
      </div>
    </div>
    ${allDone && mode === "all" ? `
      <div class="score">
        <div>Výsledek</div>
        <div class="big">${correct}/${questions.length}</div>
        <div style="color:var(--muted);">${Math.round((correct / questions.length) * 100)}%</div>
      </div>
    ` : ""}
    ${body}
    <div class="actions">
      <button data-action="restart" class="secondary">Začít znovu</button>
      <button data-action="back" class="secondary">Zpět na okruhy</button>
    </div>
  `;

  app.querySelectorAll('input[type="radio"]').forEach(input => {
    input.addEventListener("change", e => {
      const qi = parseInt(e.target.closest(".question").dataset.qi, 10);
      const oi = parseInt(e.target.value, 10);
      quizState.questions[qi].selected = oi;
      renderQuiz();
    });
  });

  app.querySelectorAll('button[data-action]').forEach(btn => {
    btn.addEventListener("click", e => {
      const action = btn.dataset.action;
      if (action === "check") {
        const qi = parseInt(btn.dataset.qi, 10);
        quizState.questions[qi].revealed = true;
        renderQuiz();
      } else if (action === "restart") {
        renderTopic(quizState.subjectKey, quizState.topicId);
      } else if (action === "back") {
        navigate(`/${quizState.subjectKey}`);
      } else if (action === "next") {
        if (quizState.current < quizState.questions.length - 1) {
          quizState.current++;
          renderQuiz();
          window.scrollTo(0, 0);
        }
      } else if (action === "prev") {
        if (quizState.current > 0) {
          quizState.current--;
          renderQuiz();
          window.scrollTo(0, 0);
        }
      } else if (action === "mode") {
        setMode(btn.dataset.mode);
        renderQuiz();
      }
    });
  });
}

function route() {
  const r = parseHash();
  renderBreadcrumbs(r);
  if (r.view === "home") renderHome();
  else if (r.view === "subject") renderSubject(r.subject);
  else if (r.view === "topic") renderTopic(r.subject, r.topic);
  window.scrollTo(0, 0);
}

window.addEventListener("hashchange", route);
route();
