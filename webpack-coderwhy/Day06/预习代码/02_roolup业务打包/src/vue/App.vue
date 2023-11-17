<template>
  <div class="app">
    <h2>Vue App: {{count}}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}

</script>

<style>
  .app {
    color: red;
  }
</style>
