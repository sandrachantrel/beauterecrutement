<template>
  <header class="header">
    <div class="logo-container">
       <img
        class="logo-header"
        src="@/assets/logo_couleur.jpg"
        alt="Logo Beauté Recrutement"
      />
    </div>
    <!-- J'utilise isConnected qui est disponible dans mon code grâce à mapGetters  -->
    <div class="nav-container" v-if="!isConnected">
      <div class="user-actions" v-show="showUserMenu">
        <a v-bind:to="{ name: 'Home' }">Accueil</a>
        <a v-bind:to="{ name: 'Offres' }">Offres</a>
        <a v-bind:to="{ name: 'Login' }">Espace Recruteur</a>
      </div>
    </div>
    <!-- J'affiche l'élément user selon la condition connecté-->
    <div class="user" v-if="isConnected">
      <!-- J'ajoute un écouteur d'événement de type click -->
      <span class="username" v-on:click="toggleUserMenu()">{{ user.displayName }}</span>
      <img class="avatar" src="" />
      <!-- Avec, v-show, l'élément sera dans le DOM mais soit en display: none, soit en display: block selon la condition -->
      <div class="user-actions" v-show="showUserMenu">
        <a v-bind:to="{ name: 'Home' }">Accueil</a>
        <a v-bind:to="{ name: 'Offres' }">Offres</a>
        <a v-on:click.prevent="disconnect">Déconnexion</a>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "HeaderLayout",
  // Je stock des données avec la méthode data qui doit retourner un objet
  data() {
    return {
      showUserMenu: false
      };
  },
  computed: {
    // J'utilise mapGetters pour extraire/recuperer le getter isConnect par exemple et l'utiliser comme un computed afin de l'avoir à disposition dans le code de mon template 
    ...mapGetters([
      "isConnected",
      "user"
    ])
  },
  // J'ajoute des traitements à mes composants
  methods: {
    toggleUserMenu() {
      //On modifie la valeur de la data showUserMenu
      this.showUserMenu = !this.showUserMenu;
    },
    disconnect() {
      // dispatch permet d'executer une action en dehors du store 
      //J'execute l'action disconnect du store
      this.$store.dispatch("disconnect");
    }
  }
};
</script>

<style lang="scss">
@import "@/scss/colors.scss";

.header {
  // Logo

  .logo-header {
    width: 50%;
    height: 50%;
    margin: 0;
    padding: 0;
  }

  // Menu

  .menu {
    display: flex;
    justify-content: center;
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    color: $color-primary;
    font-size: 120%;
    font-family: "Montserrat Bold", Arial;
    padding: 0.2rem;
    margin: 1rem;
  }
  a:hover {
    background-color: rgba($color-primary, 0.5);
    color: $color-text-primary;
    transition: 0.4s;
    border-radius: 0.5rem;
  }

  @media only screen and (max-width: 767px) {
    .menu {
      flex-direction: column;
      text-align: center;
      margin: 0rem;
    }
  }
}
</style>
