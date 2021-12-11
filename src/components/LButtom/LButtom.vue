<template>
  <span>{{ text }}</span>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LButtom",
  props: {
    text: { type: String, default: "" },
  },
});
</script>

<style lang="scss" scoped>
span {
  font-size: 16px;
  font-weight: bold;
  background-color: #6d71f9;
  padding: 0.4em 1.5em;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.4s;
  color: #fff;
  text-align: center;
  white-space: nowrap;
}

span:hover {
  background-color: #474bb9;
  transition: 0.4s;
}
</style>
