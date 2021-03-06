import { createRouter, createWebHistory } from "vue-router";
import Board from "../components/Board.vue";
import Register from "../pages/Register.vue";
import Login from "../pages/Login.vue"

const routes = [
  {
    path: "/",
    name: "Board",
    component: Board,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;
