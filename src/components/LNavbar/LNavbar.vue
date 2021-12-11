<template>
  <nav class="navbar">
    <div class="navbar__list navbar__list--title">
      <router-link class="link" to="/">
        <h1 class="navbar__title">Link List</h1>
      </router-link>
      <l-buttom-menu
        @show:menu="showMenu"
        :isToggle="menuToggle"
      ></l-buttom-menu>
    </div>
    <ul id="navbar__menu" class="navbar__menu" @click="showMenu">
      <li class="navbar__list navbar__list--button" v-if="!isLogin">
        <l-buttom
          v-if="this_route"
          class="fix-widht"
          @click="toggleSwitchLogin"
          :text="switchLogin ? 'Register' : 'Login'"
        ></l-buttom>

        <!-- Register btn ruta /:user to "principal" and register form on -->
        <l-buttom
          v-if="!this_route"
          class="fix-widht"
          @click="() => this.$router.push('/')"
          text="Register"
        ></l-buttom>
        <!-- Register btn ruta /:user "principal and register form on" -->
      </li>

      <li class="navbar__list navbar__list--button" v-if="isLogin">
        <l-buttom
          class="fix-widht"
          @click="() => this.$router.push(`/${user}`)"
          text="Profile"
        ></l-buttom>
        <l-buttom
          class="fix-widht"
          @click="() => this.$router.push('/home')"
          text="Home"
        ></l-buttom>
        <l-buttom class="fix-widht" @click="close" text="Close"></l-buttom>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LButtom from "../LButtom/LButtom.vue";
import { mapMutations, mapState } from "vuex";
import { removeLocalStorage } from "@/helpers/setLocalStore";
import LButtomMenu from "@/components/LButtom/LButtomMenu.vue";

export default defineComponent({
  name: "LNavbar",
  data() {
    return { this_route: true, menuToggle: false };
  },
  computed: {
    ...mapState(["switchLogin", "isLogin", "token", "user"]),
  },
  components: { LButtom, LButtomMenu },
  methods: {
    ...mapMutations([
      "toggleSwitchLogin",
      "updateSateFromStorage",
      "clearVuex",
    ]),

    register() {
      this.toggleSwitchLogin();
    },
    close() {
      //Elimnar local storage
      removeLocalStorage();
      //eliminar Vuex
      //this.updateSateFromStorage();
      this.clearVuex();
      // redirigir a root /
      this.$router.push("/");
    },

    showMenu() {
      this.menuToggle = !this.menuToggle;
      const menu = document.getElementById("navbar__menu");
      menu?.classList.toggle("show");
    },
  },
  watch: {
    $route(to) {
      if (to.href === "/") {
        this.this_route = true;
      } else if (to.href !== "/") {
        this.this_route = false;
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.fix-widht {
  width: 120px;
  margin: 0 10px;
}

.navbar {
  position: relative;
  height: 60px;
  background: #1a2038;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 90px;
}

.navbar__menu {
  position: relative;
  justify-content: space-between;
  display: flex;
  list-style: none;
  align-items: center;
  z-index: 9;

  height: 100%;
  transition: 0.4s;
}

.link {
  cursor: pointer;
  color: #fff;
  text-decoration: none;
  transition: 0.4s;
}

.navbar__list--title {
  height: 100%;
  display: flex;
  align-items: center;
}

.navbar__title:hover {
  transform: scale(1.1);
  transition: 0.4s;
}

@media (max-width: 911px) {
  .navbar {
    display: block;
    padding: 0 20px;
  }

  .navbar__menu {
    margin-top: 20px;
    justify-content: center;
    background-color: #1a2038;
    height: auto;
    padding: 20px;
    display: none;
    border-radius: 10px;

    li {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }

  .show {
    transition: 0.4s;
    display: flex;
  }
}
</style>

<style lang="scss"></style>
