<template>
  <div class="about">
    <h1>This is an about page</h1>
    <test @click="ccaa" :name="name" />
    <input v-model="message" @change="ccaa" type="text" />
    {{message}}{{mm}}
  </div>
</template>

<script>
import test from "./test.js";
import { reactive, watchEffect, toRefs } from "vue";
function log() {
  /**
   * @param target 对应 methods 这个对象
   * @param name 对应属性方法的名称
   * @param descriptor 对应属性方法的修饰符
   */
  return function(target, name, descriptor) {
    console.log(target, name, descriptor)
    const fn = descriptor.value
    descriptor.value = function(...rest) {
      console.log(`这是调用方法【${name}】前打印的日志`)
      fn.call(this, ...rest)
      console.log(`这是调用方法【${name}】后打印的日志`)
    }
  }
}
export default {
  created() {
    this.getData()
  },
   methods: {
    @log()
    getData () {
      console.log('获取数据')
    }
  },
  components: {
    test
  },
  setup() {
    const state = reactive({
      inputValue: "",
      message: "Hello World!!!",
      name: "name"
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
    const ccaa = () => {
      console.log(2222);
      
    };
    return {
      ...cc,
      ccaa,
      ...toRefs(state)
    };
  }
};
</script>