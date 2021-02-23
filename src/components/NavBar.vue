<template>
  <div>
    <v-btn
      v-for="link in links"
      :key="`${link.label}-header-link`"
      class="mx-2"
      text
      rounded
      :to="link.url"
      ><v-icon>{{ link.icon }}</v-icon>
      <v-sheet color="white" elevation="1">{{ link.label }}</v-sheet>
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
      {
        label: "Home",
        url: "/",
        name: "home",
        icon: "mdi-home"
      },
      {
        label: "Create",
        url: "/shindig/create",
        name: "create",
        icon: "mdi-pencil"
      },
      {
        label: "Read",
        url: "/shindig/read",
        name: "read",
        icon: "mdi-format-list-bulleted-square"
      }
    ]
  })
};
</script>
