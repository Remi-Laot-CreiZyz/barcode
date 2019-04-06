<template>
<div class="body">
  <div class="accordion">
    <b-card no-body class="mb-1 cardPos">
      <b-card-header header-tag="header" class="p-1">
        <b-button block href="#" v-b-toggle.accordion1 variant="light"><strong class="btnColor"><div class="vertical">|</div>Qui sommes-nous</strong></b-button>
      </b-card-header>
      <b-collapse id="accordion1" visible accordion="my-accordion">
        <b-card-body><p class="card-text">{{ text }}</p></b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1 cardPos">
      <b-card-header header-tag="header" class="p-1">
        <b-button block href="#" v-b-toggle.accordion2 variant="light" class="btnPos"><strong class="btnColor border"><div class="vertical">|</div>Nos entreprises partenaires</strong></b-button>
      </b-card-header>
      <b-collapse id="accordion2" accordion="my-accordion">
        <b-card-body><p class="card-text">{{ text }}</p></b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1 cardPos">
      <b-card-header header-tag="header" class="p-1">
        <b-button block href="#" v-b-toggle.accordion3 variant="light"><strong class="btnColor"><div class="vertical">|</div>FAQ</strong></b-button>
      </b-card-header>
      <b-collapse id="accordion3" accordion="my-accordion">
        <b-card-body><p class="card-text">{{ text }}</p></b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1 cardPos">
      <b-card-header header-tag="header" class="p-1">
        <b-button block href="#" v-b-toggle.accordion4 variant="light"><strong class="btnColor"><div class="vertical">|</div>Nous contacter</strong></b-button>
      </b-card-header>
      <b-collapse id="accordion4" accordion="my-accordion">
        <b-card-body><p class="card-text">{{ text }}</p></b-card-body>
      </b-collapse>
    </b-card>
  </div>
</div>
</template>

<script>
  export default {
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
