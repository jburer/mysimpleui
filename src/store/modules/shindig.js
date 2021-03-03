import Service from "@/services/Service.js";

export const namespaced = true;

export const state = {
  shindig: {},
  shindigs: [],
  shindigsTotal: Number
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
    console.log("\nshindigs.createShindigsTotal() ... start");

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
  getShindigsTotal({ commit }) {
    console.log("\nshindigs.getShindigsTotal() ... start");

    Service.getShindigsTotal()
      .then(response => {
        console.log(response.data);
        commit("SET_SHINDIGS_TOTAL", parseInt(response.data.count));
      })
      .catch(error => {
        console.log("There was an error:" + error.response);
      });
  },
  getShindigs({ commit }, { perPage, page }) {
    console.log("\nshindigs.getShindigs() ... start");

    Service.getShindigs(perPage, page)
      .then(response => {
        commit("SET_SHINDIGS", response.data);
      })
      .catch(error => {
        console.log("There was an error:" + error.response);
      });
  },
  getShindig({ commit, getters }, id) {
    console.log("\nshindigs.getShindig() ... start");

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
    console.log("\nshindigs.updateShindig() ... start");

    return Service.putShindig(shindig)
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
    console.log("\nshindigs.deleteShindig() ... start");

    console.log(
      " ... shindigs.deleteShindig() shindigToDelete = " + shindigToDelete
    );
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
