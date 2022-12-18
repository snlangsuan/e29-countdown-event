<template>
  <div class="screen__container" :style="{ backgroundImage: 'url(' + backgroundImage + ')' }">
    <div class="screen-status">
      <v-chip :color="connectionStatusColor" small outlined>
        {{ connected ? 'online' : 'offline' }}
      </v-chip>
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
        <div class="screen-winner--empty">รอประกาศผล</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StageSecondPage',
  layout: 'empty',
  middleware: 'auth',
  data() {
    return {
      state: null,
      connected: false,
      backgroundImage: null,
      winner: {
        name: '',
        telno: ''
      }
    }
  },
  computed: {
    connectionStatusColor() {
      if (this.connected) return 'success'
      return 'error'
    }
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
        this.winner.telno = winner.telno
        this.winner.name = winner.name
        this.backgroundImage = ((val.settings || {}).second || {}).bg_url
      })

      this.$fire.database.ref('.info/connected').on('value', (snapshot) => {
        this.connected = snapshot.val()
      })
    },
  }
}
</script>

<style lang="scss" scoped>
.screen {
  &__container {
    position: relative;
    height: 100%;
    margin: auto;
    padding: 16px;
    background-repeat: no-repeat;
    background-size: cover;
    // max-width: 800px;
  }

  &-status {
    text-align: right;
    padding-bottom: 16px;
  }

  &-winner {
    border: thin solid #efefef;
    border-radius: 4px;
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;

    &__content {
    }

    &__telno {
      text-align: center;
      font-size: 2rem;
      font-weight: 500;
      letter-spacing: 0.2rem;
    }

    &__name {
      text-align: center;
      font-size: 1.8rem;
      margin-top: 4px
    }

    &--empty {
      text-align: center;
      color: #ccc;
      font-size: 1rem;
    }
  }
}
</style>
