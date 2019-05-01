<template lang="pug">
  Layout
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    g-image(alt="Example image" src="~/assets/images/logo.png" class="logo")

    .description

      p.whiteText Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores

      p(class="home-links")
        g-link(to="/about") About Us
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

<style lang="stylus">
.description
  text-align center
.logo
  display block
  margin 0 auto
.home-links a
  margin-right: 1rem;
</style>
