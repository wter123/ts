import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import wsLogin from '../views/Home.vue'
Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: function () {
  //     return import('../views/About.vue')
  //   }
  // },
  {
    path: '/ws-register',
    name: 'ws-register',
    component:function(){
      return import('../components/ws-register.vue')
    }
  },
  {
    path: '/ws-login',
    name: 'ws-login',
    component:function(){
      return import('../components/ws-login.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
