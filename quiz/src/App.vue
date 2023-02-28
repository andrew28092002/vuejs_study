<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script setup>
import QuizesView from "./view/QuizesView.vue";
</script>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
}
</style>
