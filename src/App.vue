<template>
  <div id="app" ref="app">
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
      <!-- <div class="nav-link">
        <font-awesome-icon
          class="nav-icon"
          @click="toggle"
          v-if="!fullscreen"
          icon="expand-arrows-alt"
        />
        <font-awesome-icon
          class="nav-icon"
          @click="toggle"
          v-if="fullscreen"
          icon="compress-arrows-alt"
        />
      </div>-->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullscreen: false,
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
        {
          id: 2,
          class: "main",
          icon: "barcode",
          color: "#a8d673",
          link: "/scan"
        },
        {
          id: 3,
          class: "secondary",
          icon: "trophy",
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
  methods: {
    toggle() {
      this.$fullscreen.toggle(this.$refs.app, {
        wrap: false,
        callback: this.fullscreenChange
      });
    },
    fullscreenChange(fullscreen) {
      this.fullscreen = fullscreen;
    }
  },
  components: {}
};
</script>

<style lang="scss" scoped>
// ===== GENERAL APP STYLING =====

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: white;
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

.header-icon {
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  color: white;
}

// ===== CONTENT STYLING =====

#content {
  flex-grow: 1;
  overflow: scroll;
  display: flex;
  flex-direction: row;
}

#content > * {
  flex-grow: 1;
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
