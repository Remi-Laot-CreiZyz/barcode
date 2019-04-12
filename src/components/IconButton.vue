<template>
  <div class="fu-icon-button">
    <font-awesome-icon @click='$emit("click")' :icon="icon"/>
  </div>
</template>

<script>
export default {
  props : {
    icon : {
      type: String,
      required: true
    }
  },
};
</script>

<style lang="scss" scoped>
.fu-icon-button {
  width:  2rem;
  height: 2rem;
  font-size: 1.5rem;
  border-radius: 50%;
  color: #a5a5a5;
  text-align: center;

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
      -moz-user-select: none; /* Firefox */
      -ms-user-select: none; /* Internet Explorer/Edge */
          user-select: none; /* Non-prefixed version, currently
                                supported by Chrome and Opera */
}

.fu-icon-button:hover {
  cursor: pointer;
}

.fu-icon-button:active {
  background-color: #53714B;
  color: #e2e2e2;
}
</style>
