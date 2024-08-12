<template>
  <v-container class="invoice-container">
    <v-card class="rounded-lg">
      <v-card-title class="text-center"> NUMSAI Invoice</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <v-list-item v-for="(product, index) in carts" :key="product.id">
              <v-row>
                <v-col cols="1">{{ index + 1 }}</v-col>
                <v-col cols="5">{{ product.name }}</v-col>
                <v-col cols="2">{{ formatPrice(product.price) }}</v-col>
                <v-col cols="2">{{ product.qty }}</v-col>
                <v-col cols="2">{{ formatPrice(product.total) }}</v-col>
              </v-row>
            </v-list-item>
            <v-divider></v-divider>
            <v-row>
              <v-col cols="8" class="text-right"><b>Total:</b></v-col>
              <v-col cols="4">{{ formatPrice(total()) }} ₭</v-col>
            </v-row>
            <v-row>
              <v-col cols="12" class="text-center mt-4"
                ><b>Thank you!</b></v-col
              >
            </v-row>
            <v-row>
              <v-col cols="12" class="text-center mt-2">{{
                formatDate(new Date())
              }}</v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="closeInvoice">Close</v-btn>
        <v-btn @click="printInvoice">Print</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Invoice",
  data() {
    return {};
  },
  props: {
    carts: {
      type: Array,
      required: true,
    },
  },
  methods: {
    formatPrice(value) {
      return value.toLocaleString();
    },
    total() {
      return this.carts.reduce((acc, product) => acc + product.total, 0);
    },
    formatDate(date) {
      const options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      return new Intl.DateTimeFormat("en-US", options).format(date);
    },
    printInvoice() {
      const printContent = this.$el.innerHTML;
      const printWindow = window.open("", "", "height=400,width=800");
      printWindow.document.write("<html><head><title>NUMSAI Invoice</title>");
      printWindow.document.write("</head><body>");
      printWindow.document.write(printContent);
      printWindow.document.write("</body></html>");
      printWindow.document.close();
      printWindow.print();
    },
    closeInvoice() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.invoice-container {
  padding: 20px;
}
</style>
