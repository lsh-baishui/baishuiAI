<script setup>
defineProps({
  item: { type: Object, required: true },
})
</script>

<template>
  <article class="card card--hover case-card">
    <div class="case-top">
      <span class="case-ico" aria-hidden="true">{{ item.icon }}</span>
      <span class="badge" :class="item.statusType === 'live' ? 'badge--live' : 'badge--soon'">
        {{ item.status }}
      </span>
    </div>
    <div class="case-head">
      <h3 class="case-title">{{ item.title }}</h3>
      <span class="case-type">{{ item.type }}</span>
    </div>
    <p class="case-desc">{{ item.desc }}</p>
    <div class="case-chips">
      <span v-for="chip in item.chips" :key="chip" class="case-chip">{{ chip }}</span>
    </div>
  </article>
</template>

<style scoped>
.case-card {
  padding: 1.6rem 1.6rem 1.7rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  min-height: 13rem;
}

.case-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.case-ico {
  width: 2.6rem;
  height: 2.6rem;
  border-radius: 12px;
  background: var(--gray-soft);
  border: 1px solid var(--line);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
}

.case-head {
  margin-top: 0.7rem;
  display: flex;
  align-items: baseline;
  gap: 0.6rem;
  flex-wrap: wrap;
}

.case-title {
  font-family: var(--serif);
  font-size: 1.22rem;
  font-weight: 700;
  letter-spacing: 0.04em;
}

.case-type {
  font-size: 0.72rem;
  letter-spacing: 0.16em;
  color: var(--accent);
  font-weight: 600;
}

.case-desc {
  margin-top: 0.3rem;
  color: var(--ink-soft);
  font-size: 0.9rem;
  flex: 1;
}

.case-chips {
  margin-top: 0.8rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.case-chip {
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--green);
  background: var(--green-soft);
  border: 1px solid #d5e2d8;
  border-radius: 999px;
  padding: 0.1rem 0.6rem;
}
</style>
