<template>
  <v-dialog :value="value" max-width="640" persistent scrollable>
    <v-card>
      <v-card-title>Background Settings</v-card-title>
      <v-divider />
      <v-card-text class="py-3" style="position: relative">
        <v-form ref="form" v-model="valid" @submit.prevent="">
          <div class="pb-1">Main Screen</div>
          <div v-if="item.main.url" class="setting-item__image">
            <v-img
              :src="item.main.url"
              class="grey lighten-4"
              height="220"
              contain
            />
            <div class="setting-item__image--hover">
              <v-btn icon @click="handleOnRemove(item.main)">
                <v-icon color="white">mdi-delete</v-icon>
              </v-btn>
            </div>
          </div>
          <upload-image-field
            v-else
            v-model="item.main.img"
            accept="image/jpeg"
            style="height: 220px"
          />
          <div class="pb-1 mt-8">Second Screen</div>
          <div v-if="item.second.url" class="setting-item__image">
            <v-img
              :src="item.second.url"
              class="grey lighten-4"
              height="220"
              contain
            />
            <div class="setting-item__image--hover">
              <v-btn icon @click="handleOnRemove(item.second)">
                <v-icon color="white">mdi-delete</v-icon>
              </v-btn>
            </div>
          </div>
          <upload-image-field
            v-else
            v-model="item.second.img"
            accept="image/jpeg"
            style="height: 220px"
          />
        </v-form>
        <v-overlay :value="loading" z-index="999" :opacity="0" absolute>
          <v-progress-circular color="primary" width="3" indeterminate />
        </v-overlay>
      </v-card-text>
      <v-divider />
      <v-card-actions>
        <v-spacer />
        <v-btn :disabled="loading" text @click="$emit('input', false)">Cancel</v-btn>
        <v-btn :disabled="loading" text @click="handleOnSave">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
export default {
  name: 'SettingBackgroundDialog',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      loading: false,
      valid: true,
      item: {
        main: {
          url: null,
          ref: null,
          img: null,
        },
        second: {
          url: null,
          ref: null,
          img: null,
        },
      },
    }
  },
  watch: {
    value(val) {
      if (val) this.loadSettings()
    }
  },
  methods: {
    loadSettings() {
      this.loading = true
      this.$fire.database.ref('stage/settings').once('value', (snapshot) => {
        const { main={}, second={}  } = snapshot.val() || {}

        this.item.main.url = main.bg_url
        this.item.main.path = main.bg_path
        this.item.second.url = second.bg_url
        this.item.second.path = second.bg_path
        this.loading = false
      })
    },
    handleOnRemove(item) {
      item.delete = item.path
      item.url = null
      item.path = null
    },
    async handleOnSave() {
      if (!this.$refs.form.validate()) return
      try {
        this.loading = true
        // const newItem = { main: {}, second: {} }
        for (const name in this.item) {
          const newItem = { bg_url: null, bg_path: null }
          if (this.item[name].delete) {
            console.log('has delete')
            await this.$fire.storage.ref('/' + this.item[name].delete).delete()
            await this.$fire.database.ref('stage/settings').child(name).update(newItem)
            delete this.item[name].delete
          }

          if (this.item[name].img) {
            console.log('add new image')
            const refName = uuidv4() + '.jpg'
            const imgSnapshot = await this.$fire.storage.ref('/images/' + refName).putString(this.item[name].img, 'data_url')
            newItem.bg_url = await imgSnapshot.ref.getDownloadURL()
            newItem.bg_path = imgSnapshot.metadata.fullPath
            delete this.item[name].img
            await this.$fire.database.ref('stage/settings').child(name).update(newItem)
          }
        }
        // this.loadSettings()
        this.$emit('input', false)
      } catch (error) {
        console.error(error)
      } finally {
        this.loading = false
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.setting-item {
  &__box {
    display: flex;

    & > * + * {
      padding-left: 8px;
    }
  }

  &__actions {
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    margin-right: -8px;
  }

  &__image {
    position: relative;

    &:hover > &--hover {
      display: flex;
    }

    &--hover {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(0, 0, 0, 0.3);
      display: none;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
