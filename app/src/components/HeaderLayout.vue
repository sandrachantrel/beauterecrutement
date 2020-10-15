<template>
  <header class="header">
    <div class="logo-container">
       <img
        class="logo-header"
        src="@/assets/logo_couleur.jpg"
        alt="Logo Beauté Recrutement"
      />
    </div>
    <MenuLayout/>
    <!-- J'utilise isConnected qui est disponible dans mon code grâce à mapGetters  -->
    <!-- J'affiche l'élément user selon la condition connecté-->
    <div class="user" v-if="isConnected">
      <img class="avatar" src="@/assets/avatar.png" />
      <!-- J'ajoute un écouteur d'événement de type click -->
      <span class="username" v-on:click="toggleUserMenu()">Bonjour {{ user.displayName }}</span>
    </div>
  </header>
</template>

<script>
import MenuLayout from "@/components/MenuLayout.vue";

import { mapGetters } from "vuex";

export default {
  name: "HeaderLayout",

  components: {
    MenuLayout
  },
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
@import "@/scss/form.scss";
@import "@/scss/menu.scss";

 
  .user {
    text-align: center;
    .username {
      padding-right: 0.5rem;
      text-transform: uppercase;
      color: $color-primary;
    }
    .avatar {
      vertical-align: middle;
      display: inline-block;
      height: 2rem;
      width: 2rem;
      border-radius: 50px;
      margin: 2rem;
    }
  }

</style>
