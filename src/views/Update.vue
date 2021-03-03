<template>
  <div>
    <h1>Update</h1>
    <Form
      :shindig="shindig"
      :formname="formname"
      :submitbuttonname="submitbuttonname"
      :cancelbuttonname="cancelbuttonname"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Form from "@/components/Form.vue";

export default {
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  created() {
    console.log("\nUpdate.created() ... start");

    this.getShindig(this.id);
  },
  components: {
    Form
  },
  data() {
    return {
      formname: "callUpdateShindig",
      submitbuttonname: "Update",
      cancelbuttonname: "Cancel"
    };
  },
  computed: mapState({
    shindig: state => state.shindig.shindig
  }),
  methods: {
    updateShindig() {
      console.log("\nUpdate.updateShindig ... start");

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
