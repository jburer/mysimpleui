<template>
  <div class="event-container">
    <EventBar v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
import EventBar from "@/components/EventBar.vue";
import { mapState } from "vuex";
export default {
  components: {
    EventBar
  },
  computed: mapState("event", ["events"])
};
</script>

<style scoped>
.event-container {
  position: fixed;
  bottom: 0;
  right: 0;
  padding-right: 40px;
}
</style>
