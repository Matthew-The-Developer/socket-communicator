import Vue from 'vue'
import Vuex from 'vuex'
import { io } from "socket.io-client";

Vue.use(Vuex)

const appbar = {
  namespaced: true,
  state: () => ({
    visible: false as boolean,
  }),
  getters: {
    visible: (state: any) => state.visible,
  },
  mutations: {
    visible: (state: any, visible: boolean) => state.visible = visible,
  },
  actions: {

  },
};

const connection = {
  namespaced: true,
  state: () => ({
    valid: false,
    url: '',
    port: '',
  }),
  getters: {
    valid: (state: any) => state.valid,
    url: (state: any) => state.url,
    port: (state: any) => state.port,
  },
  mutations: {
    valid: (state: any, validity: boolean) => state.valid = validity,
    url: (state: any, url: string) => state.url = url,
    port: (state: any, port: string) => state.port = port,
  },
  actions: {

  },
};

export default new Vuex.Store({
  state: {
    socket: null,
    error: false,
    loading: false,
  },
  getters: {
    error: (state: any) => state.error,
    loading: (state: any) => state.loading,
  },
  mutations: {
    socket: (state: any, socket: any) => state.socket = socket,
    error: (state: any, error: boolean) => state.error = error,
  },
  actions: {
    createCoonection({ commit }) {
      commit('socket', null);
    }
  },
  modules: {
    appbar,
    connection,
  }
});
