export const namespaced = true;

export const state = {
  themeDark: Boolean
};

export const mutations = {
  SET_THEME(state, themeDark) {
    console.log("\ntheme.SET_THEME() ... start");
    state.themeDark = themeDark;
    console.log(" ... theme.SET_THEME() state.themeDark = " + state.themeDark);
  }
};

export const actions = {
  setTheme({ commit }, themeDark) {
    console.log("\ntheme.setTheme() ... start");
    console.log(" ... theme.setTheme() themeDark = " + themeDark);
    commit("SET_THEME", themeDark);
  }
  /*
  getTheme({ commit, getters }) {
    console.log("\ntheme.getTheme() ... start");
    var themeDark = getters.getThemeByThemeDark();

    if (themeDark) {
      commit("SET_THEME", themeDark);
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
  */
};
/*
export const getters = {
  getThemeByThemeDark: state => {
    console.log("\ntheme.getThemeByThemeDark() ... start");
    console.log(" ... theme.getThemeByThemeDark() state = " + state);
    console.log(
      " ... theme.getThemeByThemeDark() state.theme = " + state.theme
    );
    console.log(
      " ... theme.getThemeByThemeDark() state.theme.themeDark = " +
        state.theme.themeDark
    );
    return state.theme.themeDark;
  }
};
*/
