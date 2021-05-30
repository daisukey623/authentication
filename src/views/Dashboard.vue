<template>
  <div>
    <div>{{ userName }}さんようこそ</div>
    <div>残高：{{ coin }}</div>
    <div><button @click="logOut()">ログアウト</button></div>
    <h2>ユーザー一覧</h2>
    <router-link to="/register">新規登録はこちらから</router-link>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import { auth } from '../main';
export default {
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.$router.push('/login');
        window.alert('ログアウトしました');
        } else {
        this.$store.dispatch('getUser');
      }
    });
  },
  computed: {
    userName() {
      return this.$store.getters.userName;
    },
    coin() {
      return this.$store.getters.coin;
    },
  },
  methods: {
    logOut: async function() {
     await auth.signOut();
    },
  },
};
</script>
