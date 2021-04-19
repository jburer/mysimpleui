<template>
  <div>
    <Title :title="title" />
    <component v-bind:is="currentTabComponent" class="tab"></component>
    <!--
    <div v-if="identification">
      <Identification />
    </div>
    <div v-else>
      <Authentication />
    </div>
    -->
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
import Identification from "@/components/Identification.vue";
import Authentication from "@/components/Authentication.vue";

export default {
  components: {
    Title,
    Identification,
    Authentication
  },
  data: () => ({
    title: "Account",
    identification: false
  }),
  computed: {
    currentTabComponent: function() {
      if (this.identification) {
        return "Identification";
      } else {
        return "Authentication";
      }
    }
  },
  created() {
    console.log("\nAccount.created() ... start");

    console.log("\nAccount.created() ... end");
  }
};
</script>
