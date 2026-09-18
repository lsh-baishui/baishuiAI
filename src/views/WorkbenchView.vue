<script setup>
import SectionHead from '@/components/SectionHead.vue'
import { workbench } from '@/data/site'
</script>

<template>
  <div class="wrap page">
    <SectionHead kicker="AI WORKBENCH" :title="workbench.headline" :sub="workbench.desc" />

    <div class="feature-grid">
      <div v-for="(f, i) in workbench.features" :key="f.title" class="card card--hover feature-card">
        <span class="feature-num">{{ String(i + 1).padStart(2, '0') }}</span>
        <h3 class="feature-title">{{ f.title }}</h3>
        <p class="feature-desc">{{ f.desc }}</p>
      </div>
    </div>

    <div class="soon-banner">
      <span class="badge badge--soon">敬请期待</span>
      <p class="soon-text">
        AI工作台正在打磨中，形态：{{ workbench.form }}。<br />
        想第一时间试用？先从<a href="#/" class="soon-link">首页</a>了解白水AI 的其他业务线。
      </p>
    </div>
  </div>
</template>

<style scoped>
.page {
  padding-top: 4.5rem;
  padding-bottom: 2rem;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.4rem;
}

.feature-card {
  padding: 1.8rem 1.7rem 2rem;
}

.feature-num {
  font-size: 0.72rem;
  letter-spacing: 0.3em;
  color: var(--accent);
  font-weight: 600;
}

.feature-title {
  margin-top: 0.8rem;
  font-family: var(--serif);
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 0.05em;
}

.feature-desc {
  margin-top: 0.5rem;
  color: var(--ink-soft);
  font-size: 0.92rem;
}

.soon-banner {
  margin-top: 2.6rem;
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

.soon-link {
  color: var(--accent);
  border-bottom: 1px solid var(--accent);
}

@media (max-width: 900px) {
  .feature-grid {
    grid-template-columns: 1fr;
  }
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
