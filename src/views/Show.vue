<template>
  <div>
    <div class="event-header">
      <span class="eyebrow">@{{ shindig.time }} on {{ shindig.date }}</span>
      <h1 class="title">{{ shindig.title }}</h1>
      <h5>
        Organized by {{ shindig.organizer ? shindig.organizer.name : "" }}
      </h5>
      <h5>Category: {{ shindig.category }}</h5>
    </div>
    <BaseIcon name="map"><h2>Location</h2></BaseIcon>
    <address>{{ shindig.location }}</address>
    <h2>Details</h2>
    <p>{{ shindig.description }}</p>
    <h2>
      Attendees
      <span class="badge -fill-gradient">{{
        shindig.attendess ? shindig.attendees.length : 0
      }}</span>
    </h2>
    <ul class="list-group">
      <li
        v-for="(attendee, index) in shindig.attendees"
        :key="index"
        class="list-item"
      >
        <b>{{ shindig.name }}</b>
      </li>
    </ul>
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
  methods: mapActions("shindig", ["fetchShindig"])
};
</script>

<style scoped>
.location {
  margin-bottom: 0;
}
.location > .icon {
  margin-left: 10px;
}
.event-header > .title {
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
