import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Offers from "../views/Offers.vue";
import Login from "../views/Login.vue";
import Demo from "../views/Demo.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/offres",
    name: "Offres",
    component: Offers
  },
  {
    path: "/connexion",
    name: "Espace Recruteurs",
    component: Login
  },
  {
    path: "/demo",
    name: "Demande de démonstration",
    component: Demo
  }
];

const router = new VueRouter({
  routes
});

export default router;
