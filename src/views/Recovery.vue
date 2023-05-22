<template>
  <main>
    <LRecoveryForm></LRecoveryForm>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LRecoveryForm from "@/components/form/LRecoveryForm.vue";

export default defineComponent({
  name: "Recovery",
  components: { LRecoveryForm },
});
</script>
<style scoped>
main {
  min-height: calc(80vh - 60px);
  display: grid;
  place-items: center;
}
</style>
