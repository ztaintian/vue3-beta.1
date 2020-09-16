<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <div>
      <span class="color">{{x}}{{y}}</span>
      <!-- <span>{{count}}</span>
      <span>{{count2}}</span>
      <button @click="add">+1</button>
      <button @click="add2">+1</button>-->
      <div v-for="(item,index) in todoList" :key="index">{{item.name}}<button @click="remove(index)"></button></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { useMousePosition } from "./hook.js";
import { watchEffect, onMounted, onUnmounted, reactive, toRefs } from "vue";
export default {
  name: "Home",
  setup() {
    const { x, y } = useMousePosition();
    const state = reactive({
      newToDo: "",
      todoList: [
        {
          name: "da",
        },
        {
          name: "bbb",
        },
      ],
    });
    const remove = (index) => {
      state.todoList.splice(index, 1)
    }
    watchEffect(() => {
      console.log("changex", x.value);
    });
    onMounted(() => {
      // 对应mounted
      console.log("mounted");
    });
    onUnmounted(() => {
      console.log("onUnmounted");
    });
    return { ...toRefs(state), remove, x, y };
  },
};
</script>
<style lang="stylus">
.color {
  color:$color;
}
</style>
