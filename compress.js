// compress.js — конвертирует PNG→JPEG, сжимает все картинки
// Запуск: node compress.js
// После: node slides.js (обновить manifest.js)

const { execSync } = require('child_process');
const fs   = require('fs');
const path = require('path');

const PROJECTS_DIR = './projects';
const QUALITY      = 80;   // качество JPEG (0-100)
const MAX_PX       = 1920; // макс. размер по длинной стороне

let total = 0, done = 0;

function countFiles(dir) {
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) { countFiles(full); continue; }
    const ext = path.extname(f).toLowerCase();
    if (['.jpg', '.jpeg', '.png'].includes(ext)) total++;
  }
}

function processDir(dir) {
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) { processDir(full); continue; }

    const ext = path.extname(f).toLowerCase();

    if (ext === '.png') {
      const jpg = full.replace(/\.png$/i, '.jpg');
      execSync(`sips -s format jpeg -s formatOptions ${QUALITY} -Z ${MAX_PX} "${full}" --out "${jpg}" > /dev/null 2>&1`);
      fs.unlinkSync(full);
      done++;
      process.stdout.write(`\r[${done}/${total}] PNG→JPG: ${f}          `);

    } else if (ext === '.jpg' || ext === '.jpeg') {
      execSync(`sips -s formatOptions ${QUALITY} -Z ${MAX_PX} "${full}" --out "${full}" > /dev/null 2>&1`);
      done++;
      process.stdout.write(`\r[${done}/${total}] JPG: ${f}              `);
    }
  }
}

console.log('Считаем файлы...');
countFiles(PROJECTS_DIR);
console.log(`Найдено ${total} изображений. Начинаем...\n`);

const start = Date.now();
processDir(PROJECTS_DIR);

const sec = ((Date.now() - start) / 1000).toFixed(1);
console.log(`\n\nГотово за ${sec}с. Теперь запусти: node slides.js`);
