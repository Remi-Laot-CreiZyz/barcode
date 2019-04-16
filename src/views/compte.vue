<template>
  <div class="content">
    <div class="block">
      <fu-logo/>
      <h1 class="fu-title">Bienvenue chez Follow'Up</h1>
      <h2>Devenez consomm'acteurs</h2>
    </div>
    <div class="block">
      <fu-input icon="envelope" label="email" type="email"/>
      <fu-input icon="key" label="mot de passe" type="password"/>
    </div>
    <div class="block">
      <router-link to="error">
        <fu-button>Connexion</fu-button>
      </router-link>
      <router-link to="error">Vous n'avez pas de compte ?</router-link>
      <router-link to="error">S'enregistrer</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.content {
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}

h2 {
  color: #b9b7b6;
  text-align: center;
  font-size: 1.1rem;
}
.block {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>