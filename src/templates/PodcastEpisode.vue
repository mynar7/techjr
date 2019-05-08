<template lang="pug">
  Layout
    .card.podcast-episode
      h1 {{$page.podcastEpisode.title}}
      div.content(v-html="$page.podcastEpisode.content")
      //- h4 {{this.$route.params}}
      audio(:src="s3Folder + this.$page.podcastEpisode.fileUrl" controls="true")
      .tags-container
        div
          span Tags:
          ul.tags
            li(v-for="(tag, index) in this.$page.podcastEpisode.tags")
              g-link.tag.link(:to="tag.path") {{tag.id}}
              span {{($page.podcastEpisode.tags && index !== $page.podcastEpisode.tags.length - 1 ? ',' : '' )}}
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
        weekday: 'short',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        timeZoneName: 'short'
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


<style lang="stylus">
.card.podcast-episode
  .content
    li, ul
      list-style-type disc
    ul
      padding 0 24px

    a
      color var(--secondaryDark)
      position relative
      &:hover:after
        opacity 1
        width 100%
      &:after
        background var(--secondaryDark)
        content ""
        height 2px
        width 0%
        position absolute
        bottom -3px
        left 0
        opacity 0
        transition opacity 0.3s, width 0.3s
    hr
      border 1px solid var(--primaryLight)

audio
  filter sepia() saturate(1000%) brightness(45%) hue-rotate(140deg) invert(1)
  max-width 450px
  width 100%
  height 30px
  margin 24px 0

.tags
  .tag
    font-weight 400

.tags-container, .tags-container>div, ul.tags
  display flex
  flex-wrap wrap
  justify-content space-between

.tags-container > * > *, ul.tags > *
  margin-right 6px

.timestamp
  color var(--lightGray)
  font-weight 400
  font-size 0.9rem
  text-transform uppercase

</style>
