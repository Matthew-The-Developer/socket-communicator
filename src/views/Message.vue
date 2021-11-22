<template>
  <v-layout fill-height column justify-end>
    <v-toolbar
      class="flex-grow-0 mx-4 mb-4"
      rounded='xl'
      height="64"
    >
      <v-text-field
        label="Message"
        placeholder="Say hi"
        append-outer-icon="mdi-send"
        hide-details
        single-line
        rounded
        filled
        dense
      ></v-text-field>
    </v-toolbar>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Message',

  data: () => ({
    message: '',
  }),
})
</script>

<style>

</style>