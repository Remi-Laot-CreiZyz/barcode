<template>
  <div class="container">
    <div class="default">
      <font-awesome-icon icon="barcode"/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: fit-content;
}
img {
  border-radius: 50%;
  overflow: hidden;
  width: 200px;
  height: 200px;
}
.default {
  border-radius: 50%;
  width: 200px;
  height: 200px;
  border: 0.5rem solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 7rem;
}
</style>