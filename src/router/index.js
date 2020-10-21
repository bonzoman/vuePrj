import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'

import Intro from '@/components/Intro'
import Day from '@/components/Day'
import Calendar from '@/components/Calendar'
import Settng from '@/components/Setting'
import About from '@/components/About'


Vue.use(VueRouter)

const routes = [
  /*
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue')
  }
  */
  {
    path: '/',
    name: 'intro',
    component: Intro
  },
  {
    path: '/day/:date',
    name: 'day',
    component: Day
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: Calendar
  },
  {
    path: '/setting',
    name: 'setting',
    component: Settng
  },
  {
    path: '/about',
    name: 'about',
    component: About
  } 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
