import Vue from 'vue';
import App from './App.vue';
import router from './router';
import firebase from 'firebase/app';
import 'firebase/firestore';


  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyALEeG-uCX4SsTwYA51b2yka3Lb7Iv2w4Q",
    authDomain: "vuejs-http-de60c.firebaseapp.com",
    projectId: "vuejs-http-de60c",
    storageBucket: "vuejs-http-de60c.appspot.com",
    messagingSenderId: "897481049619",
    appId: "1:897481049619:web:c9e774a648e193e87c61e6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

export const db = firebase.firestore().collection('users')
export const auth = firebase.auth()