<template>
  <div class="content">
    <fu-logo/>
    <img class="image fruits" src="../image/fruitlegumeimg.png">
    <h1 class="fu-h1">Le meilleur près de chez vous</h1>
    <p class="fu-txt">
      Trouvez les endroits les plus proches de chez vous avec les meilleurs aliments.
      <br>Rendez votre vie plus saine !
    </p>
    <p class="fu-txt">Notre objectif = être transparent sur la traçabilité de vos aliments</p>
    <fu-button v-on:click="go()">GO!</fu-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullscreen: false
    };
  },
  methods: {
    go() {
      this.$fullscreen.toggle(this.$refs.app, {
        wrap: false,
        callback: this.fullscreenChange
      });
      this.$router.push({ name: "scan" });
    },
    fullscreenChange(fullscreen) {
      this.fullscreen = fullscreen;
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
}
.fruits {
  width: 100%;
  max-width: 350px;
  height: auto;
}
.fu-h1 {
  font-weight: bold;
  font-size: 1.5rem;
  color: #53714b;
}
.fu-txt {
  text-align: center;
  font-size: 1.1rem;
  color: #53714b;
}
</style>