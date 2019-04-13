<template>
  <div class="content">
    <p>ceci est la page de welcome</p>
    <fu-code-viewer :code="code"></fu-code-viewer>
    <router-link to="scan">
      <fu-button>GO!</fu-button>
    </router-link>
  </div>
</template>

<script>
import ProductService from "@/api/ProductService.js";

export default {
  data() {
    return {
      code: ProductService.defaultCode()
    };
  }
};
</script>

<style lang="scss" scoped>
.content {
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>