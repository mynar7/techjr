<template lang="pug">
.card.episode-card
  div
    g-link(:to="episode.path")
      g-image.episode-card-logo(src="~/assets/images/techJR-v.png")
  div.episode-info
    //- .title-row
    p.date {{ date }}
    g-link(:to="episode.path")
      h2.title {{episode.title}}
    p {{episode.excerpt}}
    g-link.link(:to="episode.path") Listen
</template>

<script>
export default {
  props: ['episode'],
  computed: {
    date() {
      const dateOptions = {
        // weekday: 'long',
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        // hour: 'numeric',
        // minute: 'numeric',
      }

    return new Date(this.episode.date).toLocaleString('en-us', dateOptions)

    }
  }
}
</script>

<style lang="stylus">
.episode-card
  display flex
  div
    .episode-card-logo
      width 100px
      margin-top 24px
      margin-right 24px
      height auto
      transform rotateZ(-10deg)
  @media screen and (max-width 600px)
    div
      .episode-card-logo
        display none
  div.episode-info
    flex-grow 1
    .date
      margin 0
      color var(--lightGray)
      text-transform uppercase
      font-size 0.9rem
      font-weight 300
    .title
      margin-top 0
    .title-row
      display flex
      flex-wrap wrap
      justify-content space-between
</style>



