<template>
  <div>
    <a href="">
      <p>
        {{ link.name }}
      </p>
    </a>
    <span @click="deleteLInk"
      ><img src="../../assets/img/borrar.png" alt="" srcset=""
    /></span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { deleteLink } from "@/api/crud";
import { mapState } from "vuex";

export default defineComponent({
  name: "LTagLinkName",
  props: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    link: {} as any,
  },
  computed: {
    ...mapState(["token"]),
  },
  methods: {
    deleteLInk() {
      deleteLink(this.token, this.link._id).then((res) => {
        this.$emit("delete:link", res.link);
      });
    },
  },
});
</script>

<style lang="scss" scoped>
div {
  display: flex;

  span {
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: 10px;
    img {
      width: 20px;
      transition: 0.3s;
    }
  }

  span:hover img {
    transform: scale(1.2);
    transition: 0.3s;
    background-color: rgb(255, 182, 182);
    border-radius: 50%;
  }
}
a {
  text-decoration: none;
  color: #2b2d62;
  display: flex;
}

p {
  background-color: #fff;
  padding: 0.3em 2.5em;
  border-radius: 10px;
  font-weight: bold;
  display: flex;
  align-items: center;
}
</style>
