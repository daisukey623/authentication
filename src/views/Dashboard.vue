<template>
  <div>
    <div>{{ $store.state.userName }}さんようこそ</div>
    <div>残高：{{ $store.state.coin }}</div>
    <h2>ユーザー一覧</h2>
    <router-link to="/register">新規登録はこちらから</router-link>
  </div>
</template>

<script>
import firebase from 'firebase/app';
export default {
  data() {
    return {
      userName: "",
      coin: ""
    };
  },
  created() {
  firebase.auth().onAuthStateChanged((user)=> {
    if (user) {
    this.$store.dispatch('getUser')
    }
  })
  },
};
</script>
