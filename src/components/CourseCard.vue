<script setup>
defineProps({
  course: { type: Object, required: true },
})
</script>

<template>
  <article class="card card--hover course-card">
    <div class="course-top">
      <h3 class="course-title">{{ course.title }}</h3>
      <span class="badge badge--soon">{{ course.status }}</span>
    </div>
    <p class="course-en">{{ course.en }}</p>
    <p class="course-desc">{{ course.desc }}</p>
  </article>
</template>

<style scoped>
.course-card {
  padding: 1.7rem 1.6rem 1.9rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  min-height: 11rem;
}

.course-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
}

.course-title {
  font-family: var(--serif);
  font-size: 1.35rem;
  font-weight: 700;
  letter-spacing: 0.05em;
}

.course-en {
  font-size: 0.68rem;
  letter-spacing: 0.3em;
  color: var(--accent);
  font-weight: 600;
}

.course-desc {
  margin-top: 0.4rem;
  color: var(--ink-soft);
  font-size: 0.92rem;
}
</style>
