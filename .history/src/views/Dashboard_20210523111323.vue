<template>
  <div>
    <div>{{ user.name }}さんようこそ</div>
    <h2>ユーザー一覧</h2>
    <router-link to="/register">新規登録はこちらから</router-link>
    <button @click="user">取得</button>
  </div>
</template>

<script>
// import firebase from 'firebase'
// import { auth } from '../main'
import { db } from '../main'; // ここを追加
export default {
  data() {
    return {
      user: {},
      coin: {},
    }
  },
  methods:{
    getUser(){
      db.collection('users').doc('JLVLHoWvo7Pe5xTdcjgnwSwhRMS2')
</script>