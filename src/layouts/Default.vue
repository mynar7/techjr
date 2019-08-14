<template lang="pug">
  .layout
    header
      g-link(to="/")
        g-image.logo(alt="logo" src="~/assets/images/techJR-h.png")
      .icons
        a.icon-bg(href="https://podcasts.apple.com/us/podcast/tech-jr/id1465115096" target="_BLANK")
          Apple.icon
        a.icon-bg(href="https://playmusic.app.goo.gl/?ibi=com.google.PlayMusic&isi=691797987&ius=googleplaymusic&apn=com.google.android.music&link=https://play.google.com/music/m/Iqm76lldc555i6v2taar7d4fd3a?t%3DTech_Jr%26pcampaignid%3DMKT-na-all-co-pr-mu-pod-16" target="_BLANK")
          GooglePodcasts.icon
        a.icon-bg(href="https://www.google.com/podcasts?feed=aHR0cHM6Ly90ZWNoanIuZGV2L3Jzcy54bWw%3D" target="_BLANK")
          GooglePlay.icon
        a.icon-bg(href="https://open.spotify.com/show/4jFt5Yjfs1jmimj52S2Wve" target="_BLANK")
          Spotify.icon
        a.icon-bg(href="https://pca.st/podcast/c60819a0-645a-0137-f267-1d245fc5f9cf" target="_BLANK")
          PocketCasts.icon
        a.icon-bg(href="https://overcast.fm/itunes1465115096/tech-jr" target="_BLANK")
          Overcast.icon
        a.icon-bg(href="/rss.xml" target="_BLANK")
          Rss.icon
        a.icon-bg(href="https://twitter.com/TechJrPodcast" target="_BLANK")
          Twitter.icon
    .description

      p Lee Warrick and Edwin Otero explore what it's like to break into the Tech field as junior developers as well as how to stay up-to-date on new technology.
        br
        a.link.subscribe(href="https://tinyletter.com/leewarrick")
          strong Subscribe
        | &nbsp;for updates!

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
import GooglePlay from '~/assets/images/googlePodcasts'
import GooglePodcasts from '~/assets/images/googlePlay'
import Spotify from '~/assets/images/spotify'
import PocketCasts from '~/assets/images/pocketcasts'
import Overcast from '~/assets/images/overcast'
import Twitter from '~/assets/images/twitter'
export default {
  components: {
    Rss,
    Apple,
    Spotify,
    GooglePodcasts,
    GooglePlay,
    Overcast,
    PocketCasts,
    Twitter,
  }
}
</script>


<style lang="stylus">
.description
  text-align center
  font-weight 400
  color var(--white)
  a.subscribe
    color var(--secondaryDark)

.layout
  max-width 760px
  margin 0 auto
  padding-left 20px
  padding-right 20px
  @media screen and (max-width: 500px)
    padding 0px 8px

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
  flex-wrap wrap
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
