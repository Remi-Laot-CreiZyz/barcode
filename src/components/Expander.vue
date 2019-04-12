<template>
  <fu-expander-internal
    v-on:click-on-expander="stateChange"
    :open="expanded"
    class="fu-expander"
  >
    <template v-slot:header>
      <fu-section-button class="fu-expander-header" :icon='icon' :title='title'/>
    </template>
    <template v-slot:content>
      <div class="fu-expander-content">
        <slot/>
      </div>
    </template>
  </fu-expander-internal>
</template>

<script>
import ExpanderInternal from "@/components/ExpanderInternal.vue";

export default {
  components: {
    "fu-expander-internal": ExpanderInternal
  },
  props: {
    title: {
      type: String,
      default: "title",
      required: true
    },
    icon: {
      type: String,
      default: "question",
      required: true
    }
  },
  data() {
    return {
      expanded: false
    };
  },
  methods: {
    stateChange() {
      this.expanded = !this.expanded;
    }
  }
};
</script>

<style lang="scss">
.fu-expander-header {
  margin-bottom: 0;
}
.fu-expander-content {
  background-color: #ebffe6;
  margin: 0.5rem 5px 0.5rem 5px;
}
</style>