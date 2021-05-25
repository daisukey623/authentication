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
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
};
</script>
