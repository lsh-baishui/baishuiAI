<script setup>
import { RouterView } from 'vue-router'
import SideNav from '@/components/SideNav.vue'
import FooterBar from '@/components/FooterBar.vue'
</script>

<template>
  <div class="site">
    <div class="shell">
      <SideNav />
      <main class="site-main">
        <div class="content">
          <div class="panel">
            <RouterView v-slot="{ Component }">
              <Transition name="fade" mode="out-in">
                <component :is="Component" />
              </Transition>
            </RouterView>
          </div>
          <FooterBar />
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
/* AIHOT 式布局：白色侧边栏通栏 + 右侧暖灰内容区 */
.site {
  min-height: 100vh;
  background: var(--page-bg);
}

.shell {
  display: flex;
  align-items: stretch;
  min-height: 100vh;
}

.site-main {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1.8rem;
}

.content {
  flex: 1;
  width: 100%;
  max-width: 84rem;
  margin: 0 auto;
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
    flex-direction: column;
  }

  .site-main {
    padding: 0.8rem;
  }

  .panel {
    padding: 1.6rem 1.3rem;
    border-radius: 14px;
  }
}
</style>
