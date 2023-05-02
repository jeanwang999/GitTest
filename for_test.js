import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PageA from '@/components/pages/PageA'
import PageUser from '@/components/pages/PageUser'

// 這行只是更新github測試用的註解 沒有實質意義


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/PageA',
    component: PageA
  },
  {
    path: '/user/:name',
    component: PageUser
  },
  {
    path: '/user/id/:num',
    // name: 'page',
    component: PageUser
  }
]


