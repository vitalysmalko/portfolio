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
    subtitle: 'Short Film · Dir. Vladimir Repin',
    desc: 'This film is part of a large story. It\'s a gothic epic, dedicated to the release of White Punk album «Vampire: Chapter Two»',
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
    subtitle: 'Short Film · Dir. Nikolay Chernobayev',
    desc: 'A romantic story from Saint Petersburg.',
    stills: [],
    meta: [
      { label: 'YEAR',      value: '2025' },
      { label: 'LOCATION',  value: 'SAINT PETERSBURG' },
      { label: 'FESTIVALS', value: 'SVYATAYA ANNA · TAVRIDA ART' },
    ],
    link: '',
    linkLabel: 'TRAILER',
  },

  {
    id: 'menuet',
    category: 'film',
    title: 'MENUET',
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
    id: 'ya bolshe tak ne budu',
    category: 'film',
    title: 'YA BOLSHE TAK NE BUDU',
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
    stills: [],
    meta: [
    ],
    link: 'https://vimeo.com/756839581',
    linkLabel: 'WATCH',
  },


  // ── MUSIC VIDEO ─────────────────────────────────────────────
  {
    id: 'ditophone - tezhe',
    category: 'music-video',
    title: 'TEZHE',
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
    subtitle: 'VDPDY · Dir. Ilya Polyakov',
    desc: 'Summer, love, handheld camera.',
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
    subtitle: 'Yuzhniy Sever',
    desc: '',
    meta: [
      { label: 'YEAR', value: '2025' },
    ],
    link: 'https://vimeo.com/1177891326',
    linkLabel: 'WATCH',
  },

  {
    id: 'vmesto',
    category: 'music-video',
    title: 'VMESTO',
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
//  SLIDESHOW
// ═══════════════════════════════════════════════════════════════
const slideshowEl = document.getElementById('slideshow');
const titleEl     = document.getElementById('slide-title-el');
const slideTapEl  = document.getElementById('slide-tap');
const scCur       = document.getElementById('sc-cur');
const scTot       = document.getElementById('sc-tot');

let slides     = [];
let slideIdx   = 0;
let slideTimer = null;
const DELAY    = 4500;

function pad(n) { return String(n + 1).padStart(2, '0'); }

function addSlide(src) {
  const el = document.createElement('div');
  el.className = 'slide';
  el.style.backgroundImage = `url('${src}')`;
  slideshowEl.appendChild(el);
  slides.push(el);
}

function initSlideshow() {
  if (!slides.length) return;
  goSlide(0);
  startAuto();

  // Swipe on mobile
  let tx = 0;
  slideshowEl.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive: true });
  slideshowEl.addEventListener('touchend',   e => {
    const d = e.changedTouches[0].clientX - tx;
    if (Math.abs(d) > 40) { goSlide(slideIdx + (d < 0 ? 1 : -1)); startAuto(); }
  }, { passive: true });
}

function goSlide(n) {
  if (!slides.length) return;
  slides[slideIdx].classList.remove('active');
  slideIdx = ((n % slides.length) + slides.length) % slides.length;
  slides[slideIdx].classList.add('active');
  const projectId = _slides[slideIdx]?.project;
  const proj = PROJECTS.find(p => p.id === projectId);
  if (titleEl) {
    titleEl.textContent = proj ? proj.title : (projectId || '');
    titleEl.dataset.projectId = projectId || '';
    titleEl.href = proj ? `/${proj.category}/${slugify(proj.id)}` : '#';
  }
  if (slideTapEl) {
    slideTapEl.dataset.projectId = projectId || '';
  }
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

function startAuto() {
  clearInterval(slideTimer);
  slideTimer = setInterval(() => goSlide(slideIdx + 1), DELAY);
}

// Слайды = OBL-обложки проектов (генерируется через node slides.js)
const _slides = window.SLIDES_MANIFEST || [];
_slides.forEach(s => addSlide(s.src));
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
  reels:           document.getElementById('page-reels'),
  contact:         document.getElementById('page-contact'),
  project:         document.getElementById('page-project'),
};

const builtSet = new Set();
const catNames = { film:'FILM', commercial:'COMMERCIAL', 'music-video':'MUSIC VIDEO', 'brand-content':'BRAND CONTENT', reels:'REELS' };

let prevCat = null; // запоминаем откуда пришли

function slugify(s) {
  return s.toLowerCase()
    .replace(/\s*-\s*/g, '-')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

function navigate(page, fromCat, { push = true } = {}) {
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
    if (mobPageTitle) mobPageTitle.textContent = catNames[page] || '';
    const target = pageEls[page];
    if (target) {
      target.classList.add('active');
      if (catNames[page] && !builtSet.has(page)) {
        buildCatPage(page, target);
        builtSet.add(page);
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

// Галерея — все фото кроме OBL
function getGalleryImages(id) {
  const files = PM[id] || [];
  return files
    .filter(f => f.replace(/\.[^.]+$/, '').toUpperCase() !== 'OBL')
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
    container.innerHTML = `<div class="empty">COMING SOON</div>`;
    return;
  }

  const gridClass = isReels ? 'rgrid' : 'pgrid';
  const cardClass = isReels ? 'rcard' : 'pcard';

  let html = `<div class="${gridClass}">`;

  items.forEach(p => {
    const cover = getCover(p.id);
    if (isReels) {
      html += `<div class="${cardClass}" data-id="${p.id}" data-cat="${cat}">`;
      html += cover
        ? `<img class="rcard-img" src="${cover}" alt="${p.title}" loading="lazy">`
        : `<div class="rcard-img" style="aspect-ratio:9/16;background:#0c0c0c"></div>`;
      html += `<div class="rcard-over"><span class="pcard-title">${p.title}</span></div></div>`;
    } else {
      html += `<div class="${cardClass}" data-id="${p.id}" data-cat="${cat}">`;
      html += cover
        ? `<img class="pcard-img" src="${cover}" alt="${p.title}" loading="lazy">`
        : `<div class="pcard-ph"></div>`;
      html += `<div class="pcard-info">
        <div class="pcard-title">${p.title}</div>
        <div class="pcard-sub">${p.subtitle}</div>
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
//  PROJECT PAGE
// ═══════════════════════════════════════════════════════════════
function openProject(id, { push = true } = {}) {
  const p = PROJECTS.find(x => x.id === id);
  if (!p) return;

  const imgs    = getGalleryImages(id);
  const cat     = catNames[p.category] || p.category;
  const backCat = prevCat || p.category;

  // Video
  const embedUrl  = toEmbed(p.link);
  const hasVideo  = !!p.link;

  // Субнав
  const subnav = [
    hasVideo               ? { label: 'VIDEO',       anchor: 'sec-video' }       : null,
    imgs.length            ? { label: 'SCREENSHOTS', anchor: 'sec-screenshots' } : null,
    (p.desc||p.meta?.length) ? { label: 'CREDITS',  anchor: 'sec-credits' }      : null,
  ].filter(Boolean);

  // Видео — превью с кнопкой (работает даже если embed отключён)
  const isVimeo = p.link && p.link.includes('vimeo.com');
  const isExternal = p.link && !p.link.includes('youtube') && !p.link.includes('vimeo');
  const ytId = embedUrl && !isVimeo ? embedUrl.split('/embed/')[1]?.split('?')[0] : null;
  const thumbUrl = ytId ? `https://img.youtube.com/vi/${ytId}/maxresdefault.jpg` : getCover(id);
  const watchLabel = isVimeo ? 'WATCH ON VIMEO' : isExternal ? (p.linkLabel || 'OPEN LINK') : 'WATCH ON YOUTUBE';

  const videoHtml = hasVideo
    ? `<div class="proj-section proj-video" id="sec-video">
        ${thumbUrl ? `<img class="proj-video-thumb" src="${thumbUrl}" alt="${p.title}">` : ''}
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
          <span class="proj-meta-label">${m.label}</span>
          <span class="proj-meta-val">${m.value}</span>
        </div>`).join('')}</div>`
    : '';

  // Credits
  const creditsHtml = (p.desc || p.meta?.length)
    ? `<div class="proj-section proj-info" id="sec-credits">
        <div class="proj-info-left">
          <h2 class="proj-title">${p.title}</h2>
          <div class="proj-subtitle">${p.subtitle}</div>
          ${p.desc ? `<p class="proj-desc">${p.desc}</p>` : ''}
        </div>
        ${metaHtml}
      </div>`
    : '';

  // Screenshots
  const screenshotsHtml = imgs.length
    ? `<div class="proj-section proj-screenshots" id="sec-screenshots">
        <div class="proj-gallery">${imgs.map(src =>
          `<div class="gimg" data-src="${src}">
            <img src="${src}" alt="${p.title}" loading="lazy">
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
          BACK
        </span>
      </div>
      <div class="proj-topbar-center">
        <span class="proj-top-name" data-page="home">VITALY SMALKO</span>
      </div>
      <div class="proj-topbar-right">
        <span class="proj-top-title">${p.title}</span>
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

  if (mobPageTitle) mobPageTitle.textContent = p.title;

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
//  INIT
// ═══════════════════════════════════════════════════════════════
routeFromUrl(false);
