<template lang="pug">
  Layout
    .card
      h1 {{$page.podcastEpisode.title}}
      div(v-html="$page.podcastEpisode.content")
      //- h4 {{this.$route.params}}
      audio(:src="s3Folder + this.$page.podcastEpisode.fileUrl" controls="true")
      .tags
        div
          span Tags:
          ul
            li(v-for="tag in this.$page.podcastEpisode.tags")
              g-link(:to="tag.path") {{tag.id}}
        .timestamp {{$page.podcastEpisode.date | showDate}}
</template>

<page-query>
query Post ($path: String!){
  podcastEpisode (path: $path) {
    content
    title
    fileUrl
    date
    tags {
      path
      id
    }
  }
}
</page-query>

<script>
export default {
  data() {
    return {
      s3Folder: 'https://s3.amazonaws.com/techjr/episodes/'
    }
  },
  filters: {
    showDate(val) {
      const d = new Date(val)
      const timeOptions = {
        weekday: 'long',
        month: 'numeric',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
      }
      return d.toLocaleString('en-us', timeOptions)
    }
  },
  metaInfo() {
    return {
      title: this.$page.podcastEpisode.title
    }
  }
}
</script>


<style lang="stylus" scoped>
audio
  filter sepia() saturate(1000%) brightness(45%) hue-rotate(140deg) invert(1)
  max-width 450px
  width 100%
  height 30px
  margin 24px 0

.tags, .tags div, ul
  display flex
  flex-wrap wrap
  justify-content space-between

.tags > * > *, ul > *
  margin-right 6px

</style>
