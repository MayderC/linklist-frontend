<template>
  <section class="info">
    <h2>Link List</h2>
    <p>Comparte tus principales redes sociales con tus amigos y comunidad</p>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LInfoHome",
});
</script>

<style lang="scss" scoped>
.info {
  width: 500px;
}

.info h2 {
  font-size: 2rem;
  color: #6d71f9;
}

.info p {
  color: #fff;
  font-size: 1.5rem;
}
</style>
