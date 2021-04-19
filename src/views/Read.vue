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
import { mapState, mapActions } from "vuex";
import Title from "@/components/Title.vue";
import Card from "@/components/Card.vue";
import Pagination from "@/components/Pagination.vue";

export default {
  props: ["signout"],
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

    if (this.signout) {
      console.log(this.user.user);
      this.disableUser(this.user);
    }
  },
  computed: {
    ...mapState(["shindig", "user"])
  },
  methods: {
    ...mapActions("user", ["disableUser"])
  }
};
</script>
