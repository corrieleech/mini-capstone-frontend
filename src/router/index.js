import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import ProductsIndex from "../views/ProductsIndex.vue";
import ProductsShow from "../views/ProductsShow.vue";
import ProductsNew from "../views/ProductsNew.vue";
import ProductsEdit from "../views/ProductsEdit.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/logout",
    name: "Logout",
    component: Logout,
  },
  {
    path: "/products",
    name: "ProductsIndex",
    component: ProductsIndex,
  },
  {
    path: "/products/new",
    name: "ProductsNew",
    component: ProductsNew,
  },
  {
    path: "/products/:id",
    name: "ProductsShow",
    component: ProductsShow,
  },
  {
    path: "/products/:id/edit",
    name: "ProductsEdit",
    component: ProductsEdit,
  },
  {},
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
