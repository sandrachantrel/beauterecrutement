<template>
  <header class="header">
    <section class="header-elements">
      <img
        class="logo-header"
        src="@/assets/logo_couleur.jpg"
        alt="Logo Beauté Recrutement"
      />
      <nav class="menu">
        <RouterLink tag="a" v-bind:to="{name: 'Home' }">Accueil</RouterLink>
        <RouterLink tag="a" v-bind:to="{name: 'Offres' }">Offres</RouterLink>
        <RouterLink tag="a" v-bind:to="{name: 'Login' }">Espace Recruteur</RouterLink>
      </nav>
    </section>
  </header>
</template>

<script>
export default {
  name: "HeaderLayout"
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
