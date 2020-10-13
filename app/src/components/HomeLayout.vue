<template>
  <main class="main">

    <div class="button-list">
      <RouterLink
        class="button button-connexion"
        v-if="!isConnected"
        v-bind:to="{ name: 'Login' }"
      >
        Connexion</RouterLink
      >
      <RouterLink
        class="button button-demonstration"
        v-if="!isConnected"
        v-bind:to="{ name: 'Demo' }"
      >
        Demande de démo</RouterLink
      >
    </div>

    <section class="content">
      <span class="first-part">Et si le recrutement commençait ici?</span>
      <span class="second-part">Logiciel RH pour les entreprises du Bien-Être et de la Beauté</span>
    </section>

    <section class="presentation">
      <p class="presentation-content">
        <strong>Beauté Recrutement</strong> est un logiciel de gestion pour vos
        recrutements. Simple et intuitif il vous permettra de gagner un temps
        precieux
      </p>
    </section>

    <section class="features">
      <!-- Element Bootstrap card pour presentation des fonctionnalitées  -->
      <div class="card">
        <div class="card-header">
          Les fonctionnalitées du logiciel
        </div>
        <div class="card-body">
          <h5 class="card-title">Simple</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
        </div>
        <div class="card-body">
          <h5 class="card-title">Rapide</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
        </div>
        <div class="card-body">
          <h5 class="card-title">Tarif flexible</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "FotterLayout",
  computed: {
    ...mapGetters([
      "isConnected"
    ])
  },
};
</script>

<style lang="scss">
@import "@/scss/colors.scss";
@import "@/scss/form.scss";

.main {
  margin: 2rem;

  .button-list {
    margin: 1rem;
  }

  .button {
    text-decoration: none;
    color: $color-text-secondary;
    border: none;
    border-radius: 0.2rem;
    padding: 0.5rem;
    margin: 0.5rem;
    cursor: pointer;
  }

  .button-connexion {
    background-color: $color-button-connexion;
  }

  .button-demonstration {
    background-color: $color-button-demo;
  }

  a {
    margin: 1rem;
  }

  .content, .presentation {
    margin: 1rem;
  }
}
</style>
