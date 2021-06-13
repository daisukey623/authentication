import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
import { db } from '../main.js';
import { auth } from '../main.js';
export default new Vuex.Store({
  state: {
    LoginUser: {
      id: '',
      name: '',
      coin: '',
    },
    userLists: [],
    userListsID: [],
    ReceiveUserListsIndex: '',
  },
  getters: {
    LoginUser: (state) => {
      return state.LoginUser;
    },
    userLists: (state) => {
      return state.userLists;
    },
  },
  mutations: {
    getUser(state, doc) {
      state.LoginUser = doc.data();
    },
    getUserLists(state, doc) {
      state.userLists.push(doc.data());
      state.userListsID.push(doc.id);
    },
    updateUsers(state, Coin) {
      state.userLists[state.ReceiveUserListsIndex].coin += Number(Coin);
    },
    ResetUserLists(state) {
      state.LoginUser = '';
      state.userLists = [];
      state.userListsID = [];
    },
    getReceiveUserIndex(state, index) {
      state.ReceiveUserListsIndex = index;
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
          querySnapshot.forEach((doc) => {
            commit('getUserLists', doc);
          });
        });
      };
      AsyncGetUserLists();
    },
    updateUsers({ commit }, sendedCoin) {
      const AsyncUpdateUser = async () => {
        const LoginUser = await db
          .collection('users')
          .doc(auth.currentUser.uid);
        db.runTransaction((transaction) => {
          return transaction.get(LoginUser).then((Doc) => {
            if (!Doc.exists) {
              console.log('noexxist');
            }
            const upLoginUser = Doc.data().coin;
            if (upLoginUser > 0) {
              transaction.update(LoginUser, {
                coin: this.state.LoginUser.coin - Number(sendedCoin.sendedCoin),
              });
              return upLoginUser;
            } else {
              return Promise.reject('残高が足りません.');
            }
          });
        })
          .then(() => {
            console.log('Population increased to ');
          })
          .catch((err) => {
            console.error(err);
          });
        const userLists = await db
          .collection('users')
          .doc(this.state.userListsID[this.state.ReceiveUserListsIndex]);

        db.runTransaction((transaction) => {
          return transaction.get(userLists).then((Doc) => {
            if (!Doc.exists) {
              console.log('noexxist');
            }
            const upUserLists = Doc.data().coin;
            if (upUserLists > 0) {
              transaction.update(userLists, {
                coin:
                  Number(
                    this.state.userLists[this.state.ReceiveUserListsIndex].coin
                  ) + Number(sendedCoin.sendedCoin),
              });
              return upUserLists;
            } else {
              return Promise.reject('残高が足りません.');
            }
          });
        });
        await commit('updateUsers', sendedCoin.sendedCoin);
      };
      AsyncUpdateUser();
    },
    getReceiveUserIndex({ commit }, index) {
      commit('getReceiveUserIndex', index);
    },
    ResetUserLists({ commit }) {
      commit('ResetUserLists');
    },
  },
});
