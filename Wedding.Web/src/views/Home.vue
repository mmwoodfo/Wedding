<template>
  <div class="home">
    <banner />
    <wedding-information />
    <registry />
    <v-card tile color="accent">
      <v-card-title class="justify-center text-h1">
        Details Details...
      </v-card-title>
      <v-card-text class="text-center text-h6">
        If you can make the date great! Be sure to register by clicking this
        button ==> <v-btn color="secondary"> Register </v-btn> <== right here!
        <br />
        <br />
        What's the wedding attire? Check that out here!
        <v-btn color="secondary"> Wedding Attire </v-btn>
        <br />
        <br />
        Why yes, I did make this website and yes, those are spelling/grammar
        errors you see.
        <br />
        Want to tell me about it?
        <v-btn href="https://github.com/mmwoodfo/Wedding">Report a bug</v-btn>
      </v-card-text>

      <v-divider class="my-10" />
      <v-card-title class="justify-center text-h3">
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
