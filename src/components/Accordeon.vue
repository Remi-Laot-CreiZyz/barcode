<template>
  <div role="tablist" class="accordion">

    <b-card v-for="(section, index) in sections" :key="index" no-body class="mb-1 cardPos">
      
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle="'collapse_accordeon_' + index" variant="light">
          <strong class="btnColor">
            <!-- icon  -->
            <span class="vertical">|</span>
            {{ section.title }}
          </strong>
        </b-button>
      </b-card-header>
    
      <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body><p class="card-text">{{ text }}</p></b-card-body>
      </b-collapse>
    
    </b-card>
  
  </div>
</template>

composant => liste [...] => accordeon 

composant => carte qui s'expand
vue => for items => composant (item)

data :


<template>
  <b-card>
    <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle="'collapse_accordeon_' + index" variant="light">
          <strong class="btnColor">
            <!-- icon  -->
            <span class="vertical">|</span>
            {{ section.title }}
          </strong>
        </b-button>
      </b-card-header>
    
      <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body><p class="card-text">{{ text }}</p></b-card-body>
      </b-collapse>
  </b-card>
</template>



<script>
export default {
  data: () => {
    sections : [
      {
        logo :  "",
        title : "Qui sommes nous",
        text :  `Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                 richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                 brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                 tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                 assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                 wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
                 vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
                 synth nesciunt you probably haven't heard of them accusamus labore VHS.`
      },
      {
        logo :  "",
        title : "Nos entreprises partenaires",
        text :  `Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                 richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                 brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                 tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                 assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                 wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
                 vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
                 synth nesciunt you probably haven't heard of them accusamus labore VHS.`
      },
      {
        logo :  "",
        title : "FAQ",
        text :  `Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                 richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                 brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                 tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                 assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                 wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
                 vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
                 synth nesciunt you probably haven't heard of them accusamus labore VHS.`
      },
      {
        logo :  "",
        title : "Nous contacter",
        text :  `Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                 richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                 brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                 tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                 assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                 wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
                 vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
                 synth nesciunt you probably haven't heard of them accusamus labore VHS.`
      }
    ]
  }
}
</script>

<style lang="scss">

</style>
