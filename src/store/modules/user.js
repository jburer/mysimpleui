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
  },
  SET_SESSION(state, session) {
    state.session = session;
  }
};

export const actions = {
  setUser({ commit }, user) {
    console.log("\nuser.setUser() ... start");

    commit("SET_USER", user);
    /*
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
    */
  },
  disableUser({ commit }) {
    console.log("\nuser.disableUser() ... start");

    commit("DISABLE_USER");
    /*
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
    */

    console.log("\nuser.disableUser() ... end");
  }
  /*
  setSession({ commit }, session) {
    console.log("\nuser.setSession() ... start");

    console.log(" ... user.setSession(): session = " + session);

    commit("SET_SESSION", session);

    console.log("\nuser.setSession() ... end");
  }
  */
};

export const getters = {
  getUser: state => id => {
    return state.shindigs.find(shindig => shindig.id === id);
  }
};
