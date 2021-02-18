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
      {{ link.label }}
    </v-btn>
  </div>
</template>

<script>
export default {
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

<style scoped>
/*
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}
.nav > .brand {
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 1.5em;
  color: #39b982;
  text-decoration: none;
}
.nav .nav-item {
  box-sizing: border-box;
  margin: 0 5px;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
}
.nav .nav-item.router-link-exact-active {
  color: #39b982;
  border-bottom: solid 2px #39b982;
}
*/
</style>
