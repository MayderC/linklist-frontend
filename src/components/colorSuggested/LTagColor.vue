<template>
  <div
    class="colors"
    :style="{
      background: props.color,
      color: color,
    }"
  ></div>
</template>

<script setup lang="ts">
import { calculateTextColor } from "@/helpers/suggestedColors";
import { defineProps } from "vue";
type prop = {
  color: string;
};
const props = defineProps<prop>();
const color = calculateTextColor(props.color);
</script>

<style scoped>
.colors {
  width: 50px;
  height: 20px;
  border-radius: 5px;
  box-shadow: rgba(76, 76, 76, 0.609) 2px 2px 15px;
  cursor: pointer;
}
</style>
