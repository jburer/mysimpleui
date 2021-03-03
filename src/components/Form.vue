<template>
  <v-container>
    <v-row>
      <v-col>
        <v-form @submit.prevent="submitForm" ref="shindigForm">
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              label="Title"
              v-model="shindig.title"
              prepend-icon="mdi-subtitles-outline"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              label="Description"
              v-model="shindig.description"
              prepend-icon="mdi-image-text"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              label="Location"
              v-model="shindig.location"
              prepend-icon="mdi-map"
            ></v-text-field>
          </v-col>
          <!--Date Picker-->
          <v-col cols="12" sm="6" md="6">
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
          <v-col cols="12" sm="6" md="6">
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
                      v-model="shindig.starttime"
                      label="Start Time"
                      prepend-icon="mdi-clock-time-four-outline"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-time-picker
                    v-if="starttimemenu"
                    v-model="shindig.starttime"
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
                      prepend-icon="mdi-clock-time-eight-outline"
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
          <v-btn type="submit" color="primary" class="mr-4">{{
            submitbuttonname
          }}</v-btn>
          <v-btn color="error" @click="resetForm">{{ cancelbuttonname }}</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    shindig: {
      type: Object,
      required: true
    },
    formname: {
      type: String,
      required: true
    },
    submitbuttonname: {
      type: String,
      required: false,
      default: "Submit"
    },
    cancelbuttonname: {
      type: String,
      required: false,
      default: "Reset"
    }
  },
  data() {
    return {
      time: null,
      datemenu: false,
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      starttimemenu: false,
      endtimemenu: false
    };
  },
  created() {
    console.log("\nForm.created() ... start");
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
      if (this.formname === "callCreateShindig") {
        this.$refs.shindigForm.reset();
      } else {
        this.$router.push({ name: "read" });
      }
    }
  }
};
</script>
