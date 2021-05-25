<template>
  <div>
    <div>{{ user.name }}さんようこそ</div>
    <h2>ユーザー一覧</h2>
    <router-link to="/register">新規登録はこちらから</router-link>
    <button @click="getUser">取得</button>
  </div>
</template>

<script>
// import firebase from 'firebase'
// import { auth } from '../main'
import { db } from '../main'; // ここを追加
export default {
  data() {
    return {
      user: {},
      coin: {},
    };
  },
  methods: {
    getUser:async function () {
      const snapshot = await
      db.collection('users').doc() 
      console.log(snapshot)
    },
  },
};
</script>
