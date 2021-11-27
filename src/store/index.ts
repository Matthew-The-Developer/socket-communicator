import Vue from 'vue';
import Vuex, { Module } from 'vuex';
import { AppBarState, AppState, ConnectionState, DialogState } from '@/types';

Vue.use(Vuex);

const appbar: Module<AppBarState, AppState> = {
  namespaced: true,
  state: () => ({
    visible: false,
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

const connection: Module<ConnectionState, AppState> = {
  namespaced: true,
  state: () => ({
    valid: false,
    url: '',
    port: '',
    error: false,
    loading: false,
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

const dialogs: Module<DialogState, AppState> = {
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

export default new Vuex.Store<AppState>({
  state: {
    installed: false,
    installPrompt: null as any | null,
  },
  getters: {
    installed: (state: any) => state.installed,
    installPrompt: (state: any) => state.installPrompt,
  },
  mutations: {
    installed: (state: any, installed: boolean) => state.installed = installed,
    installPrompt: (state: any, prompt: any) => state.installPrompt = prompt,
  },
  actions: {
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
