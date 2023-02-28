import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import QuizesView from './view/QuizesView.vue'
import QuizView from './view/QuizView.vue'

const routes = [
  {
    path: "/",
    name: "quizes",
    component: QuizesView,
  },
  {
    path: "/quiz/:id",
    name: "quiz",
    component: QuizView,
  },
];

const router = createRouter({
  history: createWebHashHistory(""),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
