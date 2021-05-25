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
import signupUserWithEmailAndPassword from 'src/firebase/auth.js'
export default {
  data() {
    return {
      userName: '',
      email: '',
      password: '',
    };
  },
  methods: {
    sendRegister:async function(){
    //   const user = await signupUserWithEmailAndPassword(this.email,this.passwordpassword)
    const signupUserWithEmailAndPassword = async (email,password) => {
  try {
     const user = await firebase.auth().createUserWithEmailAndPassword(email, password)
     console.log('登録成功')
     return user;

  } catch(error) {
    console.log(errot);
    alert('登録失敗')
  }
}
      console.log(signupUserWithEmailAndPassword)
      console.log('こんにた')
    },
  },
};
</script>
