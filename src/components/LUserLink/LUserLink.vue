<template>
  <a class="link__wrapper" :href="link.link" target="_blank">
    <div class="link__link">
      {{ link.name }}
    </div>
  </a>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LUserLink",
  props: {
    link: {
      type: Object,
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
  background-color: #fff;
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
