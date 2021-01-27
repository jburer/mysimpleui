<template>
  <div>
    <h1>Create</h1>

    <form @submit.prevent="createShindig">
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
      <input type="submit" class="button -fill-gradient" value="Submit" />
    </form>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";

export default {
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
      categories: this.$store.state.categories,
      shindig: this.createFreshShindigObject()
    };
  },
  methods: {
    createShindig() {
      this.$store
        .dispatch("shindig/createShindig", this.shindig)
        .then(() => {
          this.$router.push({
            name: "show",
            params: { id: this.shindig.id }
          });
          this.shindig = this.createFreshShindigObject();
        })
        .catch(() => {
          console.log("There was a problem creating your shindig.");
        });
    },
    createFreshShindigObject() {
      const user = this.$store.state.user.user;
      const id = Math.floor(Math.random() * 10000000);

      return {
        id: id,
        user: user,
        category: "",
        organizer: user,
        title: "",
        description: "",
        location: "",
        date: "",
        time: "",
        attendees: []
      };
    }
  }
};
</script>

<style scoped>
.field {
  margin-bottom: 24px;
}
</style>
