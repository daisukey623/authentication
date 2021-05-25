<template>
  <div>
    <div>{{ userName }}さんようこそ</div>
    <h2>ユーザー一覧</h2>
    <router-link to="/register">新規登録はこちらから</router-link>
  </div>
</template>

<script>
import firebase from 'firebase'
import { auth } from '../main'
import { db } from '../main' // ここを追加
export default {
  data() {
    return {
      // name: '',
      comment: '',
      userName:''
    };
  },
   created: {
    getName:async function() {
      this.userName = db.collection('users')
        .where('use_id', '==', 'JLVLHoWvo7Pe5xTdcjgnwSwhRMS2')
        .get();
    },
  },
};
</script>
