<template>
  <div>
    <h1>Update</h1>
    <Form :shindig="shindig" :formname="formname" :buttonname="buttonname" />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Form from "@/components/Form.vue";

export default {
  props: ["id"],
  created() {
    console.log("id = " + this.id);
    this.getShindig(this.id);
    console.log("this.getShindig(this.id) = " + this.getShindig(this.id));
  },
  components: {
    Form
  },
  data() {
    return {
      formname: "callUpdateShindig",
      buttonname: "Update"
    };
  },
  computed: mapState({
    shindig: state => state.shindig.shindig
  }),
  methods: {
    updateShindig() {
      console.log("this.shindig = " + this.shindig);
      console.log("this.shindig.title = " + this.shindig.title);
      console.log("this.shindig.description = " + this.shindig.description);
      console.log("STOP");
      this.$store
        .dispatch("shindig/updateShindig", this.shindig)
        .then(() => {
          this.$router.push({
            name: "show",
            params: { id: this.shindig.id }
          });
        })
        .catch(() => {
          console.log("There was a problem updating shindig.");
        });
    },
    ...mapActions("shindig", ["getShindig"])
  }
};
</script>

<style scoped>
.field {
  margin-bottom: 24px;
}
</style>
