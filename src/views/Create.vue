<template>
  <div>
    <Title :title="title" />
    <Form :shindig="shindig" :formname="formname" />
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
import Form from "@/components/Form.vue";

export default {
  components: {
    Title,
    Form
  },
  data() {
    return {
      title: "Create",
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
      const id = Math.floor(Math.random() * 10000000);

      return {
        id: id,
        title: "",
        description: "",
        location: "",
        date: "",
        starttime: "",
        endtime: ""
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
