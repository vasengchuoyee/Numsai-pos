<template>
  <v-container>
    <v-row>
      <v-col>
        <!-- //testing -->
        <v-card>
          <v-tabs v-model="tab" class="fonts">
            <v-tab value="one">ເຄື່ອງດື່ມປັ່ນ</v-tab>
            <v-tab value="two">ເຄື່ອງໃຊ້</v-tab>
            <v-tab value="three">ເຄື່ອງດື່ມສຳເລັດຮູບ</v-tab>
            <v-tab value="four">ປະເພດອາຫານ</v-tab>
          </v-tabs>

          <v-card-text>
            <v-window v-model="tab">
              <v-window-item value="one">
                <v-row cols="7">
                  <v-scroll-y class="scroll">
                    <v-row>
                      <v-col
                        class="contents"
                        cols="3"
                        v-for="item in products"
                        :key="item.id"
                      >
                        <img
                          class="images"
                          :src="item.image"
                          cover
                          color="error"
                          @click="addCart(item)"
                          @mouseover="hovered = true"
                          @mouseleave="hovered = false"
                          alt="Hover Image"
                        />
                        <v-row>
                          <v-col class="maxtext">
                            <h10> {{ item.name }} </h10>
                          </v-col>
                        </v-row>
                        <hr />
                        <h9
                          ><b>Price: {{ formatPrice(item.price) }} ₭</b></h9
                        ><br />
                      </v-col>
                    </v-row>
                  </v-scroll-y>
                </v-row>
              </v-window-item>

              <v-window-item value="two">
                <v-row cols="7">
                  <v-scroll-y class="scroll">
                    <v-row>
                      <v-col
                        class="contents"
                        cols="3"
                        v-for="item in shoses"
                        :key="item.id"
                        @click="addCart(item)"
                      >
                        <v-img
                          class="align-center"
                          style="width: 100%; height: 60%"
                          :src="item.image"
                          cover
                          color="error"
                          @click="overlay = !overlay"
                        ></v-img>
                        <v-row>
                          <v-col class="maxtext">
                            <h10> {{ item.name }} </h10>
                          </v-col>
                        </v-row>
                        <hr />
                        <h9
                          ><b>Price: {{ formatPrice(item.price) }} ₭</b></h9
                        >
                      </v-col>
                    </v-row>
                  </v-scroll-y>
                </v-row>
              </v-window-item>

              <v-window-item value="three">
                <v-row cols="7">
                  <v-scroll-y class="scroll">
                    <v-row>
                      <v-col
                        class="contents"
                        cols="3"
                        v-for="item in dinks"
                        :key="item.id"
                        @click="addCart(item)"
                      >
                        <v-img
                          class="align-center"
                          style="width: 100%; height: 70%"
                          :src="item.image"
                          cover
                          color="error"
                          @click="overlay = !overlay"
                        ></v-img>
                        <v-row>
                          <v-col class="maxtext">
                            <h10> {{ item.name }} </h10>
                          </v-col>
                        </v-row>
                        <hr />
                        <h9
                          ><b>Price: {{ formatPrice(item.price) }} ₭</b></h9
                        >
                      </v-col>
                    </v-row>
                  </v-scroll-y>
                </v-row>
              </v-window-item>

              <v-window-item value="four">
                <v-row cols="7">
                  <v-scroll-y class="scroll">
                    <v-row>
                      <v-col
                        class="contents"
                        cols="3"
                        v-for="item in foods"
                        :key="item.id"
                        @click="addCart(item)"
                      >
                        <v-img
                          class="align-center"
                          style="width: 100%; height: 70%"
                          :src="item.image"
                          cover
                          color="error"
                          @click="overlay = !overlay"
                        ></v-img>
                        <v-row>
                          <v-col class="maxtext">
                            <h10> {{ item.name }} </h10>
                          </v-col>
                        </v-row>
                        <hr />
                        <h9
                          ><b>Price: {{ formatPrice(item.price) }} ₭</b></h9
                        >
                      </v-col>
                    </v-row>
                  </v-scroll-y>
                </v-row>
              </v-window-item>
            </v-window>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="5">
        <v-list-item>
          <h3 class="familys">
            ກະຕ່າສິ້ນຄ້າຂອງທ່ານ
            <v-icon>mdi-cart-outline</v-icon>
          </h3>
          <div style="color: green">
            <!-- <DateTime /> -->
          </div>
          <hr />

          <v-table>
            <thead>
              <tr>
                <th class="familys">ລຳດັບ</th>
                <th class="familys">ຊື່ສິນຄ້າ</th>
                <th class="familys">ລາຄາ</th>
                <th class="familys">ຈຳນວນ</th>
                <th class="familys">ລວມ</th>
                <th class="familys">ລຶບ</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(product, index) in carts" :key="product.id">
                <td>{{ index + 1 }}</td>
                <div class="maxtext">
                  <td>{{ product.name }}</td>
                </div>
                <td>{{ formatPrice(product.price) }}</td>
                <td>
                  <v-row>
                    <v-icon
                      @click="minusQty(product)"
                      start
                      icon="mdi-minus-circle"
                    >
                    </v-icon>
                    {{ product.qty }}
                    <v-icon
                      @click="plusQty(product)"
                      start
                      icon="mdi-plus-circle"
                    ></v-icon>
                  </v-row>
                </td>
                <td>{{ formatPrice(product.total) }}</td>
                <td>
                  <div>
                    <v-btn
                      class="familys"
                      color="red"
                      min-width="50"
                      rounded
                      variant="outlined"
                      @click="removeProduct(product)"
                    >
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                  </div>
                </td>
              </tr>
            </tbody>
          </v-table>

          <hr />
          <b>
            <p class="familys">ລວມທັງໝົດ: {{ formatPrice(total()) }} ກີບ</p>
          </b>

          <v-row class="familys">
            <v-col>
              <button class="btn btn-danger" @click="clearcard(product)">
                ຍົກເລີກ
              </button>
            </v-col>

            <v-col>
              <button class="btn btn-info" @click="conCat(product)">
                Print
              </button>
            </v-col>
          </v-row>
        </v-list-item>
      </v-col>
    </v-row>
    <Products />
  </v-container>
</template>

<script>
export default {
  name: "Allproducts",
  components: {},
  data() {
    return {
      searchQuery: "",
      tab: null,
      overlay: false,
      hovered: false,
      defaultImageSrc: "path/to/default-image.jpg",
      hoverImageSrc: "path/to/hover-image.jpg",
      isColored: false,

      carts: [],
      // product qty
      coffee: 0,
      tea: 0,
      orange: 0,
      coffees1: 0,
      coffees2: 0,
      coffees3: 0,
      coffees4: 0,
      coffees5: 0,
      coffees6: 0,
      coffees7: 0,
      coffees8: 0,
      coffees9: 0,
      cups: 0,
      cups1: 0,
      cups2: 0,
      // shoses qty
      shose0: 0,

      // dinks qty
      dinks0: 0,

      // foods qty
      foods0: 0,

      products: [
        {
          id: 1,
          name: "Coffee",
          price: 300000,
          image:
            "https://cdn.pixabay.com/photo/2015/05/07/13/46/cappuccino-756490_960_720.jpg",
          active: false,
        },
        {
          id: 2,
          name: "Green coffee",
          price: 40000,
          image:
            "https://cdn.pixabay.com/photo/2016/08/10/15/10/green-tea-1583546__340.jpg",
          active: false,
        },
        {
          id: 3,
          name: "Orangejuie",
          price: 25000,
          image:
            "https://media.istockphoto.com/id/152971676/photo/glass-of-orange-juice-and-fresh-oranges.jpg?b=1&s=170667a&w=0&k=20&c=683otTsEcPbv7ME8LGGDA2VlrF2J80rrtQ0ISWOsAqY=",
          active: false,
        },
        {
          id: 4,
          name: "Coconut",
          price: 20000,
          image:
            "https://media.istockphoto.com/id/503893920/photo/coconut-milk-drink.jpg?s=612x612&w=0&k=20&c=WiJXi5W6tanQ6awnKRtJ22ZsSIgUtgHCuS_bXzeCJ_g=",
          active: false,
        },
        {
          id: 5,
          name: "Watermelon",
          price: 45000,
          image:
            "https://media.istockphoto.com/id/1451140794/photo/watermelon-smoothie-in-a-jar-with-mint-and-lemon.jpg?s=1024x1024&w=is&k=20&c=zP0lBu1TlUmx7a6VLCOK88wRBl4WpW-BK9cHZdx6IkI=",
          active: false,
        },
        {
          id: 6,
          name: "lemon",
          price: 35000,
          image:
            "https://cdn.pixabay.com/photo/2016/07/21/11/17/drink-1532300_960_720.jpg",
          active: false,
        },
        {
          id: 7,
          name: "lemon glass",
          price: 30000,
          image:
            "https://cdn.pixabay.com/photo/2018/04/17/11/03/cocktail-3327242__340.jpg",
          active: false,
        },
        {
          id: 8,
          name: "Pineapp",
          price: 50000,
          image:
            "https://media.istockphoto.com/id/176851361/photo/pineapple-juice.jpg?s=1024x1024&w=is&k=20&c=KgYRU5VuhImRVT611Eze_dodbNrmbv9W6lnQlNY2GVo=",
          active: false,
        },
        {
          id: 9,
          name: "Banana",
          price: 45000,
          image:
            "https://media.istockphoto.com/id/932148590/photo/banana-milk-smoothie-on-white-background.jpg?s=1024x1024&w=is&k=20&c=bQHfXqF9vb3Eip3bQ-jUjA1Ok5L5X2OqwxuQKHcIgO8=",
          active: false,
        },
        {
          id: 10,
          name: "Mango",
          price: 38000,
          image:
            "https://media.istockphoto.com/id/1256123008/photo/glass-of-mango-juice-smoothie-mango-juice-with-mango-slice-and-mango-slice-on-glass-isolated.jpg?s=1024x1024&w=is&k=20&c=vlUIAHh6Ow7tNJ98cr2BN8N6j3pQE8dHQ2Pdb1_8npI=",
          active: false,
        },
        {
          id: 11,
          name: "Water",
          price: 10000,
          image:
            "https://cdn.pixabay.com/photo/2017/10/21/16/07/glass-2875091__340.jpg",
          active: false,
        },
        {
          id: 12,
          name: "Coconut",
          price: 20000,
          image:
            "https://media.istockphoto.com/id/503893920/photo/coconut-milk-drink.jpg?s=612x612&w=0&k=20&c=WiJXi5W6tanQ6awnKRtJ22ZsSIgUtgHCuS_bXzeCJ_g=",
          active: false,
        },
        {
          id: 13,
          name: "Teacup",
          price: 40000,
          image:
            "https://cdn.pixabay.com/photo/2017/05/19/07/34/teacup-2325722_1280.jpg",
          active: false,
        },
        {
          id: 14,
          name: "coldcoffee",
          price: 40000,
          image:
            "https://cdn.pixabay.com/photo/2015/02/05/01/33/valentines-day-624440_1280.jpg",
          active: false,
        },
        {
          id: 15,
          name: "pomegranate",
          price: 50000,
          image:
            "https://media.istockphoto.com/id/526821920/photo/cup-of-tea-with-lemongrass.jpg?s=1024x1024&w=is&k=20&c=lm5PvBCAy6kDL2AIWqJ9hxD1-JrGsWhXtSWD1IGews0=",
          active: false,
        },
      ],

      shoses: [
        {
          id: 16,
          name: "batel water",
          price: 20000,
          image: "1.png",
          active: false,
        },
        {
          id: 17,
          name: "batel water",
          price: 20000,
          image: "2.png",
          active: false,
        },
        {
          id: 18,
          name: "batel water",
          price: 20000,
          image: "3.png",
          active: false,
        },
        {
          id: 19,
          name: "batel water",
          price: 20000,
          image: "4.png",
          active: false,
        },
        {
          id: 20,
          name: "batel water",
          price: 20000,
          image: "5.png",
          active: false,
        },
        {
          id: 21,
          name: "batel water",
          price: 20000,
          image: "6.png",
          active: false,
        },
        {
          id: 22,
          name: "batel water",
          price: 20000,
          image: "7.png",
          active: false,
        },
        {
          id: 23,
          name: "batel water",
          price: 20000,
          image: "8.png",
          active: false,
        },
        {
          id: 24,
          name: "batel water",
          price: 20000,
          image: "9.png",
          active: false,
        },
        {
          id: 25,
          name: "batel water",
          price: 20000,
          image: "10.png",
          active: false,
        },
        {
          id: 26,
          name: "batel water",
          price: 20000,
          image: "11.png",
          active: false,
        },
        {
          id: 27,
          name: "batel water",
          price: 20000,
          image: "12.png",
          active: false,
        },
      ],

      dinks: [
        {
          id: 28,
          name: " water",
          price: 20000,
          image: "f01.jpg",
          active: false,
        },
        {
          id: 29,
          name: " water",
          price: 20000,
          image: "f02.jpg",
          active: false,
        },
        {
          id: 30,
          name: " water",
          price: 20000,
          image: "f03.jpg",
          active: false,
        },
        {
          id: 31,
          name: " water",
          price: 20000,
          image: "f04.jpg",
          active: false,
        },
        {
          id: 32,
          name: " water",
          price: 20000,
          image: "f05.jpg",
          active: false,
        },
        {
          id: 33,
          name: " water",
          price: 20000,
          image: "f06.jpg",
          active: false,
        },
        {
          id: 34,
          name: " water",
          price: 20000,
          image: "f07.jpg",
          active: false,
        },
        {
          id: 35,
          name: " water",
          price: 20000,
          image: "f08.jpg",
          active: false,
        },
        {
          id: 36,
          name: " water",
          price: 20000,
          image: "f09.jpg",
          active: false,
        },
        {
          id: 37,
          name: " water",
          price: 20000,
          image: "f10.jpg",
          active: false,
        },
        {
          id: 38,
          name: " water",
          price: 20000,
          image: "f11.jpg",
          active: false,
        },
        {
          id: 39,
          name: " water",
          price: 20000,
          image: "f12.jpg",
          active: false,
        },
        {
          id: 40,
          name: " water",
          price: 20000,
          image: "f13.jpg",
          active: false,
        },
      ],

      foods: [
        {
          id: 41,
          name: " water",
          price: 20000,
          image: "fd1.png",
          active: false,
        },
        {
          id: 42,
          name: " water",
          price: 20000,
          image: "fd2.png",
          active: false,
        },
        {
          id: 43,
          name: " water",
          price: 20000,
          image: "fd3.png",
          active: false,
        },
        {
          id: 44,
          name: " water",
          price: 20000,
          image: "fd4.png",
          active: false,
        },
        {
          id: 45,
          name: " water",
          price: 20000,
          image: "fd5.png",
          active: false,
        },
        {
          id: 46,
          name: " water",
          price: 20000,
          image: "fd6.png",
          active: false,
        },
        {
          id: 47,
          name: " water",
          price: 20000,
          image: "fd7.png",
          active: false,
        },
        {
          id: 48,
          name: " water",
          price: 20000,
          image: "fd8.png",
          active: false,
        },
        {
          id: 47,
          name: " water",
          price: 20000,
          image: "fd9.png",
          active: false,
        },
      ],
    };
  },

  computed: {
    filteredProducts() {
      return this.products.filter((product) =>
        product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },

  watch: {
    overlay(val) {
      val &&
        setTimeout(() => {
          this.overlay = false;
        }, 2000);
    },
  },

  methods: {
    toggleColor() {
      this.isColored = !this.isColored;
    },
    // qty solve  all the products
    addCart: function (item) {
      if (item.id == 1) {
        //bye coffee
        this.coffee += 1;
        if (this.coffee <= 1) {
          //one time in one
          this.pushData(item);
        } else {
          //bye the same
          var found = this.findIndex(item);
          this.carts[found].qty += 1;
          this.carts[found].total =
            this.carts[found].qty * this.carts[found].price;
        }
      }
      if (item.id == 2) {
        //bye others
        this.tea += 1;
        if (this.tea <= 1) {
          //one time in one
          this.pushData(item);
        } else {
          //bye the same
          var founds = this.findIndex(item);
          this.carts[founds].qty += 1;
          this.carts[founds].total =
            this.carts[founds].qty * this.carts[founds].price;
        }
      }
      if (item.id == 3) {
        //bye others
        this.orange += 1;
        if (this.orange <= 1) {
          //one time in one
          this.pushData(item);
        } else {
          //bye the same
          var founds1 = this.findIndex(item);
          this.carts[founds1].qty += 1;
          this.carts[founds1].total =
            this.carts[founds1].qty * this.carts[founds1].price;
        }
      }
      if (item.id == 4) {
        //bye others
        this.coffees1 += 1;
        if (this.coffees1 <= 1) {
          //one time in one
          this.pushData(item);
        } else {
          //bye the same
          var founds2 = this.findIndex(item);
          this.carts[founds2].qty += 1;
          this.carts[founds2].total =
            this.carts[founds2].qty * this.carts[founds2].price;
        }
      }
      if (item.id == 5) {
        //bye others
        this.coffees2 += 1;
        if (this.coffees2 <= 1) {
          //one time in one
          this.pushData(item);
        } else {
          //bye the same
          var founds3 = this.findIndex(item);
          this.carts[founds3].qty += 1;
          this.carts[founds3].total =
            this.carts[founds3].qty * this.carts[founds3].price;
        }
      }
      if (item.id == 6) {
        //bye others
        this.coffees3 += 1;
        if (this.coffees3 <= 1) {
          //one time in one
          this.pushData(item);
        } else {
          //bye the same
          var founds4 = this.findIndex(item);
          this.carts[founds4].qty += 1;
          this.carts[founds4].total =
            this.carts[founds4].qty * this.carts[founds4].price;
        }
      }
      if (item.id == 7) {
        //bye others
        this.coffees4 += 1;
        if (this.coffees4 <= 1) {
          //one time in one
          this.pushData(item);
        } else {
          //bye the same
          var founds5 = this.findIndex(item);
          this.carts[founds5].qty += 1;
          this.carts[founds5].total =
            this.carts[founds5].qty * this.carts[founds5].price;
        }
      }
      if (item.id == 8) {
        //bye others
        this.coffees5 += 1;
        if (this.coffees5 <= 1) {
          //one time in one
          this.pushData(item);
        } else {
          //bye the same
          var founds6 = this.findIndex(item);
          this.carts[founds6].qty += 1;
          this.carts[founds6].total =
            this.carts[founds6].qty * this.carts[founds6].price;
        }
      }
      if (item.id == 9) {
        //bye others
        this.coffees6 += 1;
        if (this.coffees6 <= 1) {
          //one time in one
          this.pushData(item);
        } else {
          //bye the same
          var founds7 = this.findIndex(item);
          this.carts[founds7].qty += 1;
          this.carts[founds7].total =
            this.carts[founds7].qty * this.carts[founds7].price;
        }
      }
      if (item.id == 10) {
        //bye others
        this.coffees7 += 1;
        if (this.coffees7 <= 1) {
          //one time in one
          this.pushData(item);
        } else {
          //bye the same
          var founds8 = this.findIndex(item);
          this.carts[founds8].qty += 1;
          this.carts[founds8].total =
            this.carts[founds8].qty * this.carts[founds8].price;
        }
      }
      if (item.id == 11) {
        //bye others
        this.coffees8 += 1;
        if (this.coffees8 <= 1) {
          //one time in one
          this.pushData(item);
        } else {
          //bye the same
          var founds9 = this.findIndex(item);
          this.carts[founds9].qty += 1;
          this.carts[founds9].total =
            this.carts[founds9].qty * this.carts[founds9].price;
        }
      }
      if (item.id == 12) {
        //bye others
        this.coffees9 += 1;
        if (this.coffees9 <= 1) {
          //one time in one
          this.pushData(item);
        } else {
          //bye the same
          var founds10 = this.findIndex(item);
          this.carts[founds10].qty += 1;
          this.carts[founds10].total =
            this.carts[founds10].qty * this.carts[founds10].price;
        }
      }
      if (item.id == 13) {
        //bye others
        this.cups += 1;
        if (this.cups <= 1) {
          //one time in one
          this.pushData(item);
        } else {
          //bye the same
          var founds11 = this.findIndex(item);
          this.carts[founds11].qty += 1;
          this.carts[founds11].total =
            this.carts[founds11].qty * this.carts[founds11].price;
        }
      }
      if (item.id == 14) {
        //bye others
        this.cups1 += 1;
        if (this.cups1 <= 1) {
          //one time in one
          this.pushData(item);
        } else {
          //bye the same
          var founds12 = this.findIndex(item);
          this.carts[founds12].qty += 1;
          this.carts[founds12].total =
            this.carts[founds12].qty * this.carts[founds12].price;
        }
      }
      if (item.id == 15) {
        //bye others
        this.cups2 += 1;
        if (this.cups2 <= 1) {
          //one time in one
          this.pushData(item);
        } else {
          //bye the same
          var founds13 = this.findIndex(item);
          this.carts[founds13].qty += 1;
          this.carts[founds13].total =
            this.carts[founds13].qty * this.carts[founds13].price;
        }
      }
      if (item.id == 16) {
        //bye others
        this.shose0 += 1;
        if (this.shose0 <= 1) {
          //one time in one
          this.pushData(item);
        } else {
          //bye the same
          var founds14 = this.findIndex(item);
          this.carts[founds14].qty += 1;
          this.carts[founds14].total =
            this.carts[founds14].qty * this.carts[founds14].price;
        }
      }

      // qty from dinks

      if (item.id == 28) {
        //bye others
        this.dinks0 += 1;
        if (this.dinks0 <= 1) {
          //one time in one
          this.pushData(item);
        } else {
          //bye the same
          var founds15 = this.findIndex(item);
          this.carts[founds15].qty += 1;
          this.carts[founds15].total =
            this.carts[founds15].qty * this.carts[founds15].price;
        }
      }

      // qty from foods

      if (item.id == 41) {
        //bye others
        this.foods0 += 1;
        if (this.foods0 <= 1) {
          //one time in one
          this.pushData(item);
        } else {
          //bye the same
          var founds16 = this.findIndex(item);
          this.carts[founds16].qty += 1;
          this.carts[founds16].total =
            this.carts[founds16].qty * this.carts[founds16].price;
        }
      }
    },
    pushData(item) {
      this.carts.push({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        qty: 1,
        total: item.price,
      });
    },
    findIndex: function (item) {
      for (var i = 0; i < this.carts.length; i++) {
        if (this.carts[i].id == item.id) {
          return i; // find the id
        }
      }
      return -1;
    },
    minusQty: function (product) {
      product.qty -= 1;
      if (product.qty <= 1) {
        product.qty = 1;
      }
      product.total = product.price * product.qty;
    },
    plusQty: function (product) {
      product.qty += 1;
      product.total = product.price * product.qty;
    },
    removeProduct(product) {
      if (confirm("Do you sure you want to delete.?")) {
        var index = this.carts.indexOf(product);
        this.carts.splice(index, 1);
        if (product.id == 1) {
          this.coffee = 0;
        } else {
          this.tea = 0;
        }
      }
    },
    clearcard(product) {
      if (confirm("Are you sure you want to cancel.?")) {
        this.carts = [];
      }
    },
    total: function () {
      var sum = 0;
      this.carts.forEach(function (item) {
        sum += item.total;
      });
      return sum;
    },

    formatPrice(item) {
      let val = (item / 1).toFixed(0).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },

    conCat(product) {
      if (confirm("Your all products in this cart will send to the Admin ")) {
        try {
          let Str = "";
          let total = 0;

          this.carts.map((product, i) => {
            total = total + product.price * product.qty;
            Str =
              Str +
              ` "ຮ້ານຂາຍເຄື່ອງດື່ມ" +
                "\n" + ${i + 1}:  ຊື່ສິນຄ້າ: ${product.name},
                ລາຄາ: ${product.price}, ຈຳນວນ: ${product.qty}, 
                ລວມ: ${parseInt(product.price * product.qty) + " Kip"}`;
            "\n" + "\n";
          });

          Str = Str + "\n" + "ລວມລາຄາສິ້ນຄ້າທັງໝົດ: " + total + " Kip";

          let link = "";
          link = "http://web";
          // link += this.isMobile() ? "api" : "web";
          link +=
            ".whatsapp.com/send?phone=" +
            "856" +
            "2077474616" +
            "&text=" +
            encodeURI(Str);
          window.open(link);
        } catch (error) {
          console.log(error);
        }
      } else {
        $router.push("/");
      }
    },
  },
};
</script>

<style scoped>
/* You can add additional CSS styles for the image, such as setting a transition effect */
img {
  transition: transform 0.3s ease-in-out;
}

/* Apply a transform scale when the image is hovered */
img:hover {
  transform: scale(1.1);
}

i {
  cursor: pointer;
  margin-left: 3px;
  margin-right: 3px;
}

h3 {
  color: rgb(247, 99, 99);
}

h9 {
  color: rgb(247, 99, 99);
  padding: 10px;
}

h10 {
  color: rgb(10, 10, 10);
  padding: 10px;
}

.colored-box {
  background-color: rgb(219, 52, 52);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.maxtext {
  /* white-space: nowrap !important; */
  width: 50px;
  word-break: normal !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
}

.contents {
  width: 100%;
  height: 200px;
  margin-left: 4%;
  margin-top: 2%;
  border-radius: 6%;
  border: 0.5px;
  padding: 10px;
  box-shadow: 0px 2px 2px #888888;
  background-color: #ffff;
}
.scroll {
  height: 1000px;
  width: 100%;
  overflow-y: auto;
}

.fonts {
  background-color: rgb(247, 128, 128);
  color: white;
}

.images {
  text-align: center;
  width: 100%;
  height: 50%;
  cursor: pointer;
}
</style>
