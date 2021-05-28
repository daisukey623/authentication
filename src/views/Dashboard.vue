<template>
  <div>
    <div>{{ userName }}さんようこそ</div>
    <div>残高：{{ coin }}</div>
    <h2>ユーザー一覧</h2>
    <router-link to="/register">新規登録はこちらから</router-link>
  </div>
</template>

<script>
import { db } from "../main.js" //
import { auth } from "../main.js" //
export default {
  data() {
    return {
      userName:'',
      coin: '',
    };
  }, 
  created: async function() {
    const doc = await db.collection('users')
      .doc(auth.currentUser.uid)
      .get()
      this.userName = doc.data().name
      this.coin = doc.data().coin
    },
};
</script>
