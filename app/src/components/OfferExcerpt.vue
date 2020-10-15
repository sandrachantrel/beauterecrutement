<template>
  <article class="offer">
    <!--<a href="javascript:void(0)" v-bind:title="title">-->
      <div
        v-if="image"
        class="media-image"
        v-bind:style="{ backgroundImage: backgroundImage }"
      ></div>
      <div class="text-content">
        <h2>{{ title }}</h2>
        <!-- v-html permet d'interpreter le code html pour éviter l'affichage des balises-->
        <div v-if="excerpt" v-html="excerpt"></div>
        <!-- 
        <div>Type de contrat: {{}}</div>
        <div>Localisation: {{}}</div> -->
      </div>
    <!--</a>-->
  </article>
</template>

<script>
import MediaService from "@/services/MediaService.js";

export default {
  name: "OfferExcerpt",
  props: {
    title: {
      type: String,
      required: true
    },
    excerpt: {
      type: String,
      required: false
    },
    imageId: {
      type: Number,
      required: false
    },
    imageSource: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      image: null
    };
  },
  computed: {
    backgroundImage() {
      return "url(" + this.image.source_url + ")";
    }
  },
  methods: {
    getImage() {
      // Je recupére seulement les infos de l'image s'il y a une image sinon je ne fait pas
      if (this.imageId) {
        // Requete http pour recuperer les infos de l'image
        let imageRequest = MediaService.get(this.imageId);

        imageRequest.then(response => {
          this.image = response.data;
        });

        imageRequest.catch(error => {
          console.log(error);
        });
      }
    }
  },
  created() {
    // A la création de l'instance du composant je récupére les infos de l'image
    this.getImage();
  }
};
</script>

<style lang="scss">
@import "@/scss/variables.scss";
@import "@/scss/colors.scss";

.offer {
  text-align: center;
  width: 50%;
  margin: 2rem auto 2rem auto;
  
  .text-content {
    border: 0.5px solid $color-background;
    border-radius: $cardBorderRadius;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    padding-bottom: 1rem;
  }

  a {
    color: $color-text-primary;
    text-decoration: none;
  }
  .media-image {
    width: 100%;
    height: 200px;
    background-position: center;
    background-size: cover;
    display: block;
    margin: auto;
    border: 0.5px solid $color-background;
    border-bottom: 0;
    border-radius: $cardBorderRadius;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  h2 {
    margin: 2rem;
    font-weight: bold;
    text-transform: uppercase;
  }
}
</style>
