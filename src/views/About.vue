<template>
  <div class="about">
    <h1>This is an about page</h1>
    <test :name="'dadada'"/>
  </div>
</template>

<script>
import test from './test.js'
export default {
  components: {
    test
  }
  
}
</script>