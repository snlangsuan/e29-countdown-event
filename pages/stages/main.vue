<template>
  <div class="screen__container">
    <div class="screen__wrapper" :style="screenStyle">
      <div class="screen__slot" :style="slotStyle">
        <slot-machine
          ref="slot_machine"
          :items="slotLen"
          :message="'คุณ' + winner.name"
          :visible="showWinner"
          :message-color="settings.slot.name_color"
          :color="settings.slot.number_color"
          :slot-background="settings.slot.number_background"
          :background-color="settings.slot.background_color"
          @end="handleOnEndSpin"
        />
      </div>
      <div class="screen__button" :style="screenButtonStyle">
        <button
          class="screen-btn"
          :style="buttonStyle"
          :disabled="!hasRegistrants || ['wait', 'spined', 'spinning'].includes(state)"
          @click="handleOnSpin"
        ></button>
      </div>
    </div>
    <v-overlay v-model="loading">
      <div class="text-center">
        <v-progress-circular width="3" />
        <div>Loading...</div>
      </div>
    </v-overlay>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  name: 'StageMainPage',
  layout: 'empty',
  middleware: 'auth',
  data() {
    return {
      state: 'wait',
      loading: false,
      spinning: true,
      showWinner: false,
      isSpinDevice: false,
      hasRegistrants: false,
      slotLen: 10,
      buttonSize: 100,
      backgroundImage: null,
      winner: {
        name: '',
        telno: '',
      },
      error: {
        show: false,
        messages: [],
      },
      settings: {
        width: 1280,
        height: 720,
        background: {
          url: null,
          image: null,
          path: null,
          mode: 'color',
          color: '#DDDDDD',
        },
        button: {
          size: 180,
          padding_top: 32,
          padding_bottom: 32,
          background: {
            url: null,
            image: null,
            path: null,
          },
        },
        slot: {
          width: 1240,
          name_color: '#000000',
          number_color: '#000000',
          number_background: '#ffffff',
          background_color: '#ffffff00'
        },
      },
      winners: [],
    }
  },
  computed: {
    screenStyle() {
      const background =
        this.settings.background.mode === 'color'
          ? { backgroundColor: this.settings.background.color }
          : {
              backgroundImage: 'url(' + this.settings.background.url + ')',
            }
      return {
        width: this.settings.width + 'px',
        height: this.settings.height + 'px',
        ...background,
      }
    },
    slotStyle() {
      return {
        width: this.settings.slot.width + 'px',
      }
    },
    screenButtonStyle() {
      return {
        paddingTop: this.settings.button.padding_top + 'px',
        paddingBottom: this.settings.button.padding_bottom + 'px',
      }
    },
    buttonStyle() {
      return {
        width: this.settings.button.size + 'px',
        height: this.settings.button.size + 'px',
        backgroundImage: 'url(' + this.settings.button.background.url + ')',
        backgroundColor: this.settings.button.background.url ? 'transparent' : '#ffffff',
      }
    }
  },
  mounted() {
    this.init()
    this.initEvent()
  },
  methods: {
    onResize() {
      const height = window.innerHeight
      this.buttonSize = height * 0.25
    },
    async init() {
      try {
        this.loading = true
        const snapshot = await this.$fire.database.ref('winner_logs').once('value')
        const val = snapshot.val() || {}
        const logs = Object.keys(val).map((x) => val[x].telno)
        let registrants = this.loadRegistrants()
        registrants = registrants.filter((x) => !logs.includes(x.telno))
        console.log(registrants)
        this.hasRegistrants = (registrants && registrants.length > 0)
      } catch (error) {
        this.error.messages = [error.message]
        this.error.show = false
      } finally {
        this.loading = false
      }
    },
    initEvent() {
      this.$fire.database.ref('stage').on('value', (snapshot) => {
        const val = snapshot.val()
        this.onOffloadRegistrants(val.offline_version)
        if (!this.isSpinDevice) {
          this.state = val.state
          const winner = val.winner
          this.winner = winner

          console.log(this.state)
          if (this.state === 'spinning') {
            this.onSpinning()
          } else if (this.state === 'spined') {
            this.onSpined()
            this.showWinner = true
          }
        }

        if (this.winner.telno === '0000000000') {
          this.$refs.slot_machine && this.$refs.slot_machine.reset()
          this.showWinner = false
        }
      })

      this.$fire.database.ref('winner_logs').on('value', (snapshot) => {
        const val = snapshot.val() || {}
        this.winners = Object.keys(val).map((x) => val[x].telno)
      })

      this.$fire.database.ref('settings/stages/main').on('value', this.loadSettings)
    },
    loadSettings(snapshot) {
      try {
        const settings = snapshot.val() || {}
        this.settings.width = settings.width || 1280
        this.settings.height = settings.height || 720
        const background = settings.background || {}
        this.settings.background.mode = background.mode || 'color'
        this.settings.background.color = background.color || '#DDDDDD'
        this.settings.background.url = background.url || null
        this.settings.background.path = background.path || null
        this.settings.background.image = null
        const button = settings.button || {}
        this.settings.button.size = button.size || 180
        this.settings.button.padding_top = button.padding_top || 32
        this.settings.button.padding_bottom = button.padding_bottom || 32
        const btnImage = button.background || {}
        this.settings.button.background.url = btnImage.url || null
        this.settings.button.background.path = btnImage.path || null
        this.settings.button.background.image = null
        const slot = settings.slot || {}
        this.settings.slot.width = slot.width || 1240
        this.settings.slot.name_color = slot.name_color || '#000000'
        this.settings.slot.number_color = slot.number_color || '#000000'
        this.settings.slot.number_background = slot.number_background || '#ffffff'
        this.settings.slot.background_color = slot.background_color || '#ffffff00'
      } catch (error) {
        console.error(error)
      }
    },
    async handleOnSpin() {
      try {
        this.showWinner = false
        this.isSpinDevice = true
        this.spinning = false
        const winner = this.getWinner()
        if (!winner.telno) return
        this.winner = winner
        await this.$fire.database.ref('stage').update({
          winner,
          state: 'spinning'
        })
        this.state = 'spinning'
        await this.onSpinning()
      } catch (error) {
        console.error(error)
      } finally {
        this.showWinner = true
        this.spinning = false
        this.isSpinDevice = false
      }
    },
    async handleOnEndSpin() {
      await this.$fire.database.ref('stage').update({
        state: 'spined'
      })
      await this.$fire.database.ref('winner_logs').push({ ...this.winner, created_at: dayjs().format('YYYY-MM-DD HH:mm:ss') })
      this.state = 'spined'
    },
    onSpinning() {
      // const telno = this.winner.telno.slice(0, -3) + 'xxx'
      const codes = [...this.winner.telno.slice(0, -3).split('').map((x) => Number(x)), 10, 10, 10]
      setTimeout(() => {
        this.$refs.slot_machine && this.$refs.slot_machine.reset()
        this.$refs.slot_machine.start(codes)
      }, 100)
    },
    onSpined() {
      // const telno = this.winner.telno.slice(0, -3) + 'xxx'
      const codes = [...this.winner.telno.slice(0, -3).split('').map((x) => Number(x)), 10, 10, 10]
      console.log(codes, this.$refs.slot_machine)
      setTimeout(() => {
        this.$refs.slot_machine && this.$refs.slot_machine.reset()
        this.$refs.slot_machine.show(codes)
      }, 100)
    },
    getWinner() {
      try {
        let registrants = this.loadRegistrants()
        registrants = registrants.filter((x) => !this.winners.includes(x.telno))
        console.log('before get winner', registrants.length)
        const item = registrants[Math.floor(Math.random()*registrants.length)]
        const filter = registrants.filter((x) => x.telno !== item.telno)
        // localStorage.setItem('offline_registrants', JSON.stringify(filter))
        this.hasRegistrants = (filter && filter.length > 0)
        // console.log('after get winner', filter.length)
        return item
      } catch (error) {
        console.error(error)
      }
    },
    async onOffloadRegistrants(version) {
      try {
        const localVersion = localStorage.getItem('offline_version')
        const localData = localStorage.getItem('offline_registrants')
        console.log('load registrants', version, localVersion)
        if (localVersion !== version + '' || !localData) {
          const snapshot = await this.$fire.database.ref('candidates').once('value')
          const registrants = snapshot.val() || '[]'
          localStorage.setItem('offline_registrants', JSON.stringify(registrants))
          localStorage.setItem('offline_version', version)
          this.hasRegistrants = (registrants && registrants.length > 0)
          console.log('load random data completed')
        }
      } catch (error) {
        console.error(error)
        localStorage.removeItem('offline_registrants')
        this.hasRegistrants = false
      }
    },
    loadRegistrants() {
      try {
        const registrants = JSON.parse(localStorage.getItem('offline_registrants') || '[]')
        return registrants
      } catch (error) {
        return []
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.screen {
  &__container {
    height: 100%;
    margin: auto;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: auto;
  }

  &__wrapper {
    position: relative;
    background-color: #ddd;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    border: thin solid #fafafa;
    cursor: none;
    overflow: hidden;

    user-select: none;

    & * {
      user-select: none;
    }
  }

  &__button {

  }

  &-device {
    position: fixed;
    bottom: 8px;
    right: 16px;
    text-align: right;
    font-size: 0.6rem;
    color: #ddd;
  }

  &-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    // background-color: #ffffff;
  }

  &-winner {
    margin-top: 16px;
    &--text {
      font-size: 5rem;
    }
  }

  &-btn {
    width: 200px;
    height: 200px;
    background-image: url('assets/images/stage-btn.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    box-sizing: border-box;
    cursor: pointer;
    -webkit-user-select: none;
    -webkit-touch-callout: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    &:disabled {
      cursor: not-allowed;
      filter: grayscale(100%);
    }
  }

  &-mode-btn {
    width: 100px;
    height: 100px;
    background-color: #ffffff;
    border: thin solid #ddd;
    border-radius: 4px;
    margin-left: auto;
    margin-right: auto;
    cursor: pointer;
    -webkit-user-select: none;
    -webkit-touch-callout: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    &:disabled {
      cursor: not-allowed;
      filter: grayscale(100%);
    }
  }
}
</style>
