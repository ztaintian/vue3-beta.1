<template>
  <div class="about">
    <h1>This is an about page</h1>
    <test @click="ccaa" :name="name" />
    <input v-model="a" @change="ccaa" type="text" />
    {{message}}
  </div>
</template>

<script>
import test from "./test.js";
import { reactive, watch, ref, toRefs } from "vue";
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
    let a = ref("");
    watch(
      a,
      () => {
        console.log("aa", a.value);
      },
      {
        lazy: true
      }
    );
    const ccaa = () => {
      console.log(2222);
      state.message = state.message
        .split("")
        .reverse()
        .join("");
      console.log("state.message: ", state.message);
    };
    return {
      a,
      ccaa,
      ...toRefs(state)
    };
  }
};
</script>