<template>
  <section class="form">
    <form class="form__links">
      <l-input
        input="text"
        id="link_input"
        :value="link"
        @update:input="link = $event"
        pholder="Link"
      ></l-input>
      <p class="link__error" v-if="link_error">
        El link tiene que tener más de 12 caracteres
      </p>
      <l-input
        input="text"
        :value="name"
        id="name_input"
        @update:input="name = $event"
        @click="() => (name = getDomainName())"
        pholder="Name"
      ></l-input>
      <l-color-suggested
        :name="name"
        :selected-color="selectedColor"
        @update:color="(args) => (selectedColor = args)"
      ></l-color-suggested>
      <div class="form__buttom-container">
        <l-buttom
          @click="saveLink"
          @pick:color="(args) => (backgroundColor = args)"
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
import { calculateTextColor, recomendedColor } from "@/helpers/suggestedColors";
import LColorSuggested from "@/components/colorSuggested/LColorSuggested.vue";

export default defineComponent({
  name: "LLinksForm",
  data() {
    return {
      link: "",
      name: "",
      backgroundColor: "",
      link_error: false,
      text_buttom: "Insert",
      selectedColor: "",
      textColor: "",
    };
  },

  computed: {
    ...mapState(["token"]),
  },
  components: { LInput, LButtom, LColorSuggested },
  methods: {
    ...mapMutations(["pushLink"]),

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    updatmeMessagesTimeOut(obj: any, time = 2500) {
      setTimeout(() => {
        Object.assign(this, obj);
      }, time);
    },
    isValidURL() {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const urlPattern =
        /^https:\/\/[a-zA-Z0-9]+([-_.]{1}[a-zA-Z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;

      return urlPattern.test(this.link);
    },
    getDomainName() {
      if (!this.isValidURL()) return "";
      const urlObject = new URL(this.link);
      const domainParts = urlObject.hostname.replace("www.", "").split(".")[0];
      const finalName = domainParts[0].toUpperCase() + domainParts.slice(1);
      const defaulsNames = this.isDefaultName(urlObject.hostname);
      const result = defaulsNames ? defaulsNames : finalName;
      this.selectedColor = recomendedColor(result);
      this.textColor = calculateTextColor(this.selectedColor);
      return result;
    },
    isDefaultName(key: string) {
      const names: { [key: string]: string } = {
        "t.me": "Telegram",
      };
      return names[key] || "";
    },
    parseLink(link: string) {
      return link;
    },
    saveLink() {
      if (!this.isValidURL()) {
        this.link_error = true;
        this.updatmeMessagesTimeOut({ link_error: false }, 1100);
        return;
      }
      const request = {
        name: this.name,
        link: this.link,
        backgroundColor: this.selectedColor,
      };
      this.text_buttom = "Saving...";
      inserLink(request, this.token).then((resp) => {
        if (resp.link) {
          this.text_buttom = "Saved";
          this.updatmeMessagesTimeOut({ text_buttom: "Insert" }, 400);
          this.name = "";
          this.link = "";
          this.pushLink(resp.link);
        } else {
          this.link_error = true;
          this.updatmeMessagesTimeOut({ link_error: false }, 1100);
          this.updatmeMessagesTimeOut({ text_buttom: "Insertar" }, 400);
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
