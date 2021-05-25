<template>
  <div>
    <h2>新規登録画面</h2>
    <label for="userName">ユーザー名：</label>
    <input id="userName" type="text" v-model="userName" />
    <br /><br />
    <label for="email">Email：</label>
    <input id="remail" type="email" v-model="email" />
    <br /><br />
    <label for="password">パスワード：</label>
    <input id="password" type="password" v-model="password" />
    <br /><br />
    <button @click="sendRegister">新規登録</button>
    <br /><br />
    <router-link to="/login">ログインはこちらから</router-link>
  </div>
</template>

<script>
import firebase from 'firebase';
export default {
  data() {
    return {
      userName: '',
      email: '',
      password: '',
    };
  },
  methods: {
    sendRegister: function() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((result) => {
          result.user.updateProfile({
            displayName: this.userName,

          }).then ((res => {
            return res setDb()
          }));
          alert('アカウントを作成しました');
          this.$router.push('/');
        })
        .catch((error) => {
          alert(error.message);
        });
    },
    setDb() {
      console.log('セット');
      firebase
        .firestore()
        .collection('users')
        .doc('1')
        .set(
          {
            name:'田中',
            conin: 1000,
          },
          // { marge: true }
        );
    },
  },
};
</script>
