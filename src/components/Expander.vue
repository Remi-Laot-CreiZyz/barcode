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

<style lang="scss" scoped>
.fu-expander-content {
  margin-left: 5px;
  margin-right: 5px;
  border-left: 2px solid #53714B;
  padding-left: 0.5rem;
}
</style>