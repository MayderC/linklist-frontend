<template>
  <button :disabled="disabledB" @click.prevent>{{ text }}</button>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LButtom",
  props: {
    text: { type: String, default: "" },
    disabledB: { type: Boolean, default: false },
  },
});
</script>

<style lang="scss" scoped>
button {
  font-size: 16px;
  font-weight: bolder;
  background-color: #6d71f9;
  padding: 0.5em 1.7em;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.4s;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  outline: none;
  border: none;
  width: 100%;
}

button:hover {
  background-color: #474bb9;
  transition: 0.4s;
}
</style>
