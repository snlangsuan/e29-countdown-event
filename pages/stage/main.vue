<template>
  <div
    v-resize="onResize"
    class="screen__container"
    :style="{ backgroundImage: 'url(' + backgroundImage + ')' }"
  >
    <div class="screen-item" style="width: 95%">
      <slot-machine ref="slot_machine" :items="slotLen" :message="'คุณ' + winner.name" :visible="showWinner" />
    </div>
    <div class="screen-item" style="flex: 0">
      <button
        class="screen-btn"
        :style="{ width: buttonSize + 'px', height: buttonSize + 'px' }"
        :disabled="!hasRegistrants || ['wait', 'spined', 'spinning'].includes(state)"
        @click="handleOnSpin"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StageMainPage',
  layout: 'empty',
  middleware: 'auth',
  data() {
    return {
      state: 'wait',
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
    init() {
      try {
        const registrants = this.loadRegistrants()
        console.log(registrants)
        this.hasRegistrants = (registrants && registrants.length > 0)
      } catch (error) {
        this.error.messages = [error.message]
        this.error.show = false
      }
    },
    initEvent() {
      this.$fire.database.ref('stage').on('value', (snapshot) => {
        const val = snapshot.val()
        this.onOffloadRegistrants(val.offline_version)
        if (val.main && val.main.bg) this.backgroundImage = val.main.bg
        console.log('spin device', this.isSpinDevice)
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
          this.$refs.slot_machine && this.$refs.slot_machine.resetRoll()
          this.showWinner = false
        }
      })
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
        await this.$fire.database.ref('stage').update({
          state: 'spined'
        })
        this.state = 'spined'
      } catch (error) {
        console.error(error)
      } finally {
        this.showWinner = true
        this.spinning = false
        this.isSpinDevice = false
      }
    },
    async onSpinning() {
      const telno = this.winner.telno.slice(0, -3) + 'xxx'
      this.$refs.slot_machine && this.$refs.slot_machine.resetRoll()
      await this.$refs.slot_machine.spin(telno)
    },
    async onSpined() {
      const telno = this.winner.telno.slice(0, -3) + 'xxx'
      console.log(this.$refs.slot_machine)
      this.$refs.slot_machine && this.$refs.slot_machine.resetRoll()
      await this.$refs.slot_machine.show(telno)
    },
    getWinner() {
      try {
        const registrants = this.loadRegistrants()
        console.log('before get winner', registrants.length)
        const item = registrants[Math.floor(Math.random()*registrants.length)]
        const filter = registrants.filter((x) => x.telno !== item.telno)
        localStorage.setItem('offline_registrants', JSON.stringify(filter))
        this.hasRegistrants = (filter && filter.length > 0)
        console.log('after get winner', filter.length)
        return item
      } catch (error) {
        console.error(error)
      }
    },
    async onOffloadRegistrants(version) {
      try {
        const localVersion = localStorage.getItem('offline_version')
        console.log('load registrants', version, localVersion)
        if (localVersion !== version + '') {
          const snapshot = await this.$fire.database.ref('registrants').once('value')
          const registrants = snapshot.val()
          localStorage.setItem('offline_registrants', JSON.stringify(registrants))
          localStorage.setItem('offline_version', version)
          this.hasRegistrants = (registrants && registrants.length > 0)
        }
      } catch (error) {
        console.error(error)
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 32px 16px;
    background-color: #fdfdfd;
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
    background-color: #ffffff;
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
