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
import axios from '../axios-auth';
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    sendLogin() {
      axios
        .post(
          '/accounts:signInWithPassword?key=AIzaSyALEeG-uCX4SsTwYA51b2yka3Lb7Iv2w4Q',
          {
            email: this.email,
            password: this.password,
            returnSecureToken: true,
          }
        )
        .then((response) => {
          console.log(response);
          this.$router.push('/')
        });
      this.email = '';
      this.password = '';
    },
  },
};
</script>
