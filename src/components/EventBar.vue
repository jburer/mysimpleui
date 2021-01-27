<template>
  <div class="event-bar" :class="eventTypeClass">
    <p>{{ event.message }}</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    event: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      timeout: null
    };
  },
  mounted() {
    this.timeout = setTimeout(() => this.remove(this.event), 5000);
  },
  beforeDestroy() {
    clearTimeout(this.timeout);
  },
  computed: {
    eventTypeClass() {
      return `-text-${this.event.type}`;
    }
  },
  methods: mapActions("event", ["remove"])
};
</script>

<style scoped>
.event-bar {
  margin: 1em 0 1em;
}
</style>
