<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="4" class="pt-6 mt-3">
          <v-btn
            v-if="page != 1"
            class="mx-2"
            text
            rounded
            color="secondary"
            :to="{ name: 'read', query: { page: page - 1 } }"
            rel="prev"
            ><v-icon dense class="mr-2"
              >mdi-arrow-left-thin-circle-outline</v-icon
            >
            Prev
          </v-btn>

          <template v-if="page != 1 && hasNextPage">
            |
          </template>
          <v-btn
            v-if="hasNextPage"
            class="mx-2"
            text
            link
            rounded
            color="secondary"
            :to="{ name: 'read', query: { page: this.page + 1 } }"
            rel="next"
            >Next<v-icon dense class="ml-2"
              >mdi-arrow-right-thin-circle-outline</v-icon
            >
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  created() {
    console.log("\nPagination.created() ... start");

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
    /*
    next() {
      return "/";
    },
    */
    nextPage() {
      return this.page + 1;
    },
    hasNextPage() {
      return this.shindig.shindigsTotal > this.page * this.perPage;
    },
    ...mapState(["shindig"])
  }
};
</script>
