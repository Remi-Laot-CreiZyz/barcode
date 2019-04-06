<template>
  <div id="app">
    <div id="header">
      <div id="text-header">Follow'up</div>
    </div>
    <div id="content">
      <router-view/>
    </div>
    <div id="nav-bar">
      <router-link
        v-for="(section) in sections"
        :key="section.id"
        :to="section.link"
        v-bind:class="['nav-link', section.class]"
      >
        <font-awesome-icon class="nav-icon" :icon="section.icon"/>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sections: [
        {
          id: 0,
          class: "secondary",
          icon: "user",
          color: "#2c3e50",
          link: "/compte"
        },
        {
          id: 1,
          class: "secondary",
          icon: "history",
          color: "#2c3e50",
          link: "/history"
        },
        { id: 2, class: "main", icon: "barcode", color: "#a8d673", link: "/" },
        {
          id: 3,
          class: "secondary",
          icon: "question",
          color: "#2c3e50",
          link: "/premium"
        },
        {
          id: 4,
          class: "secondary",
          icon: "plus",
          color: "#2c3e50",
          link: "/info"
        }
      ]
    };
  },
  components: {}
};
</script>


<style lang="scss">

// ===== GENERAL APP STYLING ===== 

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  flex-direction: column;
  height: 100vh;
}

// ===== HEADER STYLING ===== 

#header {
  background-color: #0a5c7c;
}
#text-header {
  text-align: center;
  font-size: 1.5rem;
  padding: 1rem;
  color: white;
  letter-spacing: 0.33rem;
  text-transform: uppercase;
}

// ===== CONTENT STYLING ===== 

#content {
  flex-grow: 1;
  overflow: scroll;
}

// ===== NAVBAR STYLING ===== 

#nav-bar {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: #f8f8f8;
}

.nav-icon {
  color: #2c3e50;
}

.main .nav-icon {
  font-size: 2rem;
}

.router-link-exact-active .nav-icon {
  color: #42b983;
}

// ===== END STYLING ===== 

</style>
