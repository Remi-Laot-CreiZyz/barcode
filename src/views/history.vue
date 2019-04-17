<template>
  <div class="content">
    <template v-if="history.length > 0">
      <div class="list">
        <div class="fu-title">Votre historique:</div>
        <fu-list-item v-for="item in history" v-bind:key="item" :code="item"/>
      </div>
      <div class="clear">
        <a @click="clearHistory()">supprimer mon historique</a>
      </div>
    </template>
    <div v-if="history.length == 0" class="empty">
      <font-awesome-icon class="icon" icon="history"/>
      <div class="fu-subtitle">Votre historique est vide</div>
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
.empty {
  color: #a5a5a5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.icon {
  font-size: 5rem;
}
.clear {
  width: fit-content;
  margin: auto;
  margin-top: 0.75rem;
}
</style>