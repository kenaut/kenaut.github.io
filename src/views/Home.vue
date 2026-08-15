<script setup>
import { projects } from '../data/projects'
import { activity } from '../data/activity'
import { profile } from '../data/profile'
import { t } from '../i18n'
import LanguageSwitcher from '../components/LanguageSwitcher.vue'

const links = [
  { name: 'GitHub', url: 'https://github.com/kenaut' },
  { name: 'Bilibili', url: 'https://space.bilibili.com/1143704671' },
  { name: 'YouTube', url: 'https://www.youtube.com/@kenaut-q9e' },
]
</script>

<template>
  <div class="layout">
    <aside class="sidebar">
      <img class="avatar" :src="profile.avatar" :alt="t('sidebar.avatarAlt')" />

      <div class="profile-head">
        <h3 class="nickname">{{ profile.nickname }}</h3>
        <p class="alt-name">{{ profile.altName }}</p>
      </div>

      <table class="info-table">
        <tbody>
          <tr v-for="item in profile.info" :key="item.label">
            <td class="label">{{ item.label }}</td>
            <td class="value">{{ item.value }}</td>
          </tr>
        </tbody>
      </table>

      <div class="profile-block">
        <h3>{{ t('sidebar.orgsTitle') }}</h3>
        <ul class="plain-list">
          <li v-for="org in profile.orgs" :key="org">{{ org }}</li>
        </ul>
      </div>
    </aside>

    <div class="page">
      <header class="nav">
        <div class="nav-top">
          <router-link class="nav-brand" to="/">kenaut</router-link>
          <nav class="nav-links">
            <router-link to="/">{{ t('nav.home') }}</router-link>
            <router-link to="/projects">{{ t('nav.projects') }}</router-link>
            <router-link to="/blog">{{ t('nav.blog') }}</router-link>
            <LanguageSwitcher />
          </nav>
        </div>
        <section class="hero">
          <h1>{{ profile.name }}</h1>
          <p class="tagline">{{ t('home.tagline') }}</p>
          <div class="social">
            <a
              v-for="l in links"
              :key="l.name"
              :href="l.url"
              target="_blank"
              rel="noopener"
              >{{ l.name }}</a
            >
          </div>
        </section>
      </header>

      <main id="top">
        <section class="section activity">
          <h2 class="activity-title">{{ t('home.activityTitle') }}</h2>
          <p class="section-sub">{{ t('home.activitySub') }}</p>
          <ul class="activity-list">
            <li v-for="a in activity" :key="a.repo" class="activity-item">
              <span class="activity-dot"></span>
              <span class="activity-text">{{ a.text }}</span>
              <span class="activity-repo">{{ a.repo }}</span>
            </li>
          </ul>
        </section>

        <section id="projects" class="section">
          <h2>{{ t('home.projectsTitle') }}</h2>
          <p class="section-sub">{{ t('home.projectsSub') }}</p>
          <ul class="project-grid">
            <li v-for="p in projects" :key="p.name" class="project-card">
              <a :href="p.url" target="_blank" rel="noopener">
                <span class="project-path">{{ p.path }}</span>
                <span class="project-name">{{ p.name }}</span>
                <span class="project-desc">{{ p.desc }}</span>
                <span class="project-lang">{{ p.lang }}</span>
              </a>
            </li>
          </ul>
        </section>

        <section id="contact" class="section">
          <h2>{{ t('home.contactTitle') }}</h2>
          <p class="section-sub">{{ t('home.contactSub') }}</p>
          <ul class="contact-list">
            <li v-for="l in links" :key="l.name">
              <a :href="l.url" target="_blank" rel="noopener">{{ l.name }}</a>
            </li>
          </ul>
        </section>
      </main>

      <footer class="footer">
        <p>&copy; {{ new Date().getFullYear() }} kenaut</p>
      </footer>
    </div>
  </div>
</template>
