<template lang="pug">
  ul
    li(v-for="episode in $static.allPodcastEpisode.edges")
      EpisodeCard(:episode="episode.node")
</template>

<static-query>
query {
  # allPodcastEpisode (perPage: 20, sortBy: "date") {
  allPodcastEpisode (sortBy: "date") {
    edges {
      node {
        path
        title
        date
        excerpt
      }
    }
  }
}
</static-query>

<script>
import EpisodeCard from './EpisodeCard'
export default {
  components: {
    EpisodeCard
  }
}
</script>

<style lang="stylus">
li
  list-style none
</style>

