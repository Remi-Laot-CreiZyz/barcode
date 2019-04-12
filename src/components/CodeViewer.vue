<template>
  <div class="code-content">
    <div class="container country">
      <div class="header">pays</div>
      <div class="number">{{code.country}}</div>
    </div>
    <div class="container company">
      <div class="header">entreprise</div>
      <div class="number">{{code.company}}</div>
    </div>
    <div class="container product">
      <div class="header">produit</div>
      <div class="number">{{code.product}}</div>
    </div>
  </div>
</template>

<script>
import ProductService from "@/api/ProductService.js";

export default {
  props: {
    code: {
      validator: function(value) {
        return value.country !== undefined
            && value.company !== undefined
            && value.product !== undefined;
      },
      default : () => ProductService.defaultCode()
    }
  }
};
</script>

<style lang="scss" scoped>
.code-content {
  display: flex;
  flex-direction: row;
  width: fit-content;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.header {
  font-size: 0.75rem;
  color: #a5a5a5;
}
.number {
  font-weight: bold;
}
</style>