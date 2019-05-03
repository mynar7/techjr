<template lang="pug">
  Layout
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    g-image.logo(alt="logo" src="~/assets/images/logo.png")
    .icons
      a.icon-bg(href="/rss.xml")
        Rss.icon
    .description

      p.whiteText Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores

      p.home-links
        g-link(to="/about") About Us
    RecentEpisodes
</template>

<script>
import RecentEpisodes from '../components/RecentEpisodes'
import Rss from '~/assets/images/rss'
export default {
  components: {
    RecentEpisodes,
    Rss
  },
  metaInfo: {
    title: 'Home'
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

.icons
  display flex
  justify-content center
  margin auto
.icon
  width 30px
  height 30px
  fill var(--white)
.icon-bg
  background var(--secondary)
  border-radius 50%
  padding 10px
  height 30px
</style>
