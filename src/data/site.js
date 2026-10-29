/**
 * 白水AI · 站点文案与数据
 * 网站分为两大板块：个人简历（首页）+ 案例墙。
 * 更新简历、案例清单、联系方式，只需要改这个文件。
 */

export const site = {
  brand: '白水',
  brandEm: 'AI',
}

/** 个人简历 */
export const profile = {
  name: '李松浩',
  avatarChar: '李',
  roles: 'AI 工具开发者 · 知识付费实践者 · 白水AI 主理人',
  tags: ['🛠 自动化工具', '📊 数据抓取与分析', '🤖 AI 应用', '📱 抖音内容运营', '💰 知识付费'],
  about: [
    '我是李松浩，「白水AI」主理人。我相信一个人的小团队，也能靠自动化工具和 AI 把内容生意做得有模有样。',
    '过去一年，我围绕抖音知识付费赛道搭建了一整套自用工具：从博主全量拆解、每日选题日报，到对标 IP 池收集——把原本需要几个人干的活，压缩成几行命令。同时我持续打磨 AI 在真实业务里的落地方式：不是炫技，而是让每一步都通向成交。',
    '如果你在做内容创业、知识付费，或者想把 AI 变成自己的生产力，欢迎交流。',
  ],
  experience: [
    {
      role: '主理人',
      org: '白水AI · 独立开发 / 自媒体',
      time: '2024 — 至今',
      points: [
        '从 0 到 1 搭建「抖音知识付费选题与博主拆解工具箱」，覆盖拆解、选题、对标三件事',
        '建立每日选题日报自动化流水线，每天早上 9 点自动产出高赞选题库',
        '持续运营个人 IP，探索「作品 → 交易」的完整链路',
      ],
    },
  ],
  skills: [
    {
      group: '开发与自动化',
      items: ['Python', '爬虫与数据抓取', '数据分析', '定时任务编排', 'HTML / CSS'],
    },
    {
      group: 'AI 应用',
      items: ['Prompt 工程', 'AI 工作流搭建', 'Agent 编排', 'AI 内容生产'],
    },
    {
      group: '内容与商业',
      items: ['抖音内容运营', '选题策划', '知识付费产品', '成交与私域', '公众号写作'],
    },
  ],
}

/** 案例墙（statusType: live 已上线/持续更新；soon 敬请期待） */
export const cases = [
  {
    id: 'blogger-scraper',
    icon: '🔍',
    title: '博主全量拆解工具',
    type: '数据工具',
    desc: '给一个抖音博主主页链接，自动抓取全部作品数据——文案、发布时间、点赞/评论/分享，一键输出 Excel + Markdown 爆款摘要。',
    chips: ['Python', '数据抓取', '自动化'],
    status: '持续更新',
    statusType: 'live',
  },
  {
    id: 'daily-report',
    icon: '📰',
    title: '每日选题日报',
    type: '数据工具',
    desc: '按自定义关键词监控抖音近 7 天高赞视频，去重排序后每天早上 9 点自动生成选题库日报，选题不再靠拍脑袋。',
    chips: ['定时任务', '关键词检索', '报表生成'],
    status: '运行中',
    statusType: 'live',
  },
  {
    id: 'ip-pool',
    icon: '🎯',
    title: '对标 IP 池收集',
    type: '数据工具',
    desc: '按粉丝区间自动筛选抖音知识付费赛道对标账号，逐个核实真实粉丝数并按规模排序，找对标不再大海捞针。',
    chips: ['数据清洗', '竞品分析'],
    status: '持续更新',
    statusType: 'live',
  },
  {
    id: 'deal-card',
    icon: '🤝',
    title: 'AI 成交推进卡',
    type: 'AI 应用',
    desc: '提交一段脱敏后的真实客户对话，约 10 分钟后收到一张成交推进卡：客户阶段、主要顾虑、不建议做的事与建议回复。',
    chips: ['AI 应用', '销售方法论', '落地页'],
    status: '已上线',
    statusType: 'live',
  },
  {
    id: 'course',
    icon: '📦',
    title: 'AI 内容获客课',
    type: '课程',
    desc: '从有作品，到有人来问——九节课搭一条「定位 → 选题 → 内容 → 发布 → 复盘 → 转化」的 AI 获客生产线。',
    chips: ['课程体系', 'AI 获客', '九讲'],
    status: '持续更新',
    statusType: 'live',
  },
  {
    id: 'website',
    icon: '💧',
    title: '白水AI 官网',
    type: '网站',
    desc: '你正在看的这个网站：个人简历 + 案例墙，部署在 GitHub Pages，推送即自动上线。',
    chips: ['Vue3', 'Vite', 'GitHub Pages'],
    status: '已上线',
    statusType: 'live',
  },
  {
    id: 'workbench',
    icon: '🛠',
    title: 'AI 工作台',
    type: '规划中',
    desc: '一个入口，调度你的所有 AI 作业：提示词与素材管理、内容生产流水线、多工具协同。',
    chips: ['提示词管理', '流水线'],
    status: '敬请期待',
    statusType: 'soon',
  },
  {
    id: 'toolbox',
    icon: '🧰',
    title: 'AI 工具箱',
    type: '规划中',
    desc: '只收录真正用过、好用的 AI 工具，每个附上一句「什么时候用它」和一条「最快上手路径」。',
    chips: ['工具评测', '上手路径'],
    status: '敬请期待',
    statusType: 'soon',
  },
]

/** 联系方式（占位，提供后替换 handle 字段即可） */
export const contact = {
  title: '来聊聊吧',
  desc: '无论是交流 AI 工具、内容创业，还是单纯打个招呼，都欢迎。',
  items: [
    { platform: '微信', handle: '即将公布', icon: '💬' },
    { platform: '抖音', handle: '@白水AI（即将公布）', icon: '🎬' },
    { platform: '邮箱', handle: '即将公布', icon: '✉️' },
  ],
}
