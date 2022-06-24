import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue'
import DaftarView from '../views/DaftarView.vue'
import LupaView from '../views/LupaView.vue'
import ResetView from '../views/ResetView.vue'
import HomeView from '../views/HomeView.vue'
import IpsView from '../views/IpsView.vue'
import IpaView from '../views/IpaView.vue'
import AgamaView from '../views/AgamaView.vue'
import KirimView from '../views/KirimView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/daftar',
    name: 'daftar',
    component: DaftarView
  },
  {
    path: '/lupa',
    name: 'lupa',
    component: LupaView
  },
  {
    path: '/reset',
    name: 'reset',
    component: ResetView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/ips',
    name: 'ips',
    component: IpsView
  },
  {
    path: '/ipa',
    name: 'ipa',
    component: IpaView
  },
  {
    path: '/agama',
    name: 'agama',
    component: AgamaView
  },
  {
    path: '/kirim',
    name: 'kirim',
    component: KirimView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
