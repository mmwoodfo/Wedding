<template>
  <div class="home">
    <banner />
    <wedding-information id="wedding-info" />
    <registry id="registry" />
    <v-card tile color="accent">
      <v-card-title id="engagement-story" class="justify-center text-h3">
        Our Engagement Story
      </v-card-title>
      <v-card-text class="text-center">
        <iframe
          width="1280"
          height="720"
          class="video-style rounded-border"
          src="https://www.youtube.com/embed/_VVtQhoCC1I"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Banner from "@/components/banner.vue";
import WeddingInformation from "@/components/wedding-information.vue";
import Registry from "@/components/registry.vue";

@Component({
  components: {
    Banner,
    WeddingInformation,
    Registry,
  },
})
export default class Home extends Vue {
  video = "https://youtu.be/_VVtQhoCC1I";
}
</script>

<style>
.rounded-border {
  border-radius: 20px;
}

.video-style {
  width: 50%;
  height: 500px;
}
</style>
