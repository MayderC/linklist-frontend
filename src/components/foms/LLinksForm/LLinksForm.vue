<template>
  <section class="form">
    <form class="form__links">
      <l-input
        input="text"
        id="link_input"
        @update:input="(argument) => setLink(argument, 'link')"
        pholder="Ingresa tu link"
      ></l-input>
      <l-input
        input="text"
        id="name_input"
        @update:input="(argument) => setLink(argument, 'email')"
        pholder="Nombre de la red social"
      ></l-input>
      <div class="form__buttom-container">
        <l-buttom
          @click="saveLink"
          class="form__links--buttom"
          text="Insertar"
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
    };
  },
  computed: {
    ...mapState(["token"]),
  },
  components: { LInput, LButtom },
  methods: {
    ...mapMutations(["pushLink"]),

    setLink(value: string, input: string) {
      if (input === "link") {
        this.link = value;
      } else {
        this.name = value;
      }
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
        this.pushLink(resp.link);
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
