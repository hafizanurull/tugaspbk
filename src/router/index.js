import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import myApps from '../views/myApps.vue'
import PostsView from '../views/PostsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/myApps',
    name: 'myApps',
    component: myApps
  },
  {
    path: '/posts',
    name: 'posts',
    component: PostsView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
