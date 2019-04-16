<template>
  <div class="container">
    <div class="line">
      <div class="icon-container">
        <font-awesome-icon :icon="icon"/>
      </div>
      <div class="fu-title">{{label}}</div>
    </div>
    <div class="line">
      <input :type="type">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
}
.line {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-grow: 1;
}
.fu-title {
  font-size: 1.25rem;
  text-transform: uppercase;
  margin: 0;
}
.icon-container {
  width: 2rem;
  height: 100%;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #53714b;
  margin-right: 0.5rem;
}
input {
  width: 100%;
  border: none;
  border-bottom: 1px solid #dfdfdf;
}

input:focus {
  outline: none;
  border-bottom: 1px solid #53714b;
}
</style>