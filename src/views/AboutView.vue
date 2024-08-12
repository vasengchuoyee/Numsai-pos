<template>
  <v-app>
    <v-navigation-drawer app style="width: 60px">
      <v-list dense class="menucolor">
        <Acount />
        <br />
        <hr />

        <v-list-item-group v-model="selectedTab" class="hover-backg">
          <v-list-item
            v-for="item in menuItems"
            :key="item.title"
            @click="changePage(item.page)"
          >
            <v-row>
              <v-col>
                <v-list-item-icon>
                  <v-icon :color="item.color">{{ item.icon }}</v-icon>
                </v-list-item-icon>
              </v-col>
            </v-row>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <div>
      <v-card class="cardcontent">
        <v-row>
          <v-col cols="8">
            <h2 class="ml-10 mt-2">NUMSAI <span>POS</span></h2>
          </v-col>
          <v-col cols="4">
            <router-link to="/to">
              <v-badge color="#0091EA" overlap content="3" class="mr-2 mt-4">
                <v-icon color="#0091EA">mdi-bell-ring</v-icon>
              </v-badge>
            </router-link>
          </v-col>
        </v-row>
      </v-card>
    </div>

    <v-row class="backsimage">
      <v-col cols="11">
        <v-main class="main-main">
          <v-window v-model="selectedTab">
            <br />
            <v-window-item
              v-for="(component, index) in components"
              :key="index"
              :value="index"
            >
              <component :is="component" />
            </v-window-item>
          </v-window>
        </v-main>
      </v-col>
      <v-col cols="1">
        <router-link to="/allproducts">
          <v-card class="addcards"
            >Table 01
            <hr />
            2 Items | Total: 30.000 ₭
          </v-card>
        </router-link>
        <br />
        <v-card class="addcards"
          >Table 02
          <hr />
          4 Items | Total: 50.000 ₭
        </v-card>
        <br />
        <v-card class="addcards"
          >Table 03
          <hr />
          1 Items | Total: 20.000 ₭
        </v-card>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import Contents from "@/components/Contents.vue";
import Acount from "@/components/Acount.vue";
import Tables_order from "@/components/Tables_order.vue";
import Com_counterVue from "../components/Com_counter.vue";

export default {
  name: "Admins",
  components: {
    Contents,
    Acount,
    Tables_order,
    Com_counterVue,
  },
  data: () => ({
    selectedTab: 0,
    isTooltipVisible: false,
    menuItems: [
      { icon: "mdi-monitor", color: "blue", page: 0 },
      { icon: "mdi-cart-outline", color: "", page: 1 },
      {
        icon: "mdi-console",
        color: "red",
        page: 2,
      },
      {
        icon: "mdi-atom",
        color: "green",
        page: 3,
      },
      { icon: "mdi-web", color: "blue", page: 4 },
    ],
    components: [Contents, Tables_order, Com_counterVue],
  }),
  methods: {
    changePage(page) {
      this.selectedTab = page;
    },
    showTooltip() {
      this.isTooltipVisible = true;
    },
    hideTooltip() {
      this.isTooltipVisible = false;
    },
  },
};
</script>

<style scoped>
.hover-backg :hover {
  background-color: pink;
  cursor: pointer;
}

.cardcontent {
  border-radius: 10px;
  height: 50px;
  margin-left: 60px;
  color: white;
  background-image: -webkit-linear-gradient(
    left,
    rgb(173, 5, 159),
    rgb(102, 86, 245)
  );
}

.menucolor {
  height: 610px;
  background: linear-gradient(
    0deg,
    rgba(255, 0, 255, 1) 0%,
    rgba(252, 251, 251) 50%,
    rgb(182, 3, 182)
  );
}
span {
  font-family: "Tangerine", cursive;
  color: black;
}
h2 {
  font-family: "Times New Roman", Times, serif;
}

.main-main {
  margin-left: -200px;
  height: 560px;
  width: auto;
}
.addcards {
  text-align: center;
  margin-top: 10px;
  margin-left: -180px;
  height: 60px;
  width: 260px;
  background-image: -webkit-linear-gradient(left, rgb(189, 6, 173), white);
}
.backsimage {
  background-image: url("2222.jpg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 70vh;
  height: auto;
}

span {
  color: orange;
}

/* .allbacks {
  background: linear-gradient(red, transparent),
    linear-gradient(to top left, lime, transparent),
    linear-gradient(to top right, blue, transparent);
  background-blend-mode: screen;
} */
</style>
