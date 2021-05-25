<template>
  <div>
    <div>{{userName}}さんようこそ</div>
    <div>残高：{{}}</div>
    <h2>ユーザー一覧</h2>

    <!-- dataコメント反映 -->
    <!-- <div
      v-for="post in posts"
      :key="post.name"
    >
      <br>
      <div>名前：{{post.fields.name.stringValue}}</div>
      <div>コメント：{{post.fields.comment.stringValue}}</div>
    </div> -->
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      comment: '',
      posts: [],
      userName:'',
    };
  },
}
</script>
