<template>
  <div id="app">
    
    <link rel="stylesheet" href="@/assets/projects/projects.css" type="text/css">

    <Header />
    <div class="main">
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Helpers from './helpers';

export default Vue.extend({
  name: 'App',
  components: {
    Header, Footer
  },
  watch: {
    // Watch for route changes
    $route(to, from) {
      this.preloadImagesBasedOnRoute(to.path);
    }
  },
  mounted() {
    // Preload images on the initial load
    this.preloadImagesBasedOnRoute(this.$route.path);
  },
  methods: {
    preloadImagesBasedOnRoute(route: string) {
      let images: string[] = [];
      console.log(route);

      if (route == "/")
        images = ["img/avatar.png"];
      else if (route.includes("resume")) 
        images = ["img/resume-photo.webp"];
      else if (route.includes("other-projects"))
        images = [
          "img/projects/uam/uam.webp",
          "img/projects/finlabs/finlabs-thumb.webp",
          "img/projects/horses/horses1.webp",
          "img/projects/instead/instead1.webp",
          "img/projects/mmb/mmb-thumb.webp",
          "img/projects/aeae/aeae-thumb.webp"
        ];
      else if (route.includes("game-projects"))
        images = [
          "img/projects/bs/bs-first_frame.webp",
          "img/projects/mm/magic-mind.webp",
          "img/projects/09/09first_frame.webp",
          "img/projects/kono/kono-first_frame.webp",
          "img/projects/st/swift-touches-thmb-first_frame.webp",
          "img/projects/mixok/Mixok-first_frame.webp",
          "img/projects/thoughts/Thoughts-first_frame.webp",
          "img/projects/gear/gearVR-thumb.webp",
          "img/projects/garcito/garcito-first_frame.webp",
          "img/projects/illusion/Illusion-first_frame.webp",
          "img/projects/bugs/bugs-first_frame.webp",
          "img/projects/space/SpaceWar-first_frame.webp"
        ];
      
      console.log(images);
      Helpers.preloadImages(images);
    }
  }
});

// // Preload heavy images or gifs that are used in other pages
// Helpers.preloadImages([
//   "img/projects/amazon.webp",
//   "img/projects/twitch-logo.webp"
// ]);
</script>

<style lang="less">

@import './css/projects.less';
@import './css/variables.less';

html, body {
  margin: 0px;
  background-color: @bodyBgColor;
}

#app {
  background-color: @contentBgColor;
  color: @textColor;

  font-family: 'Karla', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  font-size: 1.1em;
  line-height: 1.6em;
  text-align: justify;
}

h1, h2, h3, h4, h5 {
  text-align: left;
}

a {
  color: @textColor;
  text-decoration: none;
  opacity: 0.5;
}
a:hover, .router-link-exact-active {
  opacity: 1;
}

h1 {
  font-size: 2.5em;
  font-weight: 100;
  margin-top: -10px;
  margin-bottom: 40px;
  margin-left: -2px; // hack to make it "seem" more aligned with smaller text content
  line-height: 1.1em;
}

.main {
    padding: 12px;
  }

@media only screen and (min-width: 620px){

  #app {
    text-align: left;
    line-height: 1.8em;
  }

  h1 {
    margin-top: 0.67em;
    margin-bottom: 80px;
    line-height: 0.7em;
  }

  .main {
    padding: 0px 40px 40px 180px;
  }

  .main, .header, .footer {
    max-width: 1200px;
    margin: 0 auto;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.2s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

</style>
