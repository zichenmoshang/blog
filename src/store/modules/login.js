import API from '@/api/login';
import * as types from '../mutation-types';

const state = {
  access: false
};

const getters = {
  getAccess: state => state.access
};

const mutations = {
  [types.SAVE_ACCESS](state, access) {
    state.access = access;
    window.sessionStorage.setItem('token', 'token');
  }
};

const actions = {
  login({commit}, params) {
    return new Promise((resolve, reject) => {
      API(params).then(res => {
        commit(types.SAVE_ACCESS, true);
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
