import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import GamesView from "../views/GamesView.vue";
import SnakeGame from "../views/SnakeGame.vue"; // Refactor SnakeGame as a View
import SignupView from "../views/SignupView.vue";
import LoginView from "../views/LoginView.vue";


const routes = [
  { path: "/", name: "Home", component: HomeView },
  { path: "/games", name: "Games", component: GamesView },
  { path: "/games/snake", name: "Snake", component: SnakeGame },
  { path: "/signup", name: "Signup", component: SignupView },
  { path: "/login", name: "Login", component: LoginView },  

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
