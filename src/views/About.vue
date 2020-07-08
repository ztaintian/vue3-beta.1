<template>
  <div class="about">
    <h1>This is an about page</h1>
    <test :name="message" />
  </div>
</template>

<script>
import test from "./test.js";
import { reactive } from "vue";
export default {
  components: {
    test
  },
  setup() {
    const state = reactive({ message: "Hello World!!!", name: "name" });
    console.log(state)
    return {
      ...state
    };
  }
};
</script>