<template>
  <v-dialog :value="value" max-width="840" persistent>
    <v-card>
      <v-card-title>
        Import Candidates
      </v-card-title>
      <v-card-text class="px-0">
        <v-stepper v-model="step" alt-labels flat>
          <v-stepper-header class="elevation-0">
            <v-stepper-step step="1">
              Upload CSV
            </v-stepper-step>
            <v-divider />
            <v-stepper-step step="2">
              Data Mapping
            </v-stepper-step>
            <v-divider />
            <v-stepper-step step="3">
              Preview
            </v-stepper-step>
          </v-stepper-header>
          <v-stepper-items>
            <v-stepper-content step="1" class="pb-0">
              <div class="text-subtitle-1">Data that we expect:</div>
              <div class="example-table">
                <div class="example-table__row">
                  <div class="example-table__col">PHONE NUMBER</div>
                  <div class="example-table__col">NAME</div>
                </div>
              </div>
              <v-checkbox v-model="skipFirstRow" :disabled="files.length > 0" label="First line corresponds to field names" class="mb-3" hide-details />
              <div class="upload-file">
                <div v-show="files.length > 0" class="upload-file__loading">
                  <v-progress-circular color="primary" width="3" indeterminate />
                </div>
                <upload-file-field ref="upload_file" v-model="files" accept="text/csv" @uploaded="handleOnUploaded" />
              </div>
            </v-stepper-content>
            <v-stepper-content step="2">
              <div class="text-subtitle-1">Table</div>
              <div class="example-table mb-6">
                <div class="example-table__row example-table__row--header">
                  <div class="example-table__col">PHONE NUMBER</div>
                  <div class="example-table__col">NAME</div>
                </div>
                <template v-for="row, i in items.slice(0, 3)">
                  <div :key="'row-' + i" class="example-table__row">
                    <div class="example-table__col example-table__col--left">{{ row[mapping[0]] }}</div>
                    <div class="example-table__col example-table__col--left">{{ row[mapping[1]] }}</div>
                  </div>
                </template>
              </div>

              <div class="text-subtitle-1">Will become</div>
              <div class="example-table">
                <div class="example-table__row">
                  <div class="example-table__col">
                    <v-select v-model="mapping[0]" :items="headers" dense outlined />
                  </div>
                  <div class="example-table__col">
                    <v-select v-model="mapping[1]" :items="headers" dense outlined />
                  </div>
                </div>
              </div>
            </v-stepper-content>
            <v-stepper-content step="3">
              <div class="preview-table">
                <div v-show="uploading" class="preview-table__loading">
                  <v-progress-circular color="primary" width="3" indeterminate />
                </div>
                <v-simple-table height="240" fixed-header>
                  <template #default>
                    <thead>
                      <tr>
                        <th class="text-left">
                          PHONE NUMBER
                        </th>
                        <th class="text-left">
                          NAME
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <template v-for="item, i in items">
                        <tr :key="'item-' + i">
                          <td>{{ item[mapping[0]] }}</td>
                          <td>{{ item[mapping[1]] }}</td>
                        </tr>
                      </template>
                    </tbody>
                  </template>
                </v-simple-table>
              </div>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn text :disabled="uploading" @click="$emit('input', false)">Cancel</v-btn>
        <v-btn v-if="step === 2" color="primary" text @click="step += 1">Next</v-btn>
        <v-btn v-if="step === 3" color="primary" :disabled="uploading" text @click="handleOnFinish">Finish</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'ImportRegistrantDialog',
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      uploading: false,
      step: 1,
      files: [],
      headers: [],
      items: [],
      mapping: [null, null],
      skipFirstRow: true
    }
  },
  watch: {
    value(val) {
      if (val) this.reset()
    }
  },
  methods: {
    handleOnUploaded() {
      console.log(this.files)
      const reader = new FileReader()
      reader.addEventListener('load', (e) => {
        const texts = e.target.result.split('\n').filter((x) => !!x).map((x) => x.split(',').map((y) => y.trim()))
        if (this.skipFirstRow) {
          this.headers = texts.splice(0, 1)[0]
        } else {
          const count = texts[0].length
          this.headers = [...Array(count)].map((x, i) => 'col' + (Number(i) + 1))
        }
        this.items = texts.map((x) => this.headers.reduce((list, y, i) => ({ ...list, [y]: x[i]}), {}))
        this.mapping = [...Array(2)].map((x, i) => this.headers[i] || null)
        this.step += 1
      })
      reader.readAsText(this.files[0], 'utf-8')
    },
    reset() {
      this.step = 1
      this.files = []
      this.texts = []
      this.headers = []
      this.skipFirstRow = true
      this.$nextTick(() => {
        this.$refs.upload_file && this.$refs.upload_file.reset()
      })
    },
    async handleOnFinish() {
      try {
        this.uploading = true
        const items = this.items.map((x) => ({ telno: x[this.mapping[0]], name: x[this.mapping[1]] })).filter((x) => String(x.telno).length === 10)
        await this.$fire.database.ref('candidates').set(items)
        await this.$fire.database
          .ref('stage').update({
            offline_version: Date.now(),
            candidates_count: items.length,
          })
        this.$emit('input', false)
      } catch (error) {
        console.error(error)
      } finally {
        this.uploading = false
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.upload-file {
  position: relative;

  &__loading {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
  }
}
.example-table {
  width: 100%;
  border: thin solid #e0e0e0;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom: 0;
  margin-top: 8px;
  margin-bottom: 8px;

  &__row {
    display: flex;
    align-items: center;
    justify-content: center;

    &--header {
      border-bottom: thin solid #e0e0e0;
    }
  }

  &__col {
    flex: 1;
    text-align: center;
    padding: 8px;
    font-size: 0.6rem;
    font-weight: 400;

    &--left {
      text-align: left;
    }
  }

  &__row > &__col + &__col {
    border-left: thin solid #e0e0e0;
  }
}

.preview-table {
  border: thin solid #e0e0e0;
  overflow: hidden;
  position: relative;

  &__loading {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.5);
  }
}
</style>
