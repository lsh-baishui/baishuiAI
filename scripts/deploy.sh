#!/usr/bin/env bash
# 白水AI · 构建并发布到 GitHub Pages（gh-pages 分支，单提交强推）
# 用法: bash scripts/deploy.sh
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
REMOTE="https://github.com/lsh-baishui/baishuiAI.git"

cd "$ROOT"
npm run build

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

cd "$TMP"
git init -q -b gh-pages
git remote add origin "$REMOTE"
cp -R "$ROOT/dist/." .
git add -A
git -c user.name="lsh-baishui" \
    -c user.email="lsh-baishui@users.noreply.github.com" \
    commit -q -m "deploy: build $(date '+%Y-%m-%d %H:%M:%S')"
git push -q -f origin gh-pages

echo "✅ 已发布 gh-pages 分支，稍后访问: https://lsh-baishui.github.io/baishuiAI/"
