import Service from "@/services/Service.js";

export const namespaced = true;

export const state = {
  shindigs: [],
  shindigsTotal: Number,
  shindig: {}
};

export const mutations = {
  ADD_SHINDIG(state, shindig) {
    state.shindigs.push(shindig);
  },
  SET_SHINDIGS(state, shindigs) {
    state.shindigs = shindigs;
  },
  SET_SHINDIGS_TOTAL(state, shindigsTotal) {
    state.shindigsTotal = shindigsTotal;
  },
  SET_SHINDIG(state, shindig) {
    state.shindig = shindig;
  }
};

export const actions = {
  createShindig({ commit }, shindig) {
    return Service.postEvent(shindig)
      .then(() => {
        commit("ADD_SHINDIG", shindig);
      })
      .catch(error => {
        console.log(
          "There was a problem creating your shindig: " + error.message
        );
      });
  },
  fetchShindigs({ commit }, { perPage, page }) {
    Service.getShindigs(perPage, page)
      .then(response => {
        commit("SET_SHINDIGS", response.data);
        commit(
          "SET_SHINDIGS_TOTAL",
          parseInt(response.headers["x-total-count"])
        );
      })
      .catch(error => {
        console.log("There was an error:" + error.response);
      });
  },
  fetchShindig({ commit, getters }, id) {
    var shindig = getters.getShindigById(id);

    if (shindig) {
      commit("SET_SHINDIG", shindig);
    } else {
      Service.getShindig(id)
        .then(response => {
          commit("SET_SHINDIG", response.data);
        })
        .catch(error => {
          console.log("There was an error:" + error.response);
        });
    }
  }
};

export const getters = {
  getShindigById: state => id => {
    return state.shindigs.find(shindig => shindig.id === id);
  }
};
