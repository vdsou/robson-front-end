<template>
  <div>
    <div class="search-bar-container">
      <label for="search-bar">
        !
      </label>
      <input
        v-model="search"
        type="text"
        placeholder="search e.g.: bico "
        name="search-bar"
        id="search-bar"
      />
    </div>
    {{ getCommand }}
    <div id="result" class="container">
      <div v-if="!getCommand">
        <h1 class="error">404 not found!</h1>
      </div>
      <div v-for="(value, key) in commandUpdate" :key="key">
        <label :for="key + '-field'">{{ key }}:</label>
        <input
          :disabled="disabled"
          type="text"
          :class="{ disabled }"
          :id="key + '-field'"
          class="fields"
          v-model="commandUpdate[key]"
        />
      </div>
    </div>
    <div class="buttons">
      <div class="edit-btn">
        <a
          @click.prevent="disabled = !disabled"
          :href="'commands/' + (getCommand ? getCommand._id : '')"
          >edit</a
        >
      </div>
      <div class="save-btn">
        <a @click.prevent="edit" href="">Save</a>
      </div>
    </div>
  </div>
</template>
<script>
import api from "@/services/api";

export default {
  name: "List",
  data() {
    return {
      search: "",
      commands: [],
      disabled: true,
      commandId: "",
      commandUpdate: this.$store.state.command.actualCommand
    };
  },
  mounted() {
    api.get("/commands/get").then((response) => {
      this.$store.dispatch("setCommandList", response.data.commands);
      this.commands = this.$store.state.command.commandList;
    }).catch(error => {console.log(error)});
  },
  computed: {
    getCommand() {
      this.$store.dispatch("setSearchBar", this.search)
      const result = this.commands.filter(item => item.command === this.$store.state.command.searchBar);
      if (result.length > 0) {
        
        this.$store.dispatch("setActualCommand", result[0]);
        this.$store.dispatch("setCommandId", result[0]._id);
        this.edit()

      }
      return result[0];

    },
  },
  methods: {
    edit() {
      this.commandUpdate = this.$store.state.command.actualCommand
    }
  }
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
.buttons {
  margin-bottom: 35px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.error {
  margin-bottom: 35px;
}
</style>
