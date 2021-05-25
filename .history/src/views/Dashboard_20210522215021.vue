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
      userName: async function() {
      const db = firebase.firestore();
      const snapshot = await db
        .collection('users')
        .where('use_id', '==', 'JLVLHoWvo7Pe5xTdcjgnwSwhRMS2')
        .get();
      snapshot.forEach((doc) => {
        console.log(doc.id, '=>', doc.data());
      });
    },
    };
  },
   methods: {
    getName:async function() {
       const getusername = await firebase
        .firestore()
        .collection('user')
        .doc(firebase.auth().currentUser.uid)
        .get(name);
        console.log(getusername)
    },
  },
};
</script>
