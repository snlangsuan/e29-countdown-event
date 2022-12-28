<template>
  <div class="screen__container">
    <div class="screen__wrapper" :style="screenStyle">
      <div class="screen__slot" :style="slotStyle">
        <slot-machine
          ref="slot_machine"
          :message="'คุณ' + winner.name"
          :hide-details="!settings.slot.show_name"
          :message-color="settings.slot.name_color"
          :color="settings.slot.number_color"
          :slot-background="settings.slot.number_background"
          :background-color="settings.slot.background_color"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StageScreen',
  layout: 'empty',
  middleware: 'auth',
  data() {
    return {
      state: 'wait',
      winner: {
        name: '',
        telno: '',
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
        slot: {
          width: 1240,
          padding_top: 24,
          show_name: true,
          name_color: '#000000',
          number_color: '#000000',
          number_background: '#ffffff',
          background_color: '#ffffff00'
        },
      }
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
        paddingTop: this.settings.slot.padding_top + 'px'
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
        this.state = val.state
        const winner = val.winner
        this.winner = winner

        console.log(this.state)
        if (this.state === 'spinning') {
          this.onSpinning()
        } else if (this.state === 'spined') {
          this.onSpined()
        }

        if (this.winner.telno === '0000000000') {
          this.$refs.slot_machine && this.$refs.slot_machine.reset()
        }
      })

      this.$fire.database.ref('settings/stages/screen').on('value', this.loadSettings)
    },
    loadSettings(snapshot) {
      try {
        const settings = snapshot.val() || {}
        this.settings.width = settings.width ? Number(settings.width) : 1280
        this.settings.height = settings.height ? Number(settings.height) : 720
        const background = settings.background || {}
        this.settings.background.mode = background.mode || 'color'
        this.settings.background.color = background.color || '#DDDDDD'
        this.settings.background.url = background.url || null
        this.settings.background.path = background.path || null
        this.settings.background.image = null
        const slot = settings.slot || {}
        this.settings.slot.width = slot.width ? Number(slot.width) : 1240
        this.settings.slot.padding_top = slot.padding_top ? Number(slot.padding_top) : 24
        this.settings.slot.show_name = slot.show_name !== false
        this.settings.slot.name_color = slot.name_color || '#000000'
        this.settings.slot.number_color = slot.number_color || '#000000'
        this.settings.slot.number_background = slot.number_background || '#ffffff'
        this.settings.slot.background_color = slot.background_color || '#ffffff00'
      } catch (error) {
        console.error(error)
      }
    },
    onSpinning() {
      const codes = [...this.winner.telno.slice(0, -3).split('').map((x) => Number(x)), 10, 10, 10]
      this.$refs.slot_machine && this.$refs.slot_machine.reset()
      this.$refs.slot_machine.start(codes)
    },
    onSpined() {
      const codes = [...this.winner.telno.slice(0, -3).split('').map((x) => Number(x)), 10, 10, 10]
      console.log(this.$refs.slot_machine)
      setTimeout(() => {
        this.$refs.slot_machine && this.$refs.slot_machine.reset()
        this.$refs.slot_machine.show(codes)
      }, 100)
    },
  }
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
    justify-content: flex-start;
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
