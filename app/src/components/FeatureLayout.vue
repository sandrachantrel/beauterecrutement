<template>
   <div class="wrapper">
  <h2>FONCTIONNALITÉS</h2>
  <div class="cols">
            <div class="col" ontouchstart="this.classList.toggle('hover');">
                <div class="container">
                    <div class="front" style="background-image: url(https://unsplash.it/id/1/511/511/)">
                        <div class="inner">
                            <p>Simple</p>
                            <span>Lorem ipsum</span>
                        </div>
                    </div>
                    <div class="back">
                        <div class="inner">
                          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col" ontouchstart="this.classList.toggle('hover');">
                <div class="container">
                    <div class="front" style="background-image: url(https://unsplash.it/id/1/511/511/)">
                        <div class="inner">
                            <p>Intuitif</p>
                            <span>Lorem ipsum</span>
                        </div>
                    </div>
                    <div class="back">
                        <div class="inner">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col" ontouchstart="this.classList.toggle('hover');">
                <div class="container">
                    <div class="front" style="background-image: url(https://unsplash.it/id/1/511/511/)">
                        <div class="inner">
                            <p>Economique</p>
                            <span>Lorem ipsum</span>
                        </div>
                    </div>
                    <div class="back">
                        <div class="inner">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    name: "Feature"
}
</script>

<style lang="scss">
   @import "@/scss/cards.scss";
</style>