<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import MarkdownIt from 'markdown-it'
import { posts } from '../data/posts'
import { profile } from '../data/profile'
import { t } from '../i18n'
import LanguageSwitcher from '../components/LanguageSwitcher.vue'

const route = useRoute()
const md = new MarkdownIt()

// 同步加载所有 md 文章内容
const modules = import.meta.glob('../posts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

const post = computed(() => {
  const slug = route.params.slug
  const meta = posts.find((p) => p.slug === slug)
  const raw = modules[`../posts/${slug}.md`]
  return { meta, raw }
})

const content = computed(() => {
  if (!post.value.raw) return ''
  return md.render(post.value.raw)
})
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
        <article v-if="post.meta" class="post">
          <header class="post-header">
            <h1>{{ post.meta.title }}</h1>
            <p class="post-date">{{ post.meta.date }}</p>
          </header>
          <div class="post-content" v-html="content"></div>
        </article>
        <p v-else class="not-found">{{ t('post.notFound') }}</p>
      </main>

      <footer class="footer">
        <p>&copy; {{ new Date().getFullYear() }} kenaut</p>
      </footer>
    </div>
  </div>
</template>
