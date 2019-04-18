<template>
  <div class="content">
    <div class="details-line">
      <fu-icon-button v-on:click="goBack()" icon="arrow-left"/>
    </div>
    <fu-product-image :image="product.image"/>
    <div class="details-line">
      <div class="details-label">Produit</div>
      <div class="details-entry">
        <div>{{product.name}}</div>
      </div>
    </div>
    <div class="details-line">
      <div class="details-label">Entreprise</div>
      <div class="details-entry">
        <div>{{product.company}}</div>
      </div>
    </div>
    <div class="details-line">
      <div class="details-label">Code Barre</div>
      <div class="details-entry">
        <fu-code-viewer class="codebar" :code="product.code"/>
      </div>
    </div>
    <div class="details-line">
      <div class="details-label">Distance</div>
      <div class="details-entry">
        <div>{{Math.floor(product.distance / 1000)}} Km</div>
      </div>
    </div>
    <div class="details-line">
      <div class="details-label">Longitude</div>
      <div class="details-entry">
        <div>{{product.location.lon}}</div>
      </div>
    </div>
    <div class="details-line">
      <div class="details-label">Latitude</div>
      <div class="details-entry">
        <div>{{product.location.lat}}</div>
      </div>
    </div>
    <div class="details-line">
      <div class="details-label">Informations d'élevage</div>
      <div class="details-entry">
        <div>{{product.divers}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductService from "@/api/ProductService.js";

export default {
  data() {
    return {
      product: {}
    };
  },
  created() {
    this.product = ProductService.getProductDetails(this.$route.params.code);
  },
  watch: {
    $route(to) {
      this.product = ProductService.getProductDetails(to.params.code);
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  min-height: fit-content;
}
.details-line {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
.details-label {
  font-size: 0.75rem;
  color: #53714b;
}
.details-entry {
  padding-left: 0.5rem;
  font-size: 1.25rem;
  font-weight: bold;
  border-left: 2px solid #53714b;
  display: flex;
  flex-direction: row;
}
.codebar {
  margin: auto;
}
</style>
