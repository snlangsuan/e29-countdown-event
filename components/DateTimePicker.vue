<template>
  <div class="datetime-picker">
    <v-date-picker id="datepicker" v-model="date" no-title scrollable>
    </v-date-picker>
    <div class="datetime-picker__time" :style="{ maxWidth: width + 'px' }">
      <div>
        <v-select v-model="hour" :items="hourItems" label="Hour" append-icon="" dense outlined hide-details />
      </div>
      <div>
        <v-select v-model="minute" :items="minuteItems" label="Minute" append-icon="" dense outlined hide-details />
      </div>
      <!-- <div>
        <v-select v-model="second" :items="secondItems" append-icon="" dense outlined />
      </div> -->
    </div>
    <div class="datetime-picker__actions">
      <v-spacer />
      <v-btn text @click="$emit('close')">Cancel</v-btn>
      <v-btn text @click="handleOnSave">OK</v-btn>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  name: 'DateTimePicker',
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      width: 290,
      date: null,
      hour: 0,
      minute: 0,
      second: 0,
      hourItems: [],
      minuteItems: [],
      secondItems: [],
    }
  },
  watch: {
    value(val) {
      console.log('get date', val)
      this.initTime(val)
    },
  },
  mounted() {
    this.initTime(this.value)
    setTimeout(() => {
      this.width = Math.max(document.querySelector('#datepicker').clientWidth, 290)
    }, 200)
  },
  methods: {
    initTime(val) {
      this.hourItems = [...Array(24)].map((x, i) => ('00' + i).slice(-2))
      this.minuteItems = [...Array(60)].map((x, i) => ('00' + i).slice(-2))
      this.secondItems = [...Array(60)].map((x, i) => ('00' + i).slice(-2))

      const date = dayjs(val)
      this.date = date.format('YYYY-MM-DD')
      this.hour = date.format('HH')
      this.minute = date.format('mm')
      this.second = date.format('ss')
    },
    handleOnSave() {
      const date = this.date + ' ' + this.hour + ':' + this.minute
      console.log(date)
      this.$emit('input', date)
      this.$emit('save')
    }
  },
}
</script>

<style lang="scss" scoped>
.datetime-picker {
  background-color: #ffffff;

  &__time {
    display: flex;
    max-width: 100%;
    outline: none;
    text-decoration: none;
    padding: 0 16px;

    & > div {
      margin-left: 8px;
    }
  }

  &__actions {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px 16px 8px;
  }
}
</style>
