import Vue from 'vue'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

export default () => {
  Vue.filter('phone_number', (value) => {
    if (!value) return '-'
    value = String(value)
    return value.slice(0, 2) + '-' + value.slice(2, 6) + '-' + value.slice(6)
  })

  Vue.filter('time_ago', (value) => {
    if (!value) return '-'
    const d = dayjs(value)
    if (!d.isValid()) return '-'
    return d.fromNow(true)
  })
}
