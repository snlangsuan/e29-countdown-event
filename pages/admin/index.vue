<template>
  <div></div>
</template>

<script>
export default {
  name: 'AdminPage',
  layout: 'admin',
  middleware: 'auth',
  computed: {
    profile() {
      return this.$store.state.authUser
    }
  },
  mounted() {
    this.$router.replace('/admin/control')
  }
}
</script>
