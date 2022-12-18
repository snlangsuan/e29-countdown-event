<template>
  <div class="fill-height d-flex justify-center align-center">
    <v-card width="480" elevation="0">
      <v-card-text class="py-0">
        <!-- <v-alert
          v-if="error.show"
          type="error"
          class="mb-6"
          dense
          text
        >
          {{ error.message }}
        </v-alert> -->
        <v-form ref="login_form" v-model="valid" @submit.prevent="">
          <v-text-field
            v-model="username"
            label="Email"
            placeholder="sample@gmail.com"
            :rules="[(v) => !!v || v === null || 'Enter an email']"
            dense
            outlined
          ></v-text-field>
          <v-text-field
            v-model="password"
            label="Password"
            type="password"
            :error="error.show"
            :error-messages="error.messages"
            :rules="[(v) => !!v || v === null || 'Enter a password']"
            dense
            outlined
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn
          color="primary"
          :disabled="!username || !password"
          block
          rounded
          @click="handleOnSigIn"
          >Log In</v-btn
        >
      </v-card-actions>
    </v-card>
    <v-overlay v-model="loading"></v-overlay>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      loading: false,
      valid: true,
      username: null,
      password: null,
      error: {
        show: false,
        messages: [],
      },
    }
  },
  methods: {
    async handleOnSigIn() {
      if (!this.$refs.login_form.validate()) return
      try {
        this.loading = true
        await this.$fire.auth.signInWithEmailAndPassword(
          this.username,
          this.password
        )
        setTimeout(() => {
          this.$router.replace('/admin/control')
        }, 600)
      } catch (error) {
        this.error.messages =
          ['Sorry, your password was incorrect. Please double-check your password.']
        this.error.show = true
        // this.username = null
        this.password = null
      } finally {
        this.loading = false
      }
    },
  },
}
</script>
