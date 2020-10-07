<template>
   <div class="offre-list">
      <h1>Les Offres d'Emploi</h1>
      <!--
      Je génère ma liste d'offres d'emploi en bouclant directement sur le composant OfferExcerpt.
      J'envoie les informations de l'objet offer généré avec ma boucle v-for dans les différents props du composant OfferExcerpt
      -->
      <OfferExcerpt
        v-for="offer in offers"
        v-bind:key="offer.id"
        v-bind:id="offer.id"
        v-bind:title="offer.title.rendered"
        v-bind:excerpt="offer.excerpt.rendered"
        v-bind:imageId="offer.featured_media"
        v-bind:imageSource="offer.featured_media_source_url"
      />
    </div>
</template>

<script>
import OfferExcerpt from "@/components/OfferExcerpt.vue";

export default {
  name: "OfferList",
  components: {
    OfferExcerpt
  },
  data() {
    return {
      offers: [],
      types: [],
      localisations: [],
      jobs: []
    };
  },
}
</script>

<style>

</style>