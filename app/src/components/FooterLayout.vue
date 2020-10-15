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
      <div class="user" v-if="isConnected">
        <a v-on:click.prevent="disconnect">Déconnexion</a>
      </div>

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
      <!-- popin newsletter -->
      <!--
      <div class="ppshader">
        <div class="popin">
          <p class="popin__title">Restons en contact !</p>
          <form action="brNewsletter.php" method="post">
            <div class="popin__input">
              <label for="email">Mon email</label> <input type="email" name="email" id="email">
            </div>
            <div class="popin__input">
              <label for="optin_partners">Je m'inscris aux newsletters de mes partenaires</label> <input type="checkbox" name="optin" id="optin">
            </div>
            <input type="hidden" name="brNewsletter_popin_submit" value="1">
            <input type="submit" value="Je ne suis pas interessé(e)">
            <input type="submit" name="optin_general" value="Je m'inscrit à la newsletter">
          </form>
        </div>
      </div>
      -->
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
   methods: {
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

  // popin

  .ppshader {
  position: fixed;
  top:0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.44);
  z-index: 99990;
  display: flex;
  justify-content: center;
  align-items: center;
}

.popin {
  background-color: #6a9ee2;
  border: 1px solid white;
  padding: 3em;
}

.popin__title {
  margin-bottom: 1.5em;
  text-align: center;
}

.popin__input {
  margin-bottom: 0.75em;
}
}
</style>
