<script setup>
import { posts } from '../data/posts'
import { profile } from '../data/profile'
import { t } from '../i18n'
import LanguageSwitcher from '../components/LanguageSwitcher.vue'

// 按日期从新到旧排序
const sortedPosts = [...posts].sort((a, b) => b.date.localeCompare(a.date))
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
      </header>

      <main id="top">
        <section class="section">
          <h2>{{ t('blog.title') }}</h2>
          <p class="section-sub">{{ t('blog.sub') }}</p>
          <ul class="post-list">
            <li v-for="p in sortedPosts" :key="p.slug" class="post-item">
              <router-link :to="`/blog/${p.slug}`" class="post-link">
                <span class="post-date">{{ p.date }}</span>
                <span class="post-title">{{ p.title }}</span>
              </router-link>
              <p class="post-summary">{{ p.summary }}</p>
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
