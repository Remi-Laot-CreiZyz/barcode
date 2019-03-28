<template>
  <div id="app">
    <div class="header">
      <h1 class="text-header">Follow'up</h1>
    </div>
    <b-navbar id="navBar">
      <b-navbar-nav>
        <b-nav-item v-for="(section, index) in sections" :key=section.id class="navLink" :to="section.link">
          <font-awesome-icon :icon="section.icon"/>
          <div v-if='index <= sections.size' class="ligne_verticale_index">azdazd</div>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  <router-view/>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        sections : [
        { id : 0, icon : "user",     color : "#2c3e50", link : "/compte" },
        { id : 1, icon : "history",  color : "#2c3e50", link : "/history" },
        { id : 2, icon : "barcode",  color : "#a8d673", link : "/" },
        { id : 3, icon : "question", color : "#2c3e50", link : "/premium" },
        { id : 4, icon : "plus",     color : "#2c3e50", link : "/info" },]
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
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
#navBar{
	position: fixed;
	bottom: 0;
	width: 100%;
	padding: 0;
	height: auto;
  background-color: #F8F8F8;
	justify-content: center;
	text-align: center;
}
.navLink{
	display:inline-block;
	margin-left:5px;
	padding: 5px 10px;
	text-decoration:none;
  vertical-align: center;
}
#colorIcon{
  color: #a8d673;
}
.ligne_verticale_index
{
  width:5px;
  border-left: solid 1px #b8bbc1;
  height: auto;
}
.text-header{
	text-align: center;
	font-size: 1.5em;
  padding-top: 4%;
  padding-bottom: 4%;
	color: white;
	letter-spacing: 5px;
	text-transform: uppercase;
}
.header{
	background-color: #0A5C7C;
	height: auto;
}
</style>
