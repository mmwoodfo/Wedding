<template>
  <v-app id="vue-app">
    <v-app-bar app color="primary" dark clipped-left>
      <v-toolbar-title>
        <router-link to="/" class="white--text" style="text-decoration: none">
          Gravatt Wedding
        </router-link>
      </v-toolbar-title>
      <v-spacer />
      <v-btn href="#wedding-info" text> Wedding Information </v-btn>
      <v-btn href="#registry" text> Registry </v-btn>
      <v-btn href="#engagement-story" text> Our Engagement Story </v-btn>
      <v-btn color="accent"> Register for Wedding </v-btn>
    </v-app-bar>

    <v-main>
      <transition
        name="router-transition"
        mode="out-in"
        appear
        @enter="routerViewOnEnter"
      >
        <!-- https://stackoverflow.com/questions/52847979/what-is-router-view-key-route-fullpath -->
        <router-view ref="routerView" :key="$route.path" />
      </transition>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
  components: {},
})
export default class App extends Vue {
  drawer: boolean | null = null;
  routeComponent: Vue | null = null;

  get routeMeta() {
    if (!this.$route || this.$route.name === null) return null;

    return this.$route.meta;
  }

  routerViewOnEnter() {
    this.routeComponent = this.$refs.routerView as Vue;
  }

  created() {
    const baseTitle = document.title;
    this.$watch(
      () => (this.routeComponent as any)?.pageTitle,
      (n: string | null | undefined) => {
        if (n) {
          document.title = n + " - " + baseTitle;
        } else {
          document.title = baseTitle;
        }
      },
      { immediate: true }
    );
  }
}
</script>

<style lang="scss">
.router-transition-enter-active,
.router-transition-leave-active {
  // transition: 0.2s cubic-bezier(0.25, 0.8, 0.5, 1);
  transition: 0.1s ease-out;
}

.router-transition-move {
  transition: transform 0.4s;
}

.router-transition-enter,
.router-transition-leave-to {
  opacity: 0;
  // transform: translateY(5px);
}
</style>
