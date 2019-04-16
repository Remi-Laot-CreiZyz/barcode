<template>
  <scanner @scanned="scannerHandler"/>
</template>

<script>
// @ is an alias to /src
import QuaggaScanner from "@/components/QuaggaScanner.vue";
import LocalStorageService from "@/api/LocalStorageService.js";

export default {
  name: "home",
  components: {
    scanner: QuaggaScanner
  },
  methods: {
    scannerHandler(code) {
      var history = LocalStorageService.get("fu-history");
      if (typeof history == "undefined") history = [];
      if (!history.includes(code)) {
        history.push(code);
        LocalStorageService.save("fu-history", history);
      }
      this.$router.push({ name: "details", params: { code } });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

