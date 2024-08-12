<template>
    <div class="text-center">
      <v-menu
        v-model="menu"
        :close-on-content-click="false"
        location="end"
      >
        <template v-slot:activator="{ props }">
          <v-icon
            color="white"
            v-bind="props"
          >
          mdi-account-multiple-outline 
          </v-icon>
        </template>
  
        <v-card min-width="300">
          <v-list>
            <v-list-item
              prepend-avatar="https://cdn.vuetifyjs.com/images/john.jpg"
              subtitle="Admins Manager"
              title="Forest"
            >
              <template v-slot:append>
                <v-btn
                  :class="fav ? 'text-red' : ''"
                  icon="mdi-export"
                  variant="text"
                  @click="fav = !fav"
                ></v-btn>
              </template>
            </v-list-item>
          </v-list>
  
          <v-card-actions>
            <v-spacer></v-spacer>
  
            <v-btn
              variant="text"
              @click="menu = false"
            >
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>
    </div>
  </template>
  <script>
    export default {
      data: () => ({
        fav: true,
        menu: false,
        message: false,
        hints: true,
      }),
    }
  </script>