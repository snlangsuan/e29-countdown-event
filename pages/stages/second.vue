<template>
  <div class="screen__container">
    <div class="screen__wrapper" :style="screenStyle">
      <div class="screen-status">
        <v-chip :color="connectionStatusColor" small outlined>
          {{ connected ? 'online' : 'offline' }}
        </v-chip>
      </div>
      <div class="screen-winner" :style="contentStyle">
        <div v-if="state === 'spinning'">
          <v-progress-circular color="primary" :width="3" indeterminate />
        </div>
        <div v-else-if="winner.telno && winner.name" class="screen-winner__content">
          <div class="screen-winner__telno" :style="{ fontSize: (settings.content.phone_size * 1.24) + 'px', color: settings.content.phone_color }">
            {{ winner.telno | phone_number }}
          </div>
          <div class="screen-winner__name" :style="{ fontSize: (settings.content.name_size * 1.24) + 'px', color: settings.content.name_color }">
            คุณ{{ winner.name }}
          </div>
        </div>
        <div v-else class="screen-winner__content">
          <div class="screen-winner--empty" :style="{ fontSize: (settings.content.name_size * 0.8) + 'px' }">รอประกาศผล</div>
        </div>
      </div>
      <v-spacer />
      <div class="screen-history">
        <div class="screen-history-list elevation-1">
          <template v-for="item in winners.slice(0, 10)">
            <div :key="item.id" class="screen-history-item">
              <div>
                <div>{{ item.name }}</div>
                <div class="text-caption grey--text">{{ item.telno }}</div>
              </div>
              <div class="text-caption grey--text">{{ item.created_at | time_ago }}</div>
            </div>
          </template>
        </div>
      </div>
    </div>
    <v-overlay v-model="loading">
      <div class="text-center">
        <v-progress-circular width="3" />
        <div>Loading Setting...</div>
      </div>
    </v-overlay>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  name: 'StageSecondPage',
  layout: 'empty',
  middleware: 'auth',
  data() {
    return {
      loading: false,
      state: null,
      connected: false,
      backgroundImage: null,
      winner: {
        name: '',
        telno: ''
      },
      settings: {
        width: 0,
        height: 0,
        background: {
          mode: 'color',
          color: '#dddddd'
        },
        content: {
          margin_top: 0,
          background: {
            color: '#ffffffaa'
          }
        }
      },
      winners: [],
    }
  },
  computed: {
    connectionStatusColor() {
      if (this.connected) return 'success'
      return 'error'
    },
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
    contentStyle() {
      return {
        marginTop: this.settings.content.margin_top + 'px',
        padding: this.settings.content.padding + 'px',
        backgroundColor: this.settings.content.background.color,
      }
    },
  },
  mounted() {
    // this.loadSettings()
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
        if (this.winners.length > 0 && winner.telno)
          this.winners = this.winners.filter((x) => x.telno !== winner.telno)
      })

      this.$fire.database.ref('.info/connected').on('value', (snapshot) => {
        this.connected = snapshot.val()
      })

      this.$fire.database.ref('settings/stages/second').on('value', this.loadSettings)

      this.$fire.database.ref('winner_logs').on('value', (snapshot) => {
        const val = snapshot.val() || {}
        this.winners = Object.keys(val).map((x) => ({ ...val[x], id: x })).sort((a, b) => dayjs(b.created_at) - dayjs(a.created_at))
        if (this.winner.telno) this.winners = this.winners.filter((x) => x.telno !== this.winner.telno)
      })
    },
    loadSettings(snapshot) {
      try {
        const settings = snapshot.val() || {}
        this.settings.width = settings.width ? Number(settings.width) : 820
        this.settings.height = settings.height ? Number(settings.height) : 1180
        const background = settings.background || {}
        this.settings.background.mode = background.mode || 'color'
        this.settings.background.color = background.color || '#DDDDDD'
        this.settings.background.url = background.url || null
        this.settings.background.path = background.path || null
        this.settings.background.image = null
        const content = settings.content || {}
        this.settings.content.name_size = content.name_size ? Number(content.name_size) : 18
        this.settings.content.phone_size = content.phone_size ? Number(content.phone_size) : 24
        this.settings.content.margin_top = content.margin_top ? Number(content.margin_top) : 24
        this.settings.content.phone_color = content.phone_color || '#000000'
        this.settings.content.name_color = content.name_color || '#000000'
        this.settings.content.background.color = (content.background || {}).color || '#ffffffaa'
      } catch (error) {
        console.error(error)
      }
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
    background-repeat: no-repeat;
    background-size: cover;
    // max-width: 800px;
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

  &-status {
    position: absolute;
    left: 0;
    right: 16px;
    top: 16px;
    z-index: 3;
    text-align: right;
    padding-bottom: 16px;
  }

  &-winner {
    min-width: 80%;
    margin-top: 24px;
    border-radius: 4px;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 16px 24px;
    border: thin solid #fafafa;
    overflow: hidden;

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

  &-history {
    width: 100%;
    padding: 16px;

    &-list {
      background-color: rgba(255, 255, 255, 0.5);
      border-radius: 4px;
      overflow: hidden;
    }

    &-item {
      display: flex;
      padding-top: 8px;
      padding-bottom: 8px;
      padding-left: 16px;
      padding-right: 16px;

      & > *:first-child {
        flex: 1;
      }
    }

    &-list > &-item + &-item {
      border-top: thin solid #eee;
    }
  }
}
</style>
