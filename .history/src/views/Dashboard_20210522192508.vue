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
      firebase.firestore()
      .collection('comments')
        .doc()
        .get();
      console.log('Document data:', doc.data());
  },}}
</script>
