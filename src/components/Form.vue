<template>
  <v-container>
    <v-row>
      <v-col>
        <v-form @submit.prevent="submitForm" ref="shindigForm">
          <v-text-field label="Title" v-model="shindig.title"></v-text-field>
          <v-text-field
            label="Description"
            v-model="shindig.description"
          ></v-text-field>
          <v-text-field
            label="Location"
            v-model="shindig.location"
          ></v-text-field>
          <!--Date Picker-->
          <v-col cols="12" sm="6" md="4">
            <v-menu
              v-model="datemenu"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="shindig.date"
                  label="Date"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="shindig.date"
                @input="datemenu = false"
              ></v-date-picker>
            </v-menu>
          </v-col>
          <!--Date Picker END-->
          <!--Time Picker-->
          <v-col cols="12" sm="6" md="4">
            <v-row justify="space-around" align="center">
              <v-col>
                <v-menu
                  ref="menu"
                  v-model="starttimemenu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  :return-value.sync="time"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="shindig.time"
                      label="Start Time"
                      prepend-icon="mdi-clock-time-four-outline"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-time-picker
                    v-if="starttimemenu"
                    v-model="shindig.time"
                    :max="shindig.endtime"
                    @click:minute="$refs.menu.save(time)"
                  ></v-time-picker>
                </v-menu>
              </v-col>
              <v-col>
                <v-spacer></v-spacer>
                <v-menu
                  ref="menu"
                  v-model="endtimemenu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  :return-value.sync="time"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="shindig.endtime"
                      label="End Time"
                      prepend-icon="mdi-clock-time-four-outline"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-time-picker
                    v-if="endtimemenu"
                    v-model="shindig.endtime"
                    :min="shindig.time"
                    @click:minute="$refs.menu.save(time)"
                  ></v-time-picker>
                </v-menu>
              </v-col>
            </v-row>
          </v-col>
          <!--Time Picker END-->
          <v-btn type="submit" color="primary" class="mr-4">Submit</v-btn>
          <v-btn color="error" @click="resetForm">Reset</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ["shindig", "formname", "buttonname"],
  components: {},
  data() {
    return {
      categories: this.$store.state.categories,
      time: null,
      datemenu: false,
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      starttimemenu: false,
      endtimemenu: false
    };
  },
  methods: {
    submitForm() {
      if (this.formname === "callCreateShindig") {
        this.$parent.createShindig();
      } else {
        this.$parent.updateShindig();
      }
    },
    resetForm() {
      this.$refs.shindigForm.reset();
    }
  }
};
</script>

<style scoped>
/*
.field {
  margin-bottom: 24px;
}
*/
</style>
