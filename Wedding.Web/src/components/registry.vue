<template>
  <v-card tile>
    <v-parallax
      :height="height"
      src="https://megclayton2023.blob.core.windows.net/site-photos/DSC07680.jpg"
    >
      <v-overlay absolute color="accent" opacity="0.7">
        <v-container>
          <v-card-title class="justify-center text-center text-h1">
            Honeymoon Fund & Gift Registry
          </v-card-title>
          <v-card-text class="text-center text-h6">
            We are thrilled about starting our lives together and we are
            thankful for all of our loved ones and the blessings we've had along
            the way.
            <br />
            Over the years Clayton and I have been together we've realized that
            what we remember and cherish the most is the adventures we have
            together. We hope to continue our adventures all through our lives
            and marriage and would love to start this new step in our
            relationship with a new adventure together.
            <br />
            Therefore, our registry includes a honeymoon fund. We would love it
            if you would consider giving any amount towards it (even $1, we'll
            take a photo of us buying a super weird candy bar!).
          </v-card-text>

          <v-card-text class="text-center text-h6">
            If cash presents aren't your vibe though, we totally get it. You can
            find a link to a traditional registry below! And if you think your
            presence at our wedding is a gift enough, we agree and are hyped to
            see you all there! :)
          </v-card-text>

          <v-card-text class="text-center">
            <v-btn
              class="mx-2 mt-2"
              color="secondary"
              href="https://www.zola.com/registry/collection-item/6271db92b387244f5b41a13c"
              target="_blank"
            >
              Honeymoon Fund
            </v-btn>
            <v-btn
              class="mx-2 mt-2"
              color="secondary"
              href="https://www.zola.com/registry/woodfordgravattwedding"
              target="_blank"
            >
              Gift Registry
            </v-btn>
          </v-card-text>
        </v-container>
      </v-overlay>
    </v-parallax>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Registry extends Vue {
  get height() {
    return 750;
  }
}
</script>
