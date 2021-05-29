<template>
  <div>
    <div>{{ userName }}さんようこそ</div>
    <div>残高：{{ coin }}</div>
    <h2>ユーザー一覧</h2>
    <router-link to="/register">新規登録はこちらから</router-link>
  </div>
</template>

<script>
import firebase from 'firebase/app';
export default {
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('getUser');
      }
    });
  },
  computed:{
    userName(){ 
      return this.$store.getters.userName
    },
    coin(){
      return this.$store.getters.coin
    }
  }
};
</script>
