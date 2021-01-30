import Vue from "vue";
import Vuex from "vuex";
import * as shindig from "@/store/modules/shindig.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    shindig
  },
  state: {
    categories: [
      "sustainability",
      "nature",
      "animal welfare",
      "housing",
      "education",
      "food",
      "community"
    ]
  }
});
