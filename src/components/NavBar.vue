<template>
  <div v-if="bar == 'header'">
    <v-btn
      v-for="link in links"
      :key="`${link.label}-header-link`"
      class="mx-2"
      text
      rounded
      :to="link.url"
      ><v-icon class="mr-1">{{ link.icon }}</v-icon>
      {{ link.label }}
    </v-btn>
    <Sheet :sheet="sheet" />
  </div>
  <div v-else>
    <v-btn
      v-for="link in links"
      :key="`${link.label}-header-link`"
      class="mx-2"
      text
      rounded
      small
      :to="link.url"
      ><v-icon>{{ link.icon }}</v-icon>
    </v-btn>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Sheet from "@/components/Sheet.vue";

export default {
  props: {
    bar: {
      type: String,
      required: true
    }
  },
  data: () => ({
    links: [],
    isSignedIn: false,
    sheet: {
      status: false,
      color: "",
      text: "",
      uri: ""
    }
  }),
  components: {
    Sheet
  },
  created() {
    console.log("\nNavBar.created() ... start");

    this.links = this.signedInOrOut();
  },
  computed: mapState({
    user: state => state.user.user
  }),
  methods: {
    signedInOrOut() {
      console.log("\nNavBar.signInOrOut() ... start");

      this.links = [
        {
          label: "Shindigs",
          url: "/shindig/read",
          name: "read",
          icon: "mdi-format-list-bulleted-square"
        },
        {
          label: "New",
          url: "/shindig/create",
          name: "create",
          icon: "mdi-pencil"
        },
        {
          label: "About",
          url: "/about",
          name: "about",
          icon: "mdi-information-outline"
        },
        {
          label: "Sign In",
          url: "/account",
          name: "account",
          icon: "mdi-login"
        }
      ];

      if (
        this.$store.state.user.user &&
        Object.keys(this.$store.state.user.user).length === 0 &&
        this.$store.state.user.user.constructor === Object
      ) {
        this.isSignedIn = false;
        this.links[this.links.length - 1] = {
          label: "Sign In",
          url: "/account",
          name: "account",
          icon: "mdi-login"
        };
      } else {
        this.isSignedIn = true;
        this.links[this.links.length - 1] = {
          label: "Sign Out",
          url: "/?signout=true",
          name: "home",
          icon: "mdi-logout"
        };
      }
      return this.links;
    }
  },
  watch: {
    user() {
      console.log("\nNavBar.watch.user(): ... start");

      if (
        this.$store.state.user.user &&
        Object.keys(this.$store.state.user.user).length === 0 &&
        this.$store.state.user.user.constructor === Object
      ) {
        this.isSignedIn = false;
        this.sheet.color = "primary";
        this.sheet.text = "You have been successfully signed out!";
        this.sheet.uri = "/shindig/read";
        this.sheet.status = true;
      } else {
        this.isSignedIn = true;
      }

      this.links = this.signedInOrOut();

      console.log("\nNavBar.watch.user() ... end");
    }
  }
};
</script>
