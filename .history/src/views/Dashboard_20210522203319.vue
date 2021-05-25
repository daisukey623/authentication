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
      userName:''
    };
  },
  methods: {
    getName:async function() {
      await
       const getget = firebase
        .firestore()
        .collection('user')
        .doc(firebase.auth().currentUser.uid)
        .get(name);
        
    },
  },
};
</script>
