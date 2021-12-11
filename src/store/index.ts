import { createStore } from "vuex";
import { getLinks } from "../api/crud";

export default createStore({
  state: {
    switchLogin: true,
    isLogin: false,
    token: "",
    user: "",
    links: [] as string[],
  },
  mutations: {
    toggleSwitchLogin(state) {
      state.switchLogin = !state.switchLogin;
    },
    updateSateFromStorage(state) {
      const token: string | null = localStorage.getItem("token") || "";
      state.token = token;
      const user: string | null = localStorage.getItem("username") || "";
      state.user = user;

      const login: string | null = localStorage.getItem("isLogin") || "false";
      if (login === "true" || login === "false") {
        const value = JSON.parse(login);
        state.isLogin = value;
      }
    },

    clearVuex(state){
      state.isLogin = false;
      state.user = "";
      state.token = "";
      state.links = []
    },

    pushLink(state, link) {
      state.links.push(link);
    },

    setLinks(state, links) {
      state.links = links;
    },

    setToken(state, token) {
      state.token = token;
    },

    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    getLInksRequest(ctx) {
      getLinks(ctx.state.token).then((res) => {
        ctx.commit("setLinks", res.user.links);
      });
    },
  },
  modules: {},
});
