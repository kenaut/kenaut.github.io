<script setup>
import { projects } from '../data/projects'

const profile = {
  avatar: '/avatar.jpg',
  name: 'kenaut',
  tagline: '一个只会用 AI（划掉）前后端兼备的自由开发者',
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

const links = [
  { name: 'GitHub', url: 'https://github.com/kenaut' },
  { name: 'Bilibili', url: 'https://space.bilibili.com/1143704671' },
  { name: 'YouTube', url: 'https://www.youtube.com/@kenaut-q9e' },
]

const activity = [
  { text: '创建 qrdock：轻量级系统操作启动器', repo: 'kenaut/qrdock' },
  { text: '推送 mirrors 仓库更新', repo: 'kenaut/mirrors' },
  { text: '更新 yaywiki 站点', repo: 'kenaut/yaywiki' },
  { text: '公开 webu2.0_cn-tokenizer1', repo: 'kenaut/webu2.0_cn-tokenizer1' },
  { text: '为 aptman 提交 PR', repo: 'Limou233/aptman' },
  { text: '创建 kenaut.github.io 站点', repo: 'kenaut/kenaut.github.io' },
]
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
        <section class="hero">
          <h1>{{ profile.name }}</h1>
          <p class="tagline">{{ profile.tagline }}</p>
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
          <h2 class="activity-title">最近活动</h2>
          <p class="section-sub">public build log</p>
          <ul class="activity-list">
            <li v-for="a in activity" :key="a.repo" class="activity-item">
              <span class="activity-dot"></span>
              <span class="activity-text">{{ a.text }}</span>
              <span class="activity-repo">{{ a.repo }}</span>
            </li>
          </ul>
        </section>

        <section id="projects" class="section">
          <h2>代表作</h2>
          <p class="section-sub">Project cards that behave like work, not stats.</p>
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
          <h2>联系</h2>
          <p class="section-sub">Reach out, or follow along.</p>
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
