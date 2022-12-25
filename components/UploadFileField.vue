<template>
  <div :id="id" class="upload-field">
    <div v-if="files.length > 0" class="upload-field-list">
      <template v-for="file, i in files">
        <div :key="'file-' + i" class="upload-field-item">
          <div>
            <v-icon left>mdi-file-document-outline</v-icon>
          </div>
          <div style="flex: 1">{{ file.name }}</div>
          <div>
            <v-btn color="error" icon @click="handleOnRemove(i)">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </div>
        </div>
      </template>
    </div>
    <div
      v-else
      id="upload_content"
      :class="['upload-field__content', { 'upload-field--error': !valid, 'upload-field--disabled': disabled }, { 'upload-field-drop': isDragging }]"
      @drop="handelOnDrop"
      @dragover="handleDragOver"
      @dragenter="handelOnDragEnter"
      @dragleave="handleOnDragLeave"
    >
      <input ref="file_upload" type="file" alt="" title="" :accept="accept" :multiple="multiple" @input="handelOnChangeFile" />
      <div v-if="isDragging" class="upload-field__drop-zone">
        <v-avatar color="#1967d2">
          <v-icon dark>mdi-tray-arrow-up</v-icon>
        </v-avatar>
        <div class="mt-4 text-subtitle-1 font-weight-light">Drop your image to here</div>
      </div>
      <div v-else class="upload-field__normal">
        <v-icon size="32">mdi-image</v-icon>
        <div class="text-subtitle-1 font-weight-light">Drag and drop or <div @click="$refs.file_upload.click()">browse</div></div>
      </div>
    </div>
    <div :class="['upload-field__details', { 'upload-field__details--hide': hideDetails }]">
      <VMessages v-if="errorBucket.length < 1 && !!hint && (persistentHint || isFocused)" :value="[hint]" />
      <VMessages :value="errorBucket" color="error"/>
    </div>
  </div>
</template>

<script>
import VInput from 'vuetify/lib/components/VInput/VInput.js'
export default {
  name: 'UploadFileField',
  extends: VInput,
  inject: {
    form: { default: null }
  },
  props: {
    value: {
      type: Array,
      default() {
        return []
      }
    },
    accept: {
      type: String,
      default: 'image/png,image/jpg'
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    maxHeight: {
      type: Number,
      default: -1
    }
  },
  data() {
    return {
      isDragging: false,
      files: [],
    }
  },
  mounted() {
    this.valid = true
  },
  methods: {
    validate(force, value) {
      if (!force) return
      const errorBucket = []
      value = value || this.localVal
      if (force) this.hasInput = this.hasFocused = true

      for (const rule of this.rules) {
        const valid = typeof rule === 'function' ? rule(value) : rule
        if (typeof valid === 'string') {
          errorBucket.push(valid)
        } else if (typeof valid !== 'boolean') {
          console.error(`Rules should return a string or boolean, received '${typeof valid}' instead`, this)
        }
      }
      this.errorBucket = errorBucket
      this.valid = errorBucket.length === 0

      return this.valid
    },
    reset() {
      this.valid = true
      this.files = []
      this.errorBucket = []
      this.$emit('input', this.files)
    },
    resetValidation() {
      this.valid = true
      this.errorBucket = []
    },
    handelOnChangeFile() {
      this.onProcessFile()
    },
    handelOnDrop(e) {
      e.preventDefault()
      if (this.disabled || !!this.localVal) return
      this.isDragging = false
      const files = e.dataTransfer.files
      this.$refs.file_upload.files = files
      this.onProcessFile()
    },
    handelOnDragEnter(e) {
      e.preventDefault()
      if (this.disabled || !!this.localVal) return
      this.isDragging = true
    },
    handleOnDragLeave(e) {
      if (this.disabled || !!this.localVal) return
      this.isDragging = false
    },
    handleDragOver(e) {
      if (this.disabled || !!this.localVal) return
      e.preventDefault()
    },
    onProcessFile(e) {
      const files = this.$refs.file_upload.files
      this.files = []
      const types = this.accept.split(',')
      let count = 0
      for (const file of files) {
        if (!this.multiple && count > 0) break
        if (!types.includes(file.type)) {
          this.errorBucket = ['File not support']
          this.valid = false
        }
        this.files.push(file)
        count += 1
      }
      console.log(this.files)
      this.$emit('input', this.files)
      this.$emit('uploaded')
    },
    handleOnRemove(index) {
      console.log(index)
      this.files.splice(index, 1)
      this.$emit('input', this.files)
    }
  }
}
</script>

<style lang="scss" scoped>
.upload-field {
  position: relative;

  &-list {
    height: 240px;
    overflow: hidden;
    overflow-y: auto;
    border: thin solid #efefef;
    border-radius: 4px;
  }

  &-item {
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  &__content {
    border: thin dashed #1967d2 !important;
    border-radius: 4px;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-bottom: 4px;
    width: 100%;
    height: 240px;
    background-color: #E8F0FE;
    overflow: hidden;
    z-index: 99;
    color: #1967d2 !important;

    & * {
      pointer-events: none;
    }

    & > input {
      display: none;
    }
  }
  &__drop-zone {
    text-align: center;
  }

  &--error {
    border: 2px solid rgb(255, 82, 82) !important;
  }

  &__disabled {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  &__details {
    margin-bottom: 8px;
    padding: 0 12px;
    display: flex;
    flex: 1 0 auto;
    max-width: 100%;
    min-height: 14px;
    overflow: hidden;

    &--hide {
      display: none !important;
    }
  }

  &--readonly {
    cursor: auto;
  }

  &:hover &__image--remove  {
    display: flex;
    & > * {
      pointer-events: auto;
    }
  }

  &__normal {
    text-align: center;
    & > i {
      color: #1967d2;
    }
    & > div > div {
      display: inline-block;
      text-decoration: underline;
      cursor: pointer;
      pointer-events: auto;
    }
  }
}
</style>
