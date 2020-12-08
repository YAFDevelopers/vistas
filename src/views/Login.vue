<template>
  <v-app :dark="true">
    <v-main>
      <v-container fill-height="fill-height">
        <v-layout align-center="align-center" justify-center="justify-center">
          <v-flex class="login-form text-xs-center">
            <div class="display-1 mb-3">
              <v-icon class="mr-2" large="large">mdi-oil</v-icon> EGEP
            </div>
            <v-card light="light">
              <v-card-text>
                <div class="subheading">
                  <template v-if="options.isLoggingIn"
                    >Log in to your customer portal</template
                  >
                  <template v-if="!options.isLoggingIn"
                    >Forget account</template
                  >
                </div>
                <v-form>
                  <v-text-field
                    v-model="user.email"
                    light="light"
                    prepend-icon="mdi-email"
                    label="Email"
                    type="email"
                  ></v-text-field>
                  <v-text-field
                    v-if="options.isLoggingIn"
                    v-model="user.password"
                    light="light"
                    prepend-icon="mdi-lock"
                    label="Password"
                    type="password"
                  ></v-text-field>
                  <v-checkbox
                    v-if="options.isLoggingIn"
                    v-model="options.shouldStayLoggedIn"
                    light="light"
                    label="Stay logged in?"
                    hide-details="hide-details"
                  ></v-checkbox>
                  <v-btn
                    color="primary"
                    v-if="options.isLoggingIn"
                    @click="()=>this.$router.push('/')"
                    block="block"
                    >Sign in</v-btn
                  >
                  <v-btn
                    color="primary"
                    v-if="!options.isLoggingIn"
                    block="block"
                    type="submit"
                    @click.prevent="options.isLoggingIn = true"
                    >Send mail</v-btn
                  >
                </v-form>
              </v-card-text>
            </v-card>
            <div v-if="options.isLoggingIn">
              Forget account?
              <v-btn text @click="options.isLoggingIn = false"
                >Recover</v-btn
              >
            </div>
            <div v-if="!options.isLoggingIn">
              <v-btn text @click="options.isLoggingIn = true"
                >Login</v-btn
              >
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
    <v-footer app="app">
      <v-flex class="text-xs-center">© 2020. All rights reserved.</v-flex>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "Login",
  data: () => ({
    user: {
      email: "admin@example.com",
      password: "admin",
      name: "John Doe",
    },
    options: {
      isLoggingIn: true,
      shouldStayLoggedIn: true,
    },
  }),
};
</script>

<style lang="sass" scoped >
.login-form
    max-width: 500px
</style>
