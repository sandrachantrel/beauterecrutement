<template>
  <main class="main">

    <section class="content">
      <span class="first-part">Et si le recrutement commençait ici?</span> 
      <span class="second-part">Logiciel RH pour les entreprises du Bien-Être et de la Beauté</span>
    </section>

    <section class="presentation">
      <p class="presentation-content">
        <strong>Beauté Recrutement</strong> est un logiciel de gestion pour vos
        recrutements. 
      </p>
      <p>Simple et intuitif il vous permettra de gagner un temps
        precieux.</p>
    </section>

    <FeatureLayout />

  </main>
</template>

<script>
import FeatureLayout from "@/components/FeatureLayout.vue";

import { mapGetters } from "vuex";

export default {
  name: "FotterLayout",

  components: {
    FeatureLayout
  },

  computed: {
    ...mapGetters([
      "isConnected"
    ])
  },
};
</script>

<style lang="scss">
@import "@/scss/colors.scss";
@import "@/scss/form.scss";

.main {
  margin: 2rem;

  a {
    margin: 1rem;
  }

  .content, .presentation {
    margin: 1rem;
    font-size: 25px;
    display:flex;
    flex-direction: column;
    color:  rgb(114, 113, 113);
    padding: 1rem;
  }

  .first-part {
    padding: 2rem;
    font-weight: bold;
  }
}
</style>
