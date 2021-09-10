<template>
  <article>
    <div class="header-page">
      <a href="/manage/commands">Manage commands</a>
      <a href="/manage/users">Manage users</a>
    </div>
    <div id="commands-box">
      <div class="container">
        <div class="buttons">
          <a v-on:click.prevent="insertToggle = !insertToggle" href=""
            >insert</a
          >
          <a
            @click.prevent="updateCommand"
            :href="
              'manage/commands/update' +
                ($store.state.command ? $store.state.command.commandId : '')
            "
            >update</a
          >
          <a
            @click.prevent="deleteCommand"
            :href="
              'manage/commands/delete/' +
                ($store.state.command ? $store.state.command.commandId : '')
            "
            >delete</a
          >
        </div>
        <Insert v-if="insertToggle" />
        <List v-else />
      </div>
    </div>
  </article>
</template>
<script>
import api from "@/services/api";
import Insert from "@/components/Insert";
import List from "@/components/List";
import authHeader from "@/services/authHeader";
const auth = authHeader();
export default {
  name: "Commands",
  components: {
    Insert,
    List,
  },
  data() {
    return {
      insertToggle: false,
      deleteToggle: false,
      data: {
        command: "",
        cmdReturn: "",
        image: "",
        count: "",
        audioYt: "",
      },
    };
  },
  mounted() {},
  computed: {},
  methods: {
    insertCommand() {},
    updateCommand() {
      api
        .patch("commands/update/" + this.$store.state.command.commandId, this.$store.state.command.actualCommand, {
          headers: { authentication: auth.authentication },
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => console.log(error));
    },
    deleteCommand() {
      api
        .delete("/commands/delete/" + this.$store.state.command.commandId, {
          headers: { authentication: auth.authentication },
        })
        .then((response) => {
          const id = response.data.deleted._id;
          const result = this.$store.state.command.commandList.filter(
            (item) => item._id !== id
          );

          this.$store.dispatch("setSearchBar", "");
          this.$store.dispatch("setCommandList", result);
          this.$store.dispatch("setActualCommand", "");
        })
        .catch((error) => {
          console.log("Erro", error);
        });
    },
  },
};
</script>
<style scoped>
.search-bar-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
}
input.disabled {
  /* background: #c3c3c4 !important; */
  opacity: 0.7;
  cursor: not-allowed;
}
.container label {
  margin-right: 10px;
  font-size: 25px;
  font-weight: 700;
}
.container #search-bar:focus {
  background: opacity 0.9;
}

.container #search-bar {
  margin: 25px 0;
  padding: 5px;
  width: clamp(60vw, 80vw, 100vw);
  height: 25px;
  background: var(--color-background-buttons);
  color: var(--general-blue);
  border: none;
}
.container #result {
  display: flex;
  flex-direction: column;
}
.container #result label {
  font-size: 12px;
  display: inline;
}
.container .buttons {
  width: clamp(60vw, 80vw, 100vw);
  overflow: hidden;
}
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
.edit-btn {
  margin-top: 20px;
  margin-bottom: 40px;
}
</style>
