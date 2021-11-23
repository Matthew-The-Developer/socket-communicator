<template>
  <v-container
    class="background"
    fill-height 
    fluid
  >
    <v-row>
      <v-col>
        <v-card
          max-width="560"
          class="mx-auto my-auto"
          rounded="xl"
          outlined
        >
          <v-card-title class="justify-center text-h5 font-weight-black">Connect</v-card-title>
          <v-card-subtitle class="text-center">Socketio</v-card-subtitle>

          <v-card-text>
            <v-form v-model="valid">
              <v-text-field
                v-model="url"
                :rules="urlRules"
                type="text"
                label="URL"
                placeholder="https://localhost/"
                filled
                rounded
                dense
              ></v-text-field>

              <v-text-field
                v-model="port"
                :rules="portRules"
                type="number"
                label="Port"
                placeholder="3000"
                filled
                rounded
                dense
              ></v-text-field>

              <v-btn
                @click="connect()"
                :disabled="!valid"
                :loading="$store.getters['loading']"
                color="primary"
                rounded
                block
                large
                :dark="valid"
              >
                connect
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import router from '@/router';
import Vue from 'vue';

export default Vue.extend({
  name: 'Connection',

  data: () => ({
    urlRules: [
      (v: string) => !!v || 'URL is required',
    ],
    portRules: [
      (v: number) => !!v || 'Port is required',
      (v: number) => v >= 0 || 'Port must be greater than 0',
      (v: number) => v <= 65535 || 'Port must be less than 65535',
    ]
  }),

  computed: {
    valid: {
      get () {
        return this.$store.getters['connection/valid'];
      },
      set (value: boolean) {
        this.$store.commit('connection/valid', value);
      }
    },
    url: {
      get () {
        return this.$store.getters['connection/url'];
      },
      set (value: string) {
        this.$store.commit('connection/url', value);
      }
    },
    port: {
      get () {
        return this.$store.getters['connection/port'];
      },
      set (value: string) {
        this.$store.commit('connection/port', value);
      }
    }
  },

  methods: {
    connect (): void {
      router.push({ name: 'Message' });
    }
  }
})
</script>

<style lang="scss">
@import '~vuetify/src/styles/settings/_variables';

.background {
  background-image: url('~@/assets/pattern.svg');
  background-size: 100%;
  background-repeat: repeat;
}

.background-1 {
  background-color: rgba($color: #40aa26, $alpha: 0.5);
}
.background-2 {
  background-color: rgba($color: #265baa, $alpha: 0.5);
}
.background-3 {
  background-color: rgba($color: #a626aa, $alpha: 0.5);
}
.background-4 {
  background-color: rgba($color: #aa7c26, $alpha: 0.5);
}

@media #{map-get($display-breakpoints, 'xs-only')} {
  .background {
    background-size: 50%;
  }
}
@media #{map-get($display-breakpoints, 'sm-only')} {
  .background {
    background-size: 25%;
  }
}
@media #{map-get($display-breakpoints, 'md-only')} {
  .background {
    background-size: 25%;
  }
}
@media #{map-get($display-breakpoints, 'lg-and-up')} {
  .background {
    background-size: 15%;
  }
}
</style>