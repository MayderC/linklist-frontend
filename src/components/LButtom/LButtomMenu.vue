<template>
  <div class="boton__menu" @click="toggleOpen">
    <div class="menu" id="menu_burger" aria-label="Main Menu">
      <svg width="50" height="50" viewBox="0 0 100 100">
        <path
          stroke="#fff"
          class="line line1"
          d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
        />
        <path stroke="#fff" class="line line2" d="M 20,50 H 80" />
        <path
          stroke="#fff"
          class="line line3"
          d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
        />
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LButtomMenu",
  props: { isToggle: Boolean },
  methods: {
    toggleOpen() {
      this.$emit("show:menu");
    },
    animateMenu() {
      const menu_burger = document.getElementById("menu_burger");
      if (menu_burger) {
        menu_burger.classList.toggle("opened");
        if (menu_burger.classList) {
          menu_burger.setAttribute(
            "aria-expanded",
            menu_burger.classList.contains("opened").toString()
          );
        }
      }
    },
  },
  watch: {
    isToggle() {
      this.animateMenu();
    },
  },
});
</script>
<style lang="scss" scoped>
.boton__menu {
  width: 50px;
  height: 50px;
  position: absolute;
  top: 0;
  right: 25px;
  display: none;
}
@media (max-width: 911px) {
  .boton__menu {
    display: block;
  }
}

.menu {
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  padding: 0;
  width: 45px;
  position: relative;
  z-index: 1;
}
.line {
  position: absolute;
  z-index: -9;
  fill: none;
  stroke: rgb(255, 255, 255);
  stroke-width: 6;
  transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
}
.line1 {
  stroke-dasharray: 60 207;
  stroke-width: 6;
}
.line2 {
  stroke-dasharray: 60 60;
  stroke-width: 6;
}
.line3 {
  stroke-dasharray: 60 207;
  stroke-width: 6;
}
.opened .line1 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 6;
}
.opened .line2 {
  stroke-dasharray: 1 60;
  stroke-dashoffset: -30;
  stroke-width: 6;
}
.opened .line3 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 6;
}
</style>
