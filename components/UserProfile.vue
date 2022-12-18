<template>
  <v-menu :nudge-bottom="16" :nudge-width="140" offset-y>
    <template #activator="{ attrs, on }">
      <div class="d-flex justify-center align-center" v-bind="attrs" v-on="on">
        <v-avatar color="white" size="32" >
          <v-icon light>mdi-account-outline</v-icon>
        </v-avatar>
        <span class="pl-3">{{ name }}</span>
      </div>
    </template>
    <v-list dense>
      <v-list-item @click="handleOnSignOut">
        <v-list-item-icon>
          <v-icon>mdi-logout</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Sign Out</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: 'UserProfile',
  computed: {
    profile() {
      return this.$store.state.authUser || {}
    },
    name() {
      return (this.profile.email || '').replace(/@.*$/, '')
    }
  },
  methods: {
    async handleOnSignOut() {
      await this.$fire.auth.signOut()
      this.$router.replace('/login')
    }
  }
}
</script>
