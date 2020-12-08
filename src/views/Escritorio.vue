<template>
  <v-app id="inspire">
    <v-app-bar
      app
      shrink-on-scroll
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Proyectos</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <v-col
            v-for="n in 24"
            :key="n"
            cols="4"
          >
            <v-card class="Router" height="200" @click="router">
            <h1>titulo del proyecto</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere atque voluptate, sed voluptatum quis consectetur nemo illo commodi harum sapiente dicta, animi at itaque accusamus, cupiditate facilis ab. Odit, earum.</p>

            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    methods:{
      router(){
        this.$router.push('/timeline')
      }
    }
  }
</script>
<style scoped>
.Router{
  cursor: pointer;
}
</style>