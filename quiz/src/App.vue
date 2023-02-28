<template lang="">
  <div class="container">
    <header>
      <h1>Quizes</h1>
      <input type="text" />
    </header>
    <div class="options-container"></div>
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  components: {
    Header
  }
};
</script>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
}
</style>
