<template>
  <div class="about">
    <h1>This is an about page</h1>
    <test @click="ccaa" :name="name" />
    <input v-model="message" @change="ccaa" type="text" />
    {{message}}
  </div>
</template>

<script>
import test from "./test.js";
import { reactive, watchEffect, toRefs } from "vue";
export default {
  components: {
    test
  },
  setup() {
    const state = reactive({
      inputValue: "",
      message: "Hello World!!!",
      name: "name"
    });
    watchEffect(
      () => {
        console.log("aa", state.message);
      },
      {
        lazy: true
      }
    );
    const ccaa = () => {
      console.log(2222);
    };
    return {
      ccaa,
      ...toRefs(state)
    };
  }
};
</script>