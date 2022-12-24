<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    :nudge-width="200"
    :nudge-bottom="8"
    offset-y
    bottom
  >
    <template #activator="{ on, attrs }">
      <div class="color-picker-box" :style="{ backgroundColor: value }" v-bind="attrs" v-on="on"></div>
    </template>
    <v-card>
      <v-card-text class="pb-0">
        <v-color-picker
          key="number_color"
          v-model="color"
          canvas-height="200"
          hide-inputs
        ></v-color-picker>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn text @click="handleOnCancel">Cancel</v-btn>
        <v-btn color="primary" text @click="handleOnSubmit">Ok</v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  name: 'ColorPicker',
  props: {
    value: {
      type: String,
      default: '#ffffff'
    }
  },
  data() {
    return {
      menu: false,
      color: '#ffffff',
    }
  },
  watch: {
    value(val) {
      this.color = val
    }
  },
  mounted() {
    this.color = this.value
  },
  methods: {
    handleOnCancel() {
      this.menu = false
    },
    handleOnSubmit() {
      this.$emit('input', this.color)
      this.menu = false
    }
  }
}
</script>

<style lang="scss" scoped>
.color-picker {
  &-box {
    width: 32px;
    height: 32px;
    border: thin solid #e0e0e0;
    border-radius: 4px;
  }
}
</style>
