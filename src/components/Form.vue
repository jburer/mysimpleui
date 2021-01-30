<template>
  <div>
    {{ formname }}
    <form v-on:submit.prevent="submitForm">
      <label>Select a category</label>
      <select v-model="shindig.category">
        <option v-for="cat in categories" :key="cat">{{ cat }}</option>
      </select>
      <h3>Name & describe your shindig</h3>
      <div class="field">
        <label>Title</label>
        <input v-model="shindig.title" type="text" placeholder="Add a title" />
      </div>
      <div class="field">
        <label>Description</label>
        <input
          v-model="shindig.description"
          type="text"
          placeholder="Add a description"
        />
      </div>
      <h3>Where is your shindig?</h3>
      <div class="field">
        <label>Location</label>
        <input
          v-model="shindig.location"
          type="text"
          placeholder="Add a location"
        />
      </div>
      <h3>When is your shindig?</h3>
      <div class="field">
        <label>Date</label>
        <datepicker v-model="shindig.date" placeholder="Select a date" />
      </div>
      <div class="field">
        <label>Select a time</label>
        <select v-model="shindig.time">
          <option v-for="time in times" :key="time">{{ time }}</option>
        </select>
      </div>
      <input type="submit" class="button -fill-gradient" :value="buttonname" />
    </form>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";

export default {
  props: ["shindig", "formname", "buttonname"],
  components: {
    Datepicker
  },
  data() {
    const times = [];
    for (let i = 1; i <= 24; i++) {
      times.push(i + ":00");
    }
    return {
      times,
      categories: this.$store.state.categories
    };
  },
  methods: {
    submitForm() {
      if (this.formname === "callCreateShindig") {
        this.$parent.createShindig();
      } else {
        this.$parent.updateShindig();
      }
    }
  }
};
</script>

<style scoped>
.field {
  margin-bottom: 24px;
}
</style>
