<template>
  <div class="fu-expander-group">
    <fu-expander-internal
      v-for="(item, index) in sections"
      v-bind:key="index"
      v-on:click-on-expander="stateChange(index)"
      :open="expanded[index]"
      class="fu-expander"
    >
      <template v-slot:header>
        <fu-section-button class="fu-expander-header" :icon='item.icon' :title='item.title'/>
      </template>
      <template v-slot:content>
        <div class="fu-expander-content">
          <p>{{ item.text }}</p>
        </div>
      </template>
    </fu-expander-internal>
  </div>
</template>

<script>
import ExpanderInternal from "@/components/ExpanderInternal.vue";

export default {
  components: {
    "fu-expander-internal": ExpanderInternal
  },
  data() {
    return {
      expanded: [false, false, false, false],
      sections: [
        {
          icon: "question",
          title: "Qui sommes nous",
          text: `Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                  richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                  brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                  tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                  wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
                  vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
                  synth nesciunt you probably haven't heard of them accusamus labore VHS.`
        },
        {
          icon: "plus",
          title: "Nos entreprises partenaires",
          text: `Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                  richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                  brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                  tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                  wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
                  vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
                  synth nesciunt you probably haven't heard of them accusamus labore VHS.`
        },
        {
          icon: "question",
          title: "FAQ",
          text: `Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                  richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                  brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                  tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                  wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
                  vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
                  synth nesciunt you probably haven't heard of them accusamus labore VHS.`
        },
        {
          icon: "envelope",
          title: "Nous contacter",
          text: `Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                  richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                  brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                  tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                  wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
                  vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
                  synth nesciunt you probably haven't heard of them accusamus labore VHS.`
        }
      ]
    };
  },
  methods: {
    stateChange(index) {
      var tmp = this.expanded[index];
      // this.expanded = this.sections.forEach(() => false);
      this.expanded = [false, false, false, false];
      this.expanded[index] = !tmp;
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