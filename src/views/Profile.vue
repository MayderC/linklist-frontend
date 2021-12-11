<template>
  <h1>Hola</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";

export default defineComponent({
  name: "Profile",
  computed: {
    ...mapState(["links"]),
  },
});
</script>
