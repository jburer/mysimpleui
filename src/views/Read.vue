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
        >Prev Page</router-link
      >
    </template>
    <template v-if="page != 1 && hasNextPage">
      |
    </template>
    <template v-if="hasNextPage">
      <router-link :to="{ name: 'read', query: { page: page + 1 } }" rel="prev">
        Next Page
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
    ...mapState(["shindig", "user"])
  }
};
</script>
