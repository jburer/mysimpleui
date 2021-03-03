import Vue from "vue";
import VueRouter from "vue-router";
//import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Create from "@/views/Create.vue";
import Read from "@/views/Read.vue";
import Update from "@/views/Update.vue";
import Show from "@/views/Show.vue";

Vue.use(VueRouter);

const routes = [
  /*
  {
    path: "/",
    name: "home",
    component: Read
  },
  */
  {
    path: "/",
    name: "home",
    component: Read
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/shindig/create",
    name: "create",
    component: Create
  },
  {
    path: "/shindig/read",
    name: "read",
    component: Read
  },
  {
    path: "/shindig/update",
    name: "update",
    component: Update,
    props: true
  },
  {
    path: "/shindig/:id",
    name: "show",
    component: Show,
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
