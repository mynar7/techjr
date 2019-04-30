<template lang="pug">
  Layout
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    g-image(alt="Example image" src="~/favicon.png" width="135")

    div

      h1.whiteText Hello, world!

      p.whiteText Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores

      p(class="home-links")
        a(href="https://gridsome.org/docs" target="_blank" rel="noopener") Gridsome Docs
        a(href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener") GitHub
    RecentEpisodes
</template>

<script>
import RecentEpisodes from '../components/RecentEpisodes'
export default {
  components: {
    RecentEpisodes
  },
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
