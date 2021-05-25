<template>
  <div>
    <button @click="handleClickFetchButton">取得</button>
    <div>{{ userName }}さんようこそ</div>
    <div>残高：{{}}</div>
    <h2>ユーザー一覧</h2>
  </div>
</template>

<script>
import firebase from '../main.js';
export default {
  data() {
    return {
      name: '',
      comment: '',
    };
  },
  methods: {
    handleClickFetchButton: async function() {
      const db = firebase.firestore();
      const doc =  db
        .collection('comments')
        .doc('04ttF9rboAzPIGaiKtre')
        .get();
      console.log('Document data:', doc.data());
      console.log('クリック');
    },
  },
};
</script>
