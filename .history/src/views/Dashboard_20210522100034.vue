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
      // ▼ document取得
      // const db = firebase.firestore();
      // const doc = await db
      //   .collection('comments')
      //   .doc('04ttF9rboAzPIGaiKtre')
      //   .get();
      // console.log('Document data:', doc.data());
      // console.log('クリック');

      ▼ Collection

    },
  },
};
</script>
