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
  createShindig({ commit }, shindig) {
    return Service.postShindig(shindig)
      .then(() => {
        commit("ADD_SHINDIG", shindig);
        console.log("Shindig: " + shindig + " created.");
      })
      .catch(error => {
        console.log(
          "There was a problem creating your shindig: " + error.message
        );
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
