<template>
<nav class="main-menu">

    <div>
        <a class="logo" href="http://localhost:8080/#/"><img
          class="logo-footer"
          src="@/assets/logo_facebook.jpg"
          alt="Logo Beauté Recrutement"
        /></a> 
    </div> 
    <div class="settings"></div>

    <div class="scrollbar" id="style-1">

    <ul>

        <li>                                   
            <a href="http://localhost:8080/#/">
            <i class="fa fa-home fa-lg"></i>
            <span class="nav-text">Home</span>
            </a>
        </li>   
        <li>                                 
            <a href="http://localhost:8080/#/offres">
            <i class="fa fa-envelope-o fa-lg"></i>
            <span class="nav-text">Offres</span>
            </a>
        </li>  
        <li>                                 
            <a href="http://localhost:8080/#/connexion">
            <i class="fa fa-user fa-lg"></i>
            <span class="nav-text">Connexion</span>
            </a>
        </li>    
        <li>                                 
            <a href="http://localhost:8080/#/demo">
            <i class="fa fa-phone fa-lg"></i>
            <span class="nav-text">Demande de démo</span>
            </a>
        </li>  
    </ul>
  </div>
</nav>
</template>

<script>
export default {
    name: "Menu"

}
</script>

<style lan="scss">
    
@import "/scss/menu.scss";

</style>