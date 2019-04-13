<template>
  <div class="content">
    <v-accordion></v-accordion>
  </div>
</template>

<script>
import Accordion from "@/components/Accordion.vue";

export default {
  components: {
    "v-accordion": Accordion
  }
};
</script>

<style lang="scss" scoped>
.content {
  padding: 0.5rem;
}
</style>
