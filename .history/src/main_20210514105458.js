import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import router from './router';

Vue.config.productionTip = false;

axios.defaults.baseURL =
  'https://firestore.googleapis.com/v1/projects/vuejs-http-de60c/databases/(default)/documents';

const interceptorsRequest = axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

const interceptorsResponse = axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.request.eject(interceptorsRequest);
axios.interceptors.response.eject(interceptorsResponse);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
