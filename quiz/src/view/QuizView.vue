<template>
  <QuizHeader :questionStatus="questionStatus" :barPercentage="barPercentage" />
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import quizes from "./../data/quizes.json";
import QuizHeader from "@/component/QuizHeader.vue";

const router = useRouter();
const quizId = parseInt(router.params.id);
const quiz = quizes.find((quiz) => quiz.id === quizId);
const currentQuestionIndex = ref(0);
const result = ref(0);
const showResults = ref(false);

const questionStatus = computed(
  () => `${currentQuestionIndex.value}/${quiz.questions.length}`
);
const barPercentage = computed(
  () => `${(currentQuestionIndex.value / quiz.questions.length) * 100}%`
);

const onOptionSelected = (isCorrect) => {
  if (isCorrect) {
    result.value++;
  }
  if (quiz.questions.length - 1 === currentQuestionIndex.value) {
    showResults.value = true;
  }
  currentQuestionIndex.value++;
};
</script>
