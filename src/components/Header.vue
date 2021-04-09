<template>
  <header>
    <nav class="container">
      <a href="">
        <img
          src="../assets/logo.svg"
          id="logo"
          alt="Robsonbot"
          title="Robsonbot"/>
      </a>
      <img src="../assets/rob-top.svg" id="robot-icon" alt="Robot Icon" />
      <img v-on:click="openMenu" src="../assets/menu-icon.svg" id="menu-icon" alt="Open menu" />
      <div id="nav-overlay" v-on:click="closeMenu" v-if="menuActive"></div>
      <div id="menu" :class="{ active: menuActive }">
        <div id="top">
          <img src="../assets/logo-menu.svg" alt="" />
          <img src="../assets/robot-menu.svg" alt="" />
        </div>
        <ul>
          <li><a href="">Commands</a></li>
          <li><a href="">Users</a></li>
          <li><a href="">Settings</a></li>
          <li><a href="">log out</a></li>
          <li><a href="">About</a></li>
        </ul>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      menuActive: false,
    };
  },
  methods: {
    openMenu() {
      this.menuActive = true;
    },
    closeMenu() {
      this.menuActive = false;
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
  #menu.active, #menu-icon, #nav-overlay  {
    display: none;
  }
  #nav-overlay {
    display: none;
  }
}
</style>
