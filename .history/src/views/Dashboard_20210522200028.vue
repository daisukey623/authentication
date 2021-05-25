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
    getName() {
      return firebase
        .firestore()
        .collection('user')
        .doc(firebase.auth().currentUser.uid)
        .get().then((doc) => {
    if (doc.exists) {
        console.log("Document data:", doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});;
        
    },
  },
};
</script>
