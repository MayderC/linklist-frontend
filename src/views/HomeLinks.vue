<template>
  <main class="hlcontainer">
    <section class="hlcontainer__item item--info">
      <l-info-links-home></l-info-links-home>
    </section>

    <section class="hlcontainer__item item--form">
      <l-links-form></l-links-form>
    </section>
    <section class="hlcontainer__item item--links">
      <l-home-footer></l-home-footer>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LInfoLinksHome from "@/components/LAsideInfo/LInfoLinksHome.vue";
import LLinksForm from "@/components/form/LLinksForm/LLinksForm.vue";
import LHomeFooter from "@/components/LHomeFooter/LHomeFooter.vue";
import { mapState } from "vuex";

export default defineComponent({
  name: "HomeLinks",
  components: { LInfoLinksHome, LLinksForm, LHomeFooter },
  computed: {
    ...mapState(["isLogin"]),
  },
  mounted() {
    if (!this.isLogin) {
      this.$router.push("/");
    }
  },
});
</script>
<style lang="scss" scoped>
.hlcontainer {
  min-height: calc(100vh - 60px);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "info form"
    "links links";
}
.item--info {
  grid-area: info;
  justify-content: center;
}
.item--form {
  grid-area: form;
  justify-content: flex-start;
}
.item--form,
.item--info {
  padding: 80px;
  display: flex;
  align-items: center;
}
.item--links {
  grid-area: links;
  padding: 50px 0;
}

@media (max-width: 911px) {
  .hlcontainer {
    grid-template-areas:
      "info info"
      "form form"
      "links links";
  }

  .item--form {
    justify-content: center;
  }

  .item--form,
  .item--info {
    padding: 20px;
  }
}
</style>
