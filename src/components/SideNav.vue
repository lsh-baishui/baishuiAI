<script setup>
import { RouterLink } from 'vue-router'

const mainLinks = [
  {
    to: '/',
    label: '首页',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/></svg>',
  },
]

const businessLinks = [
  {
    to: '/courses',
    label: '课程盒子',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8 12 3 3 8v8l9 5 9-5V8Z"/><path d="M3 8l9 5 9-5M12 13v8"/></svg>',
  },
  {
    to: '/workbench',
    label: 'AI工作台',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7.5" height="7.5" rx="1.5"/><rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5"/><rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5"/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5"/></svg>',
  },
  {
    to: '/toolbox',
    label: 'AI工具箱',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/></svg>',
  },
]

const supportLinks = [
  {
    to: { path: '/', hash: '#contact' },
    label: '联系白水',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    plain: true,
  },
]
</script>

<template>
  <aside class="sidenav">
    <RouterLink to="/" class="brand" aria-label="白水AI 首页">
      <span class="brand-drop">💧</span>
      <span class="brand-name">白水<em>AI</em></span>
    </RouterLink>

    <nav class="nav-group" aria-label="主导航">
      <RouterLink
        v-for="link in mainLinks"
        :key="link.label"
        :to="link.to"
        class="nav-item"
      >
        <span class="nav-icon" v-html="link.icon"></span>
        <span>{{ link.label }}</span>
      </RouterLink>
    </nav>

    <div class="nav-block">
      <p class="group-label">业务线</p>
      <nav class="nav-group" aria-label="业务线">
        <RouterLink v-for="link in businessLinks" :key="link.label" :to="link.to" class="nav-item">
          <span class="nav-icon" v-html="link.icon"></span>
          <span>{{ link.label }}</span>
        </RouterLink>
      </nav>
    </div>

    <div class="nav-block nav-block--support">
      <p class="group-label">支持</p>
      <nav class="nav-group" aria-label="支持">
        <RouterLink
          v-for="link in supportLinks"
          :key="link.label"
          :to="link.to"
          class="nav-item"
          active-class=""
          exact-active-class=""
        >
          <span class="nav-icon" v-html="link.icon"></span>
          <span>{{ link.label }}</span>
        </RouterLink>
      </nav>
    </div>
  </aside>
</template>

<style scoped>
/* 桌面端：AIHOT 式侧边栏 —— 品牌置顶 + 分组标签 + 灰绿高亮 */
.sidenav {
  width: 15rem;
  flex-shrink: 0;
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  background: var(--card);
  border-right: 1px solid var(--line);
  padding: 1.7rem 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.brand {
  display: flex;
  align-items: baseline;
  gap: 0.45em;
  padding: 0.1rem 0.75rem 1.25rem;
  border-bottom: 1px solid var(--line);
}

.brand-drop {
  font-size: 1.15rem;
  transform: translateY(1px);
}

.brand-name {
  font-family: var(--serif);
  font-weight: 700;
  font-size: 1.4rem;
  letter-spacing: 0.1em;
}

.brand-name em {
  font-style: normal;
  color: var(--nav-teal);
}

.nav-group {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.nav-block {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.group-label {
  font-size: 0.78rem;
  color: var(--muted);
  letter-spacing: 0.22em;
  padding: 0 0.85rem;
}

.nav-block--support {
  margin-top: auto;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.68rem 0.85rem;
  border-radius: 10px;
  color: var(--ink);
  font-size: 0.98rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  transition: background 0.15s ease, color 0.15s ease;
}

.nav-icon {
  display: inline-flex;
  width: 1.2rem;
  height: 1.2rem;
  flex-shrink: 0;
  color: var(--muted);
  transition: color 0.15s ease;
}

.nav-icon :deep(svg) {
  width: 100%;
  height: 100%;
}

.nav-item:hover {
  background: var(--gray-soft);
}

.nav-item:hover .nav-icon {
  color: var(--ink);
}

.nav-item.router-link-exact-active {
  background: var(--nav-teal-soft);
  color: var(--nav-teal);
  font-weight: 600;
}

.nav-item.router-link-exact-active .nav-icon {
  color: var(--nav-teal);
}

/* 移动端：品牌行 + 紧凑的可换行胶囊导航 */
@media (max-width: 768px) {
  .sidenav {
    width: auto;
    height: auto;
    overflow: visible;
    position: sticky;
    top: 0;
    z-index: 30;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.45rem;
    padding: 0.55rem 1rem 0.7rem;
    border-right: none;
    border-bottom: 1px solid var(--line);
  }

  .brand {
    width: 100%;
    padding: 0.3rem 0.1rem 0.45rem;
    border-bottom: none;
  }

  .brand-name {
    font-size: 1.15rem;
  }

  /* 组容器透明化，让所有导航项直接参与换行 */
  .nav-group,
  .nav-block {
    display: contents;
  }

  .group-label {
    display: none;
  }

  .nav-item {
    padding: 0.35rem 0.85rem;
    border-radius: 999px;
    border: 1px solid var(--line);
    background: var(--bg);
    font-size: 0.86rem;
  }

  .nav-item.router-link-exact-active {
    background: var(--nav-teal-soft);
    border-color: transparent;
  }
}
</style>
