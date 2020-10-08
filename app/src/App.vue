<template>
  <div id="app">
    <HeaderLayout />
    <OfferList />
    <FooterLayout />
  </div>
</template>

<script>
import HeaderLayout from "./components/HeaderLayout";
import OfferList from "./components/OfferList";
import FooterLayout from "./components/FooterLayout";

export default {
  name: "App",
  components: {
    HeaderLayout,
    OfferList,
    FooterLayout
  }
};
</script>

<style lang="scss">

</style>
