<script setup>
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import SectionHead from '@/components/SectionHead.vue'
import CaseCard from '@/components/CaseCard.vue'
import { cases } from '@/data/site'

const activeType = ref('全部')

const types = ['全部', ...new Set(cases.map((c) => c.type))]

const filtered = computed(() =>
  activeType.value === '全部' ? cases : cases.filter((c) => c.type === activeType.value),
)
</script>

<template>
  <div class="cases">
    <SectionHead
      kicker="CASE WALL"
      title="案例墙"
      sub="我做过的东西都在这里：数据工具、AI 应用、课程与网站。挑一个类型看看。"
    />

    <div class="filter-row" role="tablist" aria-label="案例类型筛选">
      <button
        v-for="t in types"
        :key="t"
        type="button"
        class="filter-chip"
        :class="{ 'filter-chip--active': activeType === t }"
        @click="activeType = t"
      >
        {{ t }}
      </button>
    </div>

    <TransitionGroup name="case-list" tag="div" class="case-grid">
      <CaseCard v-for="item in filtered" :key="item.id" :item="item" />
    </TransitionGroup>

    <p class="cases-note">案例持续补充中 —— 有想深入了解的，欢迎<RouterLink :to="{ path: '/', hash: '#contact' }" class="cases-link">联系我</RouterLink>。</p>
  </div>
</template>

<style scoped>
.filter-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.8rem;
}

.filter-chip {
  font-size: 0.86rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: var(--ink-soft);
  background: var(--bg);
  border: 1px solid var(--line-strong);
  border-radius: 999px;
  padding: 0.3rem 1rem;
  transition: all 0.15s ease;
}

.filter-chip:hover {
  color: var(--accent-deep);
  border-color: var(--accent);
}

.filter-chip--active {
  color: #fff;
  background: var(--accent);
  border-color: var(--accent);
}

.filter-chip--active:hover {
  color: #fff;
}

.case-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.3rem;
}

.case-list-enter-active,
.case-list-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.case-list-enter-from,
.case-list-leave-to {
  opacity: 0;
  transform: translateY(8px);
}

.case-list-leave-active {
  position: absolute;
  visibility: hidden;
}

.cases-note {
  margin-top: 2.2rem;
  text-align: center;
  color: var(--muted);
  font-size: 0.9rem;
}

.cases-link {
  color: var(--accent);
  border-bottom: 1px solid var(--accent);
}

@media (max-width: 900px) {
  .case-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .case-grid {
    grid-template-columns: 1fr;
  }
}
</style>
