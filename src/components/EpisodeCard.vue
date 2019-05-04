<template lang="pug">
.card
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
.title-row
  display flex
  flex-wrap wrap
  justify-content space-between
  h2, p
    // white-space nowrap
</style>



