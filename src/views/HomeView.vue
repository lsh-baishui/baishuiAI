<script setup>
import { RouterLink } from 'vue-router'
import SectionHead from '@/components/SectionHead.vue'
import { site, businesses, about, contact } from '@/data/site'
</script>

<template>
  <div>
    <!-- 首屏 -->
    <section class="hero">
      <div class="wrap hero-inner">
        <span class="kicker">BAISHUI · AI</span>
        <h1 class="hero-title">白水<em>AI</em></h1>
        <p class="hero-slogan">{{ site.slogan }}</p>
        <p class="hero-tagline">{{ site.tagline }}</p>
        <div class="hero-actions">
          <RouterLink to="/courses" class="btn btn--primary">打开课程盒子</RouterLink>
          <a href="#about" class="btn btn--ghost">了解白水</a>
        </div>
      </div>
    </section>

    <!-- 三条业务线 -->
    <section class="section">
      <div class="wrap">
        <SectionHead
          kicker="WHAT'S INSIDE"
          title="白水AI 里有什么"
          sub="三条业务线，围绕同一件事：让你把 AI 真正用起来。"
        />
        <div class="biz-grid">
          <RouterLink v-for="b in businesses" :key="b.num" :to="b.to" class="card card--hover biz-card">
            <div class="biz-top">
              <span class="biz-num">{{ b.num }}</span>
              <span class="badge" :class="b.statusType === 'live' ? 'badge--live' : 'badge--soon'">
                {{ b.status }}
              </span>
            </div>
            <h3 class="biz-title">{{ b.title }}</h3>
            <p class="biz-en">{{ b.en }}</p>
            <p class="biz-desc">{{ b.desc }}</p>
            <span class="biz-link">{{ b.linkLabel }} →</span>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- 关于白水 -->
    <section id="about" class="section">
      <div class="wrap">
        <SectionHead :kicker="'ABOUT'" :title="about.title" />
        <div class="about-body">
          <div class="about-avatar" aria-hidden="true">💧</div>
          <div class="about-text">
            <p class="about-name">
              {{ about.name }} <span class="about-role">· {{ about.role }}</span>
            </p>
            <p v-for="(p, i) in about.paragraphs" :key="i" class="about-p">{{ p }}</p>
            <p class="about-p">{{ site.intro }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 联系方式 -->
    <section class="section">
      <div class="wrap">
        <SectionHead :kicker="'CONTACT'" :title="contact.title" :sub="contact.desc" />
        <div class="contact-grid">
          <div v-for="item in contact.items" :key="item.platform" class="card contact-card">
            <span class="contact-icon">{{ item.icon }}</span>
            <p class="contact-platform">{{ item.platform }}</p>
            <p class="contact-handle">{{ item.handle }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  padding: 5.5rem 0 4.5rem;
  text-align: center;
  background:
    radial-gradient(1200px 400px at 50% -10%, rgba(180, 83, 10, 0.06), transparent 70%),
    var(--bg);
  border-bottom: 1px solid var(--line);
}

.hero-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.1rem;
}

.hero-title {
  font-family: var(--serif);
  font-size: 3.6rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  line-height: 1.2;
}

.hero-title em {
  font-style: normal;
  color: var(--accent);
}

.hero-slogan {
  font-family: var(--serif);
  font-size: 1.25rem;
  color: var(--ink-soft);
  letter-spacing: 0.12em;
}

.hero-tagline {
  color: var(--muted);
  font-size: 0.95rem;
  max-width: 34rem;
}

.hero-actions {
  margin-top: 1.2rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

/* 业务线卡片 */
.biz-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.4rem;
}

.biz-card {
  padding: 1.8rem 1.7rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.biz-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.biz-num {
  font-family: var(--serif);
  font-size: 1.05rem;
  color: var(--line-strong);
  font-weight: 700;
}

.biz-title {
  margin-top: 0.9rem;
  font-family: var(--serif);
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.06em;
}

.biz-en {
  font-size: 0.66rem;
  letter-spacing: 0.3em;
  color: var(--accent);
  font-weight: 600;
}

.biz-desc {
  margin-top: 0.7rem;
  color: var(--ink-soft);
  font-size: 0.92rem;
  flex: 1;
}

.biz-link {
  margin-top: 1.2rem;
  font-size: 0.88rem;
  color: var(--accent);
  letter-spacing: 0.08em;
}

/* 关于 */
.about-body {
  display: flex;
  gap: 2.2rem;
  align-items: flex-start;
}

.about-avatar {
  flex: none;
  width: 5.2rem;
  height: 5.2rem;
  border-radius: 50%;
  background: var(--accent-soft);
  border: 1px solid var(--line-strong);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.2rem;
}

.about-name {
  font-family: var(--serif);
  font-size: 1.2rem;
  font-weight: 700;
}

.about-role {
  color: var(--muted);
  font-weight: 400;
  font-size: 0.95rem;
}

.about-p {
  margin-top: 0.7rem;
  color: var(--ink-soft);
  max-width: 44rem;
}

/* 联系 */
.contact-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.4rem;
}

.contact-card {
  padding: 1.6rem 1.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
}

.contact-icon {
  font-size: 1.5rem;
}

.contact-platform {
  font-family: var(--serif);
  font-weight: 700;
  font-size: 1.05rem;
  letter-spacing: 0.1em;
}

.contact-handle {
  color: var(--muted);
  font-size: 0.88rem;
}

@media (max-width: 900px) {
  .biz-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 760px) {
  .hero {
    padding: 4rem 0 3.4rem;
  }

  .hero-title {
    font-size: 2.6rem;
  }

  .contact-grid {
    grid-template-columns: 1fr;
  }

  .about-body {
    flex-direction: column;
    gap: 1.4rem;
  }
}
</style>
