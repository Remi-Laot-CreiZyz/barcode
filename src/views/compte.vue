<template>
  <div>
      <p>Ceci est la page Compte !</p>
      <fu-button>GO!</fu-button>
      <fu-button>Connexion</fu-button>
      <fu-button><font-awesome-icon icon="question"/></fu-button>
      <fu-icon-button icon="times"/>
      <fu-icon-button icon="question"/>
      <fu-section-button icon="question" title="FAQ"/>
      <fu-section-button icon="lock" title="Déconnexion"/>
      <fu-expander title="expand / collapse" icon="question">
        this is the content of the expander.
      </fu-expander>
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