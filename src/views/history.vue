<template>
  <div class="content">
    <div>
      <a @click="clearHistory()">supprimer mon historique</a>
    </div>
    <div class="list">
      <div class="item" v-for="item in history" v-bind:key="item">
        <fu-code-viewer :code="parseCode(item)"/>
        <router-link :to="{ name: 'details', params: { 'code' : item } }">revoir</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import LocalStorageService from "@/api/LocalStorageService.js";
import ProductService from "@/api/ProductService.js";

export default {
  computed: {
    history() {
      var history = LocalStorageService.get("fu-history");
      if (typeof history == "undefined") history = [];
      return history;
    }
  },
  methods: {
    parseCode(code) {
      return ProductService.parseCode(code);
    },
    clearHistory() {
      LocalStorageService.delete("fu-history");
      this.$router.go();
    }
  }
};
</script>


<style scoped>
.content {
  padding: 0.5rem;
  min-height: fit-content;
}
.list {
  display: flex;
  flex-direction: column;
}
.item {
  padding: 0.5rem;
  border-bottom: 1px solid #a5a5a5;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}
</style>