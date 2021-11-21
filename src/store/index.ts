import Vue from 'vue'
import Vuex from 'vuex'

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
}

export default new Vuex.Store({
  state: {
    url: '',
    port: null,
  },
  getters: {

  },
  mutations: {
  },
  actions: {
  },
  modules: {
    appbar,
    connection,
  }
})
