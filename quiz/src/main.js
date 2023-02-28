import { createApp } from "vue";
import App from "./App.vue";
// import { createRouter, createWebHashHistory } from "vue-router";

// const routes = [
//   {
//     path: "/",
//     name: "quizes",
//     component: Quizes,
//   },
//   {
//     path: "/quiz/:id",
//     name: "quiz",
//     component: Quiz,
//   },
// ];

// const router = createRouter({
//   history: createWebHashHistory(""),
//   routes,
// });

const app = createApp(App);
// app.use(router);
app.mount("#app");
