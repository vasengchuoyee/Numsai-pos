<template>
  <v-container>
    <v-row cols="12" class="main-row">
      <v-col cols="6" class="product-col">
        <v-card class="rounded-lg product-card">
          <v-tabs v-model="tab" class="texts">
            <v-tab value="one">ເຄື່ອງດື່ມ</v-tab>
            <v-tab value="two">ປະເພດຕຳ</v-tab>
            <v-tab value="three">ປະເພດແກ້ງ</v-tab>
            <v-tab value="four">ປະເພດຈືດ</v-tab>
          </v-tabs>

          <v-card-text>
            <v-window v-model="tab">
              <v-window-item value="one">
                <v-row>
                  <v-scroll-y class="scroll">
                    <v-row>
                      <v-col
                        @click="addCart(item)"
                        class="contents"
                        cols="3"
                        v-for="item in products"
                        :key="item.id"
                      >
                        <img
                          class="images"
                          :src="item.image"
                          cover
                          @mouseover="hovered = true"
                          @mouseleave="hovered = false"
                          alt="Hover Image"
                        />
                        <p>{{ item.name }}</p>
                        <p>
                          <b class="price">{{ formatPrice(item.price) }} ₭</b>
                        </p>
                      </v-col>
                    </v-row>
                  </v-scroll-y>
                </v-row>
              </v-window-item>
            </v-window>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="6" class="table-col">
        <v-list-item class="listwth">
          <hr />
          <v-table>
            <thead class="list_width">
              <tr>
                <th>ລຳດັບ</th>
                <th>ຊື່</th>
                <th>ລາຄາ</th>
                <th>ຈຳນວນ</th>
                <th>ລວມ</th>
                <th>ລຶບ</th>
              </tr>
            </thead>
            <hr />
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
                      color="red"
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
            <p>ລວມທັງໝົດ: {{ formatPrice(total()) }} ກີບ</p>
          </b>

          <v-row>
            <v-col>
              <v-btn class="bg-red" @click="clearcard(product)"> Cancel </v-btn>
            </v-col>

            <v-col>
              <v-btn class="bg-green" @click="conCat(product)"> Print </v-btn>
            </v-col>
          </v-row>
        </v-list-item>
      </v-col>
    </v-row>

    <v-dialog v-model="showInvoice" persistent max-width="800">
      <invoice :carts="carts" @close="showInvoice = false" />
    </v-dialog>
  </v-container>
</template>

<script>
import Invoice from "./Invoice.vue";
export default {
  name: "Tables_order",
  components: {
    Invoice,
  },
  data() {
    return {
      searchQuery: "",
      tab: null,
      overlay: false,
      hovered: false,
      showInvoice: false,
      carts: [],

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
    };
  },
  methods: {
    addCart(item) {
      const cartItem = this.carts.find((cartItem) => cartItem.id === item.id);
      if (cartItem) {
        cartItem.qty++;
        cartItem.total = cartItem.qty * cartItem.price;
      } else {
        this.carts.push({ ...item, qty: 1, total: item.price });
      }
    },
    minusQty(product) {
      const cartItem = this.carts.find(
        (cartItem) => cartItem.id === product.id
      );
      if (cartItem && cartItem.qty > 1) {
        cartItem.qty--;
        cartItem.total = cartItem.qty * cartItem.price;
      }
    },
    plusQty(product) {
      const cartItem = this.carts.find(
        (cartItem) => cartItem.id === product.id
      );
      if (cartItem) {
        cartItem.qty++;
        cartItem.total = cartItem.qty * cartItem.price;
      }
    },
    clearcard(product) {
      if (confirm("Are you sure you want to cancel.?")) {
        this.carts = [];
      }
    },
    removeProduct(product) {
      if (confirm("Are you sure you want to delete.?")) {
        this.carts = this.carts.filter(
          (cartItem) => cartItem.id !== product.id
        );
      }
    },
    clearCart() {
      this.carts = [];
    },
    total() {
      return this.carts.reduce((acc, product) => acc + product.total, 0);
    },
    formatPrice(value) {
      return value.toLocaleString();
    },
    conCat() {
      this.showInvoice = true;
    },
  },
};
</script>

<style scoped>
@media print {
  .invoice-container {
    padding: 0;
    margin: 0;
  }

  .invoice-container .v-card {
    box-shadow: none;
    border: none;
  }

  .v-dialog__content {
    overflow: visible !important;
  }
}
.main-row {
  height: 100%;
}


.product-card {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.scroll {
  max-height: 600px;
  overflow-y: auto;
}

.contents {
  text-align: center;
  width: 100%;
  height: 150px;
  margin-left: 24px;
  margin-top: 20px;
  border-radius: 6%;
  border: 0.5px;
  padding: 10px;
  box-shadow: 0.5px 2px #888888;
  background-color: #f4f2f5;
}

.contents:hover {
  background-image: -webkit-linear-gradient(
    rgb(214, 6, 197),
    rgb(248, 240, 250)
  );
}

.images {
  width: 100%;
  height: 70%;
  transition: transform 0.3s ease-in-out;
}

.images:hover {
  transform: scale(1.1);
}

.maxtext {
  /* white-space: nowrap !important; */
  word-break: normal !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
}

.table-col .v-list-item {
  height: 100%;
}

.table-col .v-table {
  width: 100%;
  table-layout: fixed;
}

.list_width {
  background-image: -webkit-linear-gradient(
    left,
    rgb(235, 9, 216),
    rgb(67, 232, 238)
  );
}
.list_width td {
  text-align: center;
  padding: 8px;
}

.listwth {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 80%;
  margin-left: 50px;
}

.table-col v-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.texts {
  color: white;
  background-image: -webkit-linear-gradient(
    left,
    rgb(235, 9, 216),
    rgb(67, 232, 238)
  );
}

.price {
  color: orangered;
}
</style>
