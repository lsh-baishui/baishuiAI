<script setup>
import { RouterLink } from 'vue-router'

const links = [
  { to: '/', label: '首页' },
  { to: '/courses', label: '课程盒子' },
  { to: '/workbench', label: 'AI工作台' },
  { to: '/toolbox', label: 'AI工具箱' },
]

const year = new Date().getFullYear()
</script>

<template>
  <aside class="nav">
    <RouterLink to="/" class="brand" aria-label="白水AI 首页">
      <span class="brand-drop">💧</span>
      <span class="brand-name">白水<em>AI</em></span>
    </RouterLink>

    <nav class="nav-links" aria-label="主导航">
      <RouterLink v-for="link in links" :key="link.to" :to="link.to" class="nav-link">
        {{ link.label }}
      </RouterLink>
    </nav>

    <p class="nav-foot">© {{ year }} 白水AI</p>
  </aside>
</template>

<style scoped>
/* 桌面端：左侧竖排导航栏 */
.nav {
  width: 15rem;
  flex-shrink: 0;
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 2.6rem;
  padding: 2.2rem 1.5rem 1.6rem;
  background: var(--card);
  border-right: 1px solid var(--line);
}

.brand {
  display: inline-flex;
  align-items: baseline;
  gap: 0.4em;
  width: fit-content;
}

.brand-drop {
  font-size: 1.05rem;
  transform: translateY(1px);
}

.brand-name {
  font-family: var(--serif);
  font-weight: 700;
  font-size: 1.15rem;
  letter-spacing: 0.08em;
}

.brand-name em {
  font-style: normal;
  color: var(--accent);
}

.nav-links {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.nav-link {
  font-size: 0.95rem;
  letter-spacing: 0.1em;
  color: var(--ink-soft);
  padding: 0.5rem 0.95rem;
  border-radius: 9px;
  transition: color 0.15s ease, background 0.15s ease;
}

.nav-link:hover {
  color: var(--accent-deep);
  background: var(--gray-soft);
}

.nav-link.router-link-active {
  color: var(--accent-deep);
  background: var(--accent-soft);
  font-weight: 600;
}

.nav-foot {
  margin-top: auto;
  font-size: 0.75rem;
  color: var(--muted);
  letter-spacing: 0.06em;
}

/* 移动端：收窄为顶部横排导航 */
@media (max-width: 768px) {
  .nav {
    width: auto;
    height: auto;
    overflow: visible;
    position: sticky;
    top: 0;
    z-index: 20;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 0.9rem 1.5rem;
    background: rgba(250, 247, 241, 0.92);
    backdrop-filter: blur(8px);
    border-right: none;
    border-bottom: 1px solid var(--line);
  }

  .nav-links {
    flex-direction: row;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .nav-link {
    padding: 0.15rem 0;
    border-radius: 0;
    font-size: 0.85rem;
  }

  .nav-link:hover {
    background: transparent;
  }

  .nav-link.router-link-active {
    background: transparent;
    border-bottom: 2px solid var(--accent);
    padding-bottom: 0.1rem;
  }

  .nav-foot {
    display: none;
  }
}
</style>
