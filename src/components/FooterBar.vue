<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <p>© {{ year }} 白水AI · 李松浩</p>
    <p>托管于 GitHub Pages</p>
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  padding: 0.9rem 0.5rem 0.2rem;
  color: var(--muted);
  font-size: 0.8rem;
  letter-spacing: 0.06em;
}
</style>
