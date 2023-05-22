<template>
  <section class="form">
    <form class="form__login">
      <h2>Login</h2>
      <div class="container--email">
        <label for="email"></label>
        <l-input
          type="email"
          name="email"
          id="email"
          @update:input="email = $event"
          @focusin="focus"
          @focusout="focusRemove"
          pholder="Ingrese su correo electronico"
        />
      </div>
      <div class="container--password">
        <label for="password"></label>
        <l-input
          type="password"
          @update:input="password = $event"
          pholder="Ingrese su contraseña"
        />
      </div>
      <div class="form__recovery--link">
        <p class="text__error" v-if="isErr">Error los datos son incorrectos</p>
        <router-link class="link__recovery" to="/recovery">
          <p>¿Has olvidado tu contraseña?</p>
        </router-link>
      </div>
      <div class="form__btn--login">
        <l-buttom @click="sendData" :text="Login_text"></l-buttom>
      </div>
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LButtom from "@/components/LButtom/LButtom.vue";
import { login } from "../../../api/auth";
import { setlocalStorage } from "@/helpers/setLocalStore";
import { mapMutations } from "vuex";
import LInput from "@/components/form/LInput.vue";

export default defineComponent({
  name: "LLoginForm",
  components: { LInput, LButtom },
  data() {
    return {
      email: "",
      password: "",
      Login_text: "Login",
      isErr: false,
    };
  },
  methods: {
    ...mapMutations(["updateSateFromStorage", "setLinks"]),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    focus(event: any) {
      event.target.parentNode.classList.add("focus-inputs");
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    focusRemove(event: any) {
      event.target.parentNode.classList.remove("focus-inputs");
    },

    sendData() {
      this.Login_text = "Cargando..";
      login(this.email, this.password)
        .then((res) => {
          if (res.error) {
            this.Login_text = "Login";
            this.isErr = true;

            setTimeout(() => {
              this.isErr = false;
            }, 1500);
          }

          if (res.token) {
            this.Login_text = "Login";
            setlocalStorage(res.token, res.user, true);
            this.setLinks(res.links);
            this.updateSateFromStorage();
            this.$router.push("/home");
          }
        })
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .catch(() => {
          return;
        });
    },
  },
});
</script>

<style lang="scss" scoped>
.text__error {
  color: rgb(255, 83, 83);
  text-align: center;
}

.form {
  width: 360px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
}

.form__login {
  display: flex;
  flex-direction: column;
}

.form__login {
  h2 {
    color: #6d71f9;
    text-align: center;
    margin-bottom: 20px;
  }
}

.form__btn--login {
  display: flex;
  align-items: center;
  justify-content: center;
}

.form__container input {
  border: 0;
  outline: 0;
  width: 100%;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: bold;
}

.container--password {
  margin-top: 20px;
}

.form__recovery--link {
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: bold;

  .link__recovery {
    text-align: center;
    color: #6d71f9;
    text-decoration: none;
  }

  .link__recovery:hover {
    text-decoration: underline;
  }
}

.focus-inputs {
  border: 2px solid #6d71f9;
}

.form {
  width: 360px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
}
</style>
