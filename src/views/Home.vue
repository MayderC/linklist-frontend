<template>
  <main class="home">
    <section class="home__item home__info">
      <l-info-home></l-info-home>
    </section>

    <section class="home__item home__form" v-if="!isLogin">
      <transition name="list">
        <section v-if="switchLogin" class="form--login">
          <l-login-form></l-login-form>
        </section>
      </transition>

      <transition name="list1">
        <section v-if="!switchLogin" class="form--register">
          <l-register-form></l-register-form>
        </section>
      </transition>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LInfoHome from "@/components/LAsideInfo/LInfoHome.vue";
import LLoginForm from "@/components/foms/LLoginForm/LLoginForm.vue";
import LRegisterForm from "@/components/foms/LRegisterForm/LRegisterForm.vue";
import { mapState } from "vuex";

export default defineComponent({
  name: "Home",
  components: { LInfoHome, LLoginForm, LRegisterForm },
  created() {
    document.title = "LinkList - Home";
  },
  computed: {
    ...mapState(["switchLogin", "isLogin"]),
  },
});
</script>

<style lang="scss" scoped>
@import "../assets/scss/views/Home/_skeleton";
@import "../assets/scss/views/Home/_skin";
</style>

<style lang="scss" scoped>
.welcome {
  display: flex;
  align-items: center;
  justify-content: center;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translatex(-360px);
  //transform: scale(0);
}

.list1-enter-active,
.list1-leave-active {
  transition: all 0.5s ease;
}
.list1-enter-from,
.list1-leave-to {
  opacity: 0;
  transform: translatex(360px);
  //transform: scale(0);
}

.home__form {
  position: relative;
}

.form--login,
.form--register {
  position: absolute;
}
</style>
