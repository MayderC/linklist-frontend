<template>
  <l-navbar></l-navbar>

  <transition name="list">
    <router-view />
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LNavbar from "@/components/LNavbar/LNavbar.vue";
import { mapActions, mapMutations, mapState } from "vuex";
import { getLinks } from "./api/crud";
import { removeLocalStorage } from "./helpers/setLocalStore";

export default defineComponent({
  name: "App",
  components: { LNavbar },
  methods: {
    ...mapMutations(["updateSateFromStorage", "setLinks", "clearVuex"]),
    ...mapActions(["getLInksRequest"]),
  },
  computed: {
    ...mapState(["token"]),
  },
  created() {
    this.updateSateFromStorage();
    // Realizat peticion con token de localstorage, siempre se tiene que hacer.
    // tanto si es valido o no, si tiene.
    // si la peticoin es correcta redirigir a /home
    // si retorna un error elimiar localStorage y dejar en login/registro ruta
    if (this.token.length > 0) {
      // peticion con el token
      getLinks(this.token).then((res) => {
        if (!res.user) {
          // bad request, elimiar local sorage and state/vuex
          removeLocalStorage();
          this.clearVuex();
          this.$router.push("/");
          return;
        }
        // el usuario y token son correctos
        this.setLinks(res.user.links);
        this.$router.push("/home");
      });
    }
  },
});
</script>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
}
body,
h1,
h2,
ul,
p {
  margin: 0;
  padding: 0;
}
#app {
  min-height: 100vh;
  font-family: "Poppins", sans-serif;
  overflow: hidden;
}

body {
  background-color: #272848;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  transform: translateX(-50%);
  opacity: 0;
}
</style>
