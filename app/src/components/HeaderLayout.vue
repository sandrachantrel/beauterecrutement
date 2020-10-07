<template>
    <header class="header">
        <section class="header-elements">
        <img class="logo-header" src="@/assets/cover_facebook.jpg" alt="Logo Beauté Recrutement">
        <nav class="menu">
            <ul class="menu-list">
                <li class="menu-link"><a class="links" href="">Accueil</a></li>
                <li class="menu-link"><a class="links" href="">Offres</a></li>
                <li class="menu-link"><a class="links" href="">Tarifs</a></li>
                <li class="menu-link"><a class="links" href="">Contact</a></li>
                <li class="menu-link"><a class="links" href="">Espace Recruteurs</a></li>
            </ul>
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
@import '@/scss/colors.scss';

.header {

    // Logo

    .logo-header 
    {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }

    // Menu 

    .menu {
        text-align: center;
    }
    .menu-list {
        list-style-type: none;
        display: flex;
        justify-content: center;
        margin: 0;
        padding: 0;

    }
    .menu-link {
        padding: 1rem;
    }
    .links {
        text-decoration: none;
        text-transform: uppercase;
        color: $color-primary;
        padding: 0.2rem;
        font-size: 120%;
        font-family: "Montserrat Bold" , Arial;
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
}

</style>