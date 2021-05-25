<template>
  <div>
    <div>nameさんようこそ</div>
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
  created() {
    axios.get('/comments').then((response) => {
      this.posts = response.data.documents;
    });
  },
  getName() {
    axios.get('/comments').then((response) => {
      this.userName = response.data.documents.;
    })
  },
  methods: {
    createComment() {
      axios.post('/comments', {
        fields: {
          name: {
            stringValue: this.name,
          },
          comment: {
            stringValue: this.comment,
          },
        },
      });
      this.name = '';
      this.comment = '';
    },
  },
};
</script>
