<template lang="pug">
  Layout
    h1 {{$page.podcastEpisode.title}}
    div(v-html="$page.podcastEpisode.content")
    h4 {{this.$route.params}}
    h4 {{this.$page.podcastEpisode.date}}
      ul
        li(v-for="tag in this.$page.podcastEpisode.tags")
          g-link(:to="tag.path") {{tag.id}}
</template>

<page-query>
query Post ($path: String!){
  podcastEpisode (path: $path) {
    content
    title
    tags {
      path
      id
    }
  }
}
</page-query>