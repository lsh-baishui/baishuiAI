<script setup>
defineProps({
  kicker: { type: String, default: '' },
  title: { type: String, required: true },
  sub: { type: String, default: '' },
})
</script>

<template>
  <div class="section-head">
    <span v-if="kicker" class="kicker">{{ kicker }}</span>
    <h2 class="section-title section-head-title" v-html="title"></h2>
    <p v-if="sub" class="section-sub" v-html="sub"></p>
  </div>
</template>

<style scoped>
.section-head-title {
  margin-top: 1rem;
}
</style>
