<template>
  <v-app id="inspire">
    <v-system-bar app>
      <v-spacer></v-spacer>

      <v-icon>mdi-square</v-icon>

      <v-icon>mdi-circle</v-icon>

      <v-icon>mdi-triangle</v-icon>
    </v-system-bar>

    <v-navigation-drawer v-model="drawer" app>
      <v-sheet color="grey lighten-4" class="pa-5">
        <v-avatar class="mb-6" color="grey darken-1" size="60"></v-avatar>

        <div>Usuario EGEP</div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item>
          <v-treeview :items="items"></v-treeview>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container class="py-12 px-6" fluid>
        <v-row>
          <v-col v-for="card in cards" :key="card" cols="12">
            <v-card>
              <v-subheader>overview</v-subheader>

              <v-list two-line>
                <template>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-subtitle>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Expedita vel architecto tempora non facilis odio
                        vero, eveniet accusantium tenetur laborum sed sapiente
                        error, natus esse! Sunt ut atque ab autem.
                      </v-list-item-subtitle>
                      
                    </v-list-item-content>
                  </v-list-item>

                  <v-divider
                    v-if="n !== 6"
                    :key="`divider-${n}`"
                    inset
                  ></v-divider>
                </template>
              </v-list>
            </v-card>
            <br>
            <v-card>
              <v-subheader>Caracteristicas</v-subheader>

              <v-list two-line>
                <template>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-subtitle>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Expedita vel architecto tempora non facilis odio
                        vero, eveniet accusantium tenetur laborum sed sapiente
                        error, natus esse! Sunt ut atque ab autem.
                      </v-list-item-subtitle>
                      
                    </v-list-item-content>
                  </v-list-item>

                  <v-divider
                    v-if="n !== 6"
                    :key="`divider-${n}`"
                    inset
                  ></v-divider>
                </template>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    cards: ["overviwe"],
    items: [
      {
        id: 1,
        name: "Inicio de proyecto :",
        children: [
          { id: 2, name: "Overview" },
          { id: 3, name: "Input" },
          { id: 4, name: "Deliverables " },
        ],
      },
      {
        id: 5,
        name: "validación de datos :",
        children: [
          { id: 2, name: "Overview" },
          { id: 3, name: "Input" },
          { id: 4, name: "Deliverables " },
        ],
      },
      {
        id: 15,
        name: "Screening Inicial :",
        children: [
          { id: 2, name: "Overview" },
          { id: 3, name: "Input" },
          { id: 4, name: "Deliverables " },
        ],
      },
      {
        id: 19,
        name: "Interacción con el cliente :",
       children: [
          { id: 2, name: "Overview" },
          { id: 3, name: "Input" },
          { id: 4, name: "Deliverables " },
        ],
      },
    ],
  }),
};
</script>
<style lang="css" scoped>
.lista {
  background: red;
  width: 550px;
}
</style>
