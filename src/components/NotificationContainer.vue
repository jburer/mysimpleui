<template>
  <div class="notification-container">
    <NotificationBar v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
import NotificationBar from "@/components/NotificationBar.vue";
import { mapState } from "vuex";

export default {
  components: {
    NotificationBar
  },
  computed: mapState("event", ["events"])
};
</script>

<style scoped>
.notification-container {
  position: fixed;
  bottom: 0;
  right: 0;
  padding-right: 40px;
}
</style>
