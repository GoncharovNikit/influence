import { createRouter, createWebHistory } from "vue-router";
import Login from "../pages/Login.vue";
import Main from "../pages/Main.vue";
import NotFound from "../pages/NotFound.vue";
import Registration from "../pages/Registration.vue";
import store from "../store";

const routes = [
  {
    path: "/registration",
    component: Registration,
  },
  {
    name: "login",
    path: "/login",
    component: Login,
  },
  {
    name: "main",
    path: "/main",
    component: Main,
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory("/"),
});

router.beforeEach((to, from, next) => {
  if (
    (to.path == "/" || to.path == "/login" || to.path == "/registration") &&
    store.state.user.isAuthorized
  ) {
    next({ path: "/main" });
  } else if (
    to.path != "/registration" &&
    to.path != "/login" &&
    !store.state.user.isAuthorized
  ) {
    next({ path: "/login" });
  } else {
    next();
  }
});

export default router;
