<template>
  <div id="main">
    <Nav :itm="nav"></Nav>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>
<script>
import Nav from "@/components/Nav.vue";

export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    Nav
  }
};
</script>

<style lang="scss">
@import "@/style/main.scss";
</style> 