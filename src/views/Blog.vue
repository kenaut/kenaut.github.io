<script setup>
import { posts } from '../data/posts'

const profile = {
  avatar: '/avatar.jpg',
  name: 'kenaut',
  nickname: '星野砚秋',
  altName: 'keyoweb / 星野けん',
  info: [
    { label: '生日', value: '10月29日' },
    { label: '性别', value: 'MTF' },
    { label: 'MBTI', value: 'ENFP' },
    { label: '身份', value: '个人开发者' },
  ],
  orgs: ['不刘名工作室室长', '豆芽人联盟五常成员', '豆芽人联盟定中区区长'],
}

// 按日期从新到旧排序
const sortedPosts = [...posts].sort((a, b) => b.date.localeCompare(a.date))
</script>

<template>
  <div class="layout">
    <aside class="sidebar">
      <img class="avatar" :src="profile.avatar" alt="头像" />

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
        <h3>组织</h3>
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
            <router-link to="/">主页</router-link>
            <router-link to="/projects">项目</router-link>
            <router-link to="/blog">博客</router-link>
          </nav>
        </div>
      </header>

      <main id="top">
        <section class="section">
          <h2>博客</h2>
          <p class="section-sub">Notes and thoughts.</p>
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
