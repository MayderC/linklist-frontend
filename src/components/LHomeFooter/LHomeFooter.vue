<template>
  <section class="links">
    <div class="links__container">
      <l-tag-link-name
        v-for="l in links"
        :key="l.id"
        :link="l"
        @delete:link="updateLinks"
      ></l-tag-link-name>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LTagLinkName from "./LTagLinkName.vue";
import { mapMutations, mapState } from "vuex";

export default defineComponent({
  name: "LHomeFooter",
  components: { LTagLinkName },
  computed: {
    ...mapState(["links"]),
  },
  methods: {
    ...mapMutations(["setLinks"]),

    updateLinks(value: any) {
      const newArr = this.links.filter((l: any) => l._id != value._id);
      this.setLinks(newArr);
    },
  },
});
</script>

<style lang="scss" scoped>
.links {
  color: #fff;
}
.links__container {
  // width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-between;
  gap: 50px;
}
.links {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}
</style>
