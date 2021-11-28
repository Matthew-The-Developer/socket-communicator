<template>
  <v-app>
    <v-app-bar
      v-if="$store.getters['appbar/visible']"
      app
    >
      <v-img
        :src="require('@/assets/logo.svg')"
        max-height="40"
        max-width="40"
      ></v-img>

      <v-spacer/>

      <v-btn
        class="mr-0"
        color="red"
        icon
      >
        <v-icon>mdi-connection</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>

    <v-footer 
      v-if="error"
      class="pa-0"
      app 
    >
      <v-alert
        v-model="error"
        type="error"
        class="flex-grow-1 ma-0"
        rounded="0"
        dismissible
      >
        I'm an error alert.
      </v-alert>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  data: () => ({}),

  computed: {
    error: {
      get () {
        return this.$store.getters['error'];
      },
      set (value: boolean) {
        this.$store.commit('error', value);
      }
    }
  },

  created () {
    window.addEventListener('beforeinstallprompt', (e: Event) => {
      e.preventDefault();
      console.log('hasn\'t been installed');
      this.$store.commit('installPrompt', e);
    });
    window.addEventListener('appinstalled', () => {
      console.log('has been installed');
      this.$store.commit('installed', true);
    });
    this.$store.dispatch('getOS');
    this.$store.dispatch('getBrowser');
  },
});
</script>
