<template>
  <div>
    <Title :title="title" />
    <Card
      v-for="shindig in shindig.shindigs"
      :key="shindig.id"
      :shindig="shindig"
    />
    <Pagination />
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

    if (isNaN(this.shindig.shindigsTotal)) {
      this.$store.dispatch("shindig/getShindigsTotal");
    }
  },
  computed: {
    ...mapState(["shindig"])
  }
};
</script>
