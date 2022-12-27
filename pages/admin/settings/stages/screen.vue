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
        <div v-else-if="selected === 'slot'">
          <v-subheader>Size and Padding</v-subheader>
          <div class="px-4">
            <v-text-field
              v-model="settings.slot.width"
              label="Width"
              type="number"
              :min="500"
              :rules="[
                (v) => (!!v && Number(v) > 0) || 'Invalid slot width',
                (v) =>
                  (!!v && Number(v) >= 500) || 'slot width should be above 500',
              ]"
              dense
              outlined
            ></v-text-field>
            <v-text-field
              v-model="settings.slot.padding_top"
              label="Padding Top"
              type="number"
              :rules="[(v) => (!!v && Number(v) > 0) || 'Invalid padding top']"
              dense
              outlined
            ></v-text-field>
          </div>
          <v-subheader>Color</v-subheader>
          <v-list dense class="py-0">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="font-weight-regular">
                  Background color
                </v-list-item-title>
              </v-list-item-content>
              <v-list-item-action class="my-0">
                <color-picker
                  key="background_color"
                  v-model="settings.slot.background_color"
                />
              </v-list-item-action>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="font-weight-regular">
                  Name Color
                </v-list-item-title>
              </v-list-item-content>
              <v-list-item-action class="my-0">
                <color-picker
                  key="name_color"
                  v-model="settings.slot.name_color"
                />
              </v-list-item-action>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="font-weight-regular">
                  Phone number Color
                </v-list-item-title>
              </v-list-item-content>
              <v-list-item-action class="my-0">
                <color-picker
                  key="number_color"
                  v-model="settings.slot.number_color"
                />
              </v-list-item-action>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="font-weight-regular">
                  Phone number Background
                </v-list-item-title>
              </v-list-item-content>
              <v-list-item-action class="my-0">
                <color-picker
                  key="number_background"
                  v-model="settings.slot.number_background"
                />
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </div>
      </v-form>
      <template #append>
        <div class="pa-3" style="width: 100%">
          <!-- <v-btn block @click="handleOnApplyPreview">Preview</v-btn> -->
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
        ref="wheel"
        :class="[
          'setting-slot',
          { 'setting-item--selected': selected === 'slot' },
        ]"
        :style="slotStyle"
      >
        <slot-machine
          ref="slot_machine"
          :message="'คุณ xxx xxxx'"
          :fixed="true"
          :message-color="settings.slot.name_color"
          :color="settings.slot.number_color"
          :slot-background="settings.slot.number_background"
          :background-color="settings.slot.background_color"
        />
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
  name: 'SettingsStagesScreenPage',
  layout: 'admin',
  middleware: 'auth',
  data() {
    return {
      loading: false,
      saving: false,
      selected: null,
      maxWidth: 0,
      maxHeight: 0,
      valid: true,
      preview: {
        width: 0,
        height: 0,
        slot: {
          width: 0,
          padding_top: 0,
        },
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
          name_color: '#000000',
          number_color: '#000000',
          number_background: '#ffffff',
          background_color: '#ffffff00'
        },
      },
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
    slotStyle() {
      return {
        width: this.preview.slot.width + 'px',
        paddingTop: this.preview.slot.padding_top + 'px'
      }
    },
  },
  watch: {
    'settings.width'(val) {
      this.settings.width = Math.max(Number(val), 600)
      this.determineCanvasSize()
      this.determineSlotSize()
      this.determineButtonSize()
    },
    'settings.height'(val) {
      this.settings.height = Math.max(Number(val), 600)
      this.determineCanvasSize()
      this.determineSlotSize()
      this.determineButtonSize()
    },
    'settings.slot.width'(val) {
      console.log(val)
      this.settings.slot.width = Math.max(Number(val), 500)
      this.determineSlotSize()
    },
    'settings.slot.padding_top'(val) {
      this.determineSlotSize()
    }
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
      this.determineSlotSize()
    },
    async loadSettings() {
      try {
        this.loading = true
        const snapshot = await this.$fire.database
          .ref('settings/stages/screen')
          .once('value')

        const settings = snapshot.val() || {}
        this.settings.width = settings.width || 1280
        this.settings.height = settings.height || 720
        const background = settings.background || {}
        this.settings.background.mode = background.mode || 'color'
        this.settings.background.color = background.color || '#DDDDDD'
        this.settings.background.url = background.url || null
        this.settings.background.path = background.path || null
        this.settings.background.image = null

        const slot = settings.slot || {}
        this.settings.slot.width = slot.width || 1240
        this.settings.slot.padding_top = slot.padding_top || 24
        this.settings.slot.name_color = slot.name_color || '#000000'
        this.settings.slot.number_color = slot.number_color || '#000000'
        this.settings.slot.number_background = slot.number_background || '#ffffff'
        this.settings.slot.background_color = slot.background_color || '#ffffff00'
        this.determineCanvasSize()
        this.determineSlotSize()
        this.selected = 'canvas'
      } catch (error) {
        console.error(error)
      } finally {
        this.loading = false
      }
    },
    handleOnSelect(e) {
      if (e.target.closest('.setting-slot')) {
        this.selected = 'slot'
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

        await this.$fire.database.ref('settings/stages/screen').update(this.settings)
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
    determineSlotSize() {
      const scale = this.preview.height / this.settings.height
      const width = scale * this.settings.slot.width
      const paddingTop = scale * this.settings.slot.padding_top
      this.preview.slot.width = width
      this.preview.slot.padding_top = paddingTop
    },
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

    &--settings {
      position: absolute;
      top: 8px;
      right: 8px;
    }

    &__input {
      &--width,
      &--height {
        width: 200px;
        position: absolute;
        margin: auto;
      }

      &--width {
        top: -48px;
        left: 0;
        right: 0;
      }

      &--height {
        display: flex;
        justify-content: center;
        align-items: center;
        right: -208px;
        top: 0;
        bottom: 0;
      }
    }
  }
  &__image {
    position: relative;
    border: thin solid transparent;
    cursor: pointer;

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

  &-slot {
    width: 90%;
    border: thin solid transparent;
    cursor: pointer;
  }

  &-item {
    &--selected {
      position: relative;
      border: thin solid rgb(13, 153, 255);
    }
  }

  &-color {
    width: 24px;
    height: 24px;
    border-radius: 4px;
    overflow: hidden;
    cursor: pointer;
  }
}
</style>
