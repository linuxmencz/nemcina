// Čistá logika aplikace (bez práce s DOM) – testuje se v Node, v prohlížeči běží jako window.Engine.
(function (root) {
  const STORAGE_KEY = 'nemcina-v1';
  const MAX_BOX = 5;
  const XP_PER_CORRECT = 10;
  const XP_LESSON_BONUS = 20;
  const DAILY_GOALS = [10, 20, 30, 50];
  const DEFAULT_DAILY_GOAL = 20;
  const LESSON_LENGTH_SECOND_PASS = 6;
  const TYPES = ['translate', 'listenChoose', 'listenType'];
  const REVIEW_SIZE = 12;
  const PRACTICE_SIZE = 10;
  const MAX_CHALLENGES = 60; // horní mez počtu splněných týdnů výzev při importu zálohy
  const MAX_BADGES = 200; // horní mez počtu odznaků při importu zálohy
  const HISTORY_DAYS = 60; // kolik dní se pamatují body pro graf
  // Gramatická cvičení (obsah-gramatika.md): výběr správné věty z dvou nebo tří; klíč = téma v EXTRAS.grammar
  const GRAMMAR_KINDS = ['grammarCases', 'grammarWordOrder', 'grammarPrepositions', 'grammarVerbs', 'grammarPerfect', 'grammarAdjectives', 'grammarConditional', 'grammarPassive', 'grammarConjunctions'];
  const PRACTICE_KINDS = ['mistakes', 'falseFriends', 'pairs', 'sentences', 'matching', 'sounds', 'dialogs', 'listening', 'gender', 'plurals', ...GRAMMAR_KINDS];
  const SENTENCE_COUNT = 8;
  const SENTENCE_MIN_TOKENS = 3;
  const MATCHING_ROUNDS = 3;
  const MATCHING_SIZE = 5;
  const XP_PER_CLEAN_PAIR = 5;
  const DAY_MS = 24 * 60 * 60 * 1000;
  // Za kolik dní se slovo vrátí podle krabičky (1 = právě chybovalo, hned k opakování).
  const REVIEW_INTERVAL_DAYS = { 1: 0, 2: 1, 3: 3, 4: 7, 5: 14 };

  // ---------- náhoda ----------

  function shuffle(items, rng = Math.random) {
    const result = items.slice();
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }

  // ---------- kontrola odpovědí ----------

  const ARTICLES = ['der', 'die', 'das'];

  // Zápis pro porovnání s umlauty zachovanými: malá písmena, jen písmena, číslice a mezery. Rozložené ü (u + tečky) se složí,
  // jiná diakritika (é v „Café“) se zahodí a spojovník slovo nerozděluje (E-Mail = Email).
  function rawKey(text) {
    return String(text)
      .normalize('NFC')
      .toLowerCase()
      .replace(/[àáâãå]/g, 'a').replace(/[èéêë]/g, 'e').replace(/[ìíîï]/g, 'i')
      .replace(/[òóôõ]/g, 'o').replace(/[ùúûů]/g, 'u').replace(/ç/g, 'c').replace(/ñ/g, 'n')
      .replace(/-/g, '')
      .replace(/[^a-zäöüß0-9 ]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  // Zápis bez umlautů (ä→a, ö→o, ü→u; ß zůstává): poznáme odpověď, která se liší jen vynechanými tečkami.
  function stripMarks(text) {
    return rawKey(text).replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/ü/g, 'u');
  }

  // Porovnávací tvar: ä/ö/ü/ß se rozepíšou na ae/oe/ue/ss, takže „schoen“ a „schön“ jsou totéž.
  function normalize(text) {
    return rawKey(text).replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss');
  }

  function levenshtein(a, b) {
    const prev = Array.from({ length: b.length + 1 }, (_, i) => i);
    for (let i = 1; i <= a.length; i++) {
      let diag = prev[0];
      prev[0] = i;
      for (let j = 1; j <= b.length; j++) {
        const tmp = prev[j];
        prev[j] = Math.min(prev[j] + 1, prev[j - 1] + 1, diag + (a[i - 1] === b[j - 1] ? 0 : 1));
        diag = tmp;
      }
    }
    return prev[b.length];
  }

  // 'correct' = přesně (na velikosti písmen nezáleží), 'digraph' = správně, ale zapsáno ae/oe/ue/ss, 'typo' = překlep o jedno písmeno,
  // 'wrong' = špatně. Překlep tolerujeme jen u slov od 6 písmen (Hund × Hand); vynechané tečky nad ä/ö/ü jsou vždy chyba (Mutter × Mütter).
  function compareDetail(answer, expected) {
    const a = normalize(answer);
    const e = normalize(expected);
    if (!a) return 'wrong';
    if (a === e) return rawKey(answer) === rawKey(expected) ? 'correct' : 'digraph';
    if (stripMarks(answer) === stripMarks(expected)) return 'wrong';
    if (rawKey(expected).length >= 6 && levenshtein(a, e) === 1) return 'typo';
    return 'wrong';
  }

  // Pro slovíčka je digraf i překlep „uznáno, ale zapsáno jinak“ ('typo').
  function compareToken(answer, expected) {
    const r = compareDetail(answer, expected);
    return r === 'digraph' ? 'typo' : r;
  }

  function checkTyped(answer, expected) {
    return compareToken(answer, expected);
  }

  // Diktát věty: slovo po slovu; nejvýš dvě slova s překlepem (digrafy ae/oe/ue/ss se do limitu nepočítají), jinak chyba.
  function checkDictation(answer, expected) {
    const a = rawKey(answer).split(' ').filter(Boolean);
    const e = rawKey(expected).split(' ').filter(Boolean);
    if (!a.length || a.length !== e.length) return 'wrong';
    let typos = 0;
    let digraphs = 0;
    for (let i = 0; i < e.length; i++) {
      const r = compareDetail(a[i], e[i]);
      if (r === 'wrong') return 'wrong';
      if (r === 'typo') typos += 1;
      if (r === 'digraph') digraphs += 1;
    }
    if (typos > 2) return 'wrong';
    return typos + digraphs === 0 ? 'correct' : 'typo';
  }

  // Odpověď bez členu (první slovo der/die/das se oddělí jen u víceslovné odpovědi).
  function stripArticle(text) {
    const parts = rawKey(text).split(' ').filter(Boolean);
    return ARTICLES.includes(parts[0]) && parts.length > 1 ? parts.slice(1).join(' ') : parts.join(' ');
  }

  // Psaná odpověď na slovo. Podstatné jméno (word.article) se píše i s členem: chybný člen je chyba, chybějící člen
  // se uzná jako 'typo' (hláška „správně je der Tisch“). Víceslovný výraz bez členu se kontroluje po slovech.
  function checkWordAnswer(answer, word) {
    if (word.article) {
      const parts = rawKey(answer).split(' ').filter(Boolean);
      if (!parts.length) return 'wrong';
      const bare = stripArticle(word.en);
      if (parts.length > 1 && ARTICLES.includes(parts[0])) {
        if (parts[0] !== word.article) return 'wrong';
        return compareToken(parts.slice(1).join(' '), bare);
      }
      return compareToken(parts.join(' '), bare) === 'wrong' ? 'wrong' : 'typo';
    }
    if (rawKey(word.en).includes(' ')) return checkDictation(answer, word.en);
    return checkTyped(answer, word.en);
  }

  // Upozornění k uznané odpovědi: 'article' (chyběl člen), 'umlaut' (zapsáno ae/oe/ue/ss) a 'case' (podstatné jméno malým písmenem).
  function answerHints(answer, word) {
    const hints = [];
    const result = checkWordAnswer(answer, word);
    if (result === 'wrong') return hints;
    const parts = String(answer).trim().split(/\s+/).filter(Boolean);
    const hasArticle = parts.length > 1 && ARTICLES.includes(parts[0].toLowerCase());
    if (word.article && !hasArticle) hints.push('article');
    const bareAnswer = stripArticle(answer);
    const bareExpected = word.article ? stripArticle(word.en) : rawKey(word.en);
    if (normalize(bareAnswer) === normalize(bareExpected) && bareAnswer !== bareExpected) hints.push('umlaut');
    if (word.article) {
      const noun = hasArticle ? parts[1] : parts[0];
      if (noun && noun[0] !== noun[0].toUpperCase()) hints.push('case');
    }
    return hints;
  }

  // ---------- sestavení lekce ----------

  function pickDistractors(word, pool, count, rng = Math.random) {
    const candidates = pool.filter((w) => w.id !== word.id && w.cs !== word.cs);
    return shuffle(candidates, rng).slice(0, count);
  }

  function makeExercise(type, word, pool, rng) {
    const distractors = pickDistractors(word, pool, 3, rng);
    const exercise = { type, wordId: word.id, retry: false };
    if (type === 'listenType') return exercise;
    exercise.options = shuffle([word, ...distractors], rng).map((w) => ({ id: w.id, text: w.cs }));
    return exercise;
  }

  // Každé slovo dostane jedno cvičení (typy se střídají), pak ještě několik slov s jiným typem.
  function buildLesson(lesson, rng = Math.random) {
    const words = shuffle(lesson.words, rng);
    const exercises = words.map((w, i) => makeExercise(TYPES[i % TYPES.length], w, lesson.words, rng));
    words.slice(0, LESSON_LENGTH_SECOND_PASS).forEach((w, i) => {
      exercises.push(makeExercise(TYPES[(i + 1) % TYPES.length], w, lesson.words, rng));
    });
    return exercises;
  }

  // Špatně zodpovězené cvičení se zařadí na konec ještě jednou (opakovaný pokus se už znovu nezařazuje).
  function requeue(queue, exercise) {
    if (exercise.retry) return queue;
    return queue.concat([Object.assign({}, exercise, { retry: true })]);
  }

  // ---------- procvičování (chyby Čechů, falešní přátelé, minimální páry) ----------

  // Kvíz Plurály: slova se dvěma platnými plurály, u kterých by „špatná“ možnost byla také správně (Balkone × Balkons)
  const PLURAL_QUIZ_SKIP = ['der-balkon'];
  const UMLAUT = { a: 'ä', o: 'ö', u: 'ü' };

  // Přehláska poslední kmenové samohlásky (Vater → Väter, Haus → Häus); bez a/o/u zůstane slovo beze změny
  function umlautStem(stem) {
    return stem.replace(/(au|a|o|u)(?=[^aouäöüeiy]*$)/, (m) => (m === 'au' ? 'äu' : UMLAUT[m]));
  }

  // Věrohodné špatné plurály z typických koncovek a přehlásky; správný tvar se nikdy nevybere
  function pluralDistractors(item, rng) {
    const stem = item.en.split(' ').slice(1).join(' ');
    const correct = item.plural.replace(/^die /, '');
    const um = umlautStem(stem);
    const forms = stem.endsWith('e')
      ? [stem, stem + 's', stem + 'r', um, um + 'n']
      : [stem + 'e', stem + 'en', stem + 'er', stem + 'n', stem + 's', stem, um, um + 'e', um + 'er', um + 'n'];
    let pool = [...new Set(forms)].filter((f) => f !== correct);
    if (pool.length < 3) pool = [...new Set([...pool, stem + 'en', stem + 'e', stem + 'n'])].filter((f) => f !== correct); // záloha
    return shuffle(pool, rng).slice(0, 3).map((f) => 'die ' + f);
  }


  // Společný tvar cvičení: options[{text, correct}], explanation (po odpovědi), audioNow (před odpovědí), audioAfter.
  function practiceExercise(kind, item, allItems, rng) {
    const base = { type: 'practice', kind, itemId: item.id, retry: false };
    if (kind === 'mistakes' || GRAMMAR_KINDS.includes(kind)) {
      const wrongs = [item.wrong, item.wrong2].filter(Boolean); // gramatika může mít druhou špatnou variantu
      return Object.assign(base, {
        prompt: 'Která věta je správně?',
        options: shuffle([{ text: item.right, correct: true }, ...wrongs.map((text) => ({ text, correct: false }))], rng),
        explanation: item.explanation,
        audioAfter: item.id,
        speakAfter: item.right,
      });
    }
    if (kind === 'falseFriends') {
      const others = shuffle(allItems.filter((o) => o.id !== item.id), rng).map((o) => o.means);
      const texts = [item.means, item.notMeans];
      others.forEach((t) => { if (texts.length < 4 && !texts.includes(t)) texts.push(t); });
      return Object.assign(base, {
        prompt: 'Co znamená toto slovo?',
        big: item.en,
        audioNow: item.id,
        speakNow: item.en,
        options: shuffle(texts.map((t) => ({ text: t, correct: t === item.means })), rng),
        explanation: `${item.en} = ${item.means} (ne ${item.notMeans})`,
        afterText: `${item.sentenceEn} – ${item.sentenceCs}`,
        audioAfter: item.id + '-s',
        speakAfter: item.sentenceEn,
      });
    }
    if (kind === 'plurals') {
      // Množné číslo podstatného jména: správný plurál a tři věrohodné chyby, správný tvar se po odpovědi přehraje
      const wrong = pluralDistractors(item, rng);
      return Object.assign(base, {
        prompt: 'Jaké je množné číslo?',
        big: item.en,
        options: shuffle([{ text: item.plural, correct: true }, ...wrong.map((text) => ({ text, correct: false }))], rng),
        explanation: `${item.en} → ${item.plural}`,
        audioAfter: item.id + '-pl',
        speakAfter: item.plural,
      });
    }
    if (kind === 'gender') {
      // Rod podstatného jména: ukáže se slovo bez členu, odpověď der / die / das (vždy v tomto pořadí, aby se barvy rodů ustálily)
      const bare = item.en.split(' ').slice(1).join(' ');
      return Object.assign(base, {
        prompt: 'Jaký rod má toto slovo?',
        big: bare,
        options: ARTICLES.map((a) => ({ text: a, correct: a === item.article })),
        explanation: `${item.en} – ${item.cs}; ` + (item.plural ? `množné číslo: ${item.plural}` : 'bez množného čísla'),
        audioAfter: item.id,
        speakAfter: item.en,
      });
    }
    if (kind === 'listening') {
      const variant = ['word', 'sentence', 'dictation'][Math.floor(rng() * 3)];
      const sentence = variant !== 'word';
      Object.assign(base, {
        audioNow: item.id + (sentence ? '-s' : ''),
        audioSlow: item.id + (sentence ? '-s-slow' : '-slow'),
        speakNow: sentence ? item.sentenceEn : item.en,
        explanation: sentence ? `${item.sentenceEn} – ${item.sentenceCs}` : `${item.en} = ${item.cs}`,
      });
      if (variant === 'dictation') {
        return Object.assign(base, { prompt: 'Napiš větu, kterou slyšíš', typed: true, answer: item.sentenceEn });
      }
      const key = sentence ? 'sentenceCs' : 'cs';
      const others = shuffle(allItems.filter((o) => o.id !== item.id && o.cs !== item.cs && o[key] !== item[key]), rng).slice(0, 3);
      return Object.assign(base, {
        prompt: sentence ? 'Poslechni si větu a vyber překlad' : 'Poslechni si slovo a vyber význam',
        options: shuffle([item, ...others], rng).map((o) => ({ text: o[key], correct: o === item })),
      });
    }
    const heard = rng() < 0.5 ? item.a : item.b;
    return Object.assign(base, {
      prompt: 'Které slovo slyšíš?',
      audioNow: heard.id,
      speakNow: heard.en,
      options: shuffle([item.a, item.b].map((w) => ({ text: w.en, correct: w === heard })), rng),
      explanation: `${item.a.en} = ${item.a.cs}, ${item.b.en} = ${item.b.cs}` + (item.note ? ` (${item.note})` : ''),
    });
  }

  function buildPractice(kind, items, rng = Math.random, size = PRACTICE_SIZE) {
    // „Jaký rod?“ jen u podstatných jmen, „Plurály“ jen u těch, která mají jednoznačný plurál
    const pool = kind === 'gender' ? items.filter((item) => item.article)
      : kind === 'plurals' ? items.filter((item) => item.article && item.plural && !PLURAL_QUIZ_SKIP.includes(item.id))
        : items;
    return shuffle(pool, rng).slice(0, size).map((item) => practiceExercise(kind, item, pool, rng));
  }

  // Možnosti odpovědi v dialogu: správná replika a dvě špatné, zamíchané.
  function dialogOptions(line, rng = Math.random) {
    return shuffle([{ text: line.en, correct: true }, ...line.wrong.map((text) => ({ text, correct: false }))], rng);
  }

  // ---------- skládání vět a přiřazování dvojic ----------

  function tokenize(sentence) {
    return sentence.split(' ').filter(Boolean);
  }

  // Věty z lekcí rozsekané na slova; pořadí karet se vždy zamíchá jinak než ve správné větě.
  function buildSentences(allWords, rng = Math.random, size = SENTENCE_COUNT) {
    const usable = allWords.filter((w) => tokenize(w.sentenceEn).length >= SENTENCE_MIN_TOKENS);
    return shuffle(usable, rng).slice(0, size).map((w) => {
      const tokens = tokenize(w.sentenceEn);
      let tiles = shuffle(tokens, rng);
      for (let attempt = 0; attempt < 10 && tiles.join(' ') === tokens.join(' '); attempt++) tiles = shuffle(tokens, rng);
      return {
        type: 'sentence', kind: 'sentences', itemId: w.id, retry: false,
        cs: w.sentenceCs, tokens: tiles, answer: w.sentenceEn,
        audioAfter: w.id + '-s', speakAfter: w.sentenceEn,
      };
    });
  }

  function checkSentence(chosen, answer) {
    return normalize(chosen.join(' ')) === normalize(answer);
  }

  // Kola přiřazování: v každém kole několik různých slov s různými překlady.
  function buildMatching(allWords, rng = Math.random, rounds = MATCHING_ROUNDS, size = MATCHING_SIZE) {
    const usedCs = new Set();
    const picked = [];
    for (const w of shuffle(allWords, rng)) {
      if (picked.length === rounds * size) break;
      if (usedCs.has(w.cs)) continue;
      usedCs.add(w.cs);
      picked.push({ id: w.id, en: w.en, cs: w.cs });
    }
    const result = [];
    for (let i = 0; i + size <= picked.length; i += size) result.push({ pairs: picked.slice(i, i + size) });
    return result;
  }

  function completePractice(progress, kind, accuracy, now = new Date()) {
    const previous = progress.practice[kind];
    progress.practice[kind] = {
      best: Math.max(previous ? previous.best : 0, accuracy),
      plays: (previous ? previous.plays : 0) + 1,
      completedAt: now.getTime(),
    };
    updateStreak(progress, now);
    return progress;
  }

  // Výsledek jednoho dialogu: nejlepší přesnost a počet průchodů; hotový je po prvním dokončení.
  function completeDialog(progress, id, accuracy, now = new Date()) {
    const previous = progress.dialogs[id];
    progress.dialogs[id] = {
      best: Math.max(previous ? previous.best : 0, accuracy),
      plays: (previous ? previous.plays : 0) + 1,
      completedAt: now.getTime(),
    };
    return progress;
  }

  // ---------- postup ----------

  function defaultProgress() {
    return {
      version: 1, unlockedTo: 0, xp: 0, streak: { count: 0, lastDay: '' }, lessons: {}, words: {}, practice: {}, dialogs: {}, history: {}, badges: {}, challenges: {},
      daily: { day: '', xp: 0 }, settings: { dailyGoal: DEFAULT_DAILY_GOAL, showPron: true, partnerVoice: 'same', reviewReminder: true, theme: 'system', lastBackup: '', audioAuto: true, audioPick: {}, grammarLevel: 'auto' },
    };
  }

  function dayKey(date) {
    const p = (n) => String(n).padStart(2, '0');
    return `${date.getFullYear()}-${p(date.getMonth() + 1)}-${p(date.getDate())}`;
  }

  function updateStreak(progress, now = new Date()) {
    const today = dayKey(now);
    const last = progress.streak.lastDay;
    if (last === today) return progress;
    const yesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
    progress.streak.count = last === dayKey(yesterday) ? progress.streak.count + 1 : 1;
    progress.streak.lastDay = today;
    return progress;
  }

  // 'none' = ještě žádná série, 'alive' = dnes nebo včera jsi cvičil, 'lost' = série se přerušila.
  function streakStatus(progress, now = new Date()) {
    if (!progress.streak.count) return 'none';
    const yesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
    return [dayKey(now), dayKey(yesterday)].includes(progress.streak.lastDay) ? 'alive' : 'lost';
  }

  // ---------- sova: krátké hlášky (bez rodu, ať sedí každému) ----------

  const OWL_MESSAGES = {
    great: ['Výborně! To byla skvělá práce.', 'Skvělý výsledek, tohle ti jde!', 'Bravo! Takhle se němčina učí.', 'Hotovo a téměř bez chyby, paráda!'],
    good: ['Dobrá práce! Zbývá doladit pár slovíček.', 'Pěkný výsledek, jen tak dál.', 'Docela se to daří, další kolo bude ještě lepší.'],
    keep: ['Nevadí, chyby patří k učení. Zkus to znovu.', 'Procvičování dělá mistra, zkus to ještě jednou.', 'Žádný stres, slova se ti vrátí a příště půjdou líp.'],
    streakLost: ['Dlouho jsme se neviděli. Začneme novou sérii?', 'Série se přerušila, ale začít znovu jde hned.', 'Vítej zpátky! Dnešní cvičení nastartuje novou sérii.'],
    goalDone: ['Dnešní cíl je splněný, to je radost!', 'Cíl na dnešek splněn. Klidně si ještě něco zopakuj.'],
    welcome: ['Ahoj! Co si dnes procvičíme?', 'Dobrý den! Malé cvičení každý den dělá divy.', 'Jsem tu, kdybys potřeboval radu. Můžeme začít.'],
    badge: ['Nový odznak! Tohle sis opravdu zasloužil.', 'Gratuluji, další odznak do sbírky!', 'Skvělé! Sbírka odznaků se rozrůstá.'],
    newUser: ['Ahoj, jsem sova a budu tě učením provázet. Začni první lekcí!'],
  };

  // Vybere hlášku pro danou situaci. kind: lessonDone | practiceDone | streakLost | goalDone | welcome | newUser.
  function owlSay(kind, ctx = {}, rng = Math.random) {
    let pool;
    if (kind === 'lessonDone' || kind === 'practiceDone') {
      pool = ctx.accuracy >= 0.9 ? OWL_MESSAGES.great : ctx.accuracy >= 0.7 ? OWL_MESSAGES.good : OWL_MESSAGES.keep;
    } else {
      pool = OWL_MESSAGES[kind] || OWL_MESSAGES.welcome;
    }
    return pool[Math.floor(rng() * pool.length)];
  }

  // Leitnerovy krabičky: správně = o krabičku výš, špatně = zpět do první.
  function recordAnswer(progress, wordId, correct, now = new Date()) {
    const w = progress.words[wordId] || { box: 1, correct: 0, wrong: 0, last: 0 };
    if (correct) {
      w.correct += 1;
      w.box = Math.min(w.box + 1, MAX_BOX);
    } else {
      w.wrong += 1;
      w.box = 1;
    }
    w.last = now.getTime();
    progress.words[wordId] = w;
    return progress;
  }

  // Body se počítají celkem i za dnešní den (denní cíl); o půlnoci se denní počítadlo samo vynuluje.
  function addXp(progress, amount, now = new Date()) {
    progress.xp += amount;
    const today = dayKey(now);
    if (progress.daily.day !== today) progress.daily = { day: today, xp: 0 };
    progress.daily.xp += amount;
    progress.history[today] = (progress.history[today] || 0) + amount;
    const days = Object.keys(progress.history).sort();
    days.slice(0, Math.max(0, days.length - HISTORY_DAYS)).forEach((d) => { delete progress.history[d]; });
    return progress;
  }

  // Body za posledních n dní (včetně dneška), od nejstaršího po dnešek.
  function lastDays(progress, n = 7, now = new Date()) {
    const result = [];
    for (let i = n - 1; i >= 0; i--) {
      const date = new Date(now.getFullYear(), now.getMonth(), now.getDate() - i);
      result.push({ day: dayKey(date), weekday: date.getDay(), xp: progress.history[dayKey(date)] || 0 });
    }
    return result;
  }

  function dailyStatus(progress, now = new Date()) {
    const xp = progress.daily.day === dayKey(now) ? progress.daily.xp : 0;
    const goal = progress.settings.dailyGoal;
    return { xp, goal, done: xp >= goal, ratio: Math.min(1, xp / goal) };
  }

  function setShowPron(progress, value) {
    progress.settings.showPron = Boolean(value);
    return progress;
  }

  const THEMES = ['system', 'light', 'dark'];

  // Vzhled: podle systému, světlý nebo tmavý.
  function setTheme(progress, value) {
    progress.settings.theme = THEMES.includes(value) ? value : 'system';
    return progress;
  }

  // Výrazná připomínka opakování nahoře na úvodní obrazovce (výchozí zapnuto).
  function setReviewReminder(progress, value) {
    progress.settings.reviewReminder = Boolean(value);
    return progress;
  }

  // Hlas protějšku v dialozích: 'male' (bm_george) nebo 'female' (stejný hlas jako u vás).
  function setPartnerVoice(progress, value) {
    progress.settings.partnerVoice = value === 'second' ? 'second' : 'same'; // druhý hlas (Ramona) = soubory s příponou -m
    return progress;
  }

  // ---------- gramatika podle úrovně ----------

  const GRAMMAR_LEVELS = ['A1', 'A2', 'B1', 'B2'];
  const GRAMMAR_LEVEL_CHOICES = ['auto', ...GRAMMAR_LEVELS]; // auto = úroveň aktuální lekce
  const GRAMMAR_MIN_ITEMS = 4; // méně vět než tolik = karta se neotevře

  function setGrammarLevel(progress, value) {
    progress.settings.grammarLevel = GRAMMAR_LEVEL_CHOICES.includes(value) ? value : 'auto';
    return progress;
  }

  // Nejvyšší úroveň vět: ruční volba, jinak úroveň aktuální lekce (currentLevelId), jinak A1.
  function grammarMaxLevel(progress, currentLevelId) {
    const choice = progress.settings.grammarLevel;
    if (GRAMMAR_LEVELS.includes(choice)) return choice;
    return GRAMMAR_LEVELS.includes(currentLevelId) ? currentLevelId : 'A1';
  }

  // Věty do dané úrovně včetně (neznámá úroveň věty se bere jako nejvyšší, tedy se nenabídne nižším).
  function filterGrammarByLevel(items, maxLevel) {
    const max = GRAMMAR_LEVELS.indexOf(maxLevel);
    return items.filter((item) => {
      const i = GRAMMAR_LEVELS.indexOf(item.level);
      return (i === -1 ? GRAMMAR_LEVELS.length - 1 : i) <= max;
    });
  }

  // Nejnižší úroveň, od které má karta aspoň GRAMMAR_MIN_ITEMS vět (null, když ani se všemi ne).
  function grammarStartLevel(items) {
    return GRAMMAR_LEVELS.find((level) => filterGrammarByLevel(items, level).length >= GRAMMAR_MIN_ITEMS) || null;
  }

  function setDailyGoal(progress, goal) {
    if (DAILY_GOALS.includes(goal)) progress.settings.dailyGoal = goal;
    return progress;
  }

  function completeLesson(progress, lessonId, accuracy, now = new Date()) {
    const previous = progress.lessons[lessonId];
    const firstTime = !previous || !previous.done;
    progress.lessons[lessonId] = {
      done: true,
      best: Math.max(previous ? previous.best : 0, accuracy),
      completedAt: now.getTime(),
    };
    addXp(progress, firstTime ? XP_LESSON_BONUS : 0, now);
    updateStreak(progress, now);
    return progress;
  }

  // ---------- opakování a statistiky ----------

  function isDue(stat, now = new Date()) {
    return stat.last + REVIEW_INTERVAL_DAYS[stat.box] * DAY_MS <= now.getTime();
  }

  // Slova k opakování (jen ta, která už uživatel viděl), nejdéle zpožděná první.
  function dueWords(progress, allWords, now = new Date()) {
    return allWords
      .filter((w) => progress.words[w.id] && isDue(progress.words[w.id], now))
      .map((w) => ({ word: w, overdue: now.getTime() - progress.words[w.id].last - REVIEW_INTERVAL_DAYS[progress.words[w.id].box] * DAY_MS }))
      .sort((a, b) => b.overdue - a.overdue)
      .map((x) => x.word);
  }

  // Opakování: pro každé slovo jedno cvičení, typy se střídají, špatné možnosti z celé slovní zásoby.
  function buildReview(due, allWords, rng = Math.random, size = REVIEW_SIZE) {
    return shuffle(due.slice(0, size), rng).map((w, i) => makeExercise(TYPES[i % TYPES.length], w, allWords, rng));
  }

  function stats(progress, allWords) {
    const seen = allWords.filter((w) => progress.words[w.id]);
    const known = seen.filter((w) => progress.words[w.id].box >= 3).length;
    let correct = 0;
    let wrong = 0;
    seen.forEach((w) => {
      correct += progress.words[w.id].correct;
      wrong += progress.words[w.id].wrong;
    });
    const weak = seen
      .filter((w) => progress.words[w.id].wrong > 0)
      .map((w) => ({ word: w, ...progress.words[w.id] }))
      .sort((a, b) => b.wrong / (b.correct + b.wrong) - a.wrong / (a.correct + a.wrong) || b.wrong - a.wrong)
      .slice(0, 5);
    return {
      total: allWords.length,
      seen: seen.length,
      known,
      learning: seen.length - known,
      accuracy: correct + wrong ? correct / (correct + wrong) : null,
      weak,
    };
  }

  // Smaže veškerý postup (body, sérii, lekce, statistiky); zachová jen nastavený denní cíl.
  function resetProgress(progress) {
    const fresh = defaultProgress();
    fresh.settings.dailyGoal = progress.settings.dailyGoal;
    return fresh;
  }

  function isLessonUnlocked(progress, lessons, index) {
    if (index === 0) return true;
    // Lekce do indexu unlockedTo odemkl uživatel po testu úrovně
    if (index <= (progress.unlockedTo || 0)) return true;
    const previous = progress.lessons[lessons[index - 1].id];
    return Boolean(previous && previous.done);
  }

  // Odemkne lekce do indexu včetně; hodnota jen roste, neplatný index se ignoruje.
  function unlockTo(progress, index) {
    if (typeof index !== 'number' || !isFinite(index) || index < 0) return progress;
    progress.unlockedTo = Math.max(progress.unlockedTo || 0, Math.floor(index));
    return progress;
  }

  function knownWords(progress) {
    return Object.values(progress.words).filter((w) => w.box >= 3).length;
  }

  // ---------- ukládání a záloha ----------

  const num = (v, min, max) => (typeof v === 'number' && isFinite(v) ? Math.min(max, Math.max(min, v)) : null);
  const isDay = (v) => typeof v === 'string' && (v === '' || /^\d{4}-\d{2}-\d{2}$/.test(v));
  const isBadgeId = (v) => typeof v === 'string' && /^[a-z0-9-]{1,32}$/.test(v);
  const isId = (v) => typeof v === 'string' && /^[a-z0-9-]{1,64}$/.test(v);

  // Přijme libovolný objekt (např. načtený ze souboru) a vrátí čistý postup, nebo null, když je neplatný.
  function sanitizeProgress(raw) {
    if (!raw || typeof raw !== 'object' || raw.version !== 1) return null;
    const xp = num(raw.xp, 0, 1e9);
    const streak = raw.streak && typeof raw.streak === 'object' ? raw.streak : null;
    const count = streak ? num(streak.count, 0, 1e5) : null;
    if (xp === null || count === null || !isDay(streak.lastDay)) return null;
    const clean = defaultProgress();
    clean.xp = Math.floor(xp);
    clean.unlockedTo = Math.floor(num(raw.unlockedTo, 0, 1000) ?? 0);
    clean.streak = { count: Math.floor(count), lastDay: streak.lastDay };
    for (const [id, l] of Object.entries(raw.lessons && typeof raw.lessons === 'object' ? raw.lessons : {})) {
      if (!isId(id) || !l || typeof l !== 'object') continue;
      clean.lessons[id] = {
        done: l.done === true,
        best: num(l.best, 0, 1) ?? 0,
        completedAt: num(l.completedAt, 0, 1e15) ?? 0,
      };
    }
    const history = raw.history && typeof raw.history === 'object' ? raw.history : {};
    Object.keys(history).filter((d) => d !== '' && isDay(d)).sort().slice(-HISTORY_DAYS).forEach((d) => {
      const xpDay = num(history[d], 0, 1e7);
      if (xpDay !== null) clean.history[d] = Math.floor(xpDay);
    });
    for (const [id, d] of Object.entries(raw.dialogs && typeof raw.dialogs === 'object' ? raw.dialogs : {})) {
      if (!isId(id) || !d || typeof d !== 'object') continue;
      clean.dialogs[id] = {
        best: num(d.best, 0, 1) ?? 0,
        plays: Math.floor(num(d.plays, 0, 1e6) ?? 0),
        completedAt: num(d.completedAt, 0, 1e15) ?? 0,
      };
    }
    for (const [id, w] of Object.entries(raw.words && typeof raw.words === 'object' ? raw.words : {})) {
      if (!isId(id) || !w || typeof w !== 'object') continue;
      clean.words[id] = {
        box: Math.floor(num(w.box, 1, MAX_BOX) ?? 1),
        correct: Math.floor(num(w.correct, 0, 1e6) ?? 0),
        wrong: Math.floor(num(w.wrong, 0, 1e6) ?? 0),
        last: num(w.last, 0, 1e15) ?? 0,
      };
    }
    const daily = raw.daily && typeof raw.daily === 'object' ? raw.daily : null;
    if (daily && isDay(daily.day)) clean.daily = { day: daily.day, xp: Math.floor(num(daily.xp, 0, 1e6) ?? 0) };
    const goal = raw.settings && typeof raw.settings === 'object' ? raw.settings.dailyGoal : null;
    if (DAILY_GOALS.includes(goal)) clean.settings.dailyGoal = goal;
    if (raw.settings && typeof raw.settings.showPron === 'boolean') clean.settings.showPron = raw.settings.showPron;
    if (raw.settings && typeof raw.settings.reviewReminder === 'boolean') clean.settings.reviewReminder = raw.settings.reviewReminder;
    if (raw.settings && THEMES.includes(raw.settings.theme)) clean.settings.theme = raw.settings.theme;
    if (raw.settings && isDay(raw.settings.lastBackup)) clean.settings.lastBackup = raw.settings.lastBackup;
    if (raw.settings && typeof raw.settings.audioAuto === 'boolean') clean.settings.audioAuto = raw.settings.audioAuto;
    if (raw.settings && GRAMMAR_LEVEL_CHOICES.includes(raw.settings.grammarLevel)) clean.settings.grammarLevel = raw.settings.grammarLevel;
    const pick = raw.settings && raw.settings.audioPick && typeof raw.settings.audioPick === 'object' ? raw.settings.audioPick : {};
    for (const id of AUDIO_LEVEL_IDS) if (typeof pick[id] === 'boolean') clean.settings.audioPick[id] = pick[id];
    if (raw.settings && ['second', 'same'].includes(raw.settings.partnerVoice)) clean.settings.partnerVoice = raw.settings.partnerVoice;
    for (const kind of PRACTICE_KINDS) {
      const pr = raw.practice && typeof raw.practice === 'object' ? raw.practice[kind] : null;
      if (!pr || typeof pr !== 'object') continue;
      clean.practice[kind] = {
        best: num(pr.best, 0, 1) ?? 0,
        plays: Math.floor(num(pr.plays, 0, 1e6) ?? 0),
        completedAt: num(pr.completedAt, 0, 1e15) ?? 0,
      };
    }
    // Odznaky: jen platná id a čas zisku v rozumném rozsahu (mimo rozsah = záznam se zahodí), nejvýš MAX_BADGES záznamů.
    const badges = raw.badges && typeof raw.badges === 'object' && !Array.isArray(raw.badges) ? raw.badges : {};
    for (const [id, time] of Object.entries(badges)) {
      if (Object.keys(clean.badges).length >= MAX_BADGES) break;
      if (!isBadgeId(id) || typeof time !== 'number' || !isFinite(time) || time < 0 || time > 1e15) continue;
      clean.badges[id] = Math.round(time) || 0; // -0 se uloží jako 0
    }
    // Týdenní výzvy: jen klíče ve tvaru YYYY-Www a čas splnění v rozumném rozsahu; nejvýš MAX_CHALLENGES nejnovějších týdnů.
    const challenges = raw.challenges && typeof raw.challenges === 'object' && !Array.isArray(raw.challenges) ? raw.challenges : {};
    const validWeeks = Object.keys(challenges).filter((key) => {
      const time = challenges[key];
      return /^\d{4}-W(0[1-9]|[1-4]\d|5[0-3])$/.test(key) && typeof time === 'number' && isFinite(time) && time >= 0 && time <= 1e15;
    });
    validWeeks.sort().reverse(); // lexikograficky sestupně = od nejnovějšího týdne
    for (const key of validWeeks.slice(0, MAX_CHALLENGES)) clean.challenges[key] = Math.round(challenges[key]) || 0;
    return clean;
  }

  // ---------- záloha: připomínka a ukazatel místa ----------

  const BACKUP_REMINDER_DAYS = 14;

  // ---------- offline zvuk po úrovních ----------

  const AUDIO_LEVEL_IDS = ['A1', 'A2', 'B1', 'B2'];

  function setAudioAuto(progress, value) {
    progress.settings.audioAuto = Boolean(value);
    return progress;
  }

  // true = mít offline, false = nemít (smazáno), null = řídit se automatikou.
  function setAudioPick(progress, levelId, value) {
    if (!AUDIO_LEVEL_IDS.includes(levelId)) return progress;
    if (value === null) delete progress.settings.audioPick[levelId];
    else progress.settings.audioPick[levelId] = Boolean(value);
    return progress;
  }

  // Úrovně, jejichž slovíčka mají být offline. Automatika: úroveň aktuální lekce, všechny předchozí a jedna další
  // (index -1 = všechno hotovo). Ruční volba úrovně vždy vyhrává; vypnutá automatika bere jen ručně zapnuté.
  function selectedAudioLevels(progress, levels, currentIndex) {
    const lastEnd = levels.length ? levels[levels.length - 1].end : 0;
    const index = currentIndex < 0 ? lastEnd - 1 : currentIndex;
    const currentPos = Math.max(0, levels.findIndex((l) => index >= l.start && index < l.end));
    const pick = progress.settings.audioPick || {};
    return levels.filter((l, pos) => {
      if (typeof pick[l.id] === 'boolean') return pick[l.id];
      return progress.settings.audioAuto !== false && pos <= currentPos + 1;
    }).map((l) => l.id);
  }

  // Zapíše den poslední stažené zálohy (volá se těsně před exportem, takže je i v souboru).
  function markBackup(progress, now = new Date()) {
    progress.settings.lastBackup = dayKey(now);
    return progress;
  }

  // needed = je čas na zálohu; days = stáří poslední zálohy (null = žádná). Nový uživatel bez bodů nemá co ztratit.
  function backupStatus(progress, now = new Date()) {
    const last = progress.settings.lastBackup;
    if (!last || !isDay(last)) return { needed: progress.xp > 0, days: null };
    const [y, m, d] = last.split('-').map(Number);
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const days = Math.max(0, Math.round((today - new Date(y, m - 1, d)) / 86400000));
    return { needed: days >= BACKUP_REMINDER_DAYS, days };
  }

  function formatBytes(bytes) {
    const gb = bytes / (1024 * 1024 * 1024);
    if (gb >= 1) return gb.toFixed(1).replace('.', ',') + ' GB';
    return Math.round(bytes / (1024 * 1024)) + ' MB';
  }

  // Věta pro Nastavení z navigator.storage.estimate() a persisted(); chybějící údaje (starší prohlížeč) = hláška.
  function storageSummary(estimate, persisted) {
    if (!estimate || typeof estimate.usage !== 'number') return 'Místo v zařízení: údaj není k dispozici.';
    const of = estimate.quota > 0 ? ` z ${formatBytes(estimate.quota)}` : '';
    return `Místo v zařízení: použito ${formatBytes(estimate.usage)}${of}, trvalé úložiště: ${persisted ? 'ano' : 'ne'}.`;
  }

  const MAX_BACKUP_BYTES = 5 * 1024 * 1024; // větší soubor se jako záloha nepřijme (ochrana před zamrznutím stránky)

  function exportProgress(progress) {
    return JSON.stringify({ app: 'nemcina', exportedAt: new Date().toISOString(), progress }, null, 2);
  }

  function importProgress(text) {
    try {
      const data = JSON.parse(text);
      return data && data.app === 'nemcina' ? sanitizeProgress(data.progress) : null;
    } catch (e) {
      return null;
    }
  }

  function loadProgress(storage) {
    try {
      const raw = storage.getItem(STORAGE_KEY);
      if (raw) return sanitizeProgress(JSON.parse(raw)) || defaultProgress();
    } catch (e) { /* poškozená nebo nedostupná data – začneme znovu */ }
    return defaultProgress();
  }

  function saveProgress(storage, progress) {
    try {
      storage.setItem(STORAGE_KEY, JSON.stringify(progress));
      return true;
    } catch (e) {
      return false;
    }
  }

  const Engine = {
    STORAGE_KEY, XP_PER_CORRECT, XP_LESSON_BONUS, DAILY_GOALS, dailyStatus, setDailyGoal, setShowPron, resetProgress,
    shuffle, normalize, levenshtein, checkTyped, checkDictation, checkWordAnswer, answerHints,
    pickDistractors, buildLesson, requeue,
    defaultProgress, dayKey, updateStreak, recordAnswer, addXp, completeLesson,
    PRACTICE_KINDS, GRAMMAR_KINDS, XP_PER_CLEAN_PAIR, buildPractice, dialogOptions, completePractice, completeDialog, lastDays, setPartnerVoice, setReviewReminder, GRAMMAR_LEVELS, GRAMMAR_LEVEL_CHOICES, GRAMMAR_MIN_ITEMS, setGrammarLevel, grammarMaxLevel, filterGrammarByLevel, grammarStartLevel, setTheme, THEMES, streakStatus, owlSay,
    tokenize, buildSentences, checkSentence, buildMatching,
    isLessonUnlocked, unlockTo, knownWords, isDue, dueWords, buildReview, stats,
    MAX_BACKUP_BYTES, BACKUP_REMINDER_DAYS, AUDIO_LEVEL_IDS, setAudioAuto, setAudioPick, selectedAudioLevels, markBackup, backupStatus, formatBytes, storageSummary,
    sanitizeProgress, exportProgress, importProgress, loadProgress, saveProgress,
  };

  if (typeof module !== 'undefined' && module.exports) module.exports = Engine;
  else root.Engine = Engine;
})(typeof window !== 'undefined' ? window : globalThis);
