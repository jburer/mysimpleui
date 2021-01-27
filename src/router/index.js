import Vue from "vue";
import VueRouter from "vue-router";
import EventHome from "@/views/EventHome.vue";
import EventCreate from "@/views/EventCreate.vue";
import EventList from "@/views/EventList.vue";
import EventUpdate from "@/views/EventDelete.vue";
import EventDelete from "@/views/EventDelete.vue";
import EventShow from "@/views/EventShow.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "event-home",
    component: EventHome
  },
  {
    path: "/event/create",
    name: "event-create",
    component: EventCreate
  },
  {
    path: "/event/read",
    name: "event-read",
    component: EventList
  },
  {
    path: "/event/update",
    name: "event-update",
    component: EventUpdate
  },
  {
    path: "/event/delete",
    name: "event-delete",
    component: EventDelete
  },
  {
    path: "/event/:id",
    name: "event-show",
    component: EventShow,
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
