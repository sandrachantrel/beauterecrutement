<template>
  <div id="app">
    <HeaderLayout />
     <main class="main-container">
    <!-- Je définis l'emplacement de l'affichage des views gérées par le router de vue.js -->
    <RouterView />
    </main>
    <FooterLayout />
  </div>
</template>

<script>
import HeaderLayout from "./components/HeaderLayout.vue";
import FooterLayout from "@/components/FooterLayout.vue";

export default {
  // Nom du composant
  name: "App",
  // Liste des composants enfants qu'on veut utiliser dans le template
  components: {
    HeaderLayout,
    FooterLayout
  },
};
</script>

<style lang="scss">
@import "@/scss/reset.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
