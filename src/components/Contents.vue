<template>
  <v-container class="containers">
    <div>
      <v-row>
        <v-col>
          <router-link to="/allproducts">
            <v-card variant="outlined" class="cardscont">
              01
              <hr />
              Evailable
            </v-card>
          </router-link>
        </v-col>
        <v-col>
          <v-card
            @click="toggleCard(1)"
            :class="{ 'clicked-card': clickedCards[1] }"
            variant="outlined"
            class="cardscont"
          >
            02
            <hr />
            {{ clickedCards[1] ? 'Unavailable' : 'Evailable' }}
          </v-card>
        </v-col>
        <v-col>
          <v-card
            @click="toggleCard(2)"
            :class="{ 'clicked-card': clickedCards[2] }"
            variant="outlined"
            class="cardscont"
          >
            03
            <hr />
            {{ clickedCards[2] ? 'Unavailable' : 'Evailable' }}
          </v-card>
        </v-col>
        <v-col>
          <v-card
            @click="toggleCard(3)"
            :class="{ 'clicked-card': clickedCards[3] }"
            variant="outlined"
            class="cardscont"
          >
            04
            <hr />
            {{ clickedCards[3] ? 'Unavailable' : 'Evailable' }}
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card
            @click="toggleCard(4)"
            :class="{ 'clicked-card': clickedCards[4] }"
            variant="outlined"
            class="cardscont"
          >
            05
            <hr />
            {{ clickedCards[4] ? 'Unavailable' : 'Evailable' }}
          </v-card>
        </v-col>
        <v-col>
          <v-card
            @click="toggleCard(5)"
            :class="{ 'clicked-card': clickedCards[5] }"
            variant="outlined"
            class="cardscont"
          >
            06
            <hr />
            {{ clickedCards[5] ? 'Unavailable' : 'Evailable' }}
          </v-card>
        </v-col>
        <v-col>
          <v-card
            @click="toggleCard(6)"
            :class="{ 'clicked-card': clickedCards[6] }"
            variant="outlined"
            class="cardscont"
          >
            07
            <hr />
            {{ clickedCards[6] ? 'Unavailable' : 'Evailable' }}
          </v-card>
        </v-col>
        <v-col>
          <v-card
            @click="toggleCard(7)"
            :class="{ 'clicked-card': clickedCards[7] }"
            variant="outlined"
            class="cardscont"
          >
            08
            <hr />
            {{ clickedCards[7] ? 'Unavailable' : 'Evailable' }}
          </v-card>
        </v-col>
        <v-col>
          <v-card
            @click="toggleCard(8)"
            :class="{ 'clicked-card': clickedCards[8] }"
            variant="outlined"
            class="cardscont"
          >
            09
            <hr />
            {{ clickedCards[8] ? 'Unavailable' : 'Evailable' }}
          </v-card>
        </v-col>
        <v-col>
          <v-card
            @click="toggleCard(9)"
            :class="{ 'clicked-card': clickedCards[9] }"
            variant="outlined"
            class="cardscont"
          >
            10
            <hr />
            {{ clickedCards[9] ? 'Unavailable' : 'Evailable' }}
          </v-card>
        </v-col>
      </v-row>
    </div>

    <!-- Dialog for second card -->
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">Card 02 Details</v-card-title>
        <v-card-text>
          This is some detailed information about card 02.
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      clickedCards: Array(10).fill(false), // Initialize clickedCards with 10 false values
      dialog: false, // State to manage dialog visibility
    };
  },
  methods: {
    toggleCard(cardIndex) {
      this.$set(this.clickedCards, cardIndex, !this.clickedCards[cardIndex]);
      if (cardIndex === 1) {
        this.dialog = true; // Show dialog when second card is clicked
      }
    },
  },
};
</script>

<style scoped>
.clicked-card {
  background-color: #08a74a;
}
.containers {
  height: 410px;
  width: 800px;
}
.cardscont {
  text-align: center;
  border-radius: 20px;
  width: 140px;
  height: 80px;
  color: black;
  background-color: white;
}
</style>
