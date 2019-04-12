<template>
  <div class="fu-button">
    <slot>button</slot>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss">
.fu-button {
  margin: 0.5rem;
  padding: 0.25rem 2rem 0.25rem 2rem;
  font-size: 1rem;
  border-radius: 1.5rem;;
  width: fit-content;
  color: white;
  background-color: #0a5c7c;

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
      -moz-user-select: none; /* Firefox */
      -ms-user-select: none; /* Internet Explorer/Edge */
          user-select: none; /* Non-prefixed version, currently
                                supported by Chrome and Opera */
}

.fu-button:hover {
  cursor: pointer;
}

.fu-button:active {
  background-color: #53714B;
  color: #e2e2e2;
}
</style>
