<template>
  <div>
    <QuizHeader
      :questionStatus="questionStatus"
      :barPercentage="barPercentage"
    />
    <div>
      <QuizQuestion
        v-if="!showResults"
        :question="quiz.questions[currentQuestionIndex]"
        v-on:selectOption="onOptionSelected"
      />
      <QuizResult
        v-else
        :quizQuestionLength="quiz.questions.length"
        :result="result"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import quizes from "./../data/quizes.json";
import QuizHeader from "@/component/QuizHeader.vue";
import QuizQuestion from "@/component/QuizQuestion.vue";
import QuizResult from "@/component/QuizResult.vue";

const route = useRoute();
const quizId = parseInt(route.params.id);
const quiz = quizes.find((quiz) => quiz.id === quizId);
const currentQuestionIndex = ref(0);
const result = ref(0);
const showResults = ref(false);
console.log(quiz);
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
