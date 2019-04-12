<template>
    <scanner @scanned="scannerHandler"/>
</template>

<script>
// @ is an alias to /src
import QuaggaScanner from '@/components/QuaggaScanner.vue';
import LocalStorageService from "@/api/LocalStorageService.js";

export default {
  name: 'home',
  components: {
    "scanner" : QuaggaScanner
  },
  methods: {
    scannerHandler(code) {
      var history = LocalStorageService.getHistory();
      if (!history.includes(code))
      {
        history.push(code);
        LocalStorageService.saveHistory(history);
      }
      this.$router.push({ name: 'details', params: { code } });
    }
  },
}
</script>

<style lang="scss" scoped>

</style>

