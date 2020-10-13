<template>
  <main class="main">
    <section class="content">
      <span class="first-part">Et si le recrutement commençait ici?</span>
      <span class="second-part"
        >Logiciel RH pour les entreprises du Bien-Être et de la Beauté</span
      >
    </section>

    <div class="button-list">
      <RouterLink
        v-if="!isConnected"
        exact
        :style="{ cursor: 'pointer' }"
        v-bind:to="{ name: 'Login' }"
      >
        Connexion</RouterLink
      >
      <RouterLink
        v-if="!isConnected"
        exact
        :style="{ cursor: 'pointer' }"
        v-bind:to="{ name: 'Demo' }"
      >
        Demande de démo</RouterLink
      >
    </div>

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

// Main

.main {
  display: flex;
  flex-direction: column;
  align-items: center;

  // Slogan

  .content {
    display: flex;
    flex-direction: column;
    font-size: 130%;
    text-align: center;
    margin: 1.5rem;
  }
  .first-part,
  .second-part {
    padding: 0.5rem;
  }

  // Boutons

  .button-list {
    font-size: 100%;
    font-family: "Montserrat Bold", Arial;
    list-style-type: none;
    display: flex;
    padding: 0;
  }

  buttonconnexion {
    text-decoration: none;
    color: $color-text-secondary;
    background-color: $color-button-connexion;
    border: none;
    border-radius: 0.2rem;
    padding: 0.5rem;
    margin: 0.5rem;
  }
  buttondemo {
    text-decoration: none;
    color: $color-text-secondary;
    background-color: $color-button-demo;
    border: none;
    border-radius: 0.2rem;
    padding: 0.5rem;
    margin: 0.5rem;
  }

  // Contenu

  .presentation {
    margin: 2rem;
  }
}
</style>
