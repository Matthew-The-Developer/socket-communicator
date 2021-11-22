<template>
  <v-layout fill-height column justify-end>
    <v-text-field
      v-model="message"
      label="Message"
      placeholder="Say hi"
      hide-details="auto"
      class="flex-grow-0 mb-4"
      filled
      shaped
    ></v-text-field>
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