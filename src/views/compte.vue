<template>
  <div class="content">
      <img class="child" src='../image/logo.png'/>
      <h1 class="fu-title">Bienvenue chez Follow'Up</h1>
      <h2 class="fu-h2">Devenez consomm'acteurs</h2>
      <br>
      <fu-button>Connexion</fu-button>
      <br>
      <a>Vous n'avez pas de compte ?</a>
      <a> S'enregistrer</a>
      <br><br><br>
      <fu-icon-button icon="times"/>
      <fu-section-button icon="question" title="FAQ"/>
      <fu-section-button icon="lock" title="Déconnexion"/>
      <fu-expander title="expand / collapse" icon="question">
        this is the content of the expander.
      </fu-expander>
      <p class="fu-title">This is a title</p>
      <p class="fu-subtitle">This is a subtitle</p>
      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
      richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
      brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
      tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
      <p class="fu-quote">"This is a quote"</p>
      assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
      <p><a href="">this is a link</a></p>
      wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
      vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
      synth nesciunt you probably haven't heard of them accusamus labore VHS.
      <p class="fu-title">This is a title</p>
      <p class="fu-subtitle">This is a subtitle</p>
      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
      richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
      brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
      tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
      assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
      wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
      vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
      synth nesciunt you probably haven't heard of them accusamus labore VHS.
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: '',
  components: {
  }
}
</script>

<style lang="scss" scoped>
.content {
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.child{
  width: 30%;
  height: auto;
}
.fu-h2{
  color: #b9b7b6;
  text-align: center;
  font-size: 1.1em;
}
</style>