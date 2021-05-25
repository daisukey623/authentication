<template>
  <div>
    <button @click="handleClickFetchButton">取得</button>
    <div>{{ userName }}さんようこそ</div>
    <div>残高：{{}}</div>
    <h2>ユーザー一覧</h2>
  </div>
</template>

<script>

export default {
  data() {
    return {
      name: '',
      comment: '',
    };
  },
  methods: {
    handleClickFetchButton() {
      console.log(firebase)
      const db = firebase.firestore();
      db.collection('comments').doc('04ttF9rboAzPIGaiKtre').get().then((doc) => {
         console.log('Document data:', doc.data());
      })
    },
  },
};
</script>
