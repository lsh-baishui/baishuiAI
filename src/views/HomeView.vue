<script setup>
import { RouterLink } from 'vue-router'
import SectionHead from '@/components/SectionHead.vue'
import CourseCard from '@/components/CourseCard.vue'
import { site, businesses, courseCategories, about, contact } from '@/data/site'
</script>

<template>
  <div class="home">
    <!-- 顶部横幅 -->
    <section class="hero">
      <span class="kicker">BAISHUI · AI</span>
      <h1 class="hero-title">{{ site.slogan }}</h1>
      <p class="hero-tagline">{{ site.tagline }}</p>
      <div class="hero-actions">
        <RouterLink to="/courses" class="btn btn--primary">打开课程盒子</RouterLink>
        <a href="#about" class="btn btn--ghost">了解白水</a>
      </div>
    </section>

    <!-- 三条业务线 -->
    <section class="section">
      <SectionHead
        kicker="WHAT'S INSIDE"
        title="白水AI 里有什么"
        sub="三条业务线，围绕同一件事：让你把 AI 真正用起来。"
      />
      <div class="feature-grid">
        <RouterLink
          v-for="(b, i) in businesses"
          :key="b.num"
          :to="b.to"
          class="feature-card"
          :class="`feature-card--${i}`"
        >
          <div class="feature-top">
            <h3 class="feature-title">{{ b.title }}</h3>
            <span class="badge" :class="b.statusType === 'live' ? 'badge--live' : 'badge--soon'">
              {{ b.status }}
            </span>
          </div>
          <p class="feature-en">{{ b.en }}</p>
          <p class="feature-desc">{{ b.desc }}</p>
          <span class="feature-btn">{{ b.linkLabel }} →</span>
        </RouterLink>
      </div>
    </section>

    <!-- 课程分类快速导航 -->
    <section class="section">
      <SectionHead kicker="QUICK NAV" title="课程分类快速导航" />
      <div class="quick-grid">
        <CourseCard v-for="c in courseCategories" :key="c.id" :course="c" />
      </div>
      <p class="quick-more">
        想看完整介绍？
        <RouterLink to="/courses" class="quick-more-link">进入课程盒子 →</RouterLink>
      </p>
    </section>

    <!-- 关于白水 -->
    <section id="about" class="section">
      <SectionHead :kicker="'ABOUT'" :title="about.title" />
      <div class="about-body">
        <div class="about-avatar" aria-hidden="true">💧</div>
        <div class="about-text">
          <p class="about-name">{{ about.name }} <span class="about-role">· {{ about.role }}</span></p>
          <p v-for="(p, i) in about.paragraphs" :key="i" class="about-p">{{ p }}</p>
        </div>
      </div>
    </section>

    <!-- 联系白水 -->
    <section id="contact" class="section">
      <SectionHead :kicker="'CONTACT'" :title="contact.title" :sub="contact.desc" />
      <div class="contact-grid">
        <div v-for="item in contact.items" :key="item.platform" class="card contact-card">
          <span class="contact-icon">{{ item.icon }}</span>
          <p class="contact-platform">{{ item.platform }}</p>
          <p class="contact-handle">{{ item.handle }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* 顶部横幅 */
.hero {
  text-align: center;
  padding: 3.4rem 2rem 3.2rem;
  border: 1px solid var(--line);
  border-radius: 18px;
  background:
    radial-gradient(900px 260px at 50% -20%, rgba(180, 83, 10, 0.1), transparent 70%),
    linear-gradient(160deg, #fff 30%, var(--accent-soft) 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.9rem;
}

.hero-title {
  font-family: var(--serif);
  font-size: 2.3rem;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.hero-tagline {
  color: var(--ink-soft);
  font-size: 0.98rem;
}

.hero-actions {
  margin-top: 0.7rem;
  display: flex;
  gap: 0.9rem;
  flex-wrap: wrap;
  justify-content: center;
}

/* 业务线大卡 */
.feature-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.4rem;
}

.feature-card {
  border-radius: 16px;
  border: 1px solid var(--line);
  padding: 1.9rem 1.9rem 1.8rem;
  min-height: 15rem;
  display: flex;
  flex-direction: column;
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 34px rgba(44, 40, 35, 0.12);
}

.feature-card--0 {
  background: linear-gradient(118deg, #9c4406 0%, #b4530a 45%, #cf7524 100%);
  border: none;
  color: #fff;
}

.feature-card--1 {
  background: linear-gradient(150deg, #fff 20%, var(--accent-soft) 100%);
}

.feature-card--2 {
  grid-column: 1 / -1;
  background: linear-gradient(120deg, #fff 15%, var(--green-soft) 100%);
  min-height: 0;
  flex-direction: row;
  align-items: center;
  gap: 2.4rem;
  flex-wrap: wrap;
}

.feature-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
}

.feature-title {
  font-family: var(--serif);
  font-size: 1.55rem;
  font-weight: 700;
  letter-spacing: 0.06em;
}

.feature-en {
  margin-top: 0.15rem;
  font-size: 0.66rem;
  letter-spacing: 0.3em;
  font-weight: 600;
  color: var(--accent);
}

.feature-desc {
  margin-top: 0.7rem;
  color: var(--ink-soft);
  font-size: 0.94rem;
  max-width: 30rem;
}

.feature-btn {
  margin-top: auto;
  padding-top: 1.4rem;
}

.feature-card--0 .feature-en {
  color: rgba(255, 255, 255, 0.85);
}

.feature-card--0 .feature-desc {
  color: rgba(255, 255, 255, 0.94);
}

.feature-card--0 .badge {
  background: rgba(255, 255, 255, 0.18);
  color: #fff;
  border-color: rgba(255, 255, 255, 0.4);
}

.feature-btn,
.feature-card--0 .feature-btn {
  margin-top: auto;
  align-self: flex-start;
  width: auto;
  padding: 0.5rem 1.2rem;
  border-radius: 9px;
  font-size: 0.9rem;
  letter-spacing: 0.05em;
  transition: transform 0.15s ease;
}

.feature-card--0 .feature-btn {
  background: #fff;
  color: var(--accent-deep);
  font-weight: 600;
  box-shadow: 0 4px 14px rgba(60, 30, 5, 0.25);
}

.feature-card--1 .feature-btn {
  background: var(--accent);
  color: #fff;
  font-weight: 600;
}

.feature-card--2 .feature-btn {
  background: var(--green);
  color: #fff;
  font-weight: 600;
}

.feature-btn:hover {
  transform: translateX(2px);
}

/* 快速导航 */
.quick-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.2rem;
}

.quick-more {
  margin-top: 1.6rem;
  color: var(--muted);
  font-size: 0.9rem;
  text-align: center;
}

.quick-more-link {
  color: var(--accent);
  border-bottom: 1px solid var(--accent);
}

/* 关于 */
.about-body {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
}

.about-avatar {
  flex: none;
  width: 4.6rem;
  height: 4.6rem;
  border-radius: 50%;
  background: var(--accent-soft);
  border: 1px solid var(--line-strong);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
}

.about-name {
  font-family: var(--serif);
  font-size: 1.15rem;
  font-weight: 700;
}

.about-role {
  color: var(--muted);
  font-weight: 400;
  font-size: 0.92rem;
}

.about-p {
  margin-top: 0.6rem;
  color: var(--ink-soft);
  max-width: 42rem;
  font-size: 0.95rem;
}

/* 联系 */
.contact-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.2rem;
}

.contact-card {
  padding: 1.4rem 1.3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
}

.contact-icon {
  font-size: 1.4rem;
}

.contact-platform {
  font-family: var(--serif);
  font-weight: 700;
  letter-spacing: 0.1em;
}

.contact-handle {
  color: var(--muted);
  font-size: 0.86rem;
}

@media (max-width: 900px) {
  .feature-grid,
  .quick-grid {
    grid-template-columns: 1fr;
  }

  .feature-card--2 {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.3rem;
  }

  .contact-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 2.4rem 1.4rem;
  }

  .hero-title {
    font-size: 1.8rem;
  }

  .about-body {
    flex-direction: column;
    gap: 1.2rem;
  }
}
</style>
