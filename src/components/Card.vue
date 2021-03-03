<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" md="6" class="pt-6 ml-4 mt-3">
        <v-card
          class="pa-2"
          hover
          :to="{ name: 'show', params: { id: shindig.id } }"
        >
          <v-card-text>
            <p class="display-1 text--primary text-no-wrap">
              {{ shindig.title }}
            </p>
            <div class="text--primary">
              @ {{ shindig.starttime }} on {{ shindig.date }}
            </div>
          </v-card-text>
        </v-card>
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
    }
  },
  created() {
    console.log("\nCard.created() ... start");
  }
};
</script>

<style></style>
