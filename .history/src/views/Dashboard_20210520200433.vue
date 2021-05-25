<template>
  <div>
    <div>{{userName}}さんようこそ</div>
    <div>残高：{{}}</div>
    <h2>ユーザー一覧</h2>
  </div>
</template>

<script>

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
