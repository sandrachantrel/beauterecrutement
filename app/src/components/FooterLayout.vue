<template>
  <footer>
    <div class="footer">
      <img
        class="logo-footer"
        src="@/assets/logo_facebook.jpg"
        alt="Logo Beauté Recrutement"
      />
      <div class="menu">
        <ul class="menu-list">
          <li class="menu-link">
            <!-- TODO LIENS -->
            <a class="links" href>Accueil</a>
          </li>
          <li class="menu-link">
            <a class="links" href>Tarifs</a>
          </li>
          <li class="menu-link">
            <a class="links" href>Contact</a>
          </li>
        </ul>
      </div>
      <div class="button">
        <ul class="button-list">
          <!-- TODO LIENS-->
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
              href="TODO lien vers la page de demonstration"
              role="button"
              >DEMANDER UNE DEMO</a
            >
          </li>
        </ul>
      </div>
      <div class="social">
        <ul class="social-list">
          <li class="social-item">
            <a class="social-link" href>
              <img
                class="social-icon"
                src="@/assets/linkedin-icon.png"
                alt="LinkedIn Beauté Recrutement"
              />
            </a>
          </li>
          <li class="social-item">
            <a class="social-link" href>
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

  // Logo

  .logo-footer {
    width: 70px;
    height: 70px;
    border-radius: 3rem;
  }

  // Menu

  .menu-list {
    list-style-type: none;
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
  }
  .menu-link {
    padding: 3px;
  }
  .links {
    text-decoration: none;
    text-transform: uppercase;
    color: $color-primary;
    padding: 0.1rem;
    font-size: 90%;
    font-family: "Montserrat Bold", Arial;
  }
  .links:hover {
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
    margin: 0.5rem;
  }

  .button-link-connexion {
    background-color: rgb(0, 81, 255);
  }

  .button-link-demo {
    background-color: rgba(4, 142, 160, 0.61);
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
