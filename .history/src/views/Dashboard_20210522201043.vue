<template>
  <div>
    <div>{{ getName }}さんようこそ</div>
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
  computed: {
     console.log()
    getName() {
      return firebase
        .firestore()
        .collection('user')
        .doc(firebase.auth().currentUser.uid)
        .get().data();
        
    },
  },
};
</script>
