<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card
          class="pa-2"
          hover
          :to="{ name: 'show', params: { id: shindig.id } }"
        >
          <v-card-text>
            <p class="display-1 text--primary">
              {{ shindig.title }}
            </p>
            <div class="text--primary">
              @ {{ shindig.starttime }} on {{ shindig.date }}
            </div>
          </v-card-text>

          <!--
          <router-link
            class="shindig-link"
            :to="{ name: 'show', params: { id: shindig.id } }"
          >
            <div class="shindig-card -shadow">
              <h4 class="title">{{ shindig.title }}</h4>
              <span class="eyebrow"
                >@{{ shindig.time }} on {{ shindig.date }}</span
              >
              <span></span>
            </div>
          </router-link>
          -->
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
  }
};
</script>

<style></style>
