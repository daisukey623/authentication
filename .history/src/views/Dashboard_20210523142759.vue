<template>
  <div>
    <div>{{ getUser }}さんようこそ</div>
    <h2>ユーザー一覧</h2>
    <router-link to="/register">新規登録はこちらから</router-link>
    <button @click="getUser()">取得</button>
  </div>
</template>

<script>
// import firebase from 'firebase'
// import { auth } from '../main'
import { db } from '../main'; // ここを追加
export default {
  data() {
    return {
      getUser: ,
      coin: {},
      test: 1000,
    };
  },
  methods: {
    getUser: function() {
      const user = db.collection('users').doc('JLVLHoWvo7Pe5xTdcjgnwSwhRMS2');
      user
        .get()
        .then(function(doc) {
          if (doc.exists) {
            console.log('Document data:', doc.data());
            console.log(doc.data().name); 
          } else {
            console.log('No such document!');
          }
        })
        .catch(function(error) {
          console.log('Error getting document:', error);
        });
    },
    dotest() {
      console.log(this.test);
      // console.log(this.userName);
    },
  },
};
</script>
