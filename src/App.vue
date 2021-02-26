<template>
  <v-app>
    <v-app-bar color="primary" dense app dark>
      <v-toolbar-title>mySampleApp</v-toolbar-title>
      <v-spacer></v-spacer>
      <NavBar :bar="header" />
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <v-row>
          <v-col>
            <Theme />
          </v-col>
        </v-row>
        <v-row>
          <v-col class="mx-12">
            <router-view :key="$route.fullPath" />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer color="primary darken-1" padless dark app>
      <v-row justify="center" no-gutters>
        <NavBar :bar="footer" />
        <v-col class="primary darken-2 py-4 text-center" cols="12">
          {{ new Date().getFullYear() }} — <strong>mySampleApp</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Theme from "@/components/Theme.vue";

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
    NavBar,
    Theme
  }
};
</script>
