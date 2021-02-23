<template>
  <div>
    <h1>Around Town</h1>
    <Card
      v-for="shindig in shindig.shindigs"
      :key="shindig.id"
      :shindig="shindig"
    />
    <template v-if="page != 1">
      <router-link :to="{ name: 'read', query: { page: page - 1 } }" rel="prev"
        ><v-icon dense>mdi-arrow-left-thin-circle-outline</v-icon>
        Prev</router-link
      >
    </template>
    <template v-if="page != 1 && hasNextPage">
      |
    </template>
    <template v-if="hasNextPage">
      <router-link :to="{ name: 'read', query: { page: page + 1 } }" rel="next">
        Next<v-icon dense class="text-decortation: none"
          >mdi-arrow-right-thin-circle-outline</v-icon
        >
      </router-link>
    </template>

    <BaseIcon />
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import { mapState } from "vuex";

export default {
  components: {
    Card
  },
  created() {
    console.log("\nRead.created() ... start");
    console.log(" ... Read.created() page = " + this.page);
    this.perPage = 3;
    this.$store.dispatch("shindig/getShindigs", {
      perPage: this.perPage,
      page: this.page
    });
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1;
    },
    hasNextPage() {
      return this.shindig.shindigsTotal > this.page * this.perPage;
    },
    ...mapState(["shindig"])
  }
};
</script>
