<template>
  <v-container v-resize="onResize" fluid fill-height pa-0>
    <v-row no-gutters class="admin-control-panel">
      <v-col
        sm="3"
        md="3"
        class="admin-control-panel__item"
        :style="{ height: maxHeight + 'px' }"
      >
        <div class="admin-control-toolbar">
          <div class="admin-control-toolbar__title">Winner History</div>
          <v-spacer />
          <v-menu offset-y bottom left>
            <template #activator="{ on, attrs }">
              <v-btn class="mr-n3" icon small v-bind="attrs" v-on="on">
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>
            <v-list dense>
              <v-list-item @click="handleOnExportExcel">
                <v-list-item-title>Export Excel</v-list-item-title>
              </v-list-item>
              <v-list-item @click="handleOnCleanHistory">
                <v-list-item-title>Clean History</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
        <div
          ref="history_content"
          class="admin-control__content d-flex flex-column"
          :style="{ height: maxHeight - 32 + 'px' }"
        >
          <v-list two-line class="py-0">
            <template v-for="win in winners">
              <v-list-item :key="win.id" class="px-3">
                <v-list-item-content>
                  <v-list-item-title>{{ win.name }}</v-list-item-title>
                  <v-list-item-subtitle class="text-caption grey--text">{{
                    win.telno
                  }}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <div class="text-caption grey--text">
                    {{ win.created_at | time_ago }}
                  </div>
                </v-list-item-action>
              </v-list-item>
            </template>
            <v-list-item v-if="winners.length < 1">
              <v-list-item-content>
                <v-list-item-title
                  class="text-body-1 font-weight-light grey--text text-center"
                >
                  No winner found
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </div>
      </v-col>
      <v-col
        sm="6"
        md="5"
        class="admin-control-panel__item"
        :style="{ height: maxHeight + 'px' }"
      >
        <div class="admin-control-toolbar">
          <div class="admin-control-toolbar__title">Preview</div>
        </div>
        <div
          class="admin-control__content d-flex flex-column"
          :style="{ height: maxHeight - 32 + 'px' }"
        >
          <div class="admin-control-winner" style="flex: 1">
            <div class="admin-control-winner__box">
              <div v-if="state === 'spinning'">
                <v-progress-circular color="primary" :width="3" indeterminate />
              </div>
              <div
                v-else-if="winner.telno && winner.name"
                class="admin-control-winner__content"
              >
                <div class="admin-control-winner__telno">
                  {{ winner.telno | phone_number }}
                </div>
                <div class="admin-control-winner__name">
                  คุณ{{ winner.name }}
                </div>
              </div>
              <div v-else class="admin-control-winner__content">
                <div class="admin-control-winner--empty">No Winner</div>
              </div>
            </div>
          </div>
          <div class="admin-control-description">
            <div class="d-flex align-start justify-center">
              <div class="pa-3">
                <v-card color="grey lighten-3" elevation="0">
                  <v-card-text class="pa-2">
                    <div style="font-size: 1.2rem;font-weight: 500">{{ candidateCount }}</div>
                    <div style="font-size: 0.8rem">Candidates</div>
                  </v-card-text>
                </v-card>
              </div>
              <v-spacer />
              <div class="admin-control-status">
                <v-chip v-if="connected" :color="stateColor" small outlined>
                  {{ state }}
                </v-chip>
                <v-chip v-else color="error" small outlined>offline</v-chip>
              </div>
            </div>
          </div>
        </div>
      </v-col>
      <v-col
        sm="3"
        md="4"
        class="admin-control-panel__item"
        :style="{ height: maxHeight + 'px' }"
      >
        <div class="admin-control-toolbar">
          <div class="admin-control-toolbar__title">Quick Actions</div>
        </div>
        <div
          class="admin-control__content"
          :style="{ height: maxHeight - 32 + 'px' }"
        >
          <!-- <div class="admin-control-quick-actions">
            <div class="admin-control-quick-actions__item"></div>
          </div> -->
          <v-container class="pa-4">
            <v-row>
              <v-col cols="12" md="6" class="pa-2">
                <button
                  class="admin-control-quick-actions__item admin-control-quick-actions__item--purple"
                  :disabled="!enabled"
                  @click="handleOnEnableRandom"
                >
                  <div><v-icon size="46">mdi-play-circle-outline</v-icon></div>
                  <div>Enable Random</div>
                </button>
              </v-col>
              <v-col cols="12" md="6" class="pa-2">
                <button
                  class="admin-control-quick-actions__item admin-control-quick-actions__item--red"
                  :disabled="enabled"
                  @click="handleOnDisableRandom"
                >
                  <div><v-icon size="46">mdi-stop-circle-outline</v-icon></div>
                  <div>Disable Random</div>
                </button>
              </v-col>
              <v-col cols="12" md="6" class="pa-2">
                <button
                  class="admin-control-quick-actions__item admin-control-quick-actions__item--blue"
                  @click="loadCandidatesDialog = true"
                >
                  <div><v-icon size="46">mdi-sync</v-icon></div>
                  <div>Load Candidates</div>
                </button>
              </v-col>
              <v-col cols="12" md="6" class="pa-2">
                <button
                  class="admin-control-quick-actions__item admin-control-quick-actions__item--blue"
                  @click="importCandidatesDialog = true"
                >
                  <div>
                    <v-icon size="46">mdi-database-import-outline</v-icon>
                  </div>
                  <div>Import Candidates (CSV)</div>
                </button>
              </v-col>
              <v-col cols="12" md="6" class="pa-2">
                <button
                  class="admin-control-quick-actions__item admin-control-quick-actions__item--red"
                  @click="handleOnCleanState"
                >
                  <div><v-icon size="46">mdi-delete-outline</v-icon></div>
                  <div>Clean State</div>
                </button>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-col>
    </v-row>
    <load-candidate-dialog v-model="loadCandidatesDialog" />
    <import-candidate-dialog v-model="importCandidatesDialog" />
    <v-snackbar
      v-model="snackbar.show"
      :timeout="snackbar.timeout"
      :color="snackbar.color"
      left
    >
      {{ snackbar.message }}
    </v-snackbar>
  </v-container>
</template>

<script>
import dayjs from 'dayjs'
import XLSX from 'xlsx-js-style'
export default {
  name: 'AdminControlPage',
  layout: 'admin',
  middleware: 'auth',
  data() {
    return {
      title: '',
      maxHeight: 0,
      state: 'wait',
      connected: false,
      winner: {
        name: '',
        telno: '',
      },
      winners: [],
      snackbar: {
        show: false,
        message: '',
        timeout: 3000,
        color: 'success',
      },
      loadCandidatesDialog: false,
      importCandidatesDialog: false,
      candidateCount: 0,
    }
  },
  computed: {
    stateColor() {
      switch (this.state) {
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
    enabled() {
      return ['wait', 'spined'].includes(this.state) && this.connected
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.onResize()
    })
    this.initEvent()
  },
  methods: {
    onResize() {
      const height = window.innerHeight
      console.log(this.$vuetify.application.top, height)
      this.maxHeight =
        height - (this.$vuetify.application.top + this.$vuetify.application.bar)
    },
    initEvent() {
      this.$fire.database.ref('stage').on('value', (snapshot) => {
        const val = snapshot.val()
        this.state = val.state || 'wait'
        const winner = val.winner
        this.winner.telno = winner.telno
        this.winner.name = winner.name
        this.candidateCount = val.candidates_count
        console.log(val)
      })

      this.$fire.database.ref('.info/connected').on('value', (snapshot) => {
        this.connected = snapshot.val()
      })

      this.$fire.database.ref('winner_logs').on('value', (snapshot) => {
        const val = snapshot.val() || {}
        this.winners = Object.keys(val).map((x) => ({ ...val[x], id: x }))
        this.$nextTick(() => {
          this.$refs.history_content && this.$refs.history_content.scrollTo(0, this.$refs.history_content.scrollHeight)
        })
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
    handleOnCleanHistory() {
      this.$fire.database.ref('winner_logs').set([])
    },
    async handleOnSyncRegistrants() {
      try {
        const registrants = await this.getRegistrants()
        await this.$fire.database.ref('candidates').set(registrants)
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
    async handleOnExportExcel() {
      try {
        console.log('export excel')
        const snapshot = await this.$fire.database.ref('winner_logs').once('value')
        const winners = snapshot.val()
        const timestamp = Date.now()
        const wb = XLSX.utils.book_new()
        const columnStyle = {
          alignment: { vertical: 'center', horizontal: 'left' },
          font: { sz: 12, bold: true },
          border: {
            top: { style: 'thin', color: { rgb: '000000' }},
            bottom: { style: 'thin', color: { rgb: '000000' }},
            left: { style: 'thin', color: { rgb: '000000' }},
            right: { style: 'thin', color: { rgb: '000000' }},
          }
        }
        const contentStyle = {
          alignment: { vertical: 'center', horizontal: 'left' },
          font: { sz: 12 },
          border: {
            top: { style: 'thin', color: { rgb: '000000' }},
            bottom: { style: 'thin', color: { rgb: '000000' }},
            left: { style: 'thin', color: { rgb: '000000' }},
            right: { style: 'thin', color: { rgb: '000000' }},
          }
        }
        const content = [
          [{
            v: 'Winner History',
            t: 's',
            s: {
              alignment: { vertical: 'center', horizontal: 'center' },
              font: { sz: 16, bold: true }
            }
          }],
          [{
            v: dayjs().format('YYYY-MM-DD'),
            t: 's',
            s: {
              alignment: { vertical: 'center', horizontal: 'center' },
              font: { sz: 12 }
            }
          }],
          [{ v: '', t: 's' }],
          [
            {
              v: 'No.',
              t: 's',
              s: columnStyle
            },
            {
              v: 'Name',
              t: 's',
              s: columnStyle
            },
            {
              v: 'Phone number',
              t: 's',
              s: columnStyle
            },
            {
              v: 'Created at',
              t: 's',
              s: columnStyle
            }
          ]
        ]
        const merge = [
          { s: { r: 0, c: 0 }, e: { r: 0, c: 3 } },
          { s: { r: 1, c: 0 }, e: { r: 1, c: 3 } },
          { s: { r: 2, c: 0 }, e: { r: 2, c: 3 } }
        ]
        const rows = [
          { hpt: 26 },
          { hpt: 26 },
          { hpt: 18 },
          { hpt: 26 },
        ]
        let count = 1
        for (const i in winners) {
          const item = winners[i]
          content.push([
            {
              v: count,
              t: 's',
              s: contentStyle
            },
            {
              v: item.name,
              t: 's',
              s: contentStyle
            },
            {
              v: item.telno,
              t: 's',
              s: contentStyle
            },
            {
              v: dayjs(item.created_at).format('YYYY-MM-DD HH:mm'),
              t: 's',
              s: contentStyle
            }
          ])
          rows.push({ hpt: 26 })
          count += 1
        }
        const cols = [
          { wpx: 80 },
          { wpx: 200 },
          { wpx: 120 },
          { wpx: 120 }
        ]
        const ws = XLSX.utils.aoa_to_sheet(content)
        ws['!merges'] = merge
        ws['!rows'] = rows
        ws['!cols'] = cols
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1')
        XLSX.writeFile(wb, `export-winner-history-${timestamp}.xlsx`);
      } catch (error) {
        console.error(error)
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.admin-control {
  &-toolbar {
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 16px;
    padding-right: 16px;
    background-color: #efefef;
    border: thin solid #ededed;

    &__title {
      font-size: 1rem;
      font-weight: 400;
    }
  }

  &-description {
    min-height: 84px;
  }

  &-panel {
    & > &__item + &__item {
      border-left: 2px solid #e9e9e9;
    }

    &__item {
      overflow: hidden;
    }
  }

  &__content {
    overflow: hidden;
    overflow-y: auto;
    background-color: #fff;
  }

  &-quick-actions {
    padding: 8px;

    &__item {
      width: 100%;
      height: 7rem;
      border-radius: 4px;
      background-color: #ffffff;
      color: #ffffff;
      display: flex;
      flex-direction: column;
      padding: 12px 10px;

      & > input[type=text],
      & > input[type=file] {
        display: none;
      }

      & > *:first-child {
        flex: 1;

        & * {
          color: #fff;
        }
      }

      & > *:last-child {
        flex: 0;
        text-align: left;
        font-size: 0.9rem;
      }

      &:hover {
        background-color: #ffffff;
      }

      &--red {
        background-color: #eb0400;

        &:hover {
          background-color: #eb0400;
        }
      }

      &--purple {
        background-color: #9147ff;

        &:hover {
          background-color: #772ce8;
        }
      }

      &--pink {
        background-color: #c516a5;

        &:hover {
          background-color: #ae1392;
        }
      }

      &--blue {
        background-color: #1f69ff;

        &:hover {
          background-color: #1756d3;
        }
      }

      &:disabled {
        // filter: grayscale(1);
        background-color: #ddd !important;
        color: #aaa !important;
        opacity: 0.6;

        & * {
          color: #aaa !important;
        }
      }
    }
  }

  &-status {
    text-align: right;
    padding-bottom: 16px;
    padding: 8px;
  }

  &-winner {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000;
    color: #fff;

    &__box {
      text-align: center;
    }

    &__telno {
      text-align: center;
      font-size: 1.8rem;
      font-weight: 500;
      letter-spacing: 0.2rem;
    }

    &__name {
      text-align: center;
      font-size: 1.6rem;
      margin-top: 4px;
    }

    &--empty {
      text-align: center;
      color: #ccc;
      font-size: 1rem;
    }
  }
}
</style>
