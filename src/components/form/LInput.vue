<template>
  <div class="form__container">
    <label :for="input"></label>
    <input
      :type="input"
      :name="name"
      :id="id"
      @focusin="focus"
      @focusout="focusRemove"
      :placeholder="pholder"
      v-model="setModel"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LInput",
  props: {
    pholder: { type: String, default: "" },
    id: { type: String },
    name: { type: String },
    value: { type: String, default: "" },
    input: { type: String, default: "" },
  },

  computed: {
    setModel: {
      get() {
        return this.value;
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      set(val: any) {
        this.$emit("update:input", val);
      },
    },
  },

  methods: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    focus(event: any) {
      event.target.parentNode.classList.add("focus-inputs");
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
