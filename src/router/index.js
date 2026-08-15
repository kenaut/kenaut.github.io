import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import Blog from '../views/Blog.vue'
import Post from '../views/Post.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/projects', name: 'projects', component: Projects },
    { path: '/blog', name: 'blog', component: Blog },
    { path: '/blog/:slug', name: 'post', component: Post },
  ],
})

export default router
