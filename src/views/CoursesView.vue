<script setup>
import SectionHead from '@/components/SectionHead.vue'
import CourseCard from '@/components/CourseCard.vue'
import { courseCategories } from '@/data/site'
</script>

<template>
  <div class="wrap page">
    <SectionHead
      kicker="COURSE BOX"
      title="课程盒子 <em>·</em> 六个分类"
      sub="打开盒子，按你的需要取用。六个分类陆续上线，先看看都装了什么。"
    />
    <div class="course-grid">
      <CourseCard v-for="c in courseCategories" :key="c.id" :course="c" />
    </div>
    <p class="course-note">课程清单持续更新中 —— 关注盒子，上新第一时间知道。</p>
  </div>
</template>

<style scoped>
.page {
  padding-bottom: 1rem;
}

.course-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.4rem;
}

.course-note {
  margin-top: 2.4rem;
  text-align: center;
  color: var(--muted);
  font-size: 0.9rem;
}

@media (max-width: 900px) {
  .course-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .course-grid {
    grid-template-columns: 1fr;
  }
}
</style>
