<template>
  <article>
    <div class="header-page">
      <a href="">Manage commands</a>
      <a href="">Manage users</a>
    </div>
    <div id="commands-box">
      <ul class="container">
        <li v-for="(command, index) in commands" :key="index">
          <a :href="'command/' + command._id">!{{ command.command }}</a>
        </li>
      </ul>
    </div>
  </article>
</template>
<script>
import api from "@/services/api";
export default {
  name: "Commands",
  data() {
    return {
      commands: [],
    };
  },
  mounted() {
    api.get("/commands/get").then((res) => {
      this.commands = res.data.commands;
    });
  },
};
</script>
<style scoped>
.header-page a {
  max-width: 120px;
  margin-left: 72px;
  font-weight: 400;
  font-size: 12px;
  line-height: 15.83px;
  display: block;
  padding-bottom: 12px;
  color: var(--general-blue);
  cursor: pointer;
}
a:hover {
  text-decoration: underline;
}
#commands-box {
  background: var(--general-blue);
  display: flex;
  justify-content: center;
  min-height: 100vh;
}
#commands-box ul {
  padding: 2em 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
#commands-box ul li {
  text-align: center;
  margin-bottom: 13px;
}
#commands-box ul li a {
  color: var(--color-text-box);
  font-weight: bold;
  font-size: 15px;
}
</style>
