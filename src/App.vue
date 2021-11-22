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
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  data: () => ({}),
});
</script>
