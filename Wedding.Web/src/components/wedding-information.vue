<template>
  <v-card
    tile
    color="secondary"
    img="https://megclayton2023.blob.core.windows.net/site-photos/dark-cherrytree.jpg"
  >
    <v-container>
      <v-card color="secondary">
        <v-card-title class="justify-center text-center text-h1">
          All About Our Wedding
        </v-card-title>
        <v-card-text class="text-center text-h6">
          We are so happy to announce that we are getting married!! And we are
          so happy you can come!
          <br />
          Below you'll find information about the venue. If you're coming from
          out of town, you'll also find lodging reccomendations, resturant
          reccomendations, how to dress for September weather up here and other
          usful information!
          <br />
          <v-btn color="accent"> What's the Wedding Attire? </v-btn>
        </v-card-text>

        <v-divider />

        <v-card-title class="justify-center text-h3">
          Date & Location
        </v-card-title>
        <v-card-text class="text-center text-h6">
          Friday (TBD), September 2023 at
          <v-btn
            color="accent"
            class="mb-4"
            href="https://www.arborcrest.com/"
            target="_blank"
            >Arbor Crest Winery</v-btn
          >
          in Spokane Valley, WA
          <br />
          <iframe
            v-if="!$vuetify.breakpoint.smAndDown"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10741.139347247383!2d-117.2495377!3d47.6983073!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x70c8d76efa04c7d1!2sArbor%20Crest%20Wine%20Cellars!5e0!3m2!1sen!2sus!4v1651553009045!5m2!1sen!2sus"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            class="rounded-border"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </v-card-text>

        <v-divider />

        <v-card-title class="justify-center text-h3">
          Coming From out of Town?
        </v-card-title>
        <v-card-text class="text-center text-h6">
          <v-btn class="mx-2" color="accent"> September Weather </v-btn>
          <v-btn class="mx-2" color="accent"> Lodging </v-btn>
          <v-btn class="mx-2" color="accent"> Restaurants & Activities </v-btn>
        </v-card-text>

        <v-divider />

        <v-card-title class="justify-center text-h3">
          Let Me Know You're Coming!
        </v-card-title>
        <v-card-text class="text-center text-h6">
          <v-btn class="mx-2" color="accent"> Register Here! </v-btn>
        </v-card-text>
      </v-card>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class WeddingInformation extends Vue {}
</script>
