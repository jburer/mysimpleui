<template>
  <div>
    <Title :title="title" />
    <v-container>
      <v-row>
        <v-col class="pa-3" d-flex>
          <v-col cols="12" sm="6" md="6" class="pt-7 mt-4">
            <v-icon class="mr-3">mdi-subtitles-outline</v-icon>
            <span class="grey--text grey--darken-4 font-weight-medium"
              >Title:</span
            >
            {{ shindig.title }}
          </v-col>
          <v-col cols="12" sm="6" md="6" class="pt-7 mt-4">
            <v-icon class="mr-3">mdi-image-text</v-icon>
            <span class="grey--text grey--darken-4 font-weight-medium"
              >Description</span
            >
            {{ shindig.description }}
          </v-col>
          <v-col cols="12" sm="6" md="6" class="pt-7 mt-4">
            <v-icon class="mr-3">mdi-map</v-icon>
            <span class="grey--text grey--darken-4 font-weight-medium"
              >Location:</span
            >
            {{ shindig.location }}
          </v-col>
          <v-col cols="12" sm="6" md="6" class="pt-7 mt-4">
            <v-icon class="mr-3">mdi-calendar</v-icon>
            <span class="grey--text grey--darken-4 font-weight-medium"
              >Date:</span
            >
            {{ shindig.date }}
          </v-col>
          <v-col cols="12" sm="6" md="6" class="pt-7 mt-4">
            <v-row justify="space-around" align="center">
              <v-col class="text-h7"
                ><v-icon class="mr-3">mdi-clock-time-four-outline</v-icon>
                <span class="grey--text grey--darken-4 font-weight-medium"
                  >Start Time:</span
                >
                {{ shindig.starttime }}</v-col
              >
              <v-col class="text-h7"
                ><v-icon class="mr-3">mdi-clock-time-eight-outline</v-icon>
                <span class="grey--text grey--darken-4 font-weight-medium"
                  >End Time:</span
                >
                {{ shindig.endtime }}
              </v-col>
            </v-row>
          </v-col>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="d-flex">
          <v-form @submit.prevent="updateShindig">
            <v-btn type="submit" color="primary" class="mr-4">Update</v-btn>
          </v-form>
          <v-form @submit.prevent="deleteShindig">
            <v-btn type="submit" color="error" class="mr-4">Delete</v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Title from "@/components/Title.vue";

export default {
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  components: {
    Title
  },
  data() {
    return {
      title: "myShindig"
    };
  },
  created() {
    console.log("\nShow.created() ... start");

    this.getShindig(this.id);
  },
  computed: mapState({
    shindig: state => state.shindig.shindig
  }),
  methods: {
    deleteShindig() {
      console.log("\nShow.deleteShindig() ... start");

      console.log(
        " ... Show.deleteShindig() this.shindig.id = " + this.shindig.id
      );
      this.$store
        .dispatch("shindig/deleteShindig", this.shindig.id)
        .then(() => {
          this.$router.push({
            name: "read"
          });
        })
        .catch(() => {
          console.log("There was a problem deleting your shindig.");
        });
    },
    updateShindig() {
      console.log("\nShow.updateShindig() ... start");

      console.log(
        "... Show.updateShindig() this.shindig.id = " + this.shindig.id
      );
      this.$router.push({
        name: "update",
        params: { id: this.shindig.id }
      });
    },
    ...mapActions("shindig", ["getShindig"])
  }
};
</script>
