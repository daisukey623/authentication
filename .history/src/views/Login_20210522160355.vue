<template>
  <div>
    <h2>ログイン画面</h2>
    <label for="name">Email：</label>
    <input id="remail" type="email" v-model="email" />
    <br /><br />
    <label for="password">パスワード：</label>
    <input id="password" type="password" v-model="password" />
    <br /><br />
    <button @click="sendLogin">ログイン</button>
    <br /><br />
    <router-link to="/register">新規登録はこちらから</router-link>
  </div>
</template>

<script>
import firebase from '../main.js'
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    signIn: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          this.$router.push('/home');
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
};
</script>
