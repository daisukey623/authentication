import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import firebase from 'firebase/app';

Vue.use(VueRouter);

const routes = [{
    path: '/',
    component: Dashboard,
    meta: {
      authFlag: true
    },
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/register',
    component: Register,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

var authFlag = true;
router.beforeEach((to, from, next) => {
      firebase.auth().onAuthStateChanged(function (user) {
        if (authFlag) {
          authFlag = false;
          if (user) {
            next();
          } else {
            next('/login');
          }
        } else {
          next();
        }
      })
    });

      export default router;