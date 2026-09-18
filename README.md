# 白水AI · 品牌主站

李松浩的个人品牌「白水AI」对外统一入口：介绍白水，汇聚三条业务线。

- **课程盒子**：AI / AI定位 / AI做流量 / AI职场 / AI剪辑 / AI获客 六大分类课程
- **AI工作台**：一站式 AI 作业入口（敬请期待）
- **AI工具箱**：真实用过的好用 AI 工具合集（敬请期待）

线上地址：`https://lsh-baishui.github.io/baishuiAI/`

## 技术栈

Vue3 + Vite + vue-router，无 UI 框架，暖纸色品牌视觉。

## 本地开发

```bash
npm install
npm run dev       # 开发预览
npm run build     # 构建到 dist/
npm run preview   # 预览构建产物
```

> 需要 Node.js 20.19+ / 22.12+（本仓库开发用的是 ~/lib/nodejs 下的 Node 22）。

## 部署

推送到 `main` 分支后，GitHub Actions（`.github/workflows/deploy.yml`）自动构建并发布到 GitHub Pages。

## 日常更新

改内容只需要编辑 `src/data/site.js`（课程清单、业务线文案、联系方式都集中在这一个文件），提交推送即可自动上线。
