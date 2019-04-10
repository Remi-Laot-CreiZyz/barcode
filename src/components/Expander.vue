<template>
  <div class="expander">
    <div
      class="trigger"
      @click="$emit('expanderTriggered')"
      :class="open?'active':'inactive'"
    >
      <slot name="header">
        <div class="default-header">
          <font-awesome-icon v-if="logo != ''" :icon="logo"/>
          <vdivider v-if="logo != ''"/>
          {{ title }}
        </div>
      </slot>
    </div>
    <transition
      enter-active-class="enter-active"
      leave-active-class="leave-active"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
    >
      <div v-if="open">
        <slot name="content">
          <div class="default-content">
            <slot></slot>
          </div>
        </slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Expander",
  props: {
    title: {
      type: String,
      default: "title"
    },
    logo: {
      type: String,
      default: ""
    },
    open: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    beforeEnter(element) {
      requestAnimationFrame(() => {
        if (!element.style.height) {
          element.style.height = "0px";
        }
        element.style.display = null;
      });
    },
    enter(element) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          element.style.height = `${element.scrollHeight}px`;
        });
      });
    },
    afterEnter(element) {
      element.style.height = null;
    },
    beforeLeave(element) {
      requestAnimationFrame(() => {
        if (!element.style.height) {
          element.style.height = `${element.offsetHeight}px`;
        }
      });
    },
    leave(element) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          element.style.height = "0px";
        });
      });
    },
    afterLeave(element) {
      element.style.height = null;
    }
  }
};
</script>

<style lang="scss">
.expander {
  background-color: rebeccapurple;
}

.trigger {
  background-color: aqua;
}

.content {
  background-color: yellow;
}

.default-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.25rem;
  font-size: 1.25rem;
}

.default-header .divider {
  height: 1.5rem;
  margin-left: .5rem;
  margin-right: .5rem;
}

.enter-active,
.leave-active {
  overflow: hidden;
  transition: height 0.25s linear;
}
</style>