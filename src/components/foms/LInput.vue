<template>
  <div class="form__container">
    <label :for="input"></label>
    <input
      :type="input"
      :name="name"
      :id="id"
      @input="updateInput"
      @focusin="focus"
      @focusout="focusRemove"
      :placeholder="pholder"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LInput",
  props: {
    input: { type: String, default: "" },
    pholder: { type: String, default: "" },
    id: { type: String },
    name: { type: String },
  },
  methods: {
    updateInput(e: any) {
      this.$emit("update:input", e.target.value);
    },
    focus(event: any) {
      event.target.parentNode.classList.add("focus-inputs");
    },
    focusRemove(event: any) {
      event.target.parentNode.classList.remove("focus-inputs");
    },
  },
});
</script>

<style lang="scss" scoped>
.form__container {
  border: 2px solid #afafaf;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  border-radius: 10px;
  background-color: #fff;
}
.form__container input {
  border: 0;
  outline: 0;
  width: 100%;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: bold;
}
.focus-inputs {
  border: 2px solid #6d71f9;
}
</style>
