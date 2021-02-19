import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi"
  },
  theme: {
    themes: {
      dark: {
        primary: "#4caf50",
        secondary: {
          base: "#ff8c00",
          lighten3: "#ffb700",
          darken3: "#ff6200"
        },
        tertiary: {
          base: "#4682bf",
          lighten3: "#4696bf",
          darken3: "#466ebf"
        },
        accent: "#9c27b0"
      },
      light: {
        primary: "#4caf50",
        secondary: {
          base: "#ff8c00",
          lighten3: "#ffb700",
          darken3: "#ff6200"
        },
        tertiary: {
          base: "#4682bf",
          lighten3: "#4696bf",
          darken3: "#466ebf"
        },
        accent: "#9c27b0"
      }
    }
  }
});
