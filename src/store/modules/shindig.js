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
  },
  DELETE_SHINDIG(state, shindigToDelete) {
    state.shindigs = state.shindigs.filter(
      shindig => shindig.id !== shindigToDelete.id
    );
  }
};

export const actions = {
  createShindig({ commit, rootState, dispatch }, shindig) {
    console.log("User creating Shindig is " + rootState.user.user.name);
    return Service.postEvent(shindig)
      .then(() => {
        commit("ADD_SHINDIG", shindig);
        console.log("Shindig: " + shindig + " created.");
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
  getShindigs({ commit }, { perPage, page }) {
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
  getShindig({ commit, getters }, id) {
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
  },
  updateShindig({ commit }, shindig) {
    return Service.patchShindig(shindig)
      .then(() => {
        commit("SET_SHINDIG", shindig);
        console.log("Shindig: " + shindig + " updated.");
      })
      .catch(error => {
        console.log(
          "There was a problem updating your shindig: " + error.message
        );
      });
  },
  deleteShindig({ commit }, shindigToDelete) {
    console.log("shindigToDelete = " + shindigToDelete);
    return Service.deleteShindig(shindigToDelete)
      .then(() => {
        commit("DELETE_SHINDIG", shindigToDelete);
        console.log("Shindig " + shindigToDelete + " deleted.");
      })
      .catch(error => {
        console.log(
          "There was a problem deleting your shindig: " + error.message
        );
      });
  }
};

export const getters = {
  getShindigById: state => id => {
    return state.shindigs.find(shindig => shindig.id === id);
  }
};
