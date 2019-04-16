<template>
  <div class="content">
    <a @click="clearHistory()">supprimer mon historique</a>
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
  data() {
    return {
      history: LocalStorageService.getHistory()
    };
  },
  methods: {
    parseCode(code) {
      return ProductService.parseCode(code);
    },
    clearHistory() {
      this.history = [];
      LocalStorageService.saveHistory([]);
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