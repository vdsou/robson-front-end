<template>
  <article>
    <div class="header-page">
      <a href="/Manage">Manage commands</a>
      <a href="/Manage">Manage users</a>
    </div>
    <div id="commands-box">
      <div class="container">
        <h1>{{ command.command }}</h1>
        <div v-for="(value, key) in command" :key="key" id="data-content">
          <p v-if="key !== '__v'">
            <span id="item-key">{{ key }}:</span> {{ value }}
          </p>
        </div>
          <div class="buttons">
            <a href="">edit</a>
            <a href="">delete</a>
          </div>
      </div>
    </div>
  </article>
</template>
<script>
import api from "@/services/api";
export default {
  name: "Commands",
  data() {
    return {
      id: "",
      command: [],
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    api.get("/commands/getcommand/" + this.id).then((res) => {
      this.command = res.data;
      console.log(this.command);
    });
  },
};
</script>
<style scoped>
.container {
  color: var(--color-text-box);
  padding-top: 20px;
  font-size: 12px;
}
#data-content {
  flex-direction: column;
  margin: 20px 5px 20px 0;
  white-space: pre-line;
  overflow: hidden;
}
#data-content #item-key {
  text-transform: capitalize;
}
.header-page a {
  max-width: 120px;
  margin-left: 22px;
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
  min-height: 100vh;
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
