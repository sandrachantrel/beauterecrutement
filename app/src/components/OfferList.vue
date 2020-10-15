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

import OfferService from "@/services/OfferService.js";
import TypeService from "@/services/TypeService.js";
import LocalisationService from "@/services/LocalisationService.js";
import JobService from "@/services/JobService.js";

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

  mounted() {
    // Au chargement du DOM => appel à l'API pour recuperer la liste des offres, types, ingredients et jobs
    this.getOffers();
    this.getTypes();
    this.getLocalisations();
    this.getJobs();
  },

  methods: {
    getOffers() {
      let promise = OfferService.list();

      promise.then(response => {
        this.offers = response.data;
      });

      promise.catch(error => {
        console.log(error);
      });
    },

    getTypes() {
      let promise = TypeService.list();

      promise.then(response => {
        this.types = response.data;
      });

      promise.catch(error => {
        console.log(error);
      });
    },

    getLocalisations() {
      let promise = LocalisationService.list();

      promise.then(response => {
        this.localisations = response.data;
      });

      promise.catch(error => {
        console.log(error);
      });
    },

    getJobs() {
      let promise = JobService.list();

      promise.then(response => {
        this.jobs = response.data;
      });

      promise.catch(error => {
        console.log(error);
      });
    }
  }
};
</script>

<style lang="scss">
@import "@/scss/variables.scss";
@import "@/scss/colors.scss";

h1 {
  text-align: center;
  text-transform: uppercase;
  font-weight: bold, ;
  margin: 2rem;
}
</style>
