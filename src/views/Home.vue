<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <div>
      <span>{{x}}{{y}}</span>
      <!-- <span>{{count}}</span>
      <span>{{count2}}</span>
      <button @click="add">+1</button>
      <button @click="add2">+1</button>-->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { useMousePosition } from "./hook.js";
import { watchEffect, onMounted, onUnmounted } from "vue";
export default {
  name: "Home",
  setup() {
    const { x, y } = useMousePosition();
    watchEffect(() => {
      // console.log("changex", x.value);
    });
    onMounted(() => {
      // 对应mounted
      console.log("mounted");
    });
    onUnmounted(() => {
      console.log("onUnmounted");
    });
    return { x, y };
  }
};
</script>
