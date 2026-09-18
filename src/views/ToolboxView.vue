<script setup>
import SectionHead from '@/components/SectionHead.vue'
import { toolbox } from '@/data/site'
</script>

<template>
  <div class="wrap page">
    <SectionHead kicker="AI TOOLBOX" :title="toolbox.headline" :sub="toolbox.desc" />

    <div class="chip-grid">
      <span v-for="c in toolbox.categories" :key="c" class="chip">{{ c }}</span>
    </div>

    <div class="note-card card">
      <p class="note-title">收录标准</p>
      <p class="note-text">{{ toolbox.note }}</p>
    </div>

    <div class="soon-banner">
      <span class="badge badge--soon">敬请期待</span>
      <p class="soon-text">工具清单正在整理中，上线后按上面的分类逐个呈现。</p>
    </div>
  </div>
</template>

<style scoped>
.page {
  padding-top: 4.5rem;
  padding-bottom: 2rem;
}

.chip-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.chip {
  font-size: 0.9rem;
  letter-spacing: 0.08em;
  color: var(--green);
  background: var(--green-soft);
  border: 1px solid #d5e2d8;
  border-radius: 999px;
  padding: 0.35rem 1.1rem;
}

.note-card {
  margin-top: 2.2rem;
  padding: 1.6rem 1.8rem;
  border-left: 3px solid var(--accent);
}

.note-title {
  font-family: var(--serif);
  font-weight: 700;
  letter-spacing: 0.08em;
}

.note-text {
  margin-top: 0.4rem;
  color: var(--ink-soft);
  font-size: 0.94rem;
}

.soon-banner {
  margin-top: 2.2rem;
  border: 1px dashed var(--line-strong);
  border-radius: 14px;
  background: var(--gray-soft);
  padding: 1.6rem 1.8rem;
  display: flex;
  align-items: center;
  gap: 1.4rem;
}

.soon-text {
  color: var(--ink-soft);
  font-size: 0.94rem;
}

@media (max-width: 640px) {
  .page {
    padding-top: 3.2rem;
  }

  .soon-banner {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.9rem;
  }
}
</style>
