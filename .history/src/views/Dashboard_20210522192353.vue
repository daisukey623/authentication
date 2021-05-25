<template>
  <div>
    <div>{{ userName }}さんようこそ</div>
    <h2>ユーザー一覧</h2>
    <router-link to="/register">新規登録はこちらから</router-link>
  </div>
</template>

<script>
import firebase from 'firebase';
export default {
  data() {
    return {
      // name: '',
      comment: '',
      userName: '',
    };
  },
  methods: {
    getName() {
      const db = firebase.firestore();
      // ▼ document取得
      // const doc = await db
      //   .collection('comments')
      //   .doc('04ttF9rboAzPIGaiKtre')
      //   .get();
      // console.log('Document data:', doc.data());
  },
};
</script>
