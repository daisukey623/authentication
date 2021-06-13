<template>
  <div>
    <div class="container">
      <div>{{ LoginUser.name }}さんようこそ</div>
      <div>残高：{{ LoginUser.coin }}</div>
      <div><button @click="logOut()">ログアウト</button></div>
      <h2>ユーザー一覧</h2>
      <div v-for="(userList, index) in userLists" :key="`first-${index}`">
        <br />
        <div class="columns is-centered is-mobile">
          <div class="column is-2 has-text-left">名前：{{ userList.name }}</div>
          <div class="column is-2 has-text-left">
            コイン：{{ userList.coin }}
          </div>

          <div class="column is-2 has-text-left">
            <button @click="openModal(userList)">ボタン</button>
          </div>
          <Modal
            :val="modalItem"
            v-show="showContent"
            @close="closeModal"
          ></Modal>
          <div class="column is-2 has-text-left">
            <button @click="openModalSend(index)">送る</button>
          </div>
          <ModalSend
            v-show="showContentSend"
            @close="closeModal"
            :valSend="modalCoin"
            :sentIndex="ReceiveIndex"
          ></ModalSend>
        </div>
      </div>
    </div>

    <router-link to="/register">新規登録はこちらから</router-link>
  </div>
</template>

<script>
import { auth } from '../main';
import Modal from '@/views/Modal';
import ModalSend from '@/views/ModalSend';
export default {
  components: {
    Modal,
    ModalSend,
  },

  data() {
    return {
      showContent: false,
      showContentSend: false,
      modalItem: '',
      modalCoin: '',
      ReceiveIndex: '',
    };
  },
  created() {
    this.$store.dispatch('getUser');
    this.$store.dispatch('getUserLists');
  },
  computed: {
    LoginUser() {
      return this.$store.getters.LoginUser;
    },
    userLists() {
      return this.$store.getters.userLists;
    },
  },
  methods: {
    logOut: async function() {
      await auth.signOut().then(this.$store.dispatch('ResetUserLists'));
    },
    openModal(userList) {
      this.showContent = true;
      this.modalItem = userList;
    },
    openModalSend(index) {
      this.showContentSend = true;
      this.modalCoin = this.coin;
      this.$store.dispatch('getReceiveUserIndex', index);
    },
    closeModal() {
      this.showContent = false;
      this.showContentSend = false;
    },
  },
};
</script>
