<template>
  <!--
  <v-container>
    <v-row>
      <v-col>
        <p>This is a sample app.</p>
      </v-col>
      <v-col>
        <p>
          Designed as a test bed for demonstrating Security and Privacy
          concepts. it's your regular, run of the mill 3 tiered app - a web
          front end, an API, and a database.
        </p>
        <p>
          The concept is simple. You create, read, update, and delete events or
          "shindigs" as I like to call them.
        </p>
        <p>
          Right now, the app has no Security or Privacy applied (well, except
          for that that comes with the frameworks or services I'm using).
        </p>
        <p>
          As I work through the fundementals of Security and Privacy, I'll apply
          them to this app, and create different branches to give you that
          "before and after" feel.
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="8">
        <p>
          For an in depth look into what I'm doing, check out my blog and follow
          along here:
        </p>
      </v-col>
      <v-col cols="4">
        <p>
          <a href="http://jburer.wordpress.com">http://jburer.wordpress.com</a>
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        Finally, credit where credit is due. Thanks to the folks over a
        <a href="http://vuemastery.com" target="_blank">VueMastery</a>
        for the starter code. My responsibilities are no longer developing
        <b> <code>frontend code</code> </b>, and they made it quite easy to get
        this up and running.
      </v-col>
    </v-row>
  </v-container>
  -->
  <div>
    <Title :title="title" />
    <p>This is a sample app.</p>
    <p>
      Designed as a test bed for demonstrating Security and Privacy concepts.
      it's your regular, run of the mill 3 tiered app - a web front end, an API,
      and a database.
    </p>
    <p>
      The concept is simple. You create, read, update, and delete events or
      "shindigs" as I like to call them.
    </p>
    <p>
      Right now, the app has no Security or Privacy applied (well, except for
      that that comes with the frameworks or services I'm using).
    </p>
    <p>
      As I work through the fundementals of Security and Privacy, I'll apply
      them to this app, and create different branches to give you that "before
      and after" feel.
    </p>
    <p>
      For an in depth look into what I'm doing, check out my blog and follow
      along here:
    </p>
    <p>
      <a href="http://jburer.wordpress.com">http://jburer.wordpress.com</a>
    </p>
    Finally, credit where credit is due. Thanks to the folks over a
    <a href="http://vuemastery.com" target="_blank">VueMastery</a>
    for the starter code. My responsibilities are no longer developing
    <b> <code>frontend code</code> </b>, and they made it quite easy to get this
    up and running.
  </div>
</template>

<script>
import Title from "@/components/Title.vue";

export default {
  components: {
    Title
  },
  data() {
    return {
      title: "mySampleApp"
    };
  }
};
</script>

<style scoped></style>
