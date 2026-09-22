/**
 * 白水AI · 站点文案与数据
 * 后续更新课程清单、联系方式，只需要改这个文件。
 */

export const site = {
  brand: '白水',
  brandEm: 'AI',
  drop: '💧',
  tagline: '让AI生成的内容，更符合我们的诉求',
  slogan: '把 AI 用成自己的生产力',
  intro:
    '白水AI 是李松浩的个人品牌。这里汇聚我持续打磨的三样东西：课程盒子、AI工作台、AI工具箱 —— 帮每一个普通人把 AI 真正用起来。',
}

/** 三条业务线（首页入口卡片） */
export const businesses = [
  {
    num: '壹',
    title: '课程盒子',
    en: 'COURSE BOX',
    desc: 'AI、AI定位、AI做流量、AI职场、AI剪辑、AI获客 —— 六大分类课程，从入门到变现。',
    to: '/courses',
    linkLabel: '打开盒子',
    status: '持续更新',
    statusType: 'live',
  },
  {
    num: '贰',
    title: 'AI工作台',
    en: 'AI WORKBENCH',
    desc: '一个入口，调度你的所有 AI 作业：提示词、素材、流水线，不再东一块西一块。',
    to: '/workbench',
    linkLabel: '先睹为快',
    status: '敬请期待',
    statusType: 'soon',
  },
  {
    num: '叁',
    title: 'AI工具箱',
    en: 'AI TOOLBOX',
    desc: '只收录真正用过、好用的 AI 工具，附上用法，让你少走弯路。',
    to: '/toolbox',
    linkLabel: '先睹为快',
    status: '敬请期待',
    statusType: 'soon',
  },
]

/** 课程盒子 · 六大分类（占位卡片，后续替换为真实课程清单） */
export const courseCategories = [
  {
    id: 'ai',
    title: 'AI',
    en: 'AI BASICS',
    desc: '零基础把 AI 用起来：对话、提示词，搭好日常效率的底座。',
    status: '即将上线',
  },
  {
    id: 'positioning',
    title: 'AI定位',
    en: 'POSITIONING',
    desc: '用 AI 梳理你自己：看清优势，找到个人定位与方向。',
    status: '即将上线',
  },
  {
    id: 'traffic',
    title: 'AI做流量',
    en: 'TRAFFIC',
    desc: '用 AI 做内容、做账号，把流量一点点做起来。',
    status: '即将上线',
  },
  {
    id: 'career',
    title: 'AI职场',
    en: 'CAREER',
    desc: '用 AI 提效：汇报、文档、数据与办公自动化。',
    status: '即将上线',
  },
  {
    id: 'editing',
    title: 'AI剪辑',
    en: 'EDITING',
    desc: '用 AI 做视频：剪辑、字幕、口播与成片流水线。',
    status: '即将上线',
  },
  {
    id: 'acquisition',
    title: 'AI获客',
    en: 'ACQUISITION',
    desc: '从流量到客户：用 AI 搭一条属于自己的获客流水线。',
    status: '即将上线',
  },
]

/** AI工作台 · 介绍区块 */
export const workbench = {
  headline: '一个入口，调度你的所有 AI 作业',
  desc: '资料散在各个文件夹，工具开了七八个窗口，流程全靠脑子记 —— AI工作台把这些散点串成一条流水线。',
  features: [
    {
      title: '提示词与素材管理',
      desc: '把你沉淀的提示词、素材、模板放进一个地方，随取随用。',
    },
    {
      title: '内容生产流水线',
      desc: '选题、初稿、配图、发布，一条线跑完，减少来回切换。',
    },
    {
      title: '多工具协同入口',
      desc: '常用 AI 工具集中到达，按场景组织，打开就能干活。',
    },
  ],
  form: '网页端 · 规划中',
}

/** AI工具箱 · 介绍区块 */
export const toolbox = {
  headline: '只收录真正用过的、好用的 AI 工具',
  desc: '网上工具列表一搜一大把，但大多数没经过真实使用。工具箱里的每一件，都是我在自己的工作流里反复用过、确认好用的。',
  categories: ['文字写作', '图像设计', '视频剪辑', '音频语音', '效率办公', '自动化'],
  note: '每个工具都会附上一句「什么时候用它」和一条「最快上手路径」。',
}

/** 关于白水 */
export const about = {
  title: '关于白水',
  name: '李松浩',
  role: '白水AI 主理人',
  paragraphs: [
    '为什么叫「白水」？因为 AI 本该像白水一样：干净、透明、拿来就用，而不是被包装得玄乎其玄。',
    '我把自己用 AI 的方法、踩过的坑、跑通的流程，沉淀成课程、工作台和工具箱，放在这里，给你直接拿去用。',
  ],
}

/** 联系方式（占位，提供后替换 handle 字段即可） */
export const contact = {
  title: '联系白水',
  desc: '想聊聊课程、合作，或者只是打个招呼 ——',
  items: [
    { platform: '微信', handle: '即将公布', icon: '💬' },
    { platform: '抖音', handle: '@白水AI（即将公布）', icon: '🎬' },
    { platform: '邮箱', handle: '即将公布', icon: '✉️' },
  ],
}
