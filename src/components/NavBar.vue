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
export default {
  props: {
    bar: {
      type: String,
      required: true
    }
  },
  data: () => ({
    drawer: false,
    group: null,
    links: [
      /*
      {
        label: "Home",
        url: "/",
        name: "home",
        icon: "mdi-home"
      },
      */
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
      }
    ]
  })
};
</script>
