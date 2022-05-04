<template>
  <v-carousel
    :interval="7000"
    :height="height"
    hide-delimiters
    cycle
    class="banner"
  >
    <v-carousel-item v-for="(image, i) in bannerImages" :key="i">
      <v-sheet height="100%" color="primary">
        <v-img height="100%" :src="image">
          <v-overlay absolute color="accent" opacity="0.2">
            <v-card-title class="justify-center text-h1 change-font">
              Meg & Clayton
              <br />
            </v-card-title>
            <v-card-text class="text-center text-h3">
              September 2023
            </v-card-text>
          </v-overlay>
        </v-img>
      </v-sheet>
    </v-carousel-item>
    <div class="overlay">
      <v-row>
        <v-col cols="6">
          <v-img
            class="img-scale-down mr-auto d-flex flex-row"
            src="https://megclayton2023.blob.core.windows.net/site-photos/flowers-left.png"
          />
        </v-col>
        <v-col cols="6">
          <v-img
            class="img-scale-down ml-auto d-flex flex-row-reverse"
            src="https://megclayton2023.blob.core.windows.net/site-photos/flowers-right.png"
          />
        </v-col>
      </v-row>
    </div>
  </v-carousel>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Banner extends Vue {
  bannerImages = [
    "https://megclayton2023.blob.core.windows.net/site-photos/oregon-sunset.jpg",
    "https://megclayton2023.blob.core.windows.net/site-photos/arizona-wall.jpg",
    "https://megclayton2023.blob.core.windows.net/site-photos/mountain-peak.jpg",
    "https://megclayton2023.blob.core.windows.net/site-photos/glacier-np.jpg",
  ];
  get height() {
    if (this.$vuetify.breakpoint.xlOnly) {
      return 1000;
    }
    if (this.$vuetify.breakpoint.mdAndUp) {
      return 750;
    }
    return 400;
  }
}
</script>

<style>
.img-scale-down {
  height: 550px;
  width: 700px;
  overflow: hidden;
  display: inline-block;
}

@media only screen and (max-width: 1300px) {
  .img-scale-down {
    height: 350px;
    width: 500px;
  }
}

@media only screen and (max-width: 850px) {
  .img-scale-down {
    height: 150px;
    width: 300px;
  }
}

.banner img {
  width: 100%;
  position: relative;
}

.banner .overlay {
  position: absolute;
  top: 0px;
  width: 100%;
}
</style>
