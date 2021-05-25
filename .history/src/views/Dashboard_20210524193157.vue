<template>
  <div>
    <div>{{ userName }}さんようこそ</div>
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
      userName: 'takasi',
      coin: {},
      test: 1000,
    };
  },
  methods: {
    getUser: function() {
      console.log(this.userName);
      let getName = '';
      const user = db.collection('users').doc('JLVLHoWvo7Pe5xTdcjgnwSwhRMS2');
      user
        .get()
        .then(function(doc) {
          if (doc.exists) {
            console.log('Document data:', doc.data());
            console.log(doc.data().name);
            getName = doc.data().name;
            console.log(getName);
            console.log('1個目のthen')
          } else {
            console.log('No such document!');
          }
        }).then(function() {
          console.log('2個目のthen')
          console.log()
        })
        .catch(function(error) {
          console.log('Error getting document:', error);
        });
    },
    dotest() {
      console.log(this.test);
    },
  },
};
</script>
