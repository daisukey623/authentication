<template>
  <div>
    <div>{{ userName }}さんようこそ</div>
    <h2>ユーザー一覧</h2>
    <router-link to="/register">新規登録はこちらから</router-link>
    <button @click="getUser()">取得</button>
  </div>
</template>

<script>
// import firebase from 'firebase'
// import { auth } from '../main'
import { db } from "../main.js" //
export default {
  data() {
    return {
      userName:'',
      coin: {},
      test: 1000,
    };
  }, 
  created: async function() {
    console.log('created発火1')
    const doc = db.collection('users')
      .doc('JLVLHoWvo7Pe5xTdcjgnwSwhRMS2')
      .get()

    console.log('created発火2')
      console.log(doc.data().name)
      this.userName = doc.data().name
    },
};
</script>
