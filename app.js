const STORAGE_KEY = "riddle-rangers-program";
const OLD_STORAGE_KEY = "riddle-rangers-week";
const PROGRAM_VERSION = 2;

const starterWeek = {
  title: "Week 1 - 11.1 I Am the Vine",
  audience: "Younger",
  theme: "John 15",
  riddles: [
    {
      id: crypto.randomUUID(),
      title: "11.1 Riddle 1",
      type: "top-half",
      clue: "I'LL GIVE YOU A PEEK\nAT THE ANSWER YOU SEEK.\nBUT WHAT YOU DON'T SEE\nJUST MIGHT BE THE KEY.",
      answer: "I AM THE VINE",
      hint: "APPARENTLY WE CAN ONLY SEE HALF OF THE LETTERS. IT LOOKS TO ME LIKE IT'S THE TOP HALF. MAYBE IF YOU CAN FINISH DRAWING THE BOTTOMS OF THE LETTERS, IT WILL ALL MAKE SENSE.",
      missingLetters: ""
    },
    {
      id: crypto.randomUUID(),
      title: "11.1 Riddle 2",
      type: "fallen-letters",
      clue: "SOME LETTERS APPEAR\nTO HAVE FALLEN, I FEAR.\nBUT HOW WILL YOU KNOW\nWHERE THE LETTERS SHOULD GO?",
      answer: "YOU ARE THE BRANCHES",
      hint: "IT LOOKS LIKE THE LETTERS BELOW BELONG SOMEWHERE IN THE WORDS ABOVE THEM, BUT WHICH LETTERS GO WHERE? I GUESS THERE'S ONLY ONE WAY TO FIND OUT. TRY PUTTING EACH LETTER IN ONE OF THE BLANK SPACES AND SEE IF IT SPELLS A WORD.",
      missingLetters: "CBHAYU"
    }
  ]
};

const starterProgram = {
  version: PROGRAM_VERSION,
  title: "Riddle Rangers Four-Week Program",
  activeWeekIndex: 0,
  weeks: [
    starterWeek,
    {
      title: "Week 2 - 11.2 I Am the Good Shepherd",
      audience: "Younger",
      theme: "John 10",
      riddles: [
        {
          id: "week-2-riddle-1",
          title: "11.2 Riddle 1",
          type: "backwards",
          clue: "THESE LETTERS MAY BE\nALL BACKWARDS YOU SEE.\nTURN THEM AROUND\nTO SEE HOW THEY SOUND.",
          answer: "I AM THE GOOD SHEPHERD",
          hint: "THOSE DON'T SOUND LIKE ANY WORDS THAT I'VE EVER HEARD OF. BUT FROM THE SOUNDS OF THE RIDDLE, THE LETTERS MIGHT BE RUNNING IN THE WRONG DIRECTION. TRY MAKING THE LAST LETTER OF THE SENTENCE FIRST AND THE FIRST LETTER LAST.",
          missingLetters: ""
        },
        {
          id: "week-2-riddle-2",
          title: "11.2 Riddle 2",
          type: "square-letters",
          clue: "MANY SHAPES ARE THERE\nWITH LETTERS TO SPARE.\nGET RID OF THE EXTRAS\nLEAVE ONLY THE SQUARES.",
          answer: "YOU ARE THE SHEEP",
          hint: "I DON'T THINK ALL OF THOSE LETTERS BELONG, BUT WHICH ONES DO YOU GET RID OF? MAYBE YOU SHOULD CROSS OUT ALL OF THE LETTERS THAT ARE NOT IN A SQUARE.",
          missingLetters: "",
          shapeItems: [
            ["H", "circle"], ["Z", "pentagon"], ["Y", "square"], ["O", "square"], ["U", "square"], ["F", "pentagon"], ["W", "circle"], ["B", "triangle"], ["D", "pentagon"], ["A", "square"], ["R", "square"], ["E", "square"], ["X", "circle"], ["F", "pentagon"], ["N", "triangle"], ["R", "circle"],
            ["T", "square"], ["H", "square"], ["E", "square"], ["W", "pentagon"], ["V", "triangle"], ["A", "circle"], ["T", "pentagon"], ["S", "square"], ["H", "square"], ["E", "square"], ["E", "square"], ["P", "square"], ["N", "pentagon"], ["K", "triangle"], ["O", "pentagon"], ["M", "circle"]
          ]
        }
      ]
    },
    {
      title: "Week 3 - 11.3 I Am the Light of the World",
      audience: "Younger",
      theme: "John 8 and 1 Thessalonians 5:5",
      riddles: [
        {
          id: "week-3-riddle-1",
          title: "11.3 Riddle 1",
          type: "symbol-key",
          clue: "I AM THE ____\nOF THE ____",
          answer: "I AM THE LIGHT OF THE WORLD",
          hint: "THAT'S WEIRD! THERE SEEMS TO BE A MIXTURE OF WORDS AND SYMBOLS. FORTUNATELY, THE SYMBOLS LOOK LIKE THEY COME WITH A KEY. MAYBE TRY REPLACING THE FACES WITH THE LETTERS THAT GO WITH THEM.",
          missingLetters: ""
        },
        {
          id: "week-3-riddle-2",
          title: "11.3 Riddle 2",
          type: "letter-shift",
          clue: "THIS WORD AT FIRST SIGHT\nMIGHT LOOK QUITE COMPLEX.\nBUT DON'T BE SO WORRIED\nCHOOSE THE LETTER THAT'S NEXT.",
          answer: "1 THESSALONIANS 5:5",
          hint: "THE NUMBERS ARE FINE, BUT THAT WORD DOESN'T LOOK RIGHT. I THINK THE LAST LINE OF THE RIDDLE WILL HELP US MAKE SENSE OF IT. MAYBE EACH LETTER NEEDS TO BE CHANGED TO THE NEXT LETTER IN THE ALPHABET. HERE'S A LIST OF THE LETTERS IN THE ALPHABET TO HELP YOU OUT: ABCDEFGHIJKLMNOPQRSTUVWXYZ",
          missingLetters: ""
        }
      ]
    },
    {
      title: "Week 4 - 11.4 I Am the Way, Truth and Life",
      audience: "Younger",
      theme: "John 14",
      riddles: [
        {
          id: "week-4-riddle-1",
          title: "11.4 Riddle 1",
          type: "bible-lookup",
          clue: "MATTHEW, MARK, LUKE AND JOHN.\nTHREE OF THESE ARE NOT THE ONE.\n14:2 REVEALS THE KEY.\nTHE FATHER'S HOUSE WITH ROOM FOR ME.",
          answer: "JOHN 14:2",
          hint: "I'VE SEEN SOMETHING LIKE THIS BEFORE. MATTHEW, MARK, LUKE AND JOHN ARE ALL BOOKS OF THE BIBLE, BUT ONLY ONE OF THEM HAS A 14:2 THAT TALKS ABOUT THE FATHER'S HOUSE. I WONDER WHICH ONE IT IS. I GUESS THERE'S ONLY ONE WAY TO FIND OUT. TURN TO 14:2 IN MATTHEW, MARK, LUKE AND JOHN TO FIND THE BEST MATCH.",
          missingLetters: ""
        },
        {
          id: "week-4-riddle-2",
          title: "11.4 Riddle 2",
          type: "remove-letters",
          clue: "TOO MANY LETTERS REVEALED BELOW\nCROSS OUT THE B THE C AND THE O",
          answer: "I AM THE WAY TRUTH AND LIFE",
          hint: "THOSE WORDS LOOK ALIEN TO ME. THE RIDDLE SAYS THERE ARE TOO MANY LETTERS. I WONDER WHAT IT WOULD LOOK LIKE IF YOU CROSSED OUT THE LETTERS B, C, AND O. WHEN THOSE LETTERS ARE GONE, SEE IF THE WORDS MAKE MORE SENSE.",
          missingLetters: "",
          removeLetters: "BCO",
          puzzleText: "OI ACM THCE OWABY CTRUCTBH\nANODB BLIFOE"
        }
      ]
    }
  ]
};

const defaultHints = {
  "top-half": "APPARENTLY WE CAN ONLY SEE HALF OF THE LETTERS. IT LOOKS TO ME LIKE IT'S THE TOP HALF. MAYBE IF YOU CAN FINISH DRAWING THE BOTTOMS OF THE LETTERS, IT WILL ALL MAKE SENSE.",
  "fallen-letters": "IT LOOKS LIKE THE LETTERS BELOW BELONG SOMEWHERE IN THE WORDS ABOVE THEM, BUT WHICH LETTERS GO WHERE? TRY PUTTING EACH LETTER IN ONE OF THE BLANK SPACES AND SEE IF IT SPELLS A WORD.",
  backwards: "THE LETTERS MIGHT BE RUNNING IN THE WRONG DIRECTION. TRY MAKING THE LAST LETTER FIRST AND THE FIRST LETTER LAST.",
  "square-letters": "CROSS OUT ALL OF THE LETTERS THAT ARE NOT IN A SQUARE.",
  "symbol-key": "TRY REPLACING THE SYMBOLS WITH THE LETTERS THAT GO WITH THEM.",
  "letter-shift": "MAYBE EACH LETTER NEEDS TO BE CHANGED TO THE NEXT LETTER IN THE ALPHABET.",
  "bible-lookup": "LOOK UP THE SAME CHAPTER AND VERSE IN EACH BOOK AND FIND THE BEST MATCH.",
  "remove-letters": "CROSS OUT THE EXTRA LETTERS AND SEE IF THE WORDS MAKE MORE SENSE."
};

const defaultClues = {
  "top-half": "I'LL GIVE YOU A PEEK\nAT THE ANSWER YOU SEEK.\nBUT WHAT YOU DON'T SEE\nJUST MIGHT BE THE KEY.",
  "fallen-letters": "SOME LETTERS APPEAR\nTO HAVE FALLEN, I FEAR.\nBUT HOW WILL YOU KNOW\nWHERE THE LETTERS SHOULD GO?",
  backwards: "THESE LETTERS MAY BE\nALL BACKWARDS YOU SEE.\nTURN THEM AROUND\nTO SEE HOW THEY SOUND.",
  "square-letters": "MANY SHAPES ARE THERE\nWITH LETTERS TO SPARE.\nGET RID OF THE EXTRAS\nLEAVE ONLY THE SQUARES.",
  "symbol-key": "I AM THE ____\nOF THE ____",
  "letter-shift": "THIS WORD AT FIRST SIGHT\nMIGHT LOOK QUITE COMPLEX.\nBUT DON'T BE SO WORRIED\nCHOOSE THE LETTER THAT'S NEXT.",
  "bible-lookup": "MATTHEW, MARK, LUKE AND JOHN.\nTHREE OF THESE ARE NOT THE ONE.\n14:2 REVEALS THE KEY.",
  "remove-letters": "TOO MANY LETTERS REVEALED BELOW\nCROSS OUT THE B THE C AND THE O"
};

const symbolKey = {
  L: "-o",
  W: "!!",
  I: ".(",
  O: "^^",
  G: "./",
  R: "^D",
  H: "-)",
  T: "><",
  D: "oo"
};

let program = loadProgram();
let week = currentWeek();
let editingId = null;
let activeRiddleIndex = 0;
let activeStep = 0;
let solveStates = {};

const els = {
  weekSelectInput: document.querySelector("#weekSelectInput"),
  weekTitleInput: document.querySelector("#weekTitleInput"),
  audienceInput: document.querySelector("#audienceInput"),
  themeInput: document.querySelector("#themeInput"),
  formTitle: document.querySelector("#formTitle"),
  riddleTitleInput: document.querySelector("#riddleTitleInput"),
  typeInput: document.querySelector("#typeInput"),
  clueInput: document.querySelector("#clueInput"),
  answerInput: document.querySelector("#answerInput"),
  missingLettersInput: document.querySelector("#missingLettersInput"),
  removeCountInput: document.querySelector("#removeCountInput"),
  hintInput: document.querySelector("#hintInput"),
  fallenSettings: document.querySelector("#fallenSettings"),
  makeBlanksBtn: document.querySelector("#makeBlanksBtn"),
  saveRiddleBtn: document.querySelector("#saveRiddleBtn"),
  previewBtn: document.querySelector("#previewBtn"),
  newRiddleBtn: document.querySelector("#newRiddleBtn"),
  previewTitle: document.querySelector("#previewTitle"),
  previewType: document.querySelector("#previewType"),
  previewStage: document.querySelector("#previewStage"),
  weekPanelTitle: document.querySelector("#weekPanelTitle"),
  riddleCount: document.querySelector("#riddleCount"),
  riddleList: document.querySelector("#riddleList"),
  weekTabs: document.querySelector("#weekTabs"),
  presentWeekBtn: document.querySelector("#presentWeekBtn"),
  presenter: document.querySelector("#presenter"),
  presenterWeek: document.querySelector("#presenterWeek"),
  presenterTitle: document.querySelector("#presenterTitle"),
  teacherHintText: document.querySelector("#teacherHintText"),
  presenterStage: document.querySelector("#presenterStage"),
  progressDots: document.querySelector("#progressDots"),
  liveGuessInput: document.querySelector("#liveGuessInput"),
  revealLetterBtn: document.querySelector("#revealLetterBtn"),
  showHintBtn: document.querySelector("#showHintBtn"),
  revealAnswerBtn: document.querySelector("#revealAnswerBtn"),
  sendAnswerBtn: document.querySelector("#sendAnswerBtn"),
  resetSolveBtn: document.querySelector("#resetSolveBtn"),
  prevRiddleBtn: document.querySelector("#prevRiddleBtn"),
  nextStepBtn: document.querySelector("#nextStepBtn"),
  nextRiddleBtn: document.querySelector("#nextRiddleBtn"),
  closePresenterBtn: document.querySelector("#closePresenterBtn"),
  fullscreenBtn: document.querySelector("#fullscreenBtn"),
  printBtn: document.querySelector("#printBtn"),
  exportBtn: document.querySelector("#exportBtn"),
  importInput: document.querySelector("#importInput"),
  resetBtn: document.querySelector("#resetBtn"),
  template: document.querySelector("#riddleCardTemplate")
};

function createBlankWeek(number) {
  return {
    title: `Week ${number}`,
    audience: "Younger",
    theme: "",
    riddles: []
  };
}

function loadProgram() {
  const saved = localStorage.getItem(STORAGE_KEY);
  const oldSaved = localStorage.getItem(OLD_STORAGE_KEY);

  try {
    if (saved) {
      return normalizeProgram(JSON.parse(saved));
    }
    if (oldSaved) {
      return normalizeProgram({ activeWeekIndex: 0, weeks: [JSON.parse(oldSaved)] });
    }
  } catch {
    return structuredClone(starterProgram);
  }

  return structuredClone(starterProgram);
}

function normalizeProgram(source = {}) {
  const weeks = Array.isArray(source.riddles) ? [source] : source.weeks || [];
  const normalizedWeeks = weeks.slice(0, 4).map((item, index) => normalizeWeek(item, index + 1));

  while (normalizedWeeks.length < 4) {
    normalizedWeeks.push(createBlankWeek(normalizedWeeks.length + 1));
  }

  const shouldSeedOfficialWeeks = Number(source.version || 0) < PROGRAM_VERSION;

  return {
    version: PROGRAM_VERSION,
    title: clean(source.title) || starterProgram.title,
    activeWeekIndex: clamp(Number(source.activeWeekIndex) || 0, 0, normalizedWeeks.length - 1),
    weeks: shouldSeedOfficialWeeks ? structuredClone(starterProgram.weeks) : normalizedWeeks
  };
}

function normalizeWeek(source = {}, number = 1) {
  return {
    title: clean(source.title) || `Week ${number}`,
    audience: clean(source.audience) || "Younger",
    theme: clean(source.theme),
    riddles: Array.isArray(source.riddles) ? source.riddles.map(normalizeStoredRiddle) : []
  };
}

function normalizeStoredRiddle(source = {}) {
  const type = validPuzzleType(source.type) ? source.type : "top-half";
  return {
    id: source.id || crypto.randomUUID(),
    title: clean(source.title) || "Untitled riddle",
    type,
    clue: clean(source.clue) || defaultClues[type],
    answer: clean(source.answer).toUpperCase(),
    hint: clean(source.hint) || defaultHints[type],
    missingLetters: clean(source.missingLetters).toUpperCase().replace(/[^A-Z]/g, ""),
    ...copyPuzzleExtras(source)
  };
}

function validPuzzleType(type) {
  return Object.prototype.hasOwnProperty.call(defaultClues, type);
}

function copyPuzzleExtras(source = {}) {
  const extras = {};

  if (clean(source.puzzleText)) {
    extras.puzzleText = clean(source.puzzleText).toUpperCase();
  }
  if (clean(source.removeLetters)) {
    extras.removeLetters = clean(source.removeLetters).toUpperCase().replace(/[^A-Z]/g, "");
  }
  if (Array.isArray(source.shapeItems)) {
    extras.shapeItems = source.shapeItems.map((item) => {
      if (Array.isArray(item)) {
        return [clean(item[0]).slice(0, 1).toUpperCase(), clean(item[1]) || "circle"];
      }
      return [clean(item.char).slice(0, 1).toUpperCase(), clean(item.shape) || "circle"];
    });
  }

  return extras;
}

function currentWeek() {
  return program.weeks[program.activeWeekIndex] || program.weeks[0];
}

function saveWeek() {
  program.weeks[program.activeWeekIndex] = week;
  saveProgram();
}

function saveProgram() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(program));
  localStorage.removeItem(OLD_STORAGE_KEY);
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function syncWeekFields() {
  renderWeekOptions();
  els.weekTitleInput.value = week.title || "";
  els.audienceInput.value = week.audience || "Younger";
  els.themeInput.value = week.theme || "";
  els.weekPanelTitle.textContent = week.title || "Untitled week";
  els.riddleCount.textContent = String(week.riddles.length);
}

function normalizeRiddle(source = {}) {
  const type = source.type || els.typeInput.value;
  return {
    id: source.id || crypto.randomUUID(),
    title: clean(source.title ?? els.riddleTitleInput.value) || "Untitled riddle",
    type,
    clue: clean(source.clue ?? els.clueInput.value) || defaultClues[type],
    answer: clean(source.answer ?? els.answerInput.value).toUpperCase(),
    hint: clean(source.hint ?? els.hintInput.value) || defaultHints[type],
    missingLetters: clean(source.missingLetters ?? els.missingLettersInput.value).toUpperCase().replace(/[^A-Z]/g, ""),
    ...copyPuzzleExtras(source)
  };
}

function clean(value) {
  return String(value || "").trim();
}

function renderWeekOptions() {
  els.weekSelectInput.innerHTML = "";
  program.weeks.forEach((item, index) => {
    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = `Week ${index + 1}: ${item.title || "Untitled"}`;
    option.selected = index === program.activeWeekIndex;
    els.weekSelectInput.append(option);
  });
}

function switchWeek(index) {
  program.activeWeekIndex = clamp(index, 0, program.weeks.length - 1);
  week = currentWeek();
  editingId = null;
  activeRiddleIndex = 0;
  activeStep = 0;
  solveStates = {};
  saveProgram();
  resetForm(week.riddles[0]);
  renderAll();
}

function directRiddleUrl(weekIndex, riddleIndex) {
  const url = new URL(window.location.href);
  url.search = "";
  url.hash = "";
  url.searchParams.set("present", "1");
  url.searchParams.set("week", String(weekIndex + 1));
  url.searchParams.set("riddle", String(riddleIndex + 1));
  return url.toString();
}

async function copyRiddleLink(button, weekIndex, riddleIndex) {
  const link = directRiddleUrl(weekIndex, riddleIndex);
  const originalText = button.textContent;

  try {
    await navigator.clipboard.writeText(link);
    button.textContent = "Copied";
  } catch {
    window.prompt("Copy this riddle link:", link);
    button.textContent = "Link";
  }

  window.setTimeout(() => {
    button.textContent = originalText;
  }, 1800);
}

function updateTypeControls() {
  const type = els.typeInput.value;
  els.fallenSettings.classList.toggle("hidden", type !== "fallen-letters");

  if (!clean(els.clueInput.value)) {
    els.clueInput.value = defaultClues[type];
  }
  if (!clean(els.hintInput.value)) {
    els.hintInput.value = defaultHints[type];
  }
}

function resetForm(riddle) {
  editingId = riddle?.id || null;
  els.formTitle.textContent = editingId ? "Edit riddle" : "New riddle";
  els.riddleTitleInput.value = riddle?.title || "";
  els.typeInput.value = riddle?.type || "top-half";
  els.clueInput.value = riddle?.clue || defaultClues[els.typeInput.value];
  els.answerInput.value = riddle?.answer || "";
  els.missingLettersInput.value = riddle?.missingLetters || "";
  els.hintInput.value = riddle?.hint || defaultHints[els.typeInput.value];
  updateTypeControls();
  renderPreview(normalizeRiddle());
}

function saveCurrentRiddle() {
  const previous = week.riddles.find((item) => item.id === editingId);
  const riddle = { ...previous, ...normalizeRiddle() };
  if (!riddle.answer) {
    els.answerInput.focus();
    return;
  }

  if (riddle.type === "fallen-letters" && !riddle.missingLetters) {
    riddle.missingLetters = makeMissingLetters(riddle.answer, Number(els.removeCountInput.value || 6)).letters;
    els.missingLettersInput.value = riddle.missingLetters;
  }

  if (editingId) {
    week.riddles = week.riddles.map((item) => (item.id === editingId ? { ...riddle, id: editingId } : item));
  } else {
    week.riddles.push(riddle);
    editingId = riddle.id;
  }

  saveWeek();
  renderAll();
}

function renderAll() {
  syncWeekFields();
  renderList();
  renderWeekTabs();
  renderPreview(normalizeRiddle());
}

function renderWeekTabs() {
  els.weekTabs.innerHTML = "";
  program.weeks.forEach((item, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = index === program.activeWeekIndex ? "active-week" : "";
    button.innerHTML = `<strong>Week ${index + 1}</strong><span>${escapeHtml(item.title || "Untitled")}</span><small>${item.riddles.length} riddles</small>`;
    button.addEventListener("click", () => switchWeek(index));
    els.weekTabs.append(button);
  });
}

function renderList() {
  els.riddleList.innerHTML = "";

  if (!week.riddles.length) {
    const empty = document.createElement("p");
    empty.className = "muted-empty";
    empty.textContent = "No riddles yet. Save one to build the week.";
    els.riddleList.append(empty);
    return;
  }

  week.riddles.forEach((riddle, index) => {
    const card = els.template.content.firstElementChild.cloneNode(true);
    card.querySelector(".card-kicker").textContent = typeLabel(riddle.type);
    card.querySelector("strong").textContent = riddle.title;
    card.querySelector("small").textContent = riddle.answer || "No answer yet";
    card.querySelector(".card-main").addEventListener("click", () => {
      activeRiddleIndex = index;
      resetForm(riddle);
    });
    card.querySelector(".present-one").addEventListener("click", () => openPresenter(index));
    card.querySelector(".link-one").addEventListener("click", (event) => {
      copyRiddleLink(event.currentTarget, program.activeWeekIndex, index);
    });
    card.querySelector(".edit-one").addEventListener("click", () => resetForm(riddle));
    card.querySelector(".copy-one").addEventListener("click", () => {
      week.riddles.splice(index + 1, 0, { ...riddle, id: crypto.randomUUID(), title: `${riddle.title} Copy` });
      saveWeek();
      renderAll();
    });
    card.querySelector(".delete-one").addEventListener("click", () => {
      week.riddles = week.riddles.filter((item) => item.id !== riddle.id);
      if (editingId === riddle.id) {
        resetForm();
      }
      saveWeek();
      renderAll();
    });
    els.riddleList.append(card);
  });
}

function renderPreview(riddle) {
  els.previewTitle.textContent = riddle.title || "Choose or make a riddle";
  els.previewType.textContent = typeLabel(riddle.type);
  els.previewStage.innerHTML = renderRiddleScene(riddle, 1);
}

function typeLabel(type) {
  const labels = {
    "top-half": "Top-half letters",
    "fallen-letters": "Fallen letters",
    backwards: "Backwards words",
    "square-letters": "Square letters",
    "symbol-key": "Symbol key",
    "letter-shift": "Next-letter code",
    "bible-lookup": "Bible lookup",
    "remove-letters": "Cross-out letters"
  };
  return labels[type] || "Top-half letters";
}

function renderRiddleScene(riddle, step, solveState = null) {
  const clue = escapeHtml(riddle.clue || "");
  const hint = escapeHtml(riddle.hint || "");
  const answer = riddle.answer || "";
  const showPuzzle = step >= 1;
  const showHint = step >= 2;
  const showAnswer = step >= 3;
  const showLiveSolve = Boolean(solveState && showPuzzle && !showAnswer);
  const showSendPanel = Boolean(solveState && showAnswer);

  return `
    <div class="riddle-scene">
      <div class="brand-row">
        <span>${escapeHtml(riddle.title || "Riddle")}</span>
        <span>Riddle Rangers</span>
      </div>
      <div class="riddle-clue">${clue}</div>
      ${showPuzzle ? renderPuzzle(riddle, showAnswer) : ""}
      ${showLiveSolve ? renderLiveSolveBoard(answer, solveState) : ""}
      ${showAnswer ? `<div class="answer-area revealed-answer">${renderAnswerWords(answer, false)}</div>` : ""}
      ${showHint ? `<div class="hint-box"><p>${hint}</p></div>` : ""}
      ${showSendPanel ? renderSendPanel(answer, solveState) : ""}
    </div>
  `;
}

function renderPuzzle(riddle, showAnswer) {
  if (showAnswer) {
    return "";
  }

  switch (riddle.type) {
    case "fallen-letters":
      return renderFallenPuzzle(riddle);
    case "backwards":
      return renderBackwardsPuzzle(riddle);
    case "square-letters":
      return renderShapePuzzle(riddle);
    case "symbol-key":
      return renderSymbolKeyPuzzle(riddle);
    case "letter-shift":
      return renderLetterShiftPuzzle(riddle);
    case "bible-lookup":
      return renderBibleLookupPuzzle(riddle);
    case "remove-letters":
      return renderRemoveLettersPuzzle(riddle);
    default:
      return `<div class="answer-area">${renderAnswerWords(riddle.answer, true)}</div>`;
  }
}

function renderAnswerWords(answer, topOnly) {
  return answer
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => {
      const letters = [...word].map((char) => {
        const safe = escapeHtml(char);
        if (!/[A-Z0-9]/i.test(char)) {
          return safe;
        }
        return topOnly ? `<span class="top-half-letter"><span>${safe}</span></span>` : `<span>${safe}</span>`;
      }).join("");
      return `<span class="answer-word">${letters}</span>`;
    })
    .join("");
}

function renderFallenPuzzle(riddle) {
  const answer = clean(riddle.answer).toUpperCase();
  const missingLetters = clean(riddle.missingLetters).toUpperCase().replace(/[^A-Z]/g, "");
  const missingCounts = [...missingLetters].reduce((counts, char) => {
    counts[char] = (counts[char] || 0) + 1;
    return counts;
  }, {});
  const hiddenPositions = new Set();

  [...answer].forEach((char, index) => {
    if (missingCounts[char] > 0) {
      hiddenPositions.add(index);
      missingCounts[char] -= 1;
    }
  });

  let index = 0;
  const words = answer.split(" ").map((word) => {
    const letters = [...word].map((char) => {
      const shouldHide = hiddenPositions.has(index);
      index += 1;
      return shouldHide ? `<span class="blank">_</span>` : escapeHtml(char);
    }).join("");
    index += 1;
    return `<span class="fallen-word">${letters}</span>`;
  }).join("");

  return `
    <div class="fallen-puzzle">
      <div class="fallen-line">${words}</div>
      <div class="letter-bank">${[...missingLetters].map(escapeHtml).join(" ")}</div>
    </div>
  `;
}

function renderBackwardsPuzzle(riddle) {
  const backwards = clean(riddle.answer)
    .split(/\s+/)
    .filter(Boolean)
    .reverse()
    .map((word) => [...word].reverse().join(""))
    .join(" ");

  return `
    <div class="code-puzzle">
      <div class="code-line">${escapeHtml(backwards)}</div>
      <div class="answer-blanks">${renderAnswerBlanks(riddle.answer)}</div>
    </div>
  `;
}

function renderShapePuzzle(riddle) {
  const items = Array.isArray(riddle.shapeItems) && riddle.shapeItems.length
    ? riddle.shapeItems
    : makeShapeItems(riddle.answer || "");

  return `
    <div class="shape-puzzle">
      ${items.map(([char, shape]) => `<span class="shape-letter ${escapeHtml(shape)}">${escapeHtml(char)}</span>`).join("")}
    </div>
  `;
}

function renderSymbolKeyPuzzle(riddle) {
  const answer = clean(riddle.answer).toUpperCase();
  const words = answer.split(/\s+/).filter(Boolean);
  const symbolWords = words.map((word) => (["I", "AM", "THE", "OF"].includes(word) ? word : renderSymbolWord(word)));

  return `
    <div class="symbol-puzzle">
      <div class="symbol-sentence">${symbolWords.map((word) => `<span>${word}</span>`).join("")}</div>
      <div class="symbol-key">
        ${Object.entries(symbolKey).map(([letter, glyph]) => `
          <span><span class="symbol-token">${escapeHtml(glyph)}</span>${letter}</span>
        `).join("")}
      </div>
    </div>
  `;
}

function renderLetterShiftPuzzle(riddle) {
  const answer = clean(riddle.answer).toUpperCase();
  return `
    <div class="shift-puzzle">
      <div class="reference-line">${renderShiftReference(answer)}</div>
      <div class="code-line">${escapeHtml(shiftLetters(answer, -1))}</div>
      <div class="alphabet-line">ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
    </div>
  `;
}

function renderBibleLookupPuzzle() {
  const books = ["Matthew", "Mark", "Luke", "John"];
  return `
    <div class="lookup-puzzle">
      <p>Which book has the matching 14:2?</p>
      <div>
        ${books.map((book) => `<span>${book} 14:2</span>`).join("")}
      </div>
    </div>
  `;
}

function renderRemoveLettersPuzzle(riddle) {
  const removeLetters = clean(riddle.removeLetters || "BCO").toUpperCase();
  const puzzleText = clean(riddle.puzzleText) || addExtraLetters(riddle.answer || "", removeLetters);

  return `
    <div class="remove-puzzle">
      <div class="code-line">${escapeHtml(puzzleText)}</div>
      <div class="remove-bank">Cross out: ${[...removeLetters].map(escapeHtml).join(" ")}</div>
    </div>
  `;
}

function renderAnswerBlanks(answer) {
  return clean(answer)
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => `<span>${"_".repeat([...word].filter((char) => /[A-Z0-9]/i.test(char)).length)}</span>`)
    .join("");
}

function makeShapeItems(answer) {
  const shapes = ["circle", "pentagon", "triangle"];
  const items = [];
  [...clean(answer).replace(/\s+/g, "")].forEach((char, index) => {
    items.push([char.toUpperCase(), "square"]);
    if (index % 2 === 0) {
      items.push([String.fromCharCode(65 + ((index * 7) % 26)), shapes[index % shapes.length]]);
    }
  });
  return items;
}

function renderSymbolWord(word) {
  return `<span class="symbol-word">${[...word].map((letter) => `<span class="symbol-token">${escapeHtml(symbolKey[letter] || "??")}</span>`).join("")}</span>`;
}

function renderShiftReference(answer) {
  return answer
    .split(/\s+/)
    .map((word) => /[A-Z]/i.test(word) ? "_".repeat([...word].filter((char) => /[A-Z]/i.test(char)).length) : escapeHtml(word))
    .join(" ");
}

function shiftLetters(value, amount) {
  return [...value].map((char) => {
    if (!/[A-Z]/i.test(char)) {
      return char;
    }
    const base = char === char.toLowerCase() ? 97 : 65;
    const code = char.charCodeAt(0) - base;
    return String.fromCharCode(base + ((code + amount + 26) % 26));
  }).join("");
}

function addExtraLetters(answer, removeLetters) {
  const extras = [...removeLetters];
  let index = 0;
  return [...clean(answer).toUpperCase()].map((char) => {
    if (!/[A-Z]/.test(char)) {
      return char;
    }
    const extra = extras[index % extras.length];
    index += 1;
    return index % 2 === 0 ? `${char}${extra}` : `${extra}${char}`;
  }).join("");
}

function renderLiveSolveBoard(answer, solveState) {
  const guess = clean(solveState.guess);

  return `
    <div class="live-solve-board">
      <p class="board-label">Live solve</p>
      <div class="partial-answer">${renderPartialAnswer(answer, solveState.revealedCount || 0)}</div>
      ${guess ? `<div class="class-guess"><span>Class guess</span><strong>${escapeHtml(guess)}</strong></div>` : ""}
    </div>
  `;
}

function renderSendPanel(answer, solveState) {
  const sendStatus = solveState.sendStatus || "ready";
  const label = sendStatus === "sent"
    ? "Delivered to Zach & Jada"
    : sendStatus === "sending"
      ? "Sending answer..."
      : "Send answer to Zach & Jada";
  const message = sendStatus === "sent"
    ? "Message received. Nice work, Riddle Rangers."
    : sendStatus === "sending"
      ? "Opening the Riddle Rangers answer line..."
      : "Tap when the class is ready to send the final answer.";
  const disabled = sendStatus === "sending" || sendStatus === "sent" ? "disabled" : "";

  return `
    <div class="send-panel ${sendStatus}">
      <div class="send-card">
        <p class="send-kicker">Final step</p>
        <h3>Send it to Zach & Jada</h3>
        <p>${message}</p>
        <div class="send-preview">
          <span>Answer</span>
          <strong>${escapeHtml(answer)}</strong>
        </div>
        <button id="sendAnswerStageBtn" class="big-send-button" type="button" ${disabled}>
          <span class="send-icon" aria-hidden="true"></span>
          ${label}
        </button>
      </div>
    </div>
  `;
}

function renderPartialAnswer(answer, revealedCount) {
  let seenLetters = 0;
  return answer
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => {
      const letters = [...word].map((char) => {
        if (!/[A-Z0-9]/i.test(char)) {
          return escapeHtml(char);
        }

        seenLetters += 1;
        const isRevealed = seenLetters <= revealedCount;
        return `<span class="${isRevealed ? "solved-letter" : "unsolved-letter"}">${isRevealed ? escapeHtml(char) : "_"}</span>`;
      }).join("");
      return `<span class="answer-word">${letters}</span>`;
    })
    .join("");
}

function countAnswerCharacters(answer) {
  return [...answer].filter((char) => /[A-Z0-9]/i.test(char)).length;
}

function makeMissingLetters(answer, count) {
  const positions = [...answer]
    .map((char, index) => ({ char, index }))
    .filter((item) => /[A-Z]/i.test(item.char));
  const targetCount = Math.max(1, Math.min(count, positions.length));
  const picked = new Set();

  while (picked.size < targetCount) {
    const spot = positions[Math.floor(Math.random() * positions.length)];
    picked.add(spot.index);
  }

  const letters = [...picked]
    .sort((a, b) => a - b)
    .map((index) => answer[index])
    .sort(() => Math.random() - 0.5)
    .join("")
    .toUpperCase();

  return { letters };
}

function openPresenter(index = 0) {
  if (!week.riddles.length) {
    return;
  }

  activeRiddleIndex = Math.max(0, Math.min(index, week.riddles.length - 1));
  activeStep = 0;
  solveStates = {};
  els.presenter.classList.remove("hidden");
  els.presenter.setAttribute("aria-hidden", "false");
  renderPresenter();
}

function closePresenter() {
  els.presenter.classList.add("hidden");
  els.presenter.setAttribute("aria-hidden", "true");
  if (document.fullscreenElement) {
    document.exitFullscreen();
  }
}

function renderPresenter() {
  const riddle = week.riddles[activeRiddleIndex];
  const solveState = getSolveState(riddle);
  els.presenterWeek.textContent = `${week.title || "Weekly riddles"} - ${week.audience || ""}`;
  els.presenterTitle.textContent = riddle.title;
  els.teacherHintText.textContent = riddle.hint || "";
  els.presenterStage.innerHTML = renderRiddleScene(riddle, activeStep, solveState);
  els.nextStepBtn.textContent = nextStepLabel();
  els.showHintBtn.textContent = activeStep >= 2 ? "Hint Shown" : "Show Hint to Class";
  els.sendAnswerBtn.disabled = activeStep < 3 || solveState.sendStatus === "sending" || solveState.sendStatus === "sent";
  els.sendAnswerBtn.textContent = solveState.sendStatus === "sent"
    ? "Sent to Zach & Jada"
    : solveState.sendStatus === "sending"
      ? "Sending..."
      : "Send to Zach & Jada";
  els.liveGuessInput.value = solveState.guess || "";
  els.progressDots.innerHTML = "";

  for (let i = 0; i < 4; i += 1) {
    const dot = document.createElement("span");
    dot.classList.toggle("active", i <= activeStep);
    els.progressDots.append(dot);
  }
}

function getSolveState(riddle) {
  if (!solveStates[riddle.id]) {
    solveStates[riddle.id] = { revealedCount: 0, guess: "", sendStatus: "ready" };
  }
  return solveStates[riddle.id];
}

function nextStepLabel() {
  if (activeStep === 0) {
    return "Show Puzzle";
  }
  if (activeStep === 1) {
    return "Show Hint";
  }
  if (activeStep === 2) {
    return "Reveal Answer";
  }
  return "Start Over";
}

function nextStep() {
  activeStep = activeStep >= 3 ? 0 : activeStep + 1;
  renderPresenter();
}

function revealLetter() {
  const riddle = week.riddles[activeRiddleIndex];
  const solveState = getSolveState(riddle);
  const totalLetters = countAnswerCharacters(riddle.answer || "");
  solveState.revealedCount = Math.min(totalLetters, solveState.revealedCount + 1);
  activeStep = Math.max(activeStep, 1);
  renderPresenter();
}

function showHint() {
  activeStep = Math.max(activeStep, 2);
  renderPresenter();
}

function revealAnswer() {
  const riddle = week.riddles[activeRiddleIndex];
  const solveState = getSolveState(riddle);
  solveState.revealedCount = countAnswerCharacters(riddle.answer || "");
  solveState.sendStatus = solveState.sendStatus || "ready";
  activeStep = 3;
  renderPresenter();
}

function sendAnswer() {
  const riddle = week.riddles[activeRiddleIndex];
  const solveState = getSolveState(riddle);
  if (activeStep < 3 || solveState.sendStatus === "sending" || solveState.sendStatus === "sent") {
    return;
  }

  solveState.sendStatus = "sending";
  renderPresenter();

  window.setTimeout(() => {
    const latestState = getSolveState(riddle);
    latestState.sendStatus = "sent";
    if (week.riddles[activeRiddleIndex]?.id === riddle.id && activeStep >= 3) {
      renderPresenter();
    }
  }, 1400);
}

function resetSolve() {
  const riddle = week.riddles[activeRiddleIndex];
  solveStates[riddle.id] = { revealedCount: 0, guess: "", sendStatus: "ready" };
  activeStep = 0;
  renderPresenter();
}

function nextRiddle(delta) {
  if (!week.riddles.length) {
    return;
  }

  activeRiddleIndex = (activeRiddleIndex + delta + week.riddles.length) % week.riddles.length;
  activeStep = 0;
  renderPresenter();
}

function openPresenterFromUrl() {
  const params = new URLSearchParams(window.location.search);
  if (params.get("present") !== "1") {
    return;
  }

  const weekIndex = clamp(Number(params.get("week")) - 1 || 0, 0, program.weeks.length - 1);
  const targetWeek = program.weeks[weekIndex];
  if (!targetWeek?.riddles.length) {
    return;
  }

  const riddleIndex = clamp(Number(params.get("riddle")) - 1 || 0, 0, targetWeek.riddles.length - 1);
  program.activeWeekIndex = weekIndex;
  week = currentWeek();
  editingId = null;
  activeRiddleIndex = riddleIndex;
  activeStep = 0;
  solveStates = {};
  saveProgram();
  resetForm(week.riddles[riddleIndex]);
  renderAll();
  openPresenter(riddleIndex);
}

function exportWeek() {
  saveWeek();
  const blob = new Blob([JSON.stringify(program, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "riddle-rangers-four-week-program.json";
  link.click();
  URL.revokeObjectURL(url);
}

function importWeek(file) {
  if (!file) {
    return;
  }

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      const parsed = JSON.parse(String(reader.result || ""));
      if (!Array.isArray(parsed.weeks) && !Array.isArray(parsed.riddles)) {
        throw new Error("Missing riddles");
      }
      program = normalizeProgram(parsed);
      week = currentWeek();
      saveProgram();
      resetForm(week.riddles[0]);
      renderAll();
    } catch {
      alert("That file does not look like a Riddle Rangers program export.");
    }
  });
  reader.readAsText(file);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function wireEvents() {
  els.weekSelectInput.addEventListener("change", () => switchWeek(Number(els.weekSelectInput.value)));

  [els.weekTitleInput, els.audienceInput, els.themeInput].forEach((input) => {
    input.addEventListener("input", () => {
      week.title = els.weekTitleInput.value;
      week.audience = els.audienceInput.value;
      week.theme = els.themeInput.value;
      saveWeek();
      syncWeekFields();
      renderWeekTabs();
    });
  });

  els.typeInput.addEventListener("change", () => {
    els.clueInput.value = defaultClues[els.typeInput.value];
    els.hintInput.value = defaultHints[els.typeInput.value];
    updateTypeControls();
    renderPreview(normalizeRiddle());
  });

  [els.riddleTitleInput, els.clueInput, els.answerInput, els.missingLettersInput, els.hintInput].forEach((input) => {
    input.addEventListener("input", () => renderPreview(normalizeRiddle()));
  });

  els.makeBlanksBtn.addEventListener("click", () => {
    const answer = clean(els.answerInput.value).toUpperCase();
    if (!answer) {
      els.answerInput.focus();
      return;
    }
    els.missingLettersInput.value = makeMissingLetters(answer, Number(els.removeCountInput.value || 6)).letters;
    renderPreview(normalizeRiddle());
  });

  els.saveRiddleBtn.addEventListener("click", saveCurrentRiddle);
  els.previewBtn.addEventListener("click", () => renderPreview(normalizeRiddle()));
  els.newRiddleBtn.addEventListener("click", () => resetForm());
  els.presentWeekBtn.addEventListener("click", () => openPresenter(activeRiddleIndex));
  els.prevRiddleBtn.addEventListener("click", () => nextRiddle(-1));
  els.nextRiddleBtn.addEventListener("click", () => nextRiddle(1));
  els.nextStepBtn.addEventListener("click", nextStep);
  els.liveGuessInput.addEventListener("input", () => {
    const riddle = week.riddles[activeRiddleIndex];
    const solveState = getSolveState(riddle);
    solveState.guess = els.liveGuessInput.value.toUpperCase();
    activeStep = Math.max(activeStep, 1);
    renderPresenter();
    els.liveGuessInput.focus();
    const end = els.liveGuessInput.value.length;
    els.liveGuessInput.setSelectionRange(end, end);
  });
  els.revealLetterBtn.addEventListener("click", revealLetter);
  els.showHintBtn.addEventListener("click", showHint);
  els.revealAnswerBtn.addEventListener("click", revealAnswer);
  els.sendAnswerBtn.addEventListener("click", sendAnswer);
  els.presenterStage.addEventListener("click", (event) => {
    if (event.target.closest("#sendAnswerStageBtn")) {
      sendAnswer();
    }
  });
  els.resetSolveBtn.addEventListener("click", resetSolve);
  els.closePresenterBtn.addEventListener("click", closePresenter);
  els.fullscreenBtn.addEventListener("click", () => {
    if (!document.fullscreenElement) {
      els.presenter.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  });
  els.printBtn.addEventListener("click", () => window.print());
  els.exportBtn.addEventListener("click", exportWeek);
  els.importInput.addEventListener("change", (event) => importWeek(event.target.files[0]));
  els.resetBtn.addEventListener("click", () => {
    program = structuredClone(starterProgram);
    week = currentWeek();
    saveProgram();
    resetForm(week.riddles[0]);
    renderAll();
  });

  document.addEventListener("keydown", (event) => {
    if (els.presenter.classList.contains("hidden")) {
      return;
    }
    if (["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement?.tagName)) {
      return;
    }
    if (event.key === "Escape") {
      closePresenter();
    }
    if (event.key === " " || event.key === "ArrowRight") {
      event.preventDefault();
      nextStep();
    }
    if (event.key === "ArrowDown") {
      nextRiddle(1);
    }
    if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      nextRiddle(-1);
    }
  });
}

wireEvents();
syncWeekFields();
resetForm(week.riddles[0]);
renderAll();
openPresenterFromUrl();
