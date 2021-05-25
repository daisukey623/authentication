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
import axios from '../axios-auth';
export default {
  data() {
    return {
      userName: '',
      email: '',
      password: '',
    };
  },
  methods: {
    sendRegister() {
      axios
        .post('/accounts:signUp?key=AIzaSyALEeG-uCX4SsTwYA51b2yka3Lb7Iv2w4Q', {
          userName:this.userName,
          email: this.email,
          password: this.password,
          returnSecureToken: true,
        })
        .then((response) => {
          console.log(response);
        });
      this.userName =  '';
      this.email = '';
      this.password = '';
    },
  },
};
</script>
