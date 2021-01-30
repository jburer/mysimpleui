<template>
  <div>
    <h1>Create</h1>
    <Form :shindig="shindig" :formname="formname" />
  </div>
</template>

<script>
import Form from "@/components/Form.vue";

export default {
  components: {
    Form
  },
  data() {
    return {
      formname: "callCreateShindig",
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
      console.log("Create.createFreshShindigObject ... start");
      const user = "Anonymous";
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
