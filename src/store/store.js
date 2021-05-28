import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
import {
  db
} from '../main.js';
import {
  auth
} from '../main.js';
export default new Vuex.Store({
  state: {
    userName: '',
    coin: '',
  },
  mutations: {
    getUser(state, doc) {
      state.userName = doc.data().name;
      state.coin = doc.data().coin;
      console.log(doc.data().name);
    },
  },
  actions: {
    getUser({commit}) {
      const AsyncGetUser = async () => {
        const doc = await db
          .collection('users')
          .doc(auth.currentUser.uid)
          .get();
        console.log(doc.data());
        commit('getUser',doc);
      }
      AsyncGetUser()
    },
  },
});