<template>
  <div class="content">
    <font-awesome-icon class="icon" icon="sad-tear"/>
    <p class="fu-subtitle">Oups! Cette feature n'est pas encore disponible...</p>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
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
  justify-content: center;
  color: #a5a5a5;
  min-height: fit-content;
}
.icon {
  font-size: 10rem;
  margin: 1rem;
}
</style>