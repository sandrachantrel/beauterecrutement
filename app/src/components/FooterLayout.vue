<template>
  <footer class="footer">
    <nav class="nav">
      <!-- J'utilise le reverse routing du router de vue.js pour géérer des URLs -->
      <RouterLink 
        v-bind:to="{ name: 'Home' }">
        <img
          class="logo-footer"
          src="@/assets/logo_facebook.jpg"
          alt="Logo Beauté Recrutement"
        />
      </RouterLink>
      <RouterLink
        exact
        :style="{ cursor: 'pointer' }"
        v-bind:to="{ name: 'Home' }"
      >
        Accueil
      </RouterLink>
      <RouterLink
        exact
        :style="{ cursor: 'pointer' }"
        v-bind:to="{ name: 'Offres' }"
      >
        Offres
      </RouterLink>

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

      <div class="social">
        <ul class="social-list">
          <li class="social-item">
            <a
              class="social-link"
              href="https://fr.linkedin.com/company/beaut%C3%A9-recrutement"
            >
              <img
                class="social-icon"
                src="@/assets/linkedin-icon.png"
                alt="LinkedIn Beauté Recrutement"
              />
            </a>
          </li>
          <li class="social-item">
            <a
              class="social-link"
              href="https://www.facebook.com/beauterecrutement/"
            >
              <img
                class="social-icon"
                src="@/assets/facebook-icon.png"
                alt="Facebook Beauté Recrutement"
              />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </footer>
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

// Footer

.footer {
  
  margin-top: 2rem;

  .nav {
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: $mainBackgroundColor;
    box-shadow: 0px 0px 10px rgba(20, 20, 20, 0.2);

    @media only screen and (max-width: 767px) {
      height: 230px;
      flex-direction: column;
      text-align: center;
    }
  }

  // Logo

  

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
