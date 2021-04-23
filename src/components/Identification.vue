<template>
  <v-container>
    <v-row>
      <v-col>
        <v-form
          @submit.prevent="accountIdentification"
          ref="identificationForm"
        >
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              label="Email"
              v-model="email"
              prepend-icon="mdi-email"
            />
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              label="Confirm Email"
              v-model="emailConfirmation"
              prepend-icon="mdi-email"
            />
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              :type="showPassword ? 'text' : 'password'"
              label="Password"
              v-model="password"
              prepend-icon="mdi-lock"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
            />
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              :type="showPassword ? 'text' : 'password'"
              label="Confirm Password"
              v-model="passwordConfirmation"
              prepend-icon="mdi-lock"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
            />
          </v-col>
          <v-btn type="submit" color="primary" class="mr-4">Register</v-btn>
          <v-btn color="error" @click="resetForm">Cancel</v-btn>
        </v-form>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <Sheet :sheet="sheet" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { Auth } from "aws-amplify";
import Sheet from "@/components/Sheet.vue";

export default {
  name: "Identification",
  data() {
    return {
      showPassword: false,
      email: null,
      emailConfirmation: null,
      password: null,
      passwordConfirmation: null,
      sheet: {
        status: false,
        color: "",
        text: "",
        uri: ""
      }
    };
  },
  components: {
    Sheet
  },
  created() {
    console.log("\nIdentification.created() ... start");

    console.log("\nIdentification.created() ... end");
  },

  methods: {
    accountIdentification() {
      console.log("\nIdentification.accountIdentification() ... start");

      this.signUp(this.email, this.password);

      console.log("\nIdentification.accountIdentification() ... end");
    },
    resetForm() {
      this.$refs.identificationForm.reset();
      this.$parent.identification = false;
    },
    async signUp() {
      console.log("\nIdentification.signUp() ... start");

      var username = this.email;
      var email = this.email;
      var password = this.password;

      try {
        const { user } = await Auth.signUp({
          username,
          password,
          attributes: {
            email
          }
        });
        console.log(user);

        // Notify User and redirect
        this.sheet.color = "primary";
        this.sheet.text =
          "Account Creation Successful!  Please check your email to verify your account before loggingin in.";
        this.sheet.uri = "/shindig/read";
        this.sheet.status = true;
      } catch (error) {
        console.log("error signing up:", error);
        this.sheet.color = "error";
        this.sheet.text = error.message;
        this.sheet.status = true;
      }

      console.log("\nIdentification.signUp() ... end");
    }
  }
};
</script>
