<template>
  <div>
    <h2>新規登録画面</h2>
    <label for="name">ユーザー名：</label>
    <input
      id="name"
      type="nema"
      v-model="name"
    >
    <br><br>
    <label for="email">Email：</label>
    <input
      id="email"
      type="email"
      v-model="email"
    >
    <br><br>
    <label for="password">パスワード：</label>
    <input
      id="password"
      type="password"
      v-model="password"
    >
    <br><br>
    <button @click="register">新規登録</button>
  </div>
</template>

<script>
import axios from '../axios-auth' ;
export default {
  data() {
    return {
      name:'',
      email: '',
      password: '',
    };
  },
  methods:{
    register(){
      axios.post('/accounts:signUp?key=AIzaSyALEeG-uCX4SsTwYA51b2yka3Lb7Iv2w4Q',
      {
        email:this.email,
        password:this.password,
        returnSecureToken:true,
      })
      .then(response => {
        console.log(response) ;
        this.name = ''
        this.email = ''
        this.password = ''
      }) 
    }
  }
};
</script>


