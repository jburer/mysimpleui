import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import * as theme from "@/store/modules/theme.js";
import * as shindig from "@/store/modules/shindig.js";
import * as user from "@/store/modules/user.js";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      storage: window.sessionStorage
    })
  ],
  modules: {
    theme,
    shindig,
    user
  },
  state: {}
});
