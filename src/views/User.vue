<template>
  <section v-if="userLinks.length > 0" class="list">
    <l-user-link v-for="l in userLinks" :link="l" :key="l.id"></l-user-link>
  </section>
  <section v-if="isData" class="list text">
    <h2>No hay Links disponibles para este usuario</h2>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LUserLink from "@/components/LUserLink/LUserLink.vue";
import { mapState } from "vuex";
import { getUserLinks } from "../api/userInfo";

export default defineComponent({
  name: "User",
  data() {
    return {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      userLinks: [] as any,
      isData: false,
    };
  },
  components: { LUserLink },
  computed: {
    ...mapState(["links", "isLogin"]),
  },
  created() {
    const { user } = this.$route.params;
    getUserLinks(user).then((res) => {
      if (res.links) {
        this.userLinks = res.links;
        return;
      }
      this.isData = true;
    });
  },
});
</script>

<style lang="scss" scoped>
.list {
  min-height: calc(100vh - 60px);
  width: 80%;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.text {
  color: #fff;
}
</style>
