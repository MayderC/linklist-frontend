<template>
  <a class="link__wrapper" :href="link.link" target="_blank">
    <div
      class="link__link"
      :style="{
        backgroundColor: link.backgroundColor,
        color: colorText,
      }"
    >
      {{ link.name }}
    </div>
  </a>
</template>

<script lang="ts">
import { calculateTextColor } from "@/helpers/suggestedColors";
import { defineComponent, PropType } from "vue";

interface PropLink {
  name: string;
  link?: string;
  backgroundColor: string;
}

export default defineComponent({
  name: "LUserLink",
  data() {
    return {
      colorText: "",
    };
  },
  mounted() {
    this.colorText = calculateTextColor(this.link.backgroundColor);
  },
  watch: {
    "link.backgroundColor"() {
      this.colorText = calculateTextColor(this.link.backgroundColor);
    },
  },

  props: {
    link: {
      type: Object as PropType<PropLink>,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.link__link {
  display: flex;
  justify-content: center;
  border-radius: 10px;
  width: 300px;
  padding: 0.5em 0;

  font-weight: bold;
  font-size: 1rem;
  transition: 0.3s;
}

.link__wrapper {
  text-decoration: none;
  color: #303030;
}

.link__wrapper:hover .link__link {
  transform: scale(1.1);
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}
</style>
