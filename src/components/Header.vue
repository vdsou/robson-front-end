<template>
  <header>
    <nav class="container">
    <a href=""><img src="../assets/logo.svg" id="logo" alt="Robsonbot" title="Robsonbot"/></a>
    <img src="../assets/rob-top.svg" id="robot-icon" alt="Robot Icon" />
    <a href=""><img src="../assets/menu-icon.svg" id="menu" alt="Open menu" /> </a>
    </nav>
  </header>
</template>
<script>
export default {
  name: "Header",
};
</script>
<style scoped>
    header {
        width: 100%;
        height: 48px;
        border-bottom: solid 1px #428DFF;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
    }
    nav{
        display: flex;
        justify-content: space-between;
        align-items: center
    }
    #logo{
        width: 128px;
        display: flex;
        margin-top: 8px;
    }
    #robot-icon{
        margin-top: 10px
    }
</style>
