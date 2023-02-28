<template>
  <div>
    <header>
      <h1>Quizes</h1>
      <input v-model.trim="search" type="text" />
    </header>
    <div class="options-container">
        <CardComponent v-for="quiz in quizes" :key="quiz.id" :quiz="quiz"/>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import quizesData from "./../data/quizes.json";
import CardComponent from "./../component/CardComponent.vue";

const quizes = ref(quizesData);
const search = ref("");

watch(search, () => {
  quizes.value = quizes.value.filter((quize) =>
    quize.name.toLowerCase().includes(search.value.toLocaleLowerCase())
  );
});
</script>

<style scoped>
header {
  margin-bottom: 10px;
  margin-top: 30px;
  display: flex;
  align-items: center;
}

header h1 {
  font-weight: bold;
  margin-right: 30px;
}

header input {
  border: none;
  background-color: rgba(128, 128, 128, 0.1);
  padding: 10px;
  border-radius: 5px;
}
</style>
