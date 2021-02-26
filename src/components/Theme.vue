<template>
  <!--<div class="d-flex justify-end align-center mt-12">-->
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
    console.log(
      " ... Theme.created() this.$vuetify.theme.dark = " +
        this.$vuetify.theme.dark
    );

    if (this.$store.state.theme) {
      console.log(
        " ... Theme.created() this.$store.theme = " + this.$store.state.theme
      );
      console.log(
        " ... Theme.created() this.$store.theme.themeDark = " +
          this.$store.state.theme.themeDark
      );
      this.$vuetify.theme.dark = this.$store.state.theme.themeDark;
    } else {
      console.log(
        " ... Theme.created() this.setTheme(this.$vuetify.theme.dark)"
      );
      this.setTheme(this.$vuetify.theme.dark);
    }
  },
  methods: {
    toggleTheme() {
      console.log("\nApp.toggleTheme() ... start");
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      this.setTheme(this.$vuetify.theme.dark);
    },
    ...mapActions("theme", ["setTheme"])
  },
  computed: {
    ...mapState(["theme"])
  }
};
</script>
