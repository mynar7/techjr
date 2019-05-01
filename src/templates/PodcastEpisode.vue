<template lang="pug">
  Layout
    .card
      h1 {{$page.podcastEpisode.title}}
      div(v-html="$page.podcastEpisode.content")
      //- h4 {{this.$route.params}}
      audio(:src="s3Folder + this.$page.podcastEpisode.fileUrl" controls="true")
      .tags
        span Tags:
        ul
          li(v-for="tag in this.$page.podcastEpisode.tags")
            g-link(:to="tag.path") {{tag.id}}
</template>

<page-query>
query Post ($path: String!){
  podcastEpisode (path: $path) {
    content
    title
    fileUrl
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
  }
}
</script>


<style lang="stylus" scoped>
audio
  filter sepia() saturate(1000%) brightness(45%) hue-rotate(140deg) invert(1)
  width 450px
  height 30px
  margin 24px 0

.tags, ul
  display flex

.tags > *, ul > *
  margin-right 6px
</style>
