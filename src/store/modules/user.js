export const namespaced = true;

export const state = {
  user: {}
};

export const mutations = {
  SET_USER(state, user) {
    state.user = user;
  },
  DISABLE_USER(state) {
    state.user = {};
  }
};

export const actions = {
  setUser({ commit }, user) {
    console.log("\nuser.setUser() ... start");

    commit("SET_USER", user);

    console.log("\nuser.setUser() ... end");
  },
  disableUser({ commit }) {
    console.log("\nuser.disableUser() ... start");

    commit("DISABLE_USER");

    console.log("\nuser.disableUser() ... end");
  }
};
