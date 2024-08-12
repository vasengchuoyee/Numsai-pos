<template>
  <div>
    <p>Count: {{ counter.count }}</p>
    <p>Double Count: {{ counter.doubleCount }}</p>
    <button @click="counter.increment">Increment</button>
    <button @click="counter.decrement">Decrement</button>
  </div>
</template>

<script>
import { useCounterStore } from "@/stores/Counter";

export default {
  setup() {
    const counter = useCounterStore();

    return {
      counter,
    };
  },
};
</script>
