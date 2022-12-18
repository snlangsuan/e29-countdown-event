import Vue from 'vue'

export default () => {
  Vue.filter('phone_number', (value) => {
    if (!value) return '-'
    value = String(value)
    return value.slice(0, 2) + '-' + value.slice(2, 6) + '-' + value.slice(6)
  })
}
