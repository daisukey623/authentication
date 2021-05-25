<template>
  <div>
        <button>取得</button>
    <div>{{userName}}さんようこそ</div>
    <div>残高：{{}}</div>
    <h2>ユーザー一覧</h2>
  </div>
</template>

<script>
const handleClickFetchButton = () => {
  console.log('クリック')
}

export default {
  data() {
    return {
      name: '',
      comment: '',
    };
  },
  methods{
    
  }
}
</script>
