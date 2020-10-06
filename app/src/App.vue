<template>
  <div id="app">
    <HeaderLayout />
  </div>
</template>

<script>
import HeaderLayout from "./components/HeaderLayout";

export default {
  name: "App",
  components: {
    HeaderLayout
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
