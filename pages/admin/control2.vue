<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="8">
        <div class="screen-status">
          <v-chip v-if="connected" :color="stateColor" small outlined>
            {{ state }}
          </v-chip>
          <v-chip v-else color="error" small outlined>offline</v-chip>
        </div>
        <div class="screen-winner">
          <div v-if="state === 'spinning'">
            <v-progress-circular color="primary" :width="3" indeterminate />
          </div>
          <div v-else-if="winner.telno && winner.name" class="screen-winner__content">
            <div class="screen-winner__telno">
              {{ winner.telno | phone_number }}
            </div>
            <div class="screen-winner__name">
              คุณ{{ winner.name }}
            </div>
          </div>
          <div v-else class="screen-winner__content">
            <div class="screen-winner--empty">No Winner</div>
          </div>
        </div>
        <v-btn
          v-if="['wait', 'spined'].includes(state)"
          class="my-3"
          block
          raised
          @click="handleOnEnableRandom"
        >
          Enable Random
        </v-btn>
        <v-btn
          v-else
          :disabled="['spined', 'spinning'].includes(state)"
          color="error"
          class="my-3"
          block
          raised
          @click="handleOnDisableRandom"
        >
          Disable Random
        </v-btn>
      </v-col>
      <v-col cols="12" md="4">
        <!-- <v-btn block @click="handleOnChangeBackground">Background Settings</v-btn> -->
        <v-btn block class="my-3" @click="handleOnSyncRegistrants">Sync Registrants</v-btn>
        <v-btn color="error" block @click="handleOnCleanState">
          Clean State
        </v-btn>
      </v-col>
    </v-row>
    <v-snackbar
      v-model="snackbar.show"
      :timeout="snackbar.timeout"
      :color="snackbar.color"
      left
    >
      {{ snackbar.message }}
    </v-snackbar>

    <setting-background-dialog v-model="uploadBackgroundDialog" />
  </v-container>
</template>

<script>
export default {
  name: 'AdminControlPage',
  layout: 'admin',
  data() {
    return {
      state: 'wait',
      connected: false,
      enableLoading: false,
      uploadBackgroundDialog: false,
      winner: {
        telno: '',
        name: '',
      },
      snackbar: {
        show: false,
        message: '',
        timeout: 3000,
        color: 'success',
      },
    }
  },
  computed: {
    stateColor() {
      switch(this.state) {
        case 'wait':
          return 'warning'
        case 'spinning':
          return 'error'
        case 'ready':
          return 'success'
        default:
          return 'grey'
      }
    },
  },
  mounted() {
    this.initEvent()
  },
  methods: {
    initEvent() {
      this.$fire.database.ref('stage').on('value', (snapshot) => {
        const val = snapshot.val()
        this.state = val.state || 'wait'
        const winner = val.winner
        this.winner.telno = winner.telno
        this.winner.name = winner.name
        // this.onOffloadRegistrants(val.offload_version)
        // if (val.main && val.main.bg) this.backgroundImage = val.main.bg
        // // if (this.isSpinDevice && state === 'spinning') return
        // console.log(state, winner)
      })

      this.$fire.database.ref('.info/connected').on('value', (snapshot) => {
        this.connected = snapshot.val()
      })
    },
    async handleOnEnableRandom() {
      try {
        this.enableLoading = true
        await this.$fire.database.ref('stage').child('state').set('ready')
      } catch (error) {
        console.error(error)
      } finally {
        this.enableLoading = false
      }
    },
    async handleOnDisableRandom() {
      try {
        this.enableLoading = true
        await this.$fire.database.ref('stage').child('state').set('wait')
      } catch (error) {
        console.error(error)
      } finally {
        this.enableLoading = false
      }
    },
    async handleOnCleanState() {
      try {
        this.enableLoading = true
        await this.$fire.database.ref('stage').update({
          state: 'wait',
          winner: { name: '', telno: '0000000000' },
          offline_version: Date.now(),
          is_reset: true,
        })
      } catch (error) {
        console.error(error)
      } finally {
        this.enableLoading = false
      }
    },
    async handleOnSyncRegistrants() {
      try {
        const registrants = await this.getRegistrants()
        await this.$fire.database.ref('registrants').set(registrants)
        await this.$fire.database
          .ref('stage')
          .child('offline_version')
          .set(Date.now())
        this.snackbar.message = 'Sync success'
        this.snackbar.color = 'success'
        this.snackbar.show = true
      } catch (error) {
        this.snackbar.message = error.message
        this.snackbar.color = 'error'
        this.snackbar.show = true
      }
    },
    async getRegistrants() {
      await new Promise((resolve) => setTimeout(resolve, 300))
      return [
        { name: 'ทดสอบ ดวงดี', telno: '0823456743' },
        { name: 'มานะ มานี', telno: '0812345654' },
      ]
    },
    handleOnChangeBackground() {
      this.uploadBackgroundDialog = true
    }
  },
}
</script>

<style lang="scss" scoped>
.screen {
  &-winner {
    border: thin solid #efefef;
    border-radius: 4px;
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;

    &__content {
    }

    &__telno {
      text-align: center;
      font-size: 1.6rem;
      font-weight: 500;
      letter-spacing: 0.2rem;
    }

    &__name {
      text-align: center;
      font-size: 1.2rem;
      margin-top: 4px
    }

    &--empty {
      text-align: center;
      color: #ccc;
      font-size: 1rem;
    }
  }
  &-status {
    text-align: right;
    padding-bottom: 16px;
  }
}
</style>
