export default {
  state: {
    commandId: "",
    actualCommand: {},
    commandList: {},
    searchBar: "",
  },
  mutations: {
    setCommandId(state, payload) {
      state.commandId = payload;
    },
    setActualCommand(state, payload) {
      state.actualCommand = payload;
    },
    setCommandList(state, payload) {
      state.commandList = payload;
    },
    setSearchBar(state, payload) {
      state.searchBar = payload;
    },
  },
  actions: {
    setCommandId(context, payload) {
      context.commit("setCommandId", payload);
    },
    setActualCommand(context, payload) {
      context.commit("setActualCommand", payload);
    },
    setCommandList(context, payload) {
      context.commit("setCommandList", payload);
    },
    setSearchBar(context, payload) {
      context.commit("setSearchBar", payload);
    },
  },
};
