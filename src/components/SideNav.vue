<script setup>
import { RouterLink } from 'vue-router'

const links = [
  {
    to: '/',
    label: '首页',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/></svg>',
  },
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
</script>

<template>
  <aside class="sidenav">
    <nav class="sidenav-group" aria-label="主导航">
      <RouterLink v-for="link in links" :key="link.to" :to="link.to" class="sidenav-item">
        <span class="sidenav-icon" v-html="link.icon"></span>
        <span class="sidenav-label">{{ link.label }}</span>
        <span class="sidenav-chevron" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 6 6 6-6 6"/></svg>
        </span>
      </RouterLink>
    </nav>
  </aside>
</template>

<style scoped>
/* 桌面端：左侧图标导航 */
.sidenav {
  width: 13.5rem;
  flex-shrink: 0;
  position: sticky;
  top: 3.5rem;
  height: calc(100vh - 3.5rem);
  overflow-y: auto;
  padding: 1.4rem 0.9rem;
}

.sidenav-group {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.sidenav-item {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.62rem 0.85rem;
  border-radius: 10px;
  border: 1px solid transparent;
  color: var(--ink-soft);
  font-size: 0.95rem;
  letter-spacing: 0.05em;
  transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
}

.sidenav-icon {
  display: inline-flex;
  width: 1.15rem;
  height: 1.15rem;
  flex-shrink: 0;
}

.sidenav-icon :deep(svg) {
  width: 100%;
  height: 100%;
}

.sidenav-label {
  flex: 1;
}

.sidenav-chevron {
  display: inline-flex;
  width: 0.85rem;
  height: 0.85rem;
  color: var(--muted);
  opacity: 0;
  transform: translateX(-3px);
  transition: opacity 0.15s ease, transform 0.15s ease;
}

.sidenav-chevron :deep(svg) {
  width: 100%;
  height: 100%;
}

.sidenav-item:hover {
  background: rgba(255, 255, 255, 0.75);
  color: var(--ink);
}

.sidenav-item:hover .sidenav-chevron {
  opacity: 1;
  transform: translateX(0);
}

.sidenav-item.router-link-active {
  background: var(--card);
  border-color: var(--line-strong);
  color: var(--accent-deep);
  font-weight: 600;
}

.sidenav-item.router-link-active .sidenav-icon {
  color: var(--accent);
}

.sidenav-item.router-link-active .sidenav-chevron {
  opacity: 1;
  transform: translateX(0);
  color: var(--accent);
}

/* 移动端：顶栏下方横向滑动的导航条 */
@media (max-width: 768px) {
  .sidenav {
    width: auto;
    height: auto;
    position: sticky;
    top: 3.5rem;
    z-index: 25;
    overflow: visible;
    padding: 0.55rem 1rem;
    background: var(--card);
    border-bottom: 1px solid var(--line);
  }

  .sidenav-group {
    flex-direction: row;
    gap: 0.5rem;
    overflow-x: auto;
    scrollbar-width: none;
  }

  .sidenav-group::-webkit-scrollbar {
    display: none;
  }

  .sidenav-item {
    flex-shrink: 0;
    padding: 0.35rem 0.85rem;
    border-radius: 999px;
    background: var(--bg);
    border: 1px solid var(--line);
    font-size: 0.85rem;
  }

  .sidenav-item.router-link-active {
    background: var(--accent-soft);
    border-color: var(--line-strong);
  }

  .sidenav-chevron {
    display: none;
  }
}
</style>
