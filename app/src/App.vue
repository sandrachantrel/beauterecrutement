<template>
  <div id="app">
    <HeaderLayout />
    <HomeLayout />
    <FooterLayout />
  </div>
</template>

<script>
import HeaderLayout from "./components/HeaderLayout";
import HomeLayout from "./components/HomeLayout";
import FooterLayout from "./components/FooterLayout";

export default {
  name: "App",
  components: {
    HeaderLayout,
    HomeLayout,
    FooterLayout
  }
};
</script>

<style lang="scss">

</style>
