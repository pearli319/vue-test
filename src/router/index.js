import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import Rwd from '../views/Rwd.vue'
// import Vuejs from '../views/Vuejs.vue'
// import Reactjs from '../views/Reactjs.vue'
// import Html5 from '../views/Html5.vue'
// import Nodejs from '../views/Nodejs.vue'
import NotFoundComponent from '../views/NotFoundComponent.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/rwd',
    name: 'Rwd',
    component: () => import('../views/Rwd.vue')
  },
  {
    path: '/vuejs',
    name: 'Vuejs',
    component: () => import('../views/Vuejs.vue')
  },
  {
    path: '/reactjs',
    name: 'Reactjs',
    component: () => import('../views/Reactjs.vue')
  },
  {
    path: '/html5',
    name: 'Html5',
    component: () => import('../views/Html5.vue')
  },
  {
    path: '/nodejs',
    name: 'Nodejs',
    component: () => import('../views/Nodejs.vue')
  },
  { path: '/:pathMatch(.*)', component: NotFoundComponent }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  // Lazy loading routes - dynamic imports
  // 優點: 等到進入這個 route 才開始載入
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
