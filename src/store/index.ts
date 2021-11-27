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

const dialogs = {
  namespaced: true,
  state: () => ({
    install: false,
  }),
  getters: {
    install: (state: any) => state.install,
  },
  mutations: {
    install: (state: any, value: boolean) => state.install = value,
  },
  actions: {
    async open ({ commit }, dialog: string) {
      commit(dialog, true);
    }
  }
};

export default new Vuex.Store({
  state: {
    installed: false,
    installPrompt: null as any | null,
    socket: null,
    error: false,
    loading: false,
  },
  getters: {
    installed: (state: any) => state.installed,
    installPrompt: (state: any) => state.installPrompt,
    error: (state: any) => state.error,
    loading: (state: any) => state.loading,
  },
  mutations: {
    installed: (state: any, installed: boolean) => state.installed = installed,
    installPrompt: (state: any, prompt: any) => state.installPrompt = prompt,
    socket: (state: any, socket: any) => state.socket = socket,
    error: (state: any, error: boolean) => state.error = error,
  },
  actions: {
    createCoonection ({ commit }) {
      commit('socket', null);
    },
    async promptInstall ({ commit, state }) {
      if (state.installPrompt) {
        state.installPrompt.prompt();
      }
    }
  },
  modules: {
    appbar,
    connection,
    dialogs
  }
});
