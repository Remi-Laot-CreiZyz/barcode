<template>
  <div id="app">
    <div class="header">
      <div class="text-header">Follow'up</div>
    </div>
    <router-view/>
    <b-navbar id="navbar">
      <b-navbar-nav>
        <b-nav-item v-for="(section) in sections" :key="section.id" :to="section.link" v-bind:class="section.class">
          <font-awesome-icon class="nav-icon" :icon="section.icon"/>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        sections : [
        { id : 0, class : "secondary", icon : "user",     color : "#2c3e50", link : "/compte" },
        { id : 1, class : "secondary", icon : "history",  color : "#2c3e50", link : "/history" },
        { id : 2, class : "main",      icon : "barcode",  color : "#a8d673", link : "/" },
        { id : 3, class : "secondary", icon : "question", color : "#2c3e50", link : "/premium" },
        { id : 4, class : "secondary", icon : "plus",     color : "#2c3e50", link : "/info" },]
      }
    },
    components: {}
  }
</script>


<style lang="scss">

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }



  #navbar{
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 0;
    background-color: #F8F8F8;
    justify-content: center;
  }

  .navbar-nav {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .nav-item{
    font-size: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
  }

  .nav-icon {
    color: #2c3e50;
  }

  .main .nav-icon {
    font-size: 2rem;
  }

  .nav-link.router-link-exact-active .nav-icon {
    color: #42b983;
  }





  .header{
    background-color: #0A5C7C;
  }
  .text-header{
    text-align: center;
    font-size: 1.5rem;
    padding: 1rem;
    color: white;
    letter-spacing: 0.33rem;
    text-transform: uppercase;
  }

</style>
