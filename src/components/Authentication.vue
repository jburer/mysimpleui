<template>
  <v-container>
    <v-row>
      <v-col>
        <v-form @submit.prevent="accountAuthentication">
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              label="Email"
              v-model="email"
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
          <v-btn type="submit" color="primary">Login</v-btn>
        </v-form>
      </v-col>
    </v-row>
    <v-row
      ><v-col
        cols="12"
        sm="6"
        md="6"
        class="d-inline-flex align-center justify-end"
      >
        Don't have an account?

        <v-btn @click="accountIdentification" color="success" class="mx-4"
          >Register</v-btn
        ></v-col
      ></v-row
    >
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
import mongoose from "mongoose";

export default {
  name: "Authentication",
  data() {
    return {
      showPassword: false,
      email: null,
      password: null,
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
    console.log("\nAuthentication.created() ... start");

    console.log("\nAuthentication.created() ... end");
  },
  methods: {
    accountAuthentication() {
      console.log("\nAuthentication.accountAuthentication() ... start");

      this.signIn(this.email, this.password);

      this.registerWithDB();

      console.log("\nAuthentication.accountAuthentication() ... end");
    },
    accountIdentification() {
      console.log("\nAuthentication.accountIdentification() ... start");

      this.$parent.identification = true;

      console.log("\nAuthentication.accountIdentification() ... end");
    },
    async signIn() {
      console.log("\nAuthentication.signIn() ... start");

      try {
        const user = await Auth.signIn(this.email, this.password);

        console.log(user);

        this.setCurrentUser(user);
        this.sheet.color = "primary";
        this.sheet.text = "Login Successful!";
        this.sheet.uri = "/shindig/read";
        this.sheet.status = true;
      } catch (error) {
        console.log("error signing in", error);
        this.sheet.color = "error";
        this.sheet.text = error.message;
        this.sheet.status = true;
      }

      console.log("\nAuthentication.signIn() ... end");
    },
    async registerWithDB() {
      console.log("\nAuthentication.registerWithDB() ... start");

      const currentUserInfo = await Auth.currentUserInfo();

      console.log(currentUserInfo);

      if (currentUserInfo.attributes.email_verified) {
        // Connect to Accounts DB
        //Import the mongoose module
        

        //Set up default mongoose connection
        var mongoDB = "mongodb://127.0.0.1/my_database";
        mongoose.connect(mongoDB, {
          useNewUrlParser: true,
          useUnifiedTopology: true
        });

        //Get the default connection
        var db = mongoose.connection;

        //Bind connection to error event (to get notification of connection errors)
        db.on(
          "error",
          console.error.bind(console, "MongoDB connection error:")
        );

        // Check if account exists already

        // Create account in DB for DB Identification and Authentication
        /*
        msg
          .save()
          .then(doc => {
            console.log(doc);
          })
          .catch(err => {
            console.error("Hit an error:\n" + err);
          });
        */

        /*
        let Account = require("../..//model/Accounts");

        let msg = new Account({
          email: this.email,
          password: this.password
        });

        msg
          .save()
          .then(doc => {
            console.log(doc);
          })
          .catch(err => {
            console.error("Hit an error:\n" + err);
          });
        */
      }

      console.log("\nAuthentication.registerWithDB() ... end");
    },
    setCurrentUser(user) {
      console.log("\nAuthentication.setCurrentUser() ... start");

      this.$store
        .dispatch("user/setUser", user)
        .then(() => {})
        .catch(() => {
          console.log("There was a problem setting user.");
        });

      console.log("\nAuthentication.setCurrentUser() ... end");
    }
  }
};
</script>
