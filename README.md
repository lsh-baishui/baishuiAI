# 白水AI · 个人简历 + 案例墙

李松浩（白水AI 主理人）的个人网站，两大板块：

- **个人简历**（首页 `/`）：关于我、工作经历、技能、联系方式
- **案例墙**（`/cases`）：数据工具、AI 应用、课程与网站的作品集，支持按类型筛选

线上地址：`https://lsh-baishui.github.io/baishuiAI/`

## 技术栈

Vue3 + Vite + vue-router，无 UI 框架，暖纸色品牌视觉 + AIHOT 式墨绿导航。

## 本地开发

```bash
npm install
npm run dev       # 开发预览
npm run build     # 构建到 dist/
npm run preview   # 预览构建产物
```

> 需要 Node.js 20.19+ / 22.12+（本仓库开发用的是 ~/lib/nodejs 下的 Node 22）。

## 部署

```bash
bash scripts/deploy.sh   # 构建并发布到 gh-pages 分支（GitHub Pages）
```

## 日常更新

所有文案与数据集中在 `src/data/site.js`：

- `profile`：简历档案（关于我、经历、技能、标签）
- `cases`：案例墙条目（新增案例往数组里加一条即可）
- `contact`：联系方式（目前为占位，替换 `handle` 字段）

改完运行 `bash scripts/deploy.sh` 约 10 秒后自动上线。
