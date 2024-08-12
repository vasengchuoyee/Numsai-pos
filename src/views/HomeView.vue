<template>
  <v-sheet class="mt-10" rounded>
    <v-card class="mx-auto px-6 py-8" max-width="500">
      <h3 class="text-center">Numsai Managements</h3>
      <hr />
      <br />
      <v-form v-model="form" @submit.prevent="onSubmit">
        <v-text-field
          v-model="admin"
          :readonly="loading"
          :rules="[required]"
          class="mb-2"
          label="Admin"
          variant="solo"
          clearable
        ></v-text-field>

        <v-text-field
          v-model="password"
          :readonly="loading"
          :rules="[required]"
          label="Password"
          variant="solo"
          placeholder="Enter your password"
          clearable
          type="password"
        ></v-text-field>

        <br />

        <v-btn
          :disabled="!form"
          :loading="loading"
          color="pink"
          size="large"
          type="submit"
          variant="elevated"
          block
        >
          Login
        </v-btn>
      </v-form>
    </v-card>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    form: false,
    admin: null,
    password: null,
    loading: false,
  }),

  methods: {
    onSubmit() {
      if (!this.form) return;

      const correctAdmin = "adminumsai";
      const correctPassword = "num0129";

      if (this.admin === correctAdmin && this.password === correctPassword) {
        this.loading = true;

        setTimeout(() => {
          this.loading = false;
          this.$router.push("/home");
        }, 2000);
      } else {
        alert("Incorrect admin or password");
      }
    },
    required(v) {
      return !!v || "Field is required";
    },
  },
};
</script>

<style scoped>
.mx-auto {
  background-image: -webkit-linear-gradient(
    left,
    rgb(248, 126, 238),
    rgb(134, 121, 247)
  );
}
</style>
