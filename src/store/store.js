import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
import { db } from '../main.js';
import { auth } from '../main.js';
export default new Vuex.Store({
  state: {
    userName: '',
    coin: '',
    id: '',
    userLists: [],
    OtherUser: {
      id: '',
      coin: '',
    },
  },
  getters: {
    userName: (state) => {
      return state.userName;
    },
    coin: (state) => {
      return state.coin;
    },
    id: (state) => {
      return state.id;
    },
    userLists: (state) => {
      return state.userLists;
    },
    OtherUser: (state) => {
      return state.OtherUser;
    },
  },
  mutations: {
    getUser(state, doc) {
      state.userName = doc.data().name;
      state.coin = doc.data().coin;
      state.id = doc.data().id;
    },
    getUserLists(state, doc) {
      state.userLists.push(doc.data());
      state.id = doc.id;
    },
    updateUser(state, e) {
      state.coin - Number(e);
      state.OtherUser.coin + Number(e);
    },
    updateOtherUser(state, { idList, docList, index }) {
      state.OtherUser.id = idList[index];
      state.OtherUser.coin = docList[index].coin;
    },
  },
  actions: {
    getUser({ commit }) {
      const AsyncGetUser = async () => {
        await db
          .collection('users')
          .doc(auth.currentUser.uid)
          .onSnapshot((doc) => {
            commit('getUser', doc);
          });
      };
      AsyncGetUser();
    },
    getUserLists({ commit }) {
      const AsyncGetUserLists = async () => {
        await db.collection('users').onSnapshot((querySnapshot) => {
          // let users = [];
          querySnapshot.forEach((doc) => {
            commit('getUserLists', doc);
          });
        });
      };
      AsyncGetUserLists();
    },
    updateUser({ commit }, e) {
      const AsyncUpdateUser = async () => {
        await db
          .collection('users')
          .doc(auth.currentUser.uid)
          .update({
            coin: this.state.coin - Number(e),
          });
        await db
          .collection('users')
          .doc(this.state.OtherUser.id)
          .update({
            coin: this.state.OtherUser.coin + Number(e),
          });

        const querySnapshot = await db.collection('users').get();
        await querySnapshot.forEach((doc) => {
          commit('getUserLists', doc);
        });
        await commit('updateUser', e);
      };
      AsyncUpdateUser();
    },

    updateOtherUser({ commit }, index) {
      const AsyncUpdateOtherUser = async () => {
        const idList = [];
        const docList = [];
        const querySnapshot = await db.collection('users').get();
        await querySnapshot.forEach((doc) => {
          idList.push(doc.id);
          docList.push(doc.data());
        });
        await commit('updateOtherUser', { idList, docList, index });
      };
      AsyncUpdateOtherUser();
    },
  },
});
