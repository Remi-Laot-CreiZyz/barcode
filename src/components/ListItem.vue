<template>
  <div v-if="product != {}" class="content">
    <div class="text">{{product.name}} ({{Math.floor(product.distance / 1000)}} Km)</div>
    <router-link :to="{ name: 'details', params: { 'code' : code } }">
      <fu-icon-button icon="chevron-right"/>
    </router-link>
  </div>
</template>

<script>
import ProductService from "@/api/ProductService.js";

export default {
  props: {
    code: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      product: {}
    };
  },
  mounted() {
    this.product = ProductService.getProductDetails(this.code);
  }
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.25rem;
  justify-content: flex-end;
  border-bottom: 1px solid #e4e4e4;
}
.text {
  flex-grow: 1;
}
</style>