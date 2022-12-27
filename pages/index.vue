<template>
  <div class="fill-height d-flex justify-center align-center">
    <div class="text-center" style="max-width: 480px">
      <v-img :src="require('~/assets/images/mono29-logo.jpg')" contain />
      <div class="text-caption">รอสักครู่...</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  layout: 'empty',
  mounted() {
    setTimeout(() => {
      this.$router.replace('/login')
    }, 200)
  }
}
</script>
