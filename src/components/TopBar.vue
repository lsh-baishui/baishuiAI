<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="topbar">
    <RouterLink to="/" class="brand" aria-label="白水AI 首页">
      <span class="brand-drop">💧</span>
      <span class="brand-name">白水<em>AI</em></span>
    </RouterLink>
    <RouterLink :to="{ path: '/', hash: '#contact' }" class="topbar-link">联系白水</RouterLink>
  </header>
</template>

<style scoped>
.topbar {
  position: sticky;
  top: 0;
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3.5rem;
  padding: 0 1.5rem;
  background: var(--card);
  border-bottom: 1px solid var(--line);
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
  font-size: 1.15rem;
  letter-spacing: 0.08em;
}

.brand-name em {
  font-style: normal;
  color: var(--accent);
}

.topbar-link {
  font-size: 0.88rem;
  letter-spacing: 0.06em;
  color: var(--ink-soft);
  padding: 0.35rem 1rem;
  border: 1px solid var(--line-strong);
  border-radius: 999px;
  background: var(--bg);
  transition: color 0.15s ease, border-color 0.15s ease;
}

.topbar-link:hover {
  color: var(--accent-deep);
  border-color: var(--accent);
}
</style>
