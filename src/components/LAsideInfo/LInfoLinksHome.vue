<template>
  <div>
    <p class="hi_there">!Hello¡</p>
    <p class="name">{{ user }}</p>
    <div class="buttom__live">
      <l-buttom
        class="live__preview"
        @click="() => this.$router.push(`/${user}`)"
        text="Vista previa"
      ></l-buttom>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LButtom from "../LButtom/LButtom.vue";
import { mapState } from "vuex";

export default defineComponent({
  name: "LInfoLinksHome",
  components: { LButtom },
  data() {
    return {
      links: [],
      link: "",
    };
  },
  computed: {
    ...mapState(["user"]),
  },
});
</script>

<style lang="scss" scoped>
.buttom__live {
  margin-top: 10px;
}
.hi_there {
  color: #fff;
  font-size: 2.2rem;
  font-weight: bold;
}
.name {
  color: #6d71f9;
  font-size: 2.2rem;
  font-weight: bold;
}
</style>
