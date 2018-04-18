<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="white elevation-12">
            <v-toolbar flat dense dark class="cyan">
              <v-toolbar-title>Register</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form v-model="valid">
                <v-text-field
                prepend-icon="person"
                label="email"
                v-model="email"
                type="text"
                required
                ></v-text-field>
                <v-text-field
                prepend-icon="lock"
                label="Password"
                v-model="password"
                type="password"
                required
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn dark class="cyan" @click="register">Register</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>

import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}

</script>
<style scoped>
.error {
  color: red;
}
</style>
