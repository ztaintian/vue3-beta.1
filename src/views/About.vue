<template>
  <div class="about">
    <h1>This is an about page</h1>
    <test @click="ccaa" :name="name" />
    <input v-model="a" @change="ccaa" type="text" />
  </div>
</template>

<script>
import test from "./test.js";
import { reactive, watch, ref } from "vue";
export default {
  components: {
    test
  },
  setup() {
    let state = reactive({
      inputValue: "",
      message: "Hello World!!!",
      name: "name"
    });
    let a = ref(0)
    watch(a,
      () => {
        console.log('aa', a);
      },
      {
        lazy: true
      }
    );
    const ccaa = () => {
      console.log(2222);
    };
    return {
      a,
      ccaa,
      ...state
    };
  }
};
</script>