<template>
  <section class="form">
    <form class="form__links">
      <l-input
        input="text"
        id="link_input"
        :value="link"
        @update:input="link = $event"
        pholder="Ingresa tu link"
      ></l-input>
      <p class="link__error" v-if="link_error">
        El link tiene que tener más de 12 caracteres
      </p>
      <l-input
        input="text"
        :value="name"
        id="name_input"
        @update:input="name = $event"
        pholder="Nombre de la red social"
      ></l-input>
      <div class="form__buttom-container">
        <l-buttom
          @click="saveLink"
          class="form__links--buttom"
          :text="text_buttom"
        ></l-buttom>
      </div>
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LInput from "../LInput.vue";
import LButtom from "../../LButtom/LButtom.vue";
import { inserLink } from "@/api/crud";
import { mapState, mapMutations } from "vuex";

export default defineComponent({
  name: "LLinksForm",
  data() {
    return {
      link: "",
      name: "",
      link_error: false,
      text_buttom: "Insertar",
    };
  },

  computed: {
    ...mapState(["token"]),
  },
  components: { LInput, LButtom },
  methods: {
    ...mapMutations(["pushLink"]),

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    updatmeMessagesTimeOut(obj: any, time = 2500) {
      setTimeout(() => {
        Object.assign(this, obj);
      }, time);
    },

    parseLink(link: string) {
      return link;
    },
    saveLink() {
      const link = {
        name: this.name.toUpperCase(),
        link: this.link,
      };

      inserLink(link, this.token).then((resp) => {
        if (resp.link) {
          this.text_buttom = "Guardado";
          this.updatmeMessagesTimeOut({ text_buttom: "Insertar" }, 1000);
          this.name = "";
          this.link = "";
          this.pushLink(resp.link);
        } else {
          this.link_error = true;
          this.updatmeMessagesTimeOut({ link_error: false });
        }
      });
    },
  },
});
</script>

<style lang="scss" scoped>
.form {
  background-color: #fff;
  width: 450px;
  padding: 20px;
  border-radius: 10px;
}

.link__error {
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  color: rgb(255, 56, 56);
}

.form__links {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form__buttom-container {
  display: flex;

  .form__links--buttom {
    width: 100%;
  }
}
</style>
