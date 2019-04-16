<template>
  <div class="content">
    <img class="child" src='../image/logo.png'/>
    <img class="child test1" src='../image/fruitlegumeimg.png'/>
    <h1 class="fu-h1">Le meilleur près de chez vous</h1>
    <p class="fu-txt">Trouvez les endroits les plus proches de chez vous avec les meilleurs aliments.<br>Rendez votre vie plus saine !</p>
    <p class="fu-txt">Notre objectif = être transparent sur la traçabilité de vos aliments</p>
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
.child{
  width: 30%;
  height: auto;
}
.test1{
  width: 100%;
  height: auto;
}
.fu-h1{
  font-weight: bold;
  font-size: 1.5em;
  color: #53714b;
}
.fu-txt{
  text-align: center;
  font-size: 1.1em;
  color: #53714b;
}
</style>