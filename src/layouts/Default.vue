<template lang="pug">
  div(class="layout")
    header
      g-link(to="/")
        g-image.logo(alt="logo" src="~/assets/images/techJR-h.png")
      .icons
        a.icon-bg(href="#")
          Apple.icon
        a.icon-bg(href="#")
          Spotify.icon
        a.icon-bg(href="/rss.xml")
          Rss.icon
    .description

      p Lee Warrick and Edwin Otero explore what it's like to break into the Tech field as junior developers as well as how to stay up-to-date on new technology.

      p.home-links.card
        g-link.link(to="/") Episodes
        g-link.link(to="/about") About

    slot
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
import Rss from '~/assets/images/rss'
import Apple from '~/assets/images/applePodcasts'
import Spotify from '~/assets/images/spotify'
export default {
  components: {
    Rss,
    Apple,
    Spotify
  }
}
</script>


<style lang="stylus">
.description
  text-align center
  font-weight 400
  color var(--white)

.layout
  max-width 760px
  margin 0 auto
  padding-left 20px
  padding-right 20px

.header
  display flex
  justify-content space-between
  align-items center
  height 120px

.header img
  min-width 150px
  width 50%
  height auto
  margin-left -10px

.nav__link
  margin-left 20px

.logo
  display block
  margin 15px auto
  width 60%
  min-width 250px
  height auto

.icons
  display flex
  justify-content center
  margin auto
.icon
  width 60%
  fill var(--white)
.icon-bg
  display flex
  justify-content center
  align-items center
  margin 0 2px
  // background var(--secondary)
  background transparent
  border-radius 50%
  border 2px solid var(--white)
  max-width 50px
  max-height 50px
  width 7.5vw
  height 7.5vw
  min-width 40px
  min-height 40px
  transition background-color 0.3s
.icon-bg:hover
  background var(--secondaryDark)

p.home-links
  background-color var(--secondary)
  border none
  padding 6px 0
  transition background-color 0.3s
  &:hover >
    .link:not(:hover):after
      opacity 0
    .active--exact
      color var(--secondaryLight)
  &:hover
    background-color var(--secondaryDark)

  .link
    color var(--white)
    margin 10px
  .link:after
    background var(--white)
  .active--exact.link:after
    background var(--white)
    opacity 1
    width 100%
  .active--exact
    color var(--white)
    pointer-events none
</style>
