<template>
  <div class="about">
    <h1>This is an about page</h1>
    <test :name="name" />
    <div v-for="(item, index) in arr" :key="index" >
      <input v-model="item.flag1" type="text" />{{item.flag1}}
    <input v-model="item.flag" @change="aaaaaa(item)" type="checkbox" />{{item.flag}}
    </div>
    {{message}}{{mm}}
  </div>
</template>

<script>

import test from "./test.js";
import { reactive, watchEffect, toRefs } from "vue";

export default {
  components: {
    test
  },
  data() {
    return {
      arr: [
        {
          flag: false,
          flag1: ''
        },
        {
          flag: false,
          flag1: ''
        }
      ]

    }
  },
  methods: {
    aaaaaa(item) {
      console.log(item.flag)
    }
  },
  setup() {
    const state = reactive({
      inputValue: "",
      message: "Hello World!!!",
      name: "name",
    });
    var cc = reactive({
      mm: '1'
    });

    watchEffect(
      () => {
        console.log("aa", state.message);
      },
      {
        lazy: true
      }
    );
    const ccaa = (item) => {
      console.log(item.get('flag'));
    };
    return {
      ...cc,
      ccaa,
      ...toRefs(state)
    };
  }
};
</script>