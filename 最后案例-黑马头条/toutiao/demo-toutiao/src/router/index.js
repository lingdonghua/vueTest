import Vue from 'vue'
import VueRouter from 'vue-router'
import User from '@/views/user/User'
import Home from '@/views/home/Home'
Vue.use(VueRouter)

const routes = [
  { path: '/user', component: User },
  { path: '/', component: Home }
]

const router = new VueRouter({
  routes
})

export default router
