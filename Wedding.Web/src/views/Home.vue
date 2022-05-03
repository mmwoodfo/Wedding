<template>
    <div class="home">
        <banner />
        <v-container>
            <v-card color="secondary">
                <v-card-title class="justify-center text-h3">
                    Our Engagement Story
                </v-card-title>
                <v-container>
                    <iframe width="1280" 
                            height="720"
                            class="video-style"
                            src="https://www.youtube.com/embed/_VVtQhoCC1I" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen />
                </v-container>
            </v-card>
        </v-container>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Banner from "@/components/banner.vue"; // @ is an alias to /src

@Component({
  components: {
    Banner,
  },
})
export default class Home extends Vue {
    video = "https://youtu.be/_VVtQhoCC1I";
}
</script>

<style>
    .video-style {
        border-radius: 20px;
        width: 100%;
    }
</style>
