<template>
  <div class="expander-group">
    <fu-expander-internal
      v-for="(section, index) in sections"
      v-bind:key="index"
      v-on:expanderTriggered="clickedOn(index)"
      :icon="section.logo"
      :title="section.title"
      :open="expanded[index]"
    >{{ section.text }}</fu-expander-internal>
  </div>
</template>

<script>
import ExpanderInternal from "@/components/ExpanderInternal.vue";

export default {
  components: {
    "fu-expander-internal": ExpanderInternal
  },
  methods: {
    clickedOn(index) {
      var tmp = this.expanded[index] | false;
      this.expanded = this.sections.forEach(() => false);
      this.expanded[index] = !tmp;
    }
  },
  data() {
    return {
      sections: [
        {
          logo: "question",
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
          logo: "plus",
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
          logo: "question",
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
          logo: "envelope",
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
      ],
      expanded: [false, false, false, false]
    };
  }
};
</script>

<style lang="scss">
</style>


