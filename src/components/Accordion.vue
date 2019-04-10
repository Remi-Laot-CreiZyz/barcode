<template>
  <div class="expander-group">
    <v-expander
      v-for="(section, index) in sections"
      v-bind:key="index"
      v-on:expanderTriggered="clickedOn(index)"
      :logo="section.logo"
      :title="section.title"
      :open="expanded[index]"
    >{{ section.text }}</v-expander>
  </div>
</template>

<script>
import Expander from "@/components/Expander.vue";

export default {
  components: {
    "v-expander": Expander
  },
  methods: {
    clickedOn(index) {
      var tmp = this.expanded[index];
      this.expanded = this.sections.map(_ => false);
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
          logo: "",
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
          logo: "",
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
      expanded: []
    };
  }
};
</script>

<style lang="scss">
</style>


