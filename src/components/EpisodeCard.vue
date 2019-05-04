<template lang="pug">
.card.episode-card
  div
    g-image.episode-card-logo(src="~/assets/images/techJR-v.png")
  div
    .title-row
      h2 {{episode.title}}
      p {{ date }}
    p {{episode.excerpt}}
    g-link(:to="episode.path") Read More
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
      margin-top 9px
      margin-right 24px
      height auto
  @media screen and (max-width 600px)
    div
      .episode-card-logo
        display none
  .title-row
    display flex
    flex-wrap wrap
    justify-content space-between

</style>



