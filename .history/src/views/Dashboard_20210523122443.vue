<template>
  <div>
    <div>{{ userName }}さんようこそ</div>
    <h2>ユーザー一覧</h2>
    <router-link to="/register">新規登録はこちらから</router-link>
    <button @click="getUser">取得</button>
    <button @click="dotest()">テスト</button>
  </div>
</template>

<script>
// import firebase from 'firebase'
// import { auth } from '../main'
import { db } from '../main'; // ここを追加
export default {
  data() {
    return {
      userName: 'たかし',
      coin: {},
      test: 1000,
    };
  },
  methods: {
    getUser: function() {
      //   const snapshot = await
      //   db.collection('users').doc('横山大将')
      //   console.log(snapshot)

      var user = db.collection('users').doc('JLVLHoWvo7Pe5xTdcjgnwSwhRMS2');
      this.user = user
        .get()
        .then(function(doc) {
          if (doc.exists) {
            console.log('Document data:', doc.data());
            console.log(doc.data().name);
            console.log(this.userName);
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
      console.log(this.userName);
    },
  },
};
</script>
