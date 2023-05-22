<template>
  <div class="tag">
    <a href="" target="_blank">
      <p>{{ link.name }}</p>
    </a>
    <div class="btn" @click="handleDelete">
      <img src="../../assets/img/borrar.png" alt="" srcset="" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { deleteLink } from "@/api/crud";
import { mapState } from "vuex";

export default defineComponent({
  name: "LTagLinkName",
  data() {
    return {
      flagDelete: false,
    };
  },
  props: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    link: {} as any,
  },
  computed: {
    ...mapState(["token"]),
  },
  methods: {
    handleDelete(e: Event) {
      console.log(e.stopPropagation());
      this.flagDelete = true;
      deleteLink(this.token, this.link._id).then((res) => {
        this.$emit("delete:link", res.link);
      });
    },
    isDelete(e: Event) {
      if (this.flagDelete) e.preventDefault();
    },
  },
});
</script>

<style lang="scss" scoped>
.tag {
  display: flex;
  padding: 0.3em 2.5em;
  border-radius: 10px;
  background-color: #fff;
  position: relative;
  .btn {
    cursor: pointer;
    display: flex;
    align-items: center;
    position: absolute;
    right: 10px;
    top: -12px;
    img {
      width: 20px;
      transition: 0.3s;
    }
  }

  .btn:hover img {
    transform: scale(1.2);
    transition: 0.3s;
    background-color: rgb(255, 182, 182);
    border-radius: 50%;
  }
}
a {
  display: block;
  width: 100%;
  text-decoration: none;
  color: #2b2d62;
  justify-content: center;
}

p {
  font-weight: bold;
  text-align: center;
}

.tag {
  width: 360px;
}

@media (min-width: 800px) {
  .tag:hover img {
    display: block;
  }

  img {
    display: none;
  }
}
</style>
