<script setup>
import { RouterLink } from 'vue-router'
import SectionHead from '@/components/SectionHead.vue'
import { profile, contact } from '@/data/site'
</script>

<template>
  <div class="resume">
    <!-- 首屏 -->
    <section class="hero">
      <div class="hero-avatar" aria-hidden="true">{{ profile.avatarChar }}</div>
      <div class="hero-body">
        <h1 class="hero-name">你好，我是{{ profile.name }}</h1>
        <p class="hero-roles">{{ profile.roles }}</p>
        <div class="hero-tags">
          <span v-for="tag in profile.tags" :key="tag" class="hero-tag">{{ tag }}</span>
        </div>
        <div class="hero-actions">
          <RouterLink to="/cases" class="btn btn--primary">查看案例墙</RouterLink>
          <a href="#contact" class="btn btn--ghost">联系我</a>
        </div>
      </div>
    </section>

    <!-- 关于我 -->
    <section class="section">
      <SectionHead kicker="ABOUT" title="关于我" />
      <div class="about-card">
        <p v-for="(p, i) in profile.about" :key="i" class="about-p">{{ p }}</p>
      </div>
    </section>

    <!-- 工作经历 -->
    <section class="section">
      <SectionHead kicker="EXPERIENCE" title="工作经历" />
      <div class="timeline">
        <div v-for="job in profile.experience" :key="job.role + job.org" class="tl-item">
          <div class="tl-head">
            <span class="tl-role">{{ job.role }}</span>
            <span class="tl-org">{{ job.org }}</span>
            <span class="tl-time">{{ job.time }}</span>
          </div>
          <ul class="tl-points">
            <li v-for="point in job.points" :key="point">{{ point }}</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 技能 -->
    <section class="section">
      <SectionHead kicker="SKILLS" title="技能" />
      <div class="skills-card">
        <div v-for="group in profile.skills" :key="group.group" class="skill-group">
          <h3 class="skill-title">{{ group.group }}</h3>
          <div class="skill-pills">
            <span v-for="item in group.items" :key="item" class="skill-pill">{{ item }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 联系 -->
    <section id="contact" class="section">
      <SectionHead kicker="CONTACT" :title="contact.title" :sub="contact.desc" />
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
/* 首屏 */
.hero {
  display: flex;
  align-items: center;
  gap: 2.4rem;
  padding: 2.8rem 2.6rem;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: linear-gradient(150deg, #fff 40%, var(--accent-soft) 100%);
}

.hero-avatar {
  flex: none;
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent), var(--accent-deep));
  color: #fff;
  font-family: var(--serif);
  font-size: 3rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 26px rgba(180, 83, 10, 0.28);
}

.hero-name {
  font-family: var(--serif);
  font-size: 2.1rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  line-height: 1.3;
}

.hero-roles {
  margin-top: 0.4rem;
  color: var(--ink-soft);
  font-weight: 600;
  font-size: 1.05rem;
}

.hero-tags {
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.hero-tag {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--ink-soft);
  background: var(--bg);
  border: 1px solid var(--line-strong);
  border-radius: 999px;
  padding: 0.22rem 0.85rem;
}

.hero-actions {
  margin-top: 1.5rem;
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
}

/* 关于我 */
.about-card {
  border-left: 3px solid var(--accent);
  padding: 0.4rem 0 0.4rem 1.6rem;
}

.about-p {
  color: var(--ink-soft);
  font-size: 0.97rem;
}

.about-p + .about-p {
  margin-top: 0.7rem;
}

/* 时间线 */
.timeline {
  position: relative;
  margin-left: 0.3rem;
  padding-left: 1.8rem;
  border-left: 2px solid var(--line-strong);
}

.tl-item {
  position: relative;
  padding-bottom: 1.6rem;
}

.tl-item:last-child {
  padding-bottom: 0;
}

.tl-item::before {
  content: '';
  position: absolute;
  left: calc(-1.8rem - 0.48rem);
  top: 0.55rem;
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 50%;
  background: var(--accent);
  border: 2px solid var(--card);
  box-shadow: 0 0 0 3px var(--accent-soft);
}

.tl-head {
  display: flex;
  align-items: baseline;
  gap: 0.4rem 1rem;
  flex-wrap: wrap;
}

.tl-role {
  font-family: var(--serif);
  font-size: 1.15rem;
  font-weight: 700;
}

.tl-org {
  color: var(--accent-deep);
  font-weight: 600;
  font-size: 0.94rem;
}

.tl-time {
  margin-left: auto;
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--muted);
  background: var(--gray-soft);
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 0.12rem 0.8rem;
  white-space: nowrap;
}

.tl-points {
  margin-top: 0.5rem;
  padding-left: 1.2em;
  color: var(--ink-soft);
  font-size: 0.94rem;
}

.tl-points li {
  margin: 0.2rem 0;
}

.tl-points li::marker {
  color: var(--accent);
}

/* 技能 */
.skills-card {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.8rem;
}

.skill-title {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--muted);
  letter-spacing: 0.14em;
  margin-bottom: 0.7rem;
}

.skill-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-pill {
  font-size: 0.86rem;
  font-weight: 600;
  color: var(--ink-soft);
  background: var(--gray-soft);
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 0.28rem 0.95rem;
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
  .skills-card {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .contact-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .hero {
    flex-direction: column;
    text-align: center;
    gap: 1.4rem;
    padding: 2.2rem 1.5rem;
  }

  .hero-tags,
  .hero-actions {
    justify-content: center;
  }

  .tl-time {
    margin-left: 0;
  }
}
</style>
