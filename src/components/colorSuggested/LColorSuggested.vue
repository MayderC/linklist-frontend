<template>
  <div>
    <div class="flex">
      <LTagColor
        v-for="item in suggestedList"
        :color="item"
        :key="item"
        @click="handleSetColor(item)"
      ></LTagColor>
    </div>
    <div class="flex preview">
      <LUserLink
        v-if="name"
        :link="{ backgroundColor: selectedColor, name }"
      ></LUserLink>
    </div>
    <div>
      <label for="">Pick up your favorite color </label>
      <input @input="inputColor($event)" type="color" name="" id="" />
    </div>
  </div>
</template>

<script lang="ts">
import { colorsSuggested } from "@/helpers/suggestedColors";
import { defineComponent } from "vue";
import LUserLink from "../LUserLink/LUserLink.vue";
import LTagColor from "./LTagColor.vue";

export default defineComponent({
  data() {
    return {
      recomendedColorValue: "",
      suggestedList: colorsSuggested(),
    };
  },
  props: ["name", "selectedColor"],
  methods: {
    handleSetColor(color: string) {
      this.$emit("update:color", color);
    },
    inputColor(e: Event) {
      this.$emit("update:color", (e.target as HTMLInputElement).value!);
    },
  },
  components: { LTagColor, LUserLink },
});
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
  gap: 5px;
}

.preview {
  margin: 20px 0;
}
</style>
