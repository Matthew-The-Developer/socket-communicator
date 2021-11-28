import Vue from 'vue';
import Vuex, { Module } from 'vuex';
import { AppBarState, AppState, ConnectionState, DialogState } from '@/types';
import { os } from '@/models/OperatingSystem';
import { browser } from '@/models/Browser';

Vue.use(Vuex);

const appbar: Module<AppBarState, AppState> = {
  namespaced: true,
  state: () => ({
    visible: false,
  }),
  getters: {
    visible: (state: AppBarState) => state.visible,
  },
  mutations: {
    visible: (state: AppBarState, visible: boolean) => state.visible = visible,
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
    valid: (state: ConnectionState) => state.valid,
    url: (state: ConnectionState) => state.url,
    port: (state: ConnectionState) => state.port,
  },
  mutations: {
    valid: (state: ConnectionState, validity: boolean) => state.valid = validity,
    url: (state: ConnectionState, url: string) => state.url = url,
    port: (state: ConnectionState, port: string) => state.port = port,
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
    install: (state: DialogState) => state.install,
  },
  mutations: {
    install: (state: DialogState, value: boolean) => state.install = value,
  },
  actions: {
    async open ({ commit }, dialog: string) {
      commit(dialog, true);
    }
  }
};

export default new Vuex.Store<AppState>({
  state: {
    os: '',
    browser: '',
    installed: false,
    installPrompt: null as any | null,
  },
  getters: {
    os: (state: AppState) => state.os,
    browser: (state: AppState) => state.browser,
    installed: (state: AppState) => state.installed,
    installPrompt: (state: AppState) => state.installPrompt,
  },
  mutations: {
    os: (state: AppState, os: string) => state.os = os,
    browser: (state: AppState, browser: string) => state.browser = browser,
    installed: (state: AppState, installed: boolean) => state.installed = installed,
    installPrompt: (state: AppState, prompt: any) => state.installPrompt = prompt,
  },
  actions: {
    getOS ({ commit }) {
      const header = [
        navigator.platform,
        navigator.userAgent,
        navigator.appVersion,
        navigator.vendor
      ];

      const agent = header.join(' ');
      
      let found = null;
      os.forEach(operatingSystem => {
        const regex = new RegExp(operatingSystem.value, 'i');
        if (regex.test(agent)) {
          found = operatingSystem.name;
        }
      });

      if (found) {
        commit('os', found);
      } else {
        commit('os', 'unknown');
      }
    },
    getBrowser ({ commit }) {
      const header = [
        navigator.platform,
        navigator.userAgent,
        navigator.appVersion,
        navigator.vendor
      ];

      const agent = header.join(' ');

      let found = null;
      browser.forEach(b => {
        const regex = new RegExp(b.value, 'i');
        if (regex.test(agent)) {
          found = b.name;
        }
      });

      if (found) {
        commit('browser', found);
      } else {
        commit('browser', 'unknown');
      }
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
