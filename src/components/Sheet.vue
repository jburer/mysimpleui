<template>
  <v-bottom-sheet v-model="sheet.status" hide-overlay inset>
    <v-sheet class="text-center" height="200px">
      <v-btn
        class="mt-6"
        text
        :color="sheet.color"
        :to="sheet.uri"
        @click="sheet.status = !sheet.status"
      >
        CLOSE
      </v-btn>
      <div class="my-3">
        {{ sheet.text }}
      </div>
    </v-sheet>
  </v-bottom-sheet>
</template>

<script>
export default {
  props: {
    sheet: {
      type: Object,
      required: true
    }
  },
  created() {
    console.log("\nSheet.created() ... start");
  }
};
</script>
