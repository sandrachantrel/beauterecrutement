<template>
  <main class="main">
    <section class="content">
      <span class="first-part">Et si le recrutement commençait ici?</span>
      <span class="second-part"
        >Logiciel RH pour les entreprises du Bien-Être et de la Beauté</span
      >
    </section>
    <section class="button">
      <!-- j'utilise la balise a que je stylise en css pour ressembler à un boutton avec "appearance: button" -->
      <!-- Utilisation de bootstrap pour le visuel des boutons -->
      <!-- TODO LIENS-->
      <ul class="button-list">
        <li class="button-item">
          <a
            class="button-link-connexion btn btn-primary"
            href="http://localhost:8080/#/connexion"
            role="button"
            >CONNEXION</a
          >
        </li>
        <li class="button-item">
          <a
            class="button-link-demo btn btn-info"
            href="http://localhost:8080/#/demo"
            role="button"
            >DEMANDER UNE DEMO</a
          >
        </li>
      </ul>
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
export default {
  name: "FotterLayout"
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

  .button-link-connexion,
  .button-link-demo {
    text-decoration: none;
    color: $color-text-secondary;
    border-radius: 0.2rem;
    padding: 0.5rem;
    margin: 1rem;
  }

  .button-link-connexion {
    background-color: rgb(0, 81, 255);
  }

  .button-link-demo {
    background-color: rgba(4, 142, 160, 0.61);
  }

  // Contenu

  .presentation {
    margin: 2rem;
  }

  
}
</style>
