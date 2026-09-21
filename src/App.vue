<script setup>
import { RouterView } from 'vue-router'
import TopBar from '@/components/TopBar.vue'
import SideNav from '@/components/SideNav.vue'
import FooterBar from '@/components/FooterBar.vue'
</script>

<template>
  <div class="site">
    <TopBar />
    <div class="shell">
      <SideNav />
      <main class="site-main">
        <div class="panel">
          <RouterView v-slot="{ Component }">
            <Transition name="fade" mode="out-in">
              <component :is="Component" />
            </Transition>
          </RouterView>
        </div>
        <FooterBar />
      </main>
    </div>
  </div>
</template>

<style scoped>
/* BigModel 式布局：顶部品牌栏 + 左侧导航 + 右侧内容卡片 */
.site {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--page-bg);
}

.shell {
  flex: 1;
  display: flex;
  align-items: stretch;
  padding: 1.4rem 1.6rem;
  max-width: 100rem;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
}

.site-main {
  flex: 1;
  min-width: 0;
  min-height: calc(100vh - 3.5rem - 2.8rem);
  display: flex;
  flex-direction: column;
}

.panel {
  flex: 1;
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 2.6rem 3rem;
}

@media (max-width: 768px) {
  .shell {
    padding: 0.8rem;
    flex-direction: column;
  }

  .site-main {
    min-height: auto;
  }

  .panel {
    padding: 1.6rem 1.3rem;
    border-radius: 14px;
  }
}
</style>
