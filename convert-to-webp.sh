#!/bin/bash
# Конвертирует все JPG/PNG в папке projects/ в WebP, удаляет оригиналы
# Запускать из папки portfolio/: bash convert-to-webp.sh

QUALITY=82
PROJECTS_DIR="./projects"
COUNT=0
SKIPPED=0

find "$PROJECTS_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | while read -r FILE; do
  DIR=$(dirname "$FILE")
  BASE=$(basename "$FILE")
  NAME="${BASE%.*}"
  OUT="$DIR/$NAME.webp"

  if [ -f "$OUT" ]; then
    echo "SKIP (уже есть): $OUT"
    continue
  fi

  cwebp -q $QUALITY "$FILE" -o "$OUT" -quiet
  if [ $? -eq 0 ]; then
    rm "$FILE"
    echo "OK: $BASE → $NAME.webp"
  else
    echo "ОШИБКА: $FILE"
  fi
done

echo ""
echo "Готово. Запусти: node slides.js"
