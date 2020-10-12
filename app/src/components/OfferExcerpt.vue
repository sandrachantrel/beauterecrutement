<template>
  <article class="offer">
    <a href="javascript:void(0)" v-bind:title="title">
      <div
        v-if="image"
        class="media-image"
        v-bind:style="{ backgroundImage: backgroundImage }"
      ></div>
      <div class="text-content">
        <h2>{{ title }}</h2>
        <!-- v-html permet d'interpreter le code html pour éviter l'affichage des balises-->
        <div v-if="excerpt" v-html="excerpt"></div>
      </div>
    </a>
  </article>
</template>

<script>
import axios from "axios";

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
      if (this.imageId) {
        let imageRequest = axios.get(
          "http://localhost/apotheose/Projet-beaute-recrutement-back/wp-json/wp/v2/media/" +
            this.imageId
        );

        imageRequest.then(response => {
          // J'enregistre les informations reçues de l'API dans une data de mon composant
          this.image = response.data;
        });

        imageRequest.then(error => {
          console.log(error);
        });
      }
    }
  },
  created() {
    this.getImage();
  }
};
</script>

<style lang="scss">
@import "@/scss/variables.scss";
@import "@/scss/colors.scss";

.offer {
  text-align: center;

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
    border-radius: $cardBorderRadius;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
}
</style>
