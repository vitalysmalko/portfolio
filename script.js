// ═══════════════════════════════════════════════════════════════
//  ГЛАВНЫЙ ЭКРАН — СЛАЙДЫ
//
//  1. Закинь фото в папку  slides/
//  2. В терминале: node slides.js
//  3. Обнови страницу — всё готово
// ═══════════════════════════════════════════════════════════════
const HOME_SLIDES = [];

// ═══════════════════════════════════════════════════════════════
//  PROJECTS
//  category: 'film' | 'commercial' | 'music-video' | 'brand-content' | 'reels'
//  stills:   массив путей к фото (первое = обложка карточки)
//  link:     URL видео (или '' если нет)
// ═══════════════════════════════════════════════════════════════
const PROJECTS = [

  // ── FILM ────────────────────────────────────────────────────
  {
    id: 'ritual-prologue',
    category: 'film',
    title: 'RITUAL. PROLOGUE',
    titleRu: 'РИТУАЛ. ПРОЛОГ',
    subtitle: 'Short Film · Dir. Vladimir Repin',
    desc: 'This film is part of a large story. It\'s a gothic epic, dedicated to the release of White Punk album «Vampire: Chapter Two»',
    descRu: 'Этот фильм — часть большой истории. Готический эпик, посвящённый выходу альбома White Punk «Vampire: Chapter Two»',
    stills: [
      // 'stills/ritual-1.jpg',
      // 'stills/ritual-2.jpg',
      // 'stills/ritual-3.jpg',
    ],
    meta: [
      { label: 'YEAR',      value: '2025' },
      { label: 'DIRECTOR',  value: 'VLADIMIR REPIN' },
    ],
    link: 'https://www.youtube.com/watch?v=na8apsjd-bs',
    linkLabel: 'WATCH',
  },

  {
    id: 'knizhnie romantiki',
    category: 'film',
    title: 'KNIZHNIE ROMANTIKI',
    titleRu: 'КНИЖНЫЕ РОМАНТИКИ',
    subtitle: 'Short Film · Dir. Nikolay Chernobayev',
    desc: 'A romantic story from Saint Petersburg. Best Cinematography at the Most. Goryzonty film festival.',
    descRu: 'Романтическая история из Санкт-Петербурга. Лучшая операторская работа фестиваля Most. Goryzonty.',
    stills: [],
    meta: [
      { label: 'YEAR',      value: '2025' },
      { label: 'LOCATION',  value: 'SAINT PETERSBURG' },
      { label: 'AWARD',     value: 'BEST CINEMATOGRAPHY — MOST. GORYZONTY' },
      { label: 'FESTIVALS', value: 'MOST. GORYZONTY · SVYATAYA ANNA · TAVRIDA ART' },
    ],
    link: '',
    linkLabel: 'TRAILER',
  },

  {
    id: 'menuet',
    category: 'film',
    title: 'MENUET',
    titleRu: 'МЕНУЭТ',
    subtitle: 'Short Film · Dir. Diana Dargaeva',
    desc: '',
    stills: [],
    meta: [
      { label: 'YEAR',      value: '2024' },
      { label: 'DIRECTOR',  value: 'DIANA DARGAEVA' },
    ],
    link: '',
    linkLabel: 'WATCH',
  },

  {
    id: 'nichya',
    category: 'film',
    title: 'NICHYA',
    titleRu: 'НИЧЬЯ',
    subtitle: 'Short Film · Dir. Diana Dargaeva',
    desc: 'A slice-of-life drama about a girl nobody cares about.',
    descRu: 'Бытовая драма о девочке, о которой никто не заботится.',
    stills: [],
    meta: [
      { label: 'YEAR',      value: '2026' },
      { label: 'DIRECTOR',  value: 'DIANA DARGAEVA' },
      { label: 'STARRING',  value: 'VARVARA VOLODINA, ALISA LOZOVSKAYA' },
    ],
    link: '',
    linkLabel: 'WATCH',
  },

  {
    id: 'ya bolshe tak ne budu',
    category: 'film',
    title: 'YA BOLSHE TAK NE BUDU',
    titleRu: 'Я БОЛЬШЕ ТАК НЕ БУДУ',
    subtitle: 'Short Film · Dir. Sergey Voitkevich',
    desc: '',
    stills: [],
    meta: [
      { label: 'YEAR',      value: '2024' },
      { label: 'DIRECTOR',  value: 'SERGEY VOITKEVICH' },
    ],
    link: 'https://www.youtube.com/watch?v=hK6tEW8TmPM',
    linkLabel: 'WATCH',
  },

  {
    id: 'ishodniy kod',
    category: 'film',
    title: 'ISHODNIY KOD',
    titleRu: 'ИСХОДНЫЙ КОД',
    subtitle: 'Documentary · Dir. Grigory Sazanov',
    desc: '',
    stills: [],
    meta: [
      { label: 'YEAR',      value: '2023' },
      { label: 'DIRECTOR',  value: 'GRIGORY SAZANOV' },
      { label: 'TYPE',      value: 'DOCUMENTARY' },
    ],
    link: 'https://www.youtube.com/watch?v=olBd8n_sVV0',
    linkLabel: 'WATCH',
  },

  {
    id: 'chto-to ochen bezumnoe',
    category: 'film',
    title: 'CHTO-TO OCHEN BEZUMNOE',
    titleRu: 'ЧТО-ТО ОЧЕНЬ БЕЗУМНОЕ',
    subtitle: 'Short Film · Dir. Marina Aznaurova',
    desc: '',
    stills: [],
    meta: [
      { label: 'YEAR',      value: '2024' },
      { label: 'DIRECTOR',  value: 'MARINA AZNAUROVA' },
    ],
    link: 'https://www.kinopoisk.ru/film/6272659/',
    linkLabel: 'KINOPOISK',
  },

  // ── COMMERCIAL ──────────────────────────────────────────────
  {
    id: 'mediabasket',
    category: 'commercial',
    title: 'MEDIABASKET',
    subtitle: 'Commercial',
    desc: '',
    stills: [],
    meta: [
      { label: 'TYPE', value: 'PROMO' },
      { label: 'YEAR', value: '2026' },
    ],
    link: '',
    linkLabel: 'WATCH',
  },

  {
    id: 'pogoda na tnt',
    category: 'commercial',
    title: 'POGODA NA TNT',
    titleRu: 'ПОГОДА НА ТНТ',
    subtitle: 'Commercial',
    desc: 'Weather TV Show Every day On TNT.',
    descRu: 'Ежедневное шоу о погоде на ТНТ.',
    stills: [],
    meta: [
      { label: 'TYPE',    value: 'TV SHOW' },
      { label: 'CHANNEL', value: 'TNT' },
    ],
    link: '',
    linkLabel: 'WATCH',
  },

  {
    id: 'trymerry',
    category: 'commercial',
    title: 'TRYMERRY',
    subtitle: 'Fashion Brand Commercial',
    desc: '',
    stills: [],
    meta: [
      { label: 'TYPE', value: 'FASHION' },
    ],
    link: 'https://vimeo.com/1177896691',
    linkLabel: 'WATCH',
  },

  {
    id: 'afisha daily',
    category: 'commercial',
    title: 'AFISHA DAILY',
    subtitle: 'Commercial',
    desc: '',
    stills: [],
    meta: [
    ],
    link: 'https://vimeo.com/1018169653',
    linkLabel: 'WATCH',
  },

  {
    id: 'letoile',
    category: 'commercial',
    title: "L'ETOILE",
    subtitle: 'Commercial',
    desc: '',
    stills: [],
    meta: [
    ],
    link: 'https://vimeo.com/1018168741',
    linkLabel: 'WATCH',
  },

  {
    id: 'siberia',
    category: 'commercial',
    title: 'SIBERIA',
    subtitle: 'Commercial',
    desc: 'One-shot advertisement for an elite spa complex.',
    descRu: 'Однокадровая реклама элитного спа-комплекса.',
    stills: [],
    meta: [
    ],
    link: 'https://vimeo.com/756839581',
    linkLabel: 'WATCH',
  },


  // ── MUSIC VIDEO ─────────────────────────────────────────────
  {
    id: 'slaughter to prevail',
    category: 'music-video',
    title: 'KOSCHEI',
    titleRu: 'КОЩЕЙ',
    subtitle: 'Slaughter To Prevail · Dir. Vladimir Repin',
    desc: 'My second major work with the AVE Warriors team.',
    descRu: 'Моя вторая большая работа с командой AVE Warriors.',
    stills: [],
    meta: [
      { label: 'YEAR',      value: '2026' },
      { label: 'DIRECTOR',  value: 'VLADIMIR REPIN' },
    ],
    link: 'https://www.youtube.com/watch?v=lYrqo5rKbpQ',
    linkLabel: 'WATCH',
  },

  {
    id: 'ditophone - tezhe',
    category: 'music-video',
    title: 'TEZHE',
    titleRu: 'ТЭ ЖЭ',
    subtitle: 'Ditophone',
    desc: '',
    stills: [],
    meta: [
      { label: 'ARTIST', value: 'DITOPHONE' },
    ],
    link: 'https://vimeo.com/1018169382',
    linkLabel: 'WATCH',
  },

  {
    id: 'terelya - otpusti',
    category: 'music-video',
    title: 'OTPUSTI',
    titleRu: 'ОТПУСТИ',
    subtitle: 'Terelya · Dir. Grigory Sazanov',
    desc: '',
    stills: [],
    meta: [
      { label: 'YEAR',      value: '2023' },
      { label: 'DIRECTOR',  value: 'GRIGORY SAZANOV' },
    ],
    link: 'https://vimeo.com/1077239818',
    linkLabel: 'WATCH',
  },

  {
    id: 'vodopady - eto bil son',
    category: 'music-video',
    title: 'ETO BYL SON',
    titleRu: 'ЭТО БЫЛ СОН',
    subtitle: 'VDPDY · Dir. Ilya Polyakov',
    desc: 'Summer, love, handheld camera.',
    descRu: 'Лето, любовь, ручная камера.',
    stills: [],
    meta: [
      { label: 'YEAR',      value: '2024' },
      { label: 'DIRECTOR',  value: 'ILYA POLYAKOV' },
    ],
    link: 'https://www.youtube.com/watch?v=kyP0RE6aHLM',
    linkLabel: 'WATCH',
  },

  {
    id: 'ohota',
    category: 'music-video',
    title: 'THE FEARFUL WORLD WE CREATED',
    subtitle: 'Music Video',
    desc: 'Shot on iPhone 13',
    descRu: 'Снято на iPhone 13',
    stills: [],
    meta: [
      { label: 'YEAR', value: '2025' },
    ],
    link: 'https://vimeo.com/1179555315',
    linkLabel: 'WATCH',
  },

  {
    id: 'yuzhniy sever - zemlya',
    category: 'music-video',
    title: 'ZEMLYA',
    titleRu: 'ЗЕМЛЯ',
    subtitle: 'Yuzhniy Sever',
    desc: '',
    meta: [
      { label: 'YEAR', value: '2025' },
    ],
    link: 'https://vimeo.com/1177891326',
    linkLabel: 'WATCH',
  },

  {
    id: 'voda',
    category: 'music-video',
    title: 'VODA',
    titleRu: 'ВОДА',
    subtitle: 'Yuzhniy Sever',
    desc: '',
    meta: [
      { label: 'YEAR', value: '2024' },
    ],
    link: 'https://youtu.be/mQoY9tkmqoM?si=npqUw1MVBgja06B2',
    linkLabel: 'WATCH',
  },

  {
    id: 'vmesto',
    category: 'music-video',
    title: 'VMESTO',
    titleRu: 'ВМЕСТО',
    subtitle: 'OG Prince',
    desc: '',
    meta: [
      { label: 'YEAR', value: '2024' },
    ],
    link: 'https://youtu.be/f6myek4a61Y?si=zuiQ3zIv-fmKKVxK',
    linkLabel: 'WATCH',
  },

  // ── BRAND CONTENT ───────────────────────────────────────────
  // {
  //   id: 'brand-id',
  //   category: 'brand-content',
  //   title: 'BRAND NAME',
  //   subtitle: 'Brand Film',
  //   desc: '',
  //   stills: [],
  //   meta: [],
  //   link: '',
  //   linkLabel: 'WATCH',
  // },

  // ── REELS ───────────────────────────────────────────────────
  // {
  //   id: 'reel-id',
  //   category: 'reels',
  //   title: 'TITLE',
  //   subtitle: '',
  //   desc: '',
  //   stills: [],
  //   meta: [],
  //   link: '',
  //   linkLabel: 'WATCH',
  // },
];


// ═══════════════════════════════════════════════════════════════
//  I18N — EN / RU переключатель
// ═══════════════════════════════════════════════════════════════
const I18N = {
  en: {
    'brand.name':        'Vitaly Smalko',
    'title.tag':         'Vitaly Smalko — Director of Photography',
    'nav.film':          'FILM',
    'nav.commercial':    'COMMERCIAL',
    'nav.music-video':   'MUSIC VIDEO',
    'nav.about':         'ABOUT',
    'nav.contact':       'CONTACT',
    'role':              'DIRECTOR OF PHOTOGRAPHY',
    'about.bio':         'Born on April 4, 1997, in Moscow, Vitaly Smalko is a Director of Photography working across Music Videos and Feature Films. A graduate of the Moscow Film School, he brings extensive experience on large-scale productions and shoots on any camera system on the planet, with a particular love for one-shot productions. His short films have screened at festivals, winning an award for Best Cinematography.',
    'contact.note':      'MOSCOW — AVAILABLE FOR TRAVEL',
    'footer.mail':       'MAIL',
    'empty':             'COMING SOON',
    'watch.vimeo':       'WATCH ON VIMEO',
    'watch.youtube':     'WATCH ON YOUTUBE',
    'open.link':         'OPEN LINK',
    'back':              'BACK',
    'sub.video':         'VIDEO',
    'sub.screenshots':   'SCREENSHOTS',
    'sub.credits':       'CREDITS',
  },
  ru: {
    'brand.name':        'Виталий Смалько',
    'title.tag':         'Виталий Смалько — Оператор-постановщик',
    'nav.film':          'ФИЛЬМЫ',
    'nav.commercial':    'РЕКЛАМА',
    'nav.music-video':   'КЛИПЫ',
    'nav.about':         'ОБО МНЕ',
    'nav.contact':       'КОНТАКТЫ',
    'role':              'ОПЕРАТОР-ПОСТАНОВЩИК',
    'about.bio':         'Виталий Смалько родился 4 апреля 1997 года в Москве. Оператор-постановщик, работает в клипах и полнометражном кино. Окончил Московскую школу кино, обладает большим опытом работы на крупных производственных площадках и снимает на любую камеру на планете — особенно любит однокадровые постановки. Его короткометражные фильмы показывались на фестивалях, а на одном из них он получил приз за лучшую операторскую работу.',
    'contact.note':      'МОСКВА — ГОТОВ К КОМАНДИРОВКАМ',
    'footer.mail':       'ПОЧТА',
    'empty':             'СКОРО',
    'watch.vimeo':       'СМОТРЕТЬ НА VIMEO',
    'watch.youtube':     'СМОТРЕТЬ НА YOUTUBE',
    'open.link':         'ОТКРЫТЬ ССЫЛКУ',
    'back':              'НАЗАД',
    'sub.video':         'ВИДЕО',
    'sub.screenshots':   'КАДРЫ',
    'sub.credits':       'О ПРОЕКТЕ',
  },
};

// Переводы для мета-полей на карточках проектов (ярлык переводится всегда,
// значение — только если это обычное описательное слово, не имя собственное:
// имена режиссёров/артистов, названия фестивалей/каналов остаются как есть)
const META_LABEL_RU = {
  YEAR: 'ГОД', DIRECTOR: 'РЕЖИССЁР', LOCATION: 'ЛОКАЦИЯ', AWARD: 'НАГРАДА',
  FESTIVALS: 'ФЕСТИВАЛИ', TYPE: 'ТИП', CHANNEL: 'КАНАЛ', ARTIST: 'АРТИСТ',
};

const META_VALUE_RU = {
  'SAINT PETERSBURG': 'САНКТ-ПЕТЕРБУРГ',
  'DOCUMENTARY': 'ДОКУМЕНТАЛЬНЫЙ',
  'TV SHOW': 'ТВ-ШОУ',
  'FASHION': 'МОДА',
  'PROMO': 'ПРОМО',
  'BEST CINEMATOGRAPHY — MOST. GORYZONTY': 'ЛУЧШАЯ ОПЕРАТОРСКАЯ РАБОТА — MOST. GORYZONTY',
};

// linkLabel на карточках — WATCH/TRAILER/KINOPOISK и т.п.
const LINK_LABEL_RU = { WATCH: 'СМОТРЕТЬ', TRAILER: 'ТРЕЙЛЕР', KINOPOISK: 'КИНОПОИСК' };

// Подпись под названием проекта: "Short Film · Dir. NAME" и т.п. — переводим
// служебные слова (тип + "Dir.") и имена режиссёров. Названия групп/сценические
// имена НЕ трогаем — это их бренд (Ditophone, OG Prince, Slaughter To Prevail
// и т.п. пишутся одинаково в обеих версиях, подтверждено 26.07).
const TYPE_WORDS_RU = {
  'Fashion Brand Commercial': 'Реклама бренда одежды',
  'Short Film':               'Короткий метр',
  'Documentary':               'Документальный фильм',
  'Commercial':                'Реклама',
  'Music Video':                'Клип',
};

// Имена режиссёров и часть артистов — переводим в кириллицу (написания даны
// Виталиком 26.07). Сценические имена, которые он попросил НЕ трогать
// (OG Prince, Slaughter To Prevail, VDPDY), в словаре намеренно отсутствуют —
// остаются как есть в обеих версиях.
const NAME_RU = {
  'Vladimir Repin':       'Владимир Репин',
  'Nikolay Chernobayev':  'Николай Чернобаев',
  'Diana Dargaeva':       'Диана Даргаева',
  'Sergey Voitkevich':    'Сергей Войткевич',
  'Grigory Sazanov':      'Григорий Сазанов',
  'Marina Aznaurova':     'Марина Азнаурова',
  'Ilya Polyakov':        'Илья Поляков',
  'Ditophone':            'Диктофон',
  'Terelya':              'Тереля',
  'Yuzhniy Sever':        'Южный Север',
};

let currentLang = localStorage.getItem('lang') === 'ru' ? 'ru' : 'en';

function t(key) {
  return (I18N[currentLang] && I18N[currentLang][key]) ?? I18N.en[key] ?? key;
}

function trMetaLabel(label) {
  return currentLang === 'ru' ? (META_LABEL_RU[label] || label) : label;
}

function trMetaValue(value) {
  return currentLang === 'ru' ? (META_VALUE_RU[value] || value) : value;
}

function trLinkLabel(label) {
  return currentLang === 'ru' ? (LINK_LABEL_RU[label] || label) : label;
}

function trSubtitle(subtitle) {
  if (currentLang !== 'ru' || !subtitle) return subtitle;
  let s = subtitle;
  for (const [en, ru] of Object.entries(TYPE_WORDS_RU)) {
    if (s.startsWith(en)) { s = ru + s.slice(en.length); break; }
  }
  s = s.replace(/Dir\./, 'Реж.');
  for (const [en, ru] of Object.entries(NAME_RU)) {
    s = s.split(en).join(ru); // split/join — без экранирования regex-спецсимволов
  }
  return s;
}

function trTitle(p) {
  return currentLang === 'ru' ? (p.titleRu || p.title) : p.title;
}

function trDesc(p) {
  return currentLang === 'ru' ? (p.descRu || p.desc) : p.desc;
}


// ═══════════════════════════════════════════════════════════════
//  SLIDESHOW  (2-div crossfade — загружаем по одному кадру)
// ═══════════════════════════════════════════════════════════════
const slideshowEl = document.getElementById('slideshow');
const titleEl     = document.getElementById('slide-title-el');
const slideTapEl  = document.getElementById('slide-tap');

let slideIdx   = 0;
let slideTimer = null;
const DELAY    = 4500;

// Перемешиваем слайды так, чтобы один проект не шёл дважды подряд
function shuffleNoConsec(list) {
  const groups = {};
  list.forEach(s => {
    if (!groups[s.project]) groups[s.project] = [];
    groups[s.project].push(s);
  });
  Object.values(groups).forEach(arr => arr.sort(() => Math.random() - 0.5));
  const result = [];
  const keys = Object.keys(groups);
  while (result.length < list.length) {
    const last = result.length ? result[result.length - 1].project : null;
    const avail = keys.filter(k => groups[k].length > 0 && k !== last);
    const pool = avail.length ? avail : keys.filter(k => groups[k].length > 0);
    if (!pool.length) break;
    const pick = pool[Math.floor(Math.random() * pool.length)];
    result.push(groups[pick].pop());
  }
  return result;
}

let _slides = shuffleNoConsec(window.SLIDES_MANIFEST || []);

// Только 2 дива вместо N — картинки грузятся по одной
const _divA = document.createElement('div');
const _divB = document.createElement('div');
_divA.className = 'slide';
_divB.className = 'slide';
slideshowEl.appendChild(_divA);
slideshowEl.appendChild(_divB);
let _curDiv = _divA;
let _nxtDiv = _divB;

function _setSlideTitle(projectId) {
  const proj = PROJECTS.find(p => p.id === projectId);
  if (titleEl) {
    titleEl.textContent = proj ? trTitle(proj) : (projectId || '');
    titleEl.dataset.projectId = projectId || '';
    titleEl.href = proj ? `/${proj.category}/${slugify(proj.id)}` : '#';
  }
  if (slideTapEl) slideTapEl.dataset.projectId = projectId || '';
}

function goSlide(n) {
  if (!_slides.length) return;
  // Новый круг — ресаффл
  if (n >= _slides.length) {
    _slides = shuffleNoConsec(window.SLIDES_MANIFEST || []);
    n = 0;
  }
  slideIdx = ((n % _slides.length) + _slides.length) % _slides.length;
  const slide = _slides[slideIdx];

  // Грузим следующий кадр в неактивный div, затем кроссфейд
  _nxtDiv.style.backgroundImage = `url('${slide.src}')`;
  _nxtDiv.classList.add('active');
  _curDiv.classList.remove('active');
  [_curDiv, _nxtDiv] = [_nxtDiv, _curDiv];

  _setSlideTitle(slide.project);

  // Предзагрузка следующего кадра пока показывается текущий
  const nextIdx = (slideIdx + 1) % _slides.length;
  new Image().src = _slides[nextIdx].src;
}

function initSlideshow() {
  if (!_slides.length) return;

  // Первый кадр — сразу без лишних запросов
  _curDiv.style.backgroundImage = `url('${_slides[0].src}')`;
  _curDiv.classList.add('active');
  _setSlideTitle(_slides[0].project);

  // Предзагрузка второго кадра
  if (_slides.length > 1) new Image().src = _slides[1].src;

  startAuto();

  // Свайп на мобиле
  let tx = 0;
  slideshowEl.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive: true });
  slideshowEl.addEventListener('touchend', e => {
    const d = e.changedTouches[0].clientX - tx;
    if (Math.abs(d) > 40) { goSlide(slideIdx + (d < 0 ? 1 : -1)); startAuto(); }
  }, { passive: true });
}

function startAuto() {
  clearInterval(slideTimer);
  slideTimer = setInterval(() => goSlide(slideIdx + 1), DELAY);
}

if (titleEl) {
  titleEl.addEventListener('click', (e) => {
    e.preventDefault();
    const id = titleEl.dataset.projectId;
    if (id) { flashFade(() => openProject(id)); }
  });
}

if (slideTapEl) {
  slideTapEl.addEventListener('click', () => {
    const id = slideTapEl.dataset.projectId;
    if (id) { flashFade(() => openProject(id)); }
  });
}

initSlideshow();


// ═══════════════════════════════════════════════════════════════
//  ROUTING
// ═══════════════════════════════════════════════════════════════
const PM = window.PROJECTS_MANIFEST || {};  // { 'project-id': ['1.jpg', ...] }
const mobPageTitle = document.getElementById('mob-page-title');

const pageEls = {
  film:            document.getElementById('page-film'),
  commercial:      document.getElementById('page-commercial'),
  'music-video':   document.getElementById('page-music-video'),
  'brand-content': document.getElementById('page-brand-content'),
  about:           document.getElementById('page-about'),
  contact:         document.getElementById('page-contact'),
  project:         document.getElementById('page-project'),
};

const builtSet = new Set();
const catNames = { film:'FILM', commercial:'COMMERCIAL', 'music-video':'MUSIC VIDEO', 'brand-content':'BRAND CONTENT' };

let prevCat = null; // запоминаем откуда пришли
let currentPage = 'home'; // для перерисовки текста при смене языка

function slugify(s) {
  return s.toLowerCase()
    .replace(/\s*-\s*/g, '-')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

function navigate(page, fromCat, { push = true } = {}) {
  currentPage = page;
  if (push && page !== 'project') {
    const url = page === 'home' ? '/' : `/${page}`;
    history.pushState({ page, fromCat }, '', url);
  }

  Object.values(pageEls).forEach(p => p && p.classList.remove('active'));

  if (page === 'home') {
    document.body.className = 'is-home';
    if (mobPageTitle) mobPageTitle.textContent = '';
  } else if (page === 'project') {
    document.body.className = 'is-project';
    pageEls.project.classList.add('active');
  } else {
    document.body.className = 'is-page';
    if (mobPageTitle) mobPageTitle.textContent = catNames[page] ? t('nav.' + page) : '';
    const target = pageEls[page];
    if (target) {
      target.classList.add('active');
      if (catNames[page] && !builtSet.has(page)) {
        buildCatPage(page, target);
        builtSet.add(page);
      }
      if (page === 'about' && !builtSet.has('about')) {
        buildAboutPage();
        builtSet.add('about');
      }
    }
  }

  document.querySelectorAll('.p-nav a, .mob-nav a').forEach(a => {
    const cat = fromCat || page;
    a.classList.toggle('active', a.dataset.page === cat);
  });

  window.scrollTo(0, 0);
  closeMobNav();
}


// ═══════════════════════════════════════════════════════════════
//  PROJECT IMAGES — берём из manifest.js
// ═══════════════════════════════════════════════════════════════
function getProjectImages(id) {
  const files = PM[id] || [];
  return files.map(f => `projects/${id}/${f}`);
}

// Обложка — файл с именем OBL (без учёта регистра и расширения)
function getCover(id) {
  const files = PM[id] || [];
  const obl = files.find(f => f.replace(/\.[^.]+$/, '').toUpperCase() === 'OBL');
  const src = obl || files[0];
  return src ? `projects/${id}/${src}` : null;
}

// Галерея — все фото кроме OBL, OBL1, OBL2, ...
function getGalleryImages(id) {
  const files = PM[id] || [];
  return files
    .filter(f => !f.replace(/\.[^.]+$/, '').toUpperCase().startsWith('OBL'))
    .map(f => `projects/${id}/${f}`);
}

// Конвертация YouTube URL → embed URL
function toEmbed(url) {
  if (!url) return null;
  const m = url.match(/(?:v=|youtu\.be\/)([A-Za-z0-9_-]{11})/);
  if (m) return `https://www.youtube.com/embed/${m[1]}`;
  const v = url.match(/vimeo\.com\/(\d+)/);
  if (v) return `https://player.vimeo.com/video/${v[1]}`;
  return null;
}


// ═══════════════════════════════════════════════════════════════
//  BUILD CATEGORY PAGE
// ═══════════════════════════════════════════════════════════════
function buildCatPage(cat, container) {
  const items   = PROJECTS.filter(p => p.category === cat);
  const isReels = cat === 'reels';

  if (items.length === 0) {
    container.innerHTML = `<div class="empty">${t('empty')}</div>`;
    return;
  }

  const gridClass = isReels ? 'rgrid' : 'pgrid';
  const cardClass = isReels ? 'rcard' : 'pcard';

  let html = `<div class="${gridClass}">`;

  items.forEach(p => {
    const cover = getCover(p.id);
    const title = trTitle(p);
    if (isReels) {
      html += `<div class="${cardClass}" data-id="${p.id}" data-cat="${cat}">`;
      html += cover
        ? `<img class="rcard-img" src="${cover}" alt="${title}" loading="lazy">`
        : `<div class="rcard-img" style="aspect-ratio:9/16;background:#0c0c0c"></div>`;
      html += `<div class="rcard-over"><span class="pcard-title">${title}</span></div></div>`;
    } else {
      html += `<div class="${cardClass}" data-id="${p.id}" data-cat="${cat}">`;
      html += cover
        ? `<img class="pcard-img" src="${cover}" alt="${title}" loading="lazy">`
        : `<div class="pcard-ph"></div>`;
      html += `<div class="pcard-info">
        <div class="pcard-title">${title}</div>
        <div class="pcard-sub">${trSubtitle(p.subtitle)}</div>
      </div></div>`;
    }
  });

  html += `</div>`;
  container.innerHTML = html;

  container.querySelectorAll('[data-id]').forEach(card => {
    card.addEventListener('click', () => {
      prevCat = card.dataset.cat;
      flashFade(() => openProject(card.dataset.id));
    });
  });
}


// ═══════════════════════════════════════════════════════════════
//  ABOUT PAGE — личные фото, если появятся в projects/about/
// ═══════════════════════════════════════════════════════════════
function buildAboutPage() {
  const container = document.getElementById('about-photos');
  if (!container) return;
  const imgs = getProjectImages('about');
  if (imgs.length === 0) return; // фото ещё не добавлены — просто пусто
  container.innerHTML = imgs
    .map(src => `<img class="about-photo" src="${src}" alt="${t('brand.name')}" loading="lazy">`)
    .join('');
}


// ═══════════════════════════════════════════════════════════════
//  PROJECT PAGE
// ═══════════════════════════════════════════════════════════════
let currentProjectId = null; // для перерисовки открытой карточки при смене языка

function openProject(id, { push = true } = {}) {
  const p = PROJECTS.find(x => x.id === id);
  if (!p) return;
  currentProjectId = id;
  const title = trTitle(p);

  const imgs    = getGalleryImages(id);
  const cat     = catNames[p.category] || p.category;
  const backCat = prevCat || p.category;

  // Video
  const embedUrl  = toEmbed(p.link);
  const hasVideo  = !!p.link;

  // Субнав
  const subnav = [
    hasVideo               ? { label: t('sub.video'),       anchor: 'sec-video' }       : null,
    imgs.length            ? { label: t('sub.screenshots'), anchor: 'sec-screenshots' } : null,
    (p.desc||p.meta?.length) ? { label: t('sub.credits'),  anchor: 'sec-credits' }      : null,
  ].filter(Boolean);

  // Видео — превью с кнопкой (работает даже если embed отключён)
  const isVimeo = p.link && p.link.includes('vimeo.com');
  const isExternal = p.link && !p.link.includes('youtube') && !p.link.includes('vimeo');
  const ytId = embedUrl && !isVimeo ? embedUrl.split('/embed/')[1]?.split('?')[0] : null;
  const thumbUrl = ytId ? `https://img.youtube.com/vi/${ytId}/maxresdefault.jpg` : getCover(id);
  const watchLabel = isVimeo ? t('watch.vimeo') : isExternal ? (trLinkLabel(p.linkLabel) || t('open.link')) : t('watch.youtube');

  const videoHtml = hasVideo
    ? `<div class="proj-section proj-video" id="sec-video">
        ${thumbUrl ? `<img class="proj-video-thumb" src="${thumbUrl}" alt="${title}">` : ''}
        <a class="proj-video-play" href="${p.link}" target="_blank" rel="noopener">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <polygon points="6,3 21,12 6,21" fill="white"/>
          </svg>
          ${watchLabel}
        </a>
      </div>`
    : '';

  // Мета
  const metaHtml = p.meta?.length
    ? `<div class="proj-meta">${p.meta.map(m =>
        `<div class="proj-meta-item">
          <span class="proj-meta-label">${trMetaLabel(m.label)}</span>
          <span class="proj-meta-val">${trMetaValue(m.value)}</span>
        </div>`).join('')}</div>`
    : '';

  // Credits
  const desc = trDesc(p);
  const creditsHtml = (p.desc || p.meta?.length)
    ? `<div class="proj-section proj-info" id="sec-credits">
        <div class="proj-info-left">
          <h2 class="proj-title">${title}</h2>
          <div class="proj-subtitle">${trSubtitle(p.subtitle)}</div>
          ${desc ? `<p class="proj-desc">${desc}</p>` : ''}
        </div>
        ${metaHtml}
      </div>`
    : '';

  // Screenshots
  const screenshotsHtml = imgs.length
    ? `<div class="proj-section proj-screenshots" id="sec-screenshots">
        <div class="proj-gallery">${imgs.map(src =>
          `<div class="gimg" data-src="${src}">
            <img src="${src}" alt="${title}" loading="lazy">
          </div>`).join('')}
        </div>
      </div>`
    : '';

  pageEls.project.innerHTML = `
    <div class="proj-topbar">
      <div class="proj-topbar-left">
        <span class="proj-top-back" data-back="${backCat}">
          <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
            <line x1="20" y1="5" x2="2" y2="5" stroke="white" stroke-width="0.8"/>
            <polyline points="6,1 2,5 6,9" fill="none" stroke="white" stroke-width="0.8"/>
          </svg>
          ${t('back')}
        </span>
      </div>
      <div class="proj-topbar-center">
        <span class="proj-top-name" data-page="home">${t('brand.name')}</span>
      </div>
      <div class="proj-topbar-right">
        <span class="proj-top-title">${title}</span>
      </div>
    </div>
    ${creditsHtml}
    ${videoHtml}
    ${screenshotsHtml}`;

  // Заполняем левую панель субнавом
  const projPanelNav = document.getElementById('proj-panel-nav');
  projPanelNav.innerHTML = subnav.map((s, i) =>
    `<a class="${i===0?'active':''}" data-anchor="${s.anchor}">${s.label}</a>`
  ).join('');

  // Лайтбокс
  pageEls.project.querySelectorAll('.gimg').forEach(el => {
    el.addEventListener('click', () => openLightbox(el.dataset.src));
  });

  // BACK
  pageEls.project.querySelector('.proj-top-back')?.addEventListener('click', e => {
    const back = e.currentTarget.dataset.back;
    flashFade(() => navigate(back));
  });

  // Имя → главная
  pageEls.project.querySelector('.proj-top-name')?.addEventListener('click', () => {
    flashFade(() => navigate('home'));
  });

  // Субнав в левой панели — скролл + подсветка
  projPanelNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      projPanelNav.querySelectorAll('a').forEach(x => x.classList.remove('active'));
      a.classList.add('active');
      const sec = document.getElementById(a.dataset.anchor);
      if (sec) sec.scrollIntoView({ behavior: 'smooth' });
    });
  });

  if (mobPageTitle) mobPageTitle.textContent = title;

  if (push) {
    history.pushState({ page: 'project', id, fromCat: prevCat }, '', `/${p.category}/${slugify(id)}`);
  }
  navigate('project', backCat, { push: false });
  requestAnimationFrame(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  });
}


// ═══════════════════════════════════════════════════════════════
//  LIGHTBOX
// ═══════════════════════════════════════════════════════════════
const lightbox    = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

function openLightbox(src) {
  lightboxImg.src = src;
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });


// ═══════════════════════════════════════════════════════════════
//  NAV CLICKS
// ═══════════════════════════════════════════════════════════════
document.querySelectorAll('[data-page]').forEach(el => {
  el.addEventListener('click', e => { e.preventDefault(); flashFade(() => navigate(el.dataset.page)); });
});


// ═══════════════════════════════════════════════════════════════
//  MOBILE NAV
// ═══════════════════════════════════════════════════════════════
const mobBack = document.getElementById('mob-back');
mobBack.addEventListener('click', () => {
  const dest = document.body.classList.contains('is-project') ? (prevCat || 'home') : 'home';
  flashFade(() => navigate(dest));
});

const burger = document.getElementById('burger');
const mobNav = document.getElementById('mob-nav');

burger.addEventListener('click', () => {
  const open = burger.classList.toggle('open');
  mobNav.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
});

function closeMobNav() {
  burger.classList.remove('open');
  mobNav.classList.remove('open');
  document.body.style.overflow = '';
}


// ═══════════════════════════════════════════════════════════════
//  FADE TRANSITION
// ═══════════════════════════════════════════════════════════════
const fadeOverlay = document.getElementById('fade-overlay');

function flashFade(cb) {
  fadeOverlay.style.pointerEvents = 'all';
  fadeOverlay.style.transition = 'opacity 0.18s ease';
  fadeOverlay.style.opacity = '1';
  setTimeout(() => {
    cb();
    fadeOverlay.style.transition = 'opacity 0.38s ease';
    fadeOverlay.style.opacity = '0';
    setTimeout(() => { fadeOverlay.style.pointerEvents = ''; }, 400);
  }, 180);
}


// ═══════════════════════════════════════════════════════════════
//  ROUTING — URL-based navigation
// ═══════════════════════════════════════════════════════════════
function routeFromUrl(push = false) {
  const parts = location.pathname.split('/').filter(Boolean);
  if (parts.length === 0) {
    navigate('home', null, { push });
  } else if (parts.length === 1) {
    navigate(parts[0], null, { push });
  } else if (parts.length >= 2) {
    const [cat, slug] = parts;
    prevCat = cat;
    const proj = PROJECTS.find(p => slugify(p.id) === slug);
    if (proj) openProject(proj.id, { push });
    else navigate(cat, null, { push });
  }
}

window.addEventListener('popstate', () => routeFromUrl(false));


// ═══════════════════════════════════════════════════════════════
//  I18N — применение перевода и переключение языка
// ═══════════════════════════════════════════════════════════════
function applyStaticI18n() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === currentLang);
  });
  document.documentElement.lang = currentLang;
  document.title = t('title.tag');
}

function setLang(lang) {
  if (lang !== 'en' && lang !== 'ru') return;
  currentLang = lang;
  localStorage.setItem('lang', lang);
  applyStaticI18n();

  // Пересобрать уже построенные страницы-гриды (подписи карточек) —
  // дёшево даже если страница сейчас не видна
  builtSet.forEach(page => {
    if (page === 'about') return; // about не завязан на PROJECTS/meta
    const target = pageEls[page];
    if (target) buildCatPage(page, target);
  });
  if (mobPageTitle && document.body.classList.contains('is-page') && catNames[currentPage]) {
    mobPageTitle.textContent = t('nav.' + currentPage);
  }

  // Открытая карточка проекта — перерисовать с новым языком, без пуша в историю
  if (document.body.classList.contains('is-project') && currentProjectId) {
    openProject(currentProjectId, { push: false });
  }
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLang(btn.dataset.lang));
});

applyStaticI18n();

// ═══════════════════════════════════════════════════════════════
//  INIT
// ═══════════════════════════════════════════════════════════════
routeFromUrl(false);
