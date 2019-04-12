<template>
  <div class="fu-section-button">
    <div class="fu-section-button-icon-container">
      <font-awesome-icon :icon="icon"/>
    </div>
    | {{ title }}
  </div>
</template>

<script>
export default {
  props : {
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss">
.fu-section-button {
  display: flex;
  flex-direction: row;
  align-items: center;

  background-color: #f5f5f5;
  color: #a5a5a5;

  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 0.25rem;
  font-size: 1rem;
  border-radius: 5px;

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
      -moz-user-select: none; /* Firefox */
      -ms-user-select: none; /* Internet Explorer/Edge */
          user-select: none; /* Non-prefixed version, currently
                                supported by Chrome and Opera */
}

.fu-section-button:hover {
  cursor: pointer;
}

.active .fu-section-button, .fu-section-button.active {
  color: #53714B;
}

.fu-section-button:active {
  background-color: #53714B;
  color: #e2e2e2;
}

.fu-section-button-icon-container {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  width: 1rem;
  display: flex;
  justify-content: center;
}
</style>
