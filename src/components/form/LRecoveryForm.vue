<template>
  <section class="form">
    <form>
      <p>Se enviara un link a su correo para que restaurar su contraseña.</p>
      <div class="input">
        <LInput :disabledB="true" pholder="En desarrollo"></LInput>
      </div>
      <l-buttom
        @update:input="email = $event"
        class="btn"
        text="enviar"
      ></l-buttom>
    </form>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import LInput from "@/components/form/LInput.vue";
import LButtom from "@/components/LButtom/LButtom.vue";

export default defineComponent({
  name: "LRecoveryForm",
  components: { LButtom, LInput },
  data() {
    return {
      email: "",
    };
  },
});
</script>

<style>
.main {
  min-height: 100vh;
  display: grid;
  place-items: center;
}

.form {
  width: 360px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
}

.btn {
  display: block;
  margin-top: 20px;
}

.input {
  margin-top: 20px;
}

@media (max-width: 420px) {
  .form {
    width: 92%;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
