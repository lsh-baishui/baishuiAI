<script setup>
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import FooterBar from '@/components/FooterBar.vue'
</script>

<template>
  <div class="site">
    <NavBar />
    <div class="site-body">
      <main class="site-main">
        <RouterView v-slot="{ Component }">
          <Transition name="fade" mode="out-in">
            <component :is="Component" />
          </Transition>
        </RouterView>
      </main>
      <FooterBar />
    </div>
  </div>
</template>

<style scoped>
/* 桌面端：左侧导航 + 右侧内容；移动端上下堆叠 */
.site {
  display: flex;
  min-height: 100vh;
  align-items: stretch;
}

.site-body {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
}

.site-main {
  flex: 1;
}

@media (max-width: 768px) {
  .site {
    flex-direction: column;
  }
}
</style>
