<template>
  <header>
    <nav class="container">
      <a href="/">
        <img
          src="../assets/logo.svg"
          id="logo"
          alt="Robsonbot"
          title="Robsonbot"
        />
      </a>
      <img src="../assets/rob-top.svg" id="robot-icon" alt="Robot Icon" />
      <img
        v-on:click="openMenu"
        src="../assets/menu-icon.svg"
        id="menu-icon"
        alt="Open menu"
      />
      <div id="nav-overlay" v-on:click="closeMenu" v-if="menuActive"></div>
      <div id="menu" :class="{ active: menuActive }">
        <div id="top">
          <img src="../assets/logo-menu.svg" alt="" />
          <img src="../assets/robot-menu.svg" alt="" />
        </div>
        <ul>
          <li><router-link to="/commands">Commands</router-link></li>
          <li><router-link to="/users">Users</router-link></li>
          <li><router-link to="/settings">Settings</router-link></li>
          <li v-if="this.$store.state.user.isLogged">
            <router-link to="/" @click.native="handleLogout">log out</router-link>
          </li>
          <li><router-link to="/about">About</router-link></li>
        </ul>
      </div>
    </nav>
  </header>
</template>
<script>
// import AuthService from "@/services/authService";
// const auth = AuthService;
export default {
  name: "Header",
  data() {
    return {
      menuActive: false,
      isLogged: false,
    };
  },
  methods: {
    openMenu() {
      this.menuActive = true;
    },
    closeMenu() {
      this.menuActive = false;
    },
    async handleLogout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>
<style scoped>
header {
  width: 100%;
  height: 48px;
  border-bottom: solid 1px #428dff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#logo {
  width: 128px;
  display: flex;
  margin-top: 8px;
}
#robot-icon {
  margin-top: 10px;
}
#nav-overlay {
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 40%;
  background: #202b38;
  opacity: 0.83;
}

#menu {
  display: none;
  flex-direction: column;
  width: 60%;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  background: #202b38;
}
#top {
  display: flex;
  justify-content: space-around;
  padding: 10px;
}
#menu.active {
  display: flex;
}
ul li a {
  display: block;
  padding: 10px;
  color: #f5f5f5;
  font-size: 13px;
  font-weight: bold;
}
ul {
  list-style: none;
}
ul li {
  text-align: center;
  background: #28323f;
  margin: 2px 0;
}

@media (min-width: 700px) {
  #top,
  #nav-overlay,
  #menu-icon {
    display: none;
  }
  #menu {
    display: flex;
    flex-direction: row;
    height: 25px;
    position: static;
    width: auto;
    background: black;
  }
  ul {
    display: flex;
  }
  ul li a {
    color: var(--color-titles);
    font-size: 16px;
    font-weight: bold;
  }
  #menu,
  ul li {
    background: var(--color-background);
  }
  #robot-icon {
    width: 37px;
  }
}
</style>
