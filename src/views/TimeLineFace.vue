<template>
  <v-app id="inspire">
    <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
      <v-timeline-item
        v-for="(item, i) in items"
        :key="i"
        :color="item.color"
        :icon="item.icon"
        fill-dot
      >
        <v-card :color="item.color" dark>
          <v-card-title class="title"> Fase {{ i + 1 }} </v-card-title>
          <v-card-text class="white text--primary">
            <p>
              Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
              scaevola imperdiet nec ut, sed euismod convenire principes at. Est
              et nobis iisque percipit, an vim zril disputando voluptatibus, vix
              an salutandi sententiae.
            </p>
            <v-btn @click="router" :color="item.color" class="mx-0" outlined>
              Go
            </v-btn>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        color: "red lighten-2",
        icon: "mdi-star",
      },
      {
        color: "purple darken-1",
        icon: "mdi-book-variant",
      },
      {
        color: "green lighten-1",
        icon: "mdi-airballoon",
      },
      {
        color: "indigo",
        icon: "mdi-buffer",
      },
    ],
  }),
  methods: {
    router() {
      this.$router.push("/main");
    },
  },
};
</script>

<style>
</style>