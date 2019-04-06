<template>
  <div class="expander">
    <div class="trigger" @click="open=!open" :class="open?'active':'inactive'">{{ title }}</div>
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
      <div class="content" v-if="open">
        <slot></slot>
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
  },
  data() {
    return {
      open: false
    };
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

.enter-active,
.leave-active {
  overflow: hidden;
  transition: height .25s linear;
}
</style>