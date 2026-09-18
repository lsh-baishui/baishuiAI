<script setup>
import { RouterLink } from 'vue-router'

const links = [
  { to: '/', label: '首页' },
  { to: '/courses', label: '课程盒子' },
  { to: '/workbench', label: 'AI工作台' },
  { to: '/toolbox', label: 'AI工具箱' },
]
</script>

<template>
  <header class="nav">
    <div class="wrap nav-inner">
      <RouterLink to="/" class="brand" aria-label="白水AI 首页">
        <span class="brand-drop">💧</span>
        <span class="brand-name">白水<em>AI</em></span>
      </RouterLink>
      <nav class="nav-links" aria-label="主导航">
        <RouterLink v-for="link in links" :key="link.to" :to="link.to" class="nav-link">
          {{ link.label }}
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(250, 247, 241, 0.92);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--line);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding-top: 0.9rem;
  padding-bottom: 0.9rem;
  flex-wrap: wrap;
}

.brand {
  display: inline-flex;
  align-items: baseline;
  gap: 0.4em;
}

.brand-drop {
  font-size: 1.05rem;
  transform: translateY(1px);
}

.brand-name {
  font-family: var(--serif);
  font-weight: 700;
  font-size: 1.1rem;
  letter-spacing: 0.08em;
}

.brand-name em {
  font-style: normal;
  color: var(--accent);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 1.4rem;
  flex-wrap: wrap;
}

.nav-link {
  font-size: 0.92rem;
  letter-spacing: 0.08em;
  color: var(--ink-soft);
  padding: 0.15rem 0;
  border-bottom: 2px solid transparent;
  transition: color 0.15s ease, border-color 0.15s ease;
}

.nav-link:hover {
  color: var(--accent-deep);
}

.nav-link.router-link-active {
  color: var(--accent);
  border-bottom-color: var(--accent);
}

@media (max-width: 640px) {
  .nav-links {
    gap: 0.9rem;
  }

  .nav-link {
    font-size: 0.85rem;
  }
}
</style>
