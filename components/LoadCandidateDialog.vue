<template>
  <div>
    <v-dialog :value="value" max-width="640" persistent>
      <v-card>
        <v-card-title>
          Load Candidates
        </v-card-title>
        <v-card-text class="pt-3">
          <v-form ref="form" v-model="valid" @submit.prevent="">
            <v-container class="px-0">
              <v-row>
                <v-col cols="6" class="py-0">
                  <v-menu
                    ref="startDateMenu"
                    v-model="startDateMenu"
                    :close-on-content-click="false"
                    :return-value.sync="startDate"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template #activator="{ on, attrs }">
                      <v-text-field
                        v-model="startDate"
                        label="Start date"
                        prepend-inner-icon="mdi-calendar"
                        readonly
                        dense
                        outlined
                        hide-details
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <!-- <v-date-picker
                      v-model="startDate"
                      no-title
                      scrollable
                      @input="startDateMenu = false"
                    >
                    </v-date-picker> -->
                    <date-time-picker v-model="startDate" @close="startDateMenu = false" @save="$refs.startDateMenu.save(startDate)"  />
                  </v-menu>
                </v-col>
                <v-col cols="6" class="py-0">
                  <v-menu
                    ref="endDateMenu"
                    v-model="endDateMenu"
                    :close-on-content-click="false"
                    :return-value.sync="endDate"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template #activator="{ on, attrs }">
                      <v-text-field
                        v-model="endDate"
                        label="End date"
                        prepend-inner-icon="mdi-calendar"
                        readonly
                        dense
                        outlined
                        hide-details
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <date-time-picker v-model="endDate" @close="endDateMenu = false" @save="$refs.endDateMenu.save(endDate)" />
                  </v-menu>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn text :disabled="loading" @click="$emit('input', false)">Cancel</v-btn>
          <v-btn color="primary" :loading="loading" text @click="handleOnStartLoad">Start</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-overlay v-model="loading">
      <div class="text-center">
        <v-progress-circular width="3" indeterminate />
      </div>
    </v-overlay>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  name: 'AsyncCandidateDialog',
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      loading: false,
      valid: true,
      startDate: null,
      endDate: null,
      startDateMenu: false,
      endDateMenu: false,
    }
  },
  watch: {
    value(val) {
      if (val) {
        const current = dayjs()
        this.startDate = current.clone().startOf('day').format('YYYY-MM-DD HH:mm')
        this.endDate = current.clone().endOf('day').format('YYYY-MM-DD HH:mm')
      }
    }
  },
  methods: {
    async handleOnStartLoad() {
      try {
        this.loading = true
        this.$emit('input', false)
        const user = this.$fire.auth.currentUser
        if (user) {
          const token = await user.getIdToken()
          const params = { start: this.startDate + ':00', end: this.endDate + ':59' }
          const config = {
            headers: {
              Authorization: `Bearer ${token}`
            },
            params,
          }
          await this.$axios.$get('https://asia-southeast1-e29-countdown-evt.cloudfunctions.net/candidates', config)
        }
        console.log()
      } catch (error) {
        console.error(error)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>
