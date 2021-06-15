import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
import { db } from '../main.js';
import { auth } from '../main.js';
export default new Vuex.Store({
  state: {
    userName: '',
    coin: '',
    userLists: []
  },
  getters: {
    userName: (state) => {
      return state.userName;
    },
    coin: (state) => {
      return state.coin;
    },
    userLists: (state) => {
      console.log(state.userLists);
      return state.userLists;
    },
  },
  mutations: {
    getUser(state, doc) {
      state.userName = doc.data().name;
      state.coin = doc.data().coin;
    },
    getUserLists(state, doc) {
      state.userLists.push(doc.data());
    },
  },
  actions: {
    getUser({ commit }) {
      const AsyncGetUser = async () => {
        const doc = await db
          .collection('users')
          .doc(auth.currentUser.uid)
          .get();
        commit('getUser', doc);
      };
      AsyncGetUser();
    },
    getUserLists({ commit }) {
      const AsyncGetUserLists = async () => {
        const querySnapshot = await db.collection('users').get();
        querySnapshot.forEach((doc) => {
          commit('getUserLists', doc);
        });
      };
      AsyncGetUserLists();
    },

  },
});
