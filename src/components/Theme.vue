<template>
  <div class="d-flex justify-end align-center text-overline font-weight-light">
    <span class="secondary--text">Light / Dark</span>
    <v-switch
      dense
      ripple
      @click="toggleTheme"
      class="ml-3"
      v-model="theme.themeDark"
    ></v-switch>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  created() {
    console.log("\nTheme.created() ... start");

    if (this.theme.themeDark == false || this.theme.themeDark == true) {
      this.$vuetify.theme.dark = this.theme.themeDark;
    } else {
      this.setTheme(this.$vuetify.theme.dark);
    }
  },
  methods: {
    toggleTheme() {
      console.log("\nApp.toggleTheme() ... start");
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      this.setTheme(this.$vuetify.theme.dark);
      console.log(
        " ... Theme.toggleTheme() this.theme.themeDark = " +
          this.theme.themeDark
      );
    },
    ...mapActions("theme", ["setTheme"])
  },
  computed: {
    ...mapState(["theme"])
  }
};
</script>
