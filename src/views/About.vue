<template>
  <div>
    <Title :title="title" />
    <v-col cols="12" sm="6" md="4" class="pt-6 mt-3">
      <p>
        This is a simple 3 tiered app - a frontend UI, an API, and a datastore.
      </p>
      <p>
        It's "concept" is to provide users a way to manage local events around
        town, or shindigs as I call them. It provides CRUD capabilities to any
        user, and allows them to manage the data in the datastore, through the
        API, from the UI.
      </p>
      <p>
        Designed to give me a "clean" system for demonstrating Security and
        Privacy, the only principles applied to the base is that which is
        inherent in the frameworks, software, and services that I'm using to
        build the system.
      </p>
      <p>
        As I work through the fundementals of Security and Privacy, I'll apply
        them to this app, and create different branches to give you that "before
        and after" feel.
      </p>
      <p>
        For more info on this effort check out my blog:
        <a href="http://jburer.wordpress.com">http://jburer.wordpress.com</a>
      </p>
      <p class="font-italic">
        <span class="font-weight-bold">PLEASE NOTE:</span> This is solely
        intended as a learning and education tool, and in no way represents the
        full responsibilities needed for a production system. In fact it is
        specifically designed to omit security and privacy controls (e.g.
        authentication, input validation, logging, etc. -
        <span class="font-weight-bold"
          >all those things security and privacy folks care about</span
        >) so that their benefits can be demonstrated.
      </p>
    </v-col>
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
      title: "mySimpleApp"
    };
  }
};
</script>
