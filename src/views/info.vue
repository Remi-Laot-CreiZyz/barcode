<template>
<div class="body">
  <v-expander title="TITRE 1">
    {{text}}
  </v-expander>
</div>
</template>

<script>
  import Expander from '@/components/Expander.vue'

  export default {
    components : {
      'v-expander' : Expander
    },
    data() {
      return {
        text: `
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
          brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
          tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
          wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
          vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
          synth nesciunt you probably haven't heard of them accusamus labore VHS.
        `
      }
    }
  }
</script>
<style lang="scss">
.body{
  background-color: #53714B;
  height: 100vh;
}
.accordion{
	vertical-align: middle;
	padding-top: 7%;
}
.btnPos{
  text-align: left;
}
.btnColor{
  color: #aaaaaa;
  background-color: #F8F8F8;
}
.btnColor:hover{
  color: #53714B;
  text-decoration: none;
}
.cardPos{
  margin: 4% 7% 4% 7%;
}
.border{
  border-radius: 50px;
}
.vertical{
  display: inline-block;
  padding-right: 5%;
}
</style>
