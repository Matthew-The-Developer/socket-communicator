<template>
  <v-dialog
    v-model="dialog"
    width="560"
  >
    <v-card rounded="lg">
      <v-toolbar elevation="0">
        <v-toolbar-title>Installion Guide</v-toolbar-title>

        <v-spacer/>

        <v-btn 
          @click="dialog = false"
          icon
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <v-card-text>
        <p>OS: {{ $store.getters['os'] }}</p>
        <p>Browser: {{ $store.getters['browser'] }}</p>
        <p>{{ navigator.userAgent }}</p>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Install',

  data: () => ({
    navigator,
    window,
    deviceInfo: {
      isChrome: (): boolean => navigator.userAgent.includes('Chrome'),
    }
  }),

  computed: {
    dialog: {
      get () {
        return this.$store.getters['dialogs/install'];
      },
      set (value: boolean) {
        this.$store.commit('dialogs/install', value);
      }
    },
  }
})
</script>

<style>

</style>