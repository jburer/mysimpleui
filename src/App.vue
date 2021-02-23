<template>
  <v-app>
    <!--
    <v-card width="400" class="mx-auto mt-5">
      <v-card-title>
        <h1 class="display-1">Login</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field label="Username" prepend-icon="mdi-account-circle" />
          <v-text-field
            :type="showPassword ? 'text' : 'password'"
            label="Password"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          />
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="success">Register</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="info">Login</v-btn>
      </v-card-actions>
    </v-card>
    -->
    <v-app-bar color="primary" dense app>
      <v-toolbar-title>mySampleApp</v-toolbar-title>
      <v-spacer></v-spacer>
      <NavBar :bar="header" />
    </v-app-bar>
    <v-main class="spacing-playground pa-0" fluid>
      <v-content>
        <v-card class="d-flex justify-end align-center pr-6" flat>
          Light / Dark
          <v-switch dense ripple @click="toggleTheme" class="ml-3"></v-switch>
        </v-card>
        <v-card class="px-6" flat>
          <router-view :key="$route.fullPath" />
        </v-card>
      </v-content>
    </v-main>
    <v-footer color="primary lighten-1" padless>
      <v-row justify="center" no-gutters>
        <NavBar :bar="footer" />
        <v-col class="primary lighten-2 py-4 text-center" cols="12">
          {{ new Date().getFullYear() }} — <strong>mySampleApp</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "App",
  props: {
    header: {
      type: String,
      default: "header"
    },
    footer: {
      type: String,
      default: "footer"
    }
  },
  components: {
    NavBar
  },
  data: () => ({
    showPassword: false
  }),
  created() {
    console.log("\nApp.created() ... start");
    console.log(
      " ... App.created() this.$vuetify.theme.dark = " +
        this.$vuetify.theme.dark
    );

    if (this.$store.state.theme) {
      console.log(
        " ... App.created() this.$store.theme = " + this.$store.state.theme
      );
      console.log(
        " ... App.created() this.$store.theme.themeDark = " +
          this.$store.state.theme.themeDark
      );
      this.$vuetify.theme.dark = this.$store.state.theme.themeDark;
    } else {
      console.log(" ... App.created() this.setTheme(this.$vuetify.theme.dark)");
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
  }
};
</script>

<style></style>
