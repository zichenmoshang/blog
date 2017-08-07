import API from '@/api/login';
import * as types from '../mutation-types';

const state = {
  access: false,
  userName: ''
};

const getters = {
  getAccess: state => state.access,
  getUserName: state => state.userName
};

const mutations = {
  [types.SAVE_ACCESS](state, access) {
    state.access = access;
    window.sessionStorage.setItem('accessToken', 'token');
  },
  [types.SAVE_USERNAME](state, userName) {
    state.userName = userName;
    window.sessionStorage.setItem('userName', userName);
  }
};

const actions = {
  login({commit}, params) {
    return new Promise((resolve, reject) => {
      API(params).then(res => {
        commit(types.SAVE_ACCESS, true);
        commit(types.SAVE_USERNAME, '张三');
        resolve(res);
      }).catch(err => {
        console.error(err);
      });
    });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
