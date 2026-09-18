<script setup>
import { RouterLink } from 'vue-router'
import { site, contact } from '@/data/site'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="wrap footer-inner">
      <div class="footer-brand">
        <p class="footer-logo">💧 白水<em>AI</em></p>
        <p class="footer-tagline">{{ site.tagline }}</p>
      </div>

      <nav class="footer-nav" aria-label="页脚导航">
        <RouterLink to="/" class="footer-link">首页</RouterLink>
        <RouterLink to="/courses" class="footer-link">课程盒子</RouterLink>
        <RouterLink to="/workbench" class="footer-link">AI工作台</RouterLink>
        <RouterLink to="/toolbox" class="footer-link">AI工具箱</RouterLink>
      </nav>

      <ul class="footer-contact">
        <li v-for="item in contact.items" :key="item.platform">
          <span class="footer-contact-icon">{{ item.icon }}</span>
          {{ item.platform }}：{{ item.handle }}
        </li>
      </ul>
    </div>

    <div class="wrap footer-meta">
      <p>© {{ year }} 白水AI · 李松浩</p>
      <p>托管于 GitHub Pages</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--line);
  background: var(--card);
  margin-top: 4rem;
}

.footer-inner {
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr;
  gap: 2.5rem;
  padding-top: 3rem;
  padding-bottom: 2.5rem;
}

.footer-logo {
  font-family: var(--serif);
  font-weight: 700;
  font-size: 1.15rem;
  letter-spacing: 0.08em;
}

.footer-logo em {
  font-style: normal;
  color: var(--accent);
}

.footer-tagline {
  margin-top: 0.5rem;
  color: var(--muted);
  font-size: 0.88rem;
}

.footer-nav {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.footer-link {
  font-size: 0.9rem;
  color: var(--ink-soft);
  width: fit-content;
}

.footer-link:hover {
  color: var(--accent-deep);
}

.footer-contact {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  font-size: 0.9rem;
  color: var(--ink-soft);
}

.footer-contact-icon {
  margin-right: 0.3em;
}

.footer-meta {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  padding-top: 1.1rem;
  padding-bottom: 1.4rem;
  border-top: 1px solid var(--line);
  color: var(--muted);
  font-size: 0.8rem;
  letter-spacing: 0.06em;
}

@media (max-width: 760px) {
  .footer-inner {
    grid-template-columns: 1fr;
    gap: 1.8rem;
  }
}
</style>
