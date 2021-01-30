<template>
  <div>
    <h1 class="title">{{ shindig.title }}</h1>
    <div class="shindig-header">
      <h3><BaseIcon name="clock" /> Time & Date</h3>
      <p>@{{ shindig.time }} on {{ shindig.date }}</p>
    </div>
    <h3><BaseIcon name="map" /> Location</h3>
    <address>{{ shindig.location }}</address>
    <h3><BaseIcon name="list" /> Details</h3>
    <p>{{ shindig.description }}</p>
    <h3>
      <span class="badge -fill-gradient">{{
        shindig.attendess ? shindig.attendees.length : 0
      }}</span>
      Attendees
    </h3>
    <ul class="list-group">
      <li
        v-for="(attendee, index) in shindig.attendees"
        :key="index"
        class="list-item"
      >
        <b>{{ shindig.name }}</b>
      </li>
    </ul>
    <h5 class="-text-lightgray">
      Category: {{ shindig.category }}
      <br />
      Organized by {{ shindig.organizer ? shindig.organizer.name : "" }}
    </h5>
    <form @submit.prevent="deleteShindig">
      <input type="submit" class="button -fill-gradient" value="Delete" />
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  props: ["id"],
  created() {
    this.fetchShindig(this.id);
  },
  computed: mapState({
    shindig: state => state.shindig.shindig
  }),
  methods: {
    deleteShindig() {
      console.log("this.shindig.id = " + this.shindig.id);
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
    ...mapActions("shindig", ["fetchShindig"])
  }
};
</script>

<style scoped>
.location {
  margin-bottom: 0;
}
.location > .icon {
  margin-left: 10px;
}
.shindig-header > .title {
  margin: 0;
}
.list-group {
  margin: 0;
  padding: 0;
  list-style: none;
}
.list-group > .list-item {
  padding: 1em 0;
  border-bottom: solid 1px #e5e5e5;
}
</style>
