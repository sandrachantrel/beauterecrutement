<template>
  <article class="offer">
      <a href="javascript:void(0)"
        v-bind:title="title">
        <div class="text-content">
            <h2>{{ title }}</h2>
            <!-- v-html permet d'interpreter le code html pour éviter l'affichage des balises-->
            <div v-if="excerpt" v-html="excerpt">
            </div>
        </div>
      </a>
  </article>
</template>

<script>
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
    }
}
</script>

<style lang="scss">
@import "@/scss/variables.scss";
@import "@/scss/colors.scss";
    
</style>