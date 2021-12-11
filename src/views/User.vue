<template>
  <section v-if="links.length > 0" class="list">
    <l-user-link v-for="l in links" :link="l" :key="l.id"></l-user-link>
  </section>
  <section v-else class="list text">
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
      userLinks: [] as any,
    };
  },
  components: { LUserLink },
  computed: {
    ...mapState(["links", "isLogin"]),
  },
  created() {
    if (!this.isLogin) {
      const { user } = this.$route.params;
      console.log(user);
      getUserLinks(user).then((res) => {
        if (res.links) {
          this.userLinks = res.links;
          console.log(this.userLinks);
        }
      });
    }
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
