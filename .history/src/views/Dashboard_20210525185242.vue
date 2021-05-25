<template>
  <div>
    <div>{{ userName }}さんようこそ</div>
    <div>{{ userName }}さんようこそ</div>
    <h2>ユーザー一覧</h2>
    <router-link to="/register">新規登録はこちらから</router-link>
  </div>
</template>

<script>
import { db } from "../main.js" //
export default {
  data() {
    return {
      userName:'',
      coin: 1000,
    };
  }, 
  created: async function() {
    const doc = await db.collection('users')
      .doc('JLVLHoWvo7Pe5xTdcjgnwSwhRMS2')
      .get()
      console.log(doc.data().name)
      this.userName = doc.data().name
    },
};
</script>
