<template>
  <footer>
    <div class="footer">
      <RouterLink v-bind:to="{name: 'Home' }" >
        <img
          class="logo-footer"
          src="@/assets/logo_facebook.jpg"
          alt="Logo Beauté Recrutement"
        />
      </RouterLink>
      <RouterLink tag="aRouter" 
      exact :style="{ cursor: 'pointer'}" 
      v-bind:to="{name: 'Home' }">
      Accueil
      </RouterLink>
      <RouterLink tag="aRouter" 
      exact :style="{ cursor: 'pointer'}" 
      v-bind:to="{name: 'Offres' }">
      Offres
      </RouterLink>

      <RouterLink tag="buttonconnexion" 
      exact :style="{ cursor: 'pointer'}" 
      v-bind:to="{name: 'Login' }">
      Connexion</RouterLink>
      <RouterLink tag="buttondemo" 
      exact :style="{ cursor: 'pointer'}" 
      v-bind:to="{name: 'Demo' }">
      Demande de démo</RouterLink>

      <div class="social">
        <ul class="social-list">
          <li class="social-item">
            <a class="social-link" href="https://fr.linkedin.com/company/beaut%C3%A9-recrutement">
              <img
                class="social-icon"
                src="@/assets/linkedin-icon.png"
                alt="LinkedIn Beauté Recrutement"
              />
            </a>
          </li>
          <li class="social-item">
            <a class="social-link" href="https://www.facebook.com/beauterecrutement/">
              <img
                class="social-icon"
                src="@/assets/facebook-icon.png"
                alt="Facebook Beauté Recrutement"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FotterLayout",
  data() {
    return {
      menuItems: ["Accueil", "Tarifs", "Contact"]
    };
  }
};
</script>

<style lang="scss">
@import "@/scss/colors.scss";

// Footer

.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem;

  // Logo

  .logo-footer {
    width: 50px;
    height: 50px;
    border-radius: 3rem;
    padding:1rem;
  }

  // Menu

  aRouter {
    text-decoration: none;
    text-transform: uppercase;
    color: $color-primary;
    padding: 0.2rem;
    margin: 0.2rem;
    font-size: 90%;
    font-family: "Montserrat Bold", Arial;
  }
  aRouter:hover {
    background-color: rgba($color-primary, 0.5);
    color: $color-text-primary;
    transition: 0.4s;
    border-radius: 0.5rem;
  }

  @media only screen and (max-width: 767px) {
    .menu-list {
      height: 230px;
      flex-direction: column;
      text-align: center;
    }
  }

  // Boutons

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

  // Social

  .social-list {
    list-style-type: none;
    display: flex;
    padding: 0;
  }

  .social-icon {
    width: 30px;
    height: 30px;
    margin: 0.5rem;
  }
}
</style>
