<template>
  <footer>
    <div class="footer">
      <img class="logo" src="@/assets/logo_facebook.jpg" alt="Logo Beauté Recrutement" />
      <div class="menu">
        <ul class="menu__list">
          <li class="menu__item">
            <!-- TODO LIENS -->
            <a class="menu__link" href>Accueil</a>
          </li>
          <li class="menu__item">
            <a class="menu__link" href>Tarifs</a>
          </li>
          <li class="menu__item">
            <a class="menu__link" href>Contact</a>
          </li>
        </ul>
      </div>
      <div class="button">
        <ul class="button__list">
          <!-- TODO LIENS-->
          <li class="button__item">
            <a
              class="button__link-connexion btn btn-primary"
              href="../integration/login.html"
              role="button"
            >CONNEXION</a>
          </li>
          <li class="button__item">
            <a
              class="button__link-demo btn btn-info"
              href="TODO lien vers la page de demonstration"
              role="button"
            >DEMANDER UNE DEMO</a>
          </li>
        </ul>
      </div>
      <div class="social">
        <ul class="social__list">
          <li class="social__item">
            <a class="social__link" href>
              <img
                class="social__icon"
                src="@/assets/linkedin-icon.png"
                alt="LinkedIn Beauté Recrutement"
              />
            </a>
          </li>
          <li class="social__item">
            <a class="social__link" href>
              <img
                class="social__icon"
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
    name: "FotterLayout"
};
</script>

<style lang="scss">
@import '@/scss/colors.scss';

// Composants Footer 

.footer
{
    &.menu 
    {
    display: flex;
    flex: 
    {
        direction: row;
        wrap: wrap;
    };
    justify-content: flex-end;

    &__link 
    {
        color: $color-text-primary;
        text-decoration: none;
        text-transform: uppercase;
    }
    }
}
.logo {
    width: 80px;
    height: 80px;
    border-radius: 3rem;
}
</style>