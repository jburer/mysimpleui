<template>
  <div>
    <Title :title="title" />
    <Card
      v-for="shindig in shindig.shindigs"
      :key="shindig.id"
      :shindig="shindig"
    />
    <Pagination />
    <!--
    <v-container class="pa-0 pt-5">
      <v-btn
        v-if="page != 1"
        class="mx-2"
        text
        rounded
        color="secondary"
        :to="{ name: 'read', query: { page: page - 1 } }"
        rel="prev"
        ><v-icon dense class="mr-2">mdi-arrow-left-thin-circle-outline</v-icon>
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
    </v-container>
    -->
  </div>
</template>

<script>
import { mapState } from "vuex";
import Title from "@/components/Title.vue";
import Card from "@/components/Card.vue";
import Pagination from "@/components/Pagination.vue";

export default {
  components: {
    Title,
    Card,
    Pagination
  },
  data() {
    return {
      title: "Shindigs"
    };
  },
  created() {
    console.log("\nRead.created() ... start");
    /*
    console.log(" ... Read.created() page = " + this.page);
    this.perPage = 3;
    this.$store.dispatch("shindig/getShindigs", {
      perPage: this.perPage,
      page: this.page
    });
    */
    if (this.shindig.shindigsTotal === null) {
      console.log("this.shindig.shindigsTotal = " + this.shindig.shindigsTotal);
      this.$store.dispatch("shindig/getShindigsTotal");
    }
  },
  computed: {
    /*
    page() {
      return parseInt(this.$route.query.page) || 1;
    },
    next() {
      return "/";
    },
    nextPage() {
      return this.page + 1;
    },
    hasNextPage() {
      return this.shindig.shindigsTotal > this.page * this.perPage;
    },
    */
    ...mapState(["shindig"])
  }
};
</script>
