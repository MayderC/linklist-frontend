<template>
  <section class="form">
    <form class="form__register">
      <h2>Register</h2>

      <section class="form__input--first">
        <l-input
          @update:input="user = $event"
          pholder="Ingrese su usuario"
          input="text"
          id="username"
          :value="user"
          @keyup.enter="NextFocus('email_register')"
        ></l-input>

        <l-input
          @update:input="email = $event"
          pholder="Ingrese su correo electronico"
          input="email"
          :value="email"
          id="email_register"
          @keyup.enter="NextFocus('remail')"
        ></l-input>
        <!--
        <l-input
          @update:input="(argument) => update({ remail: argument })"
          pholder="Repita su correo"
          input="email"
          id="remail"
          @keyup.enter="NextFocus('password_register')"
        ></l-input>
        -->
        <l-input
          @update:input="password = $event"
          pholder="Ingrese su contraseña"
          :input="type_pass"
          :value="password"
          id="password_register"
          @keyup.enter="NextFocus('rpassword')"
        ></l-input>

        <l-input
          @update:input="rpassword = $event"
          pholder="Repita su contraseña"
          :input="type_pass"
          id="rpassword"
          :value="rpassword"
          @keyup.enter="sendData"
        ></l-input>

        <div class="show-password">
          <input
            @change="showPass"
            type="checkbox"
            id="cbox2"
            value="second_checkbox"
          />
          <label for="cbox2">Mostrar contraseñas</label>
        </div>
      </section>

      <div class="form__btn--login">
        <l-buttom @click="sendData" text="Siguiente"></l-buttom>
      </div>
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LButtom from "@/components/LButtom/LButtom.vue";
import LInput from "../LInput.vue";
import { register } from "@/api/auth";
import { setlocalStorage } from "@/helpers/setLocalStore";
import { mapMutations } from "vuex";

export default defineComponent({
  name: "LRegisterForm",
  components: { LButtom, LInput },
  data() {
    return {
      type_pass: "password",
      email: "",
      password: "",
      user: "",
      remail: "",
      rpassword: "",
      input_errors: [] as string[],
    };
  },
  methods: {
    ...mapMutations(["updateSateFromStorage"]),

    showPass() {
      this.type_pass == "password"
        ? (this.type_pass = "text")
        : (this.type_pass = "password");
    },

    NextFocus(id: string) {
      const input = document.getElementById(id)?.focus();
      return input;
    },
    sendData() {
      const user = {
        username: this.user,
        email: this.email,
        password: this.password,
      };

      const repeat_user = {
        email: this.remail,
        password: this.rpassword,
      };

      if (this.chechInputs(user, repeat_user)) {
        register(user).then((res) => {
          if (res.token) {
            setlocalStorage(res.token, res.user, true);
            this.updateSateFromStorage();
            this.$router.push("/home");
          }
        });
      } else {
        // focus red on inputs whit errors
        this.markBadInputs();
      }
    },
    chechInputs(
      user: { username: string; email: string; password: string },
      ruser: { email: string; password: string }
    ) {
      if (user.password === ruser.password) {
        return true;
      }
      // if (user.email !== ruser.email) {
      //   this.input_errors.push("EMAIL");
      // }
      if (user.password !== ruser.password) {
        this.input_errors.push("PASSWORD");
      }
      return false;
    },

    markBadInputs() {
      for (let input of this.input_errors) {
        if (input == "EMAIL") {
          const email = document.getElementById("remail");

          if (email?.parentElement) {
            email.parentElement.style.border = "1px solid red";

            setTimeout(() => {
              if (email?.parentElement) {
                email.parentElement.style.border = "2px solid #afafaf";
              }
            }, 5000);
          }
        } else if (input == "PASSWORD") {
          const pass = document.getElementById("rpassword");
          if (pass?.parentElement) {
            pass.parentElement.style.border = "1px solid red";
          }
          setTimeout(() => {
            if (pass?.parentElement) {
              pass.parentElement.style.border = "2px solid #afafaf";
            }
          }, 5000);
        }
      }
    },
  },
});
</script>
<style lang="scss" scoped>
.form {
  width: 360px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
}
/* .form__login {
  display: flex;
  flex-direction: column;
} */
.form__register {
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
  margin-top: 20px;
}

/* .form__recovery--link {
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: bold;
  .link__recovery {
    text-align: center;
    color: #6d71f9;
    text-decoration: none;
  } */
/* .link__recovery:hover {
    text-decoration: underline;
  } */

.form__input--first {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
/* .form__inpunt--second {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
} */
@media (max-width: 420px) {
  .form {
    width: 92%;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
