import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import router from './router';
import firebase from 'firebase/app';


new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
