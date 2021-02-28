<template>
  <div>
    <h1>{{ shindig.title }}</h1>
    <v-container>
      <v-row>
        <v-col class="text-h6"
          ><v-icon class="mr-2">mdi-calendar</v-icon>Date:</v-col
        >
        <v-col>{{ shindig.date }}</v-col>
      </v-row>
      <v-row justify="space-around" align="center">
        <v-col class="text-h6"
          ><v-icon class="mr-2">mdi-clock-time-four-outline</v-icon>Start
          Time:</v-col
        >
        <v-col>{{ shindig.starttime }}</v-col>
        <v-col class="text-h6"
          ><v-icon class="mr-2">mdi-clock-time-four-outline</v-icon>End
          Time:</v-col
        >
        <v-col>{{ shindig.endtime }} </v-col>
      </v-row>
      <v-row>
        <v-col class="text-h6"
          ><v-icon class="mr-2">mdi-map</v-icon>Location:</v-col
        >
      </v-row>
      <v-row>
        <v-col>{{ shindig.location }}</v-col>
      </v-row>
      <v-row>
        <v-col class="text-h6"
          ><v-icon class="mr-2">mdi-format-list-bulleted</v-icon>Details:</v-col
        >
      </v-row>
      <v-row>
        <v-col>{{ shindig.description }}</v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-form @submit.prevent="updateShindig">
            <v-btn type="submit" color="primary" class="mr-4">Update</v-btn>
          </v-form>
        </v-col>
        <v-col>
          <v-form @submit.prevent="deleteShindig">
            <v-btn type="submit" color="primary" class="mr-4">Delete</v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  created() {
    console.log("\nShow.created() ... start");
    console.log(" ... Show.created() this.id = " + this.id);
    this.getShindig(this.id);
  },
  computed: mapState({
    shindig: state => state.shindig.shindig
  }),
  methods: {
    deleteShindig() {
      console.log("this.shindig.id = " + this.shindig._id);
      this.$store
        .dispatch("shindig/deleteShindig", this.shindig._id)
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
      console.log("this.shindig.id = " + this.shindig._id);
      this.$router.push({
        name: "update",
        params: { id: this.shindig.id }
      });
    },
    ...mapActions("shindig", ["getShindig"])
  }
};
</script>
