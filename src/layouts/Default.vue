<template lang="pug">
  .layout
    header
      g-link(to="/")
        g-image.logo(alt="logo" src="~/assets/images/techJR-h.png")
      .icons
        a.icon-bg(href="https://podcasts.apple.com/us/podcast/tech-jr/id1465115096" target="_BLANK")
          Apple.icon
        a.icon-bg(href="https://www.google.com/podcasts?feed=aHR0cHM6Ly90ZWNoanIuZGV2L3Jzcy54bWw%3D" target="_BLANK")
          GooglePodcasts.icon
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
        | Sign up for our&nbsp;
        a.link.subscribe(
          href="https://tinyletter.com/leewarrick"
          @focus="newsletterText = 'YAAAAAAAAAS!'"
          @blur="newsletterText = 'NEWSLETTER'"
        )
          strong {{newsletterText}}

      p.home-links.card
        g-link.link(to="/") Episodes
        g-link.link(to="/about") About
        g-link.link.new(to="/support") Support

    slot
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Rss from '~/assets/images/rss'
import Apple from '~/assets/images/applePodcasts'
import GooglePodcasts from '~/assets/images/googlePodcasts'
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
    Overcast,
    PocketCasts,
    Twitter,
  },
  data() {
    return {
      newsletterText: "NEWSLETTER"
    }
  },
}
</script>


<style lang="stylus">
.description
  text-align center
  font-weight 400
  color var(--white)
  a.subscribe
    color var(--secondary)
    font-size 1.3rem
  a.subscribe:hover
    color var(--secondaryDark)
    animation 0.2s linear 0s infinite alternate newsflash

@keyframes newsflash
  to
    color var(--white)
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

.new.active--exact
  &:before
    display none
.new
  position relative
.new:before
  color var(--primary)
  font-size 0.8rem
  font-weight 900
  position absolute
  content "NEW!"
  z-index 2
  bottom 10px
  left 40px
  transform rotateZ(15deg) scale(1)
  animation 0.7s linear 0s infinite alternate pulse
@keyframes pulse
  to
    transform scale(1.2) rotateZ(15deg)
    color var(--primaryDark)

</style>
