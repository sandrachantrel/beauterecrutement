<template>
   <div class="offre-list">
      <h1>Les Offres d'Emploi</h1>
      <!--
      Je génère ma liste d'offres d'emploi en bouclant directement sur le composant OfferExcerpt.
      J'envoie les informations de l'objet offer généré avec ma boucle v-for dans les différents props du composant OfferExcerpt
      -->
      <OfferExcerpt
        v-for="(offer, index) in offers"
        v-bind:key="index"
        v-bind:id="offer.id"
        v-bind:title="offer.title.rendered"
        v-bind:excerpt="offer.excerpt.rendered"
        v-bind:imageId="offer.featured_media"
        v-bind:imageSource="offer.featured_media_source_url"
      />
    </div>
</template>

<script>
import axios from "axios";
import OfferExcerpt from "@/components/OfferExcerpt.vue";

export default {
  name: "OfferList",
  components: {
    OfferExcerpt
  },
  data() {
    return {
      offers: [],
    }
  },

    // Mounted permet d'effectuer un traitement au chargement de mon composant dans le DOM
  mounted() {
    let promise = axios.get("http://localhost/apotheose/Projet-beaute-recrutement-back/wp-json/wp/v2/offers");

    promise.then( response => {
      this.offers = response.data
    });

    promise.catch(error => {
      console.log(error);
    });
  }
};
</script>

<style lang="scss">
@import "@/scss/variables.scss";
@import "@/scss/colors.scss";

h1 {
  text-align: center;
}

</style>