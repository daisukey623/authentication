import Vue from 'vue'
import VueRouter from 'vue-router'
import Comments from '../views/Dashboard.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Comments
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
