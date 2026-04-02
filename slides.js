// Запускать из папки portfolio/:
//   node slides.js
//
// Сканирует projects/*/ → генерирует projects/manifest.js
// OBL-файлы из проектов автоматически попадают на главный экран.

const fs   = require('fs');
const path = require('path');

const exts = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif']);

function images(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter(f => exts.has(path.extname(f).toLowerCase()))
    .sort();
}

function findObl(files) {
  return files.find(f => path.basename(f, path.extname(f)).toUpperCase() === 'OBL') || null;
}

// OBL1, OBL2, ... — кандидаты для слайдшоу
function findOblSlides(files) {
  return files.filter(f => {
    const name = path.basename(f, path.extname(f)).toUpperCase();
    return name.startsWith('OBL') && name !== 'OBL';
  });
}

const projectsDir = path.join(__dirname, 'projects');
if (!fs.existsSync(projectsDir)) fs.mkdirSync(projectsDir);

const folders = fs.readdirSync(projectsDir)
  .filter(f => fs.statSync(path.join(projectsDir, f)).isDirectory());

const projectsManifest = {};
const slidesManifest   = [];

folders.forEach(folder => {
  const files = images(path.join(projectsDir, folder));
  projectsManifest[folder] = files;
  const obl = findObl(files);
  const oblSlides = findOblSlides(files);
  // Если есть OBL1/OBL2 — берём их для слайдшоу; иначе fallback на OBL
  const slideFiles = oblSlides.length > 0 ? oblSlides : (obl ? [obl] : []);
  slideFiles.forEach(f => slidesManifest.push({ src: `projects/${folder}/${f}`, project: folder }));
  console.log(`✓ "${folder}" (${files.length})${obl ? ' [cover: ' + obl + ']' : ''}${slideFiles.length ? ' [slides: ' + slideFiles.length + ']' : ''}`);
});

fs.writeFileSync(
  path.join(projectsDir, 'manifest.js'),
  `window.PROJECTS_MANIFEST = ${JSON.stringify(projectsManifest, null, 2)};\n` +
  `window.SLIDES_MANIFEST = ${JSON.stringify(slidesManifest, null, 2)};\n`
);

console.log(`\n✓ Слайдшоу: ${slidesManifest.length} обложек`);
console.log('Готово — обнови страницу в браузере.');
