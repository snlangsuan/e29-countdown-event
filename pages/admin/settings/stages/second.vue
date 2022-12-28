<template>
  <div
    v-resize="onResize"
    class="setting__container"
    :style="{ height: maxHeight + 'px' }"
  >
    <v-navigation-drawer :value="true" width="280" clipped right fixed app>
      <v-form ref="form" v-model="valid" style="width: 100%" @submit.prevent="">
        <div v-if="selected === 'canvas'">
          <v-subheader>Display resolution</v-subheader>
          <div class="px-4">
            <v-text-field
              v-model="settings.width"
              label="Width"
              type="number"
              :min="600"
              :rules="[
                (v) => (!!v && Number(v) > 0) || 'Invalid width size',
                (v) =>
                  (!!v && Number(v) >= 600) || 'width size should be above 600',
              ]"
              dense
              outlined
            ></v-text-field>
            <v-text-field
              v-model="settings.height"
              label="Height"
              type="number"
              :min="600"
              :rules="[
                (v) => (!!v && Number(v) > 0) || 'Invalid height size',
                (v) =>
                  (!!v && Number(v) >= 600) ||
                  'height size should be above 600',
              ]"
              dense
              outlined
            ></v-text-field>
          </div>
          <v-subheader>Background</v-subheader>
          <div class="text-center">
            <v-btn-toggle v-model="settings.background.mode" mandatory dense>
              <v-btn value="image">
                <v-icon>mdi-image</v-icon>
              </v-btn>
              <v-btn value="color">
                <v-icon>mdi-palette</v-icon>
              </v-btn>
            </v-btn-toggle>
          </div>
          <div v-if="settings.background.mode === 'color'" class="px-4 mt-3">
            <v-color-picker
              v-model="settings.background.color"
              canvas-height="200"
              hide-inputs
            ></v-color-picker>
          </div>
          <div v-else class="px-4 mt-3">
            <upload-image-field
              ref="setting_canvas_upload"
              v-model="settings.background.image"
              :src="settings.background.url"
              accept="image/jpeg"
              style="height: 260px"
              @remove="handleOnRemoveBackground"
            />
          </div>
        </div>
        <div v-if="selected === 'content'">
          <v-subheader>Size and Padding</v-subheader>
          <div class="px-4">
            <v-text-field
              v-model="settings.content.margin_top"
              label="Margin top"
              type="number"
              :min="16"
              :rules="[
                (v) => (!!v && Number(v) > 0) || 'Invalid margin top',
                (v) =>
                  (!!v && Number(v) >= 16) ||
                  'margin top should be above 16',
              ]"
              dense
              outlined
            ></v-text-field>
            <v-text-field
              v-model="settings.content.padding"
              label="Padding"
              type="number"
              :min="16"
              :rules="[
                (v) => (!!v && Number(v) > 0) || 'Invalid padding',
                (v) =>
                  (!!v && Number(v) >= 16) ||
                  'padding should be above 16',
              ]"
              dense
              outlined
            ></v-text-field>
            <v-text-field
              v-model="settings.content.phone_size"
              label="Phone size"
              type="number"
              :min="16"
              :rules="[
                (v) => (!!v && Number(v) > 0) || 'Invalid phone size',
                (v) =>
                  (!!v && Number(v) >= 16) ||
                  'phone size should be above 16',
              ]"
              dense
              outlined
            ></v-text-field>
            <v-text-field
              v-model="settings.content.name_size"
              label="Name size"
              type="number"
              :min="16"
              :rules="[
                (v) => (!!v && Number(v) > 0) || 'Invalid name size',
                (v) =>
                  (!!v && Number(v) >= 16) ||
                  'name size should be above 16',
              ]"
              dense
              outlined
            ></v-text-field>
          </div>
          <v-subheader>Color</v-subheader>
          <v-list dense class="py-0">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="font-weight-regular">
                  Background Color
                </v-list-item-title>
              </v-list-item-content>
              <v-list-item-action class="my-0">
                <color-picker
                  key="background_color"
                  v-model="settings.content.background.color"
                />
              </v-list-item-action>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="font-weight-regular">
                  Phone
                </v-list-item-title>
              </v-list-item-content>
              <v-list-item-action class="my-0">
                <color-picker
                  key="phone_color"
                  v-model="settings.content.phone_color"
                />
              </v-list-item-action>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="font-weight-regular">
                  Name
                </v-list-item-title>
              </v-list-item-content>
              <v-list-item-action class="my-0">
                <color-picker
                  key="name_color"
                  v-model="settings.content.name_color"
                />
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </div>
      </v-form>
      <template #append>
        <div class="pa-3" style="width: 100%">
          <v-btn color="primary" class="mt-3" block @click="handleOnSaveAll">
            Save
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <div
      ref="canvas"
      :class="[
        'setting-canvas',
        { 'setting-item--selected': selected === 'canvas' },
      ]"
      :style="canvasStyle"
      @click="handleOnSelect"
    >
      <div
        ref="content"
        :class="[
          'setting-content',
          { 'setting-item--selected': selected === 'content' },
        ]"
        :style="contentStyle"
      >
        <div class="setting-content__telno" :style="{ fontSize: preview.content.phone_size + 'px', color: settings.content.phone_color }">
          {{ '0800000000' | phone_number }}
        </div>
        <div class="setting-content__name" :style="{ fontSize: preview.content.name_size + 'px', color: settings.content.name_color }">
          คุณ xxx xxxx
        </div>
      </div>
    </div>
    <v-overlay v-model="loading">
      <div class="text-center">
        <v-progress-circular width="3" />
        <div>Loading...</div>
      </div>
    </v-overlay>
    <v-overlay v-model="saving">
      <div class="text-center">
        <v-progress-circular width="3" />
        <div>Saving...</div>
      </div>
    </v-overlay>
    <v-snackbar
      :timeout="snack.timeout"
      :value="snack.show"
      fixed
      bottom
      :color="snack.color"
      left
      text
    >
      {{ snack.message }}
    </v-snackbar>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
export default {
  name: 'SettingStageSecondPage',
  layout: 'admin',
  data() {
    return {
      loading: false,
      saving: false,
      selected: null,
      slotLen: 10,
      maxWidth: 0,
      maxHeight: 0,
      preview: {
        width: 0,
        height: 0,
        content: {
          margin_top: 0,
          padding: 0,
          name_size: 0,
          phone_size: 0,
        }
      },
      settings: {
        width: 0,
        height: 0,
        background: {
          url: null,
          image: null,
          path: null,
          mode: 'color',
          color: '#DDDDDD',
        },
        content: {
          margin_top: 0,
          padding: 0,
          name_size: 0,
          phone_size: 0,
          phone_color: '#000000',
          name_color: '#000000',
          background: {
            color: '#ffffffaa'
          }
        }
      },
      valid: true,
      snack: {
        show: false,
        color: 'success',
        message: '',
        timeout: 1000,
      }
    }
  },
  computed: {
    canvasStyle() {
      const backgroundImage = this.settings.background.url
        ? this.settings.background.url
        : this.settings.background.image
      const background =
        this.settings.background.mode === 'color'
          ? { backgroundColor: this.settings.background.color }
          : {
              backgroundImage: 'url(' + backgroundImage + ')',
            }
      return {
        width: this.preview.width + 'px',
        height: this.preview.height + 'px',
        ...background,
      }
    },
    contentStyle() {
      return {
        marginTop: this.preview.content.margin_top + 'px',
        padding: this.preview.content.padding + 'px',
        backgroundColor: this.settings.content.background.color,
      }
    }
  },
  watch: {
    'settings.content': {
      deep: true,
      handler(val) {
        this.determineContentSize()
      }
    },
  },
  mounted() {
    this.loadSettings()
    this.$nextTick(() => {
      this.onResize()
    })
  },
  methods: {
    onResize() {
      const height = window.innerHeight
      console.log(this.$vuetify.application.top, height)
      this.maxHeight =
        height - (this.$vuetify.application.top + this.$vuetify.application.bar)
      this.maxWidth = window.innerWidth - 280
      this.determineCanvasSize()
      this.determineContentSize()
    },
    async loadSettings() {
      try {
        this.loading = true
        const snapshot = await this.$fire.database
          .ref('settings/stages/second')
          .once('value')

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
        this.settings.content.padding = content.padding ? Number(content.padding) : 24
        this.settings.content.phone_color = content.phone_color || '#000000'
        this.settings.content.name_color = content.name_color || '#000000'
        this.settings.content.background.color = (content.background || {}).color || '#ffffffaa'
        this.determineCanvasSize()
        this.determineContentSize()
        this.selected = 'canvas'
      } catch (error) {
        console.error(error)
      } finally {
        this.loading = false
      }
    },
    handleOnSelect(e) {
      console.log(e.target)
      if (e.target.closest('.setting-content')) {
        this.selected = 'content'
      } else {
        this.selected = 'canvas'
      }
    },
    async handleOnSaveAll() {
      try {
        this.saving = true
        if (this.settings.background.delete) {
          await this.$fire.storage.ref('/' + this.settings.background.delete).delete()
          delete this.settings.background.delete
          delete this.settings.background.path
          this.settings.background.mode = this.settings.background.image ? 'image' : 'color'
        }

        if (this.settings.background.image) {
          const ext = String(this.settings.background.image).includes('png') ? '.png' : '.jpg'
          const refName = uuidv4() + ext
          const imgSnapshot = await this.$fire.storage.ref('/settings/' + refName).putString(this.settings.background.image, 'data_url')
          delete this.settings.background.image
          this.settings.background.url = await imgSnapshot.ref.getDownloadURL()
          this.settings.background.path = imgSnapshot.metadata.fullPath
        }

        await this.$fire.database.ref('settings/stages/second').update(this.settings)
        this.snack.message = 'Saved'
        this.snack.color = 'success'
        this.snack.show = true
      } catch (error) {
        console.error(error)
      } finally {
        this.saving = false
      }
    },
    handleOnRemoveBackground() {
      this.settings.background.delete = this.settings.background.path
      this.settings.background.url = null
      this.settings.background.image = null
    },
    determineCanvasSize() {
      console.log(this.settings.height, this.settings.width)
      if (this.settings.height > this.settings.width) {
        console.log('h > w')
        const newHeight = Math.min(parseInt(this.maxHeight * 0.8), 640)
        const newWidth = this.determineCanvasWidth(
          this.settings.width,
          this.settings.height,
          newHeight
        )
        this.preview.width = newWidth
        this.preview.height = newHeight
      } else {
        console.log('h < w')
        const newWidth = Math.min(parseInt(this.maxWidth * 0.8), 840)
        const newHeight = this.determineCanvasHeight(
          this.settings.width,
          this.settings.height,
          newWidth
        )
        this.preview.width = newWidth
        this.preview.height = newHeight
      }
    },

    determineCanvasWidth(originalWidth, originalHeight, newHeight) {
      return (originalWidth / originalHeight) * newHeight
    },
    determineCanvasHeight(originalWidth, originalHeight, newWidth) {
      return (originalHeight / originalWidth) * newWidth
    },
    determineContentSize() {
      const scale = this.preview.height / this.settings.height
      const nameSize = scale * this.settings.content.name_size
      this.preview.content.name_size = nameSize
      const phoneSize = scale * this.settings.content.phone_size
      this.preview.content.phone_size = phoneSize
      const marginTop = scale * this.settings.content.margin_top
      this.preview.content.margin_top = marginTop
      const padding = scale * this.settings.content.padding
      this.preview.content.padding = padding
    }
  }
}
</script>

<style lang="scss" scoped>
.setting {
  &__container {
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &-canvas {
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
    cursor: pointer;
    overflow: hidden;
  }

  &-item {
    &--selected {
      position: relative;
      border: thin solid rgb(13, 153, 255) !important;
    }
  }

  &-content {
    margin-top: 24px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 16px 24px;
    border: thin solid #fafafa;
    overflow: hidden;

    &__telno {
      text-align: center;
      font-size: 32px;
      font-weight: 500;
      letter-spacing: 0.2rem;
    }

    &__name {
      text-align: center;
      font-size: 28px;
      margin-top: 4px
    }
  }
}
</style>
