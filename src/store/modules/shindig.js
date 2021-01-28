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
  createShindig({ commit, rootState, dispatch }, shindig) {
    console.log("User creating Shindig is " + rootState.user.user.name);
    return Service.postEvent(shindig)
      .then(() => {
        commit("ADD_SHINDIG", shindig);
        const event = {
          type: "success",
          message: "Your shindig has been created!"
        };
        dispatch("event/add", event, { root: true });
      })
      .catch(error => {
        console.log(
          "There was a problem creating your shindig: " + error.message
        );
        const event = {
          type: "error",
          message: "There was a problem creating your shindig: " + error.message
        };
        dispatch("event/add", event, { root: true });
        throw error;
      });
  },
  fetchShindigs({ commit, dispatch }, { perPage, page }) {
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
        const event = {
          type: "error",
          message: "There was a problem fetching shindigs: " + error.message
        };
        dispatch("event/add", event, { root: true });
      });
  },
  fetchShindig({ commit, getters, dispatch }, id) {
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
          const event = {
            type: "error",
            message: "There was a problem fetching shindig: " + error.message
          };
          dispatch("event/add", event, { root: true });
        });
    }
  }
};

export const getters = {
  getShindigById: state => id => {
    return state.shindigs.find(shindig => shindig.id === id);
  }
};
