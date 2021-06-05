<template>
  <div>
      <div class="container">
    <div>{{ userName }}さんようこそ</div>
    <div>残高：{{ coin }}</div>
    <div><button @click="logOut()">ログアウト</button></div>
    <h2>ユーザー一覧</h2>
    <div v-for="(userList,index) in userLists" :key="`first-${index}`">
      <br />
        <div class="columns is-centered is-mobile">
          <div class="column is-2 has-text-left">名前：{{ userList.name }}</div>

          <div class="column is-2 has-text-left">
            <button @click="openModal(userList)">ボタン</button>
        </div>
          <Modal
            :val="modalItem"
            v-show="showContent"
            @close="closeModal"
          ></Modal>
          </div>
      </div>
    </div>
    <router-link to="/register">新規登録はこちらから</router-link>
  </div>
</template>

<script>
import { auth } from '../main';
import Modal from '@/views/Modal';
export default {
  components: {
    Modal,
  },

  data() {
    return {
      showContent: false,
      modalItem: '',
    };
  },
  created() {
    this.$store.dispatch('getUser');
    this.$store.dispatch('getUserLists');
  },
  computed: {
    userName() {
      return this.$store.getters.userName;
    },
    coin() {
      return this.$store.getters.coin;
    },
    userLists() {
      return this.$store.getters.userLists;
    },
  },
  methods: {
    logOut: async function() {
      await auth.signOut();
    },
    openModal(userList) {
      this.showContent = true;
      this.modalItem = userList;
    },
    closeModal() {
      this.showContent = false;
    },
  },
};
</script>

