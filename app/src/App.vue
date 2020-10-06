<template>
  <div id="app">
    <HeaderLayout />
    <FooterLayout />
  </div>
</template>

<script>
import HeaderLayout from "./components/HeaderLayout";
import FooterLayout from "./components/FooterLayout";

export default {
  name: "App",
  components: {
    HeaderLayout,
    FooterLayout
  }
};
</script>

<style lang="scss">

</style>
