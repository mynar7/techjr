<template lang="pug">
Layout
  .card
    h2 Episodes tagged with "{{$page.tag.title}}"
    ul
      li(v-for="episode in $page.tag.belongsTo.edges")
        g-link(:to="episode.node.path") {{episode.node.title}}
        span.date &nbsp;- {{episode.node.date}}
</template>

<page-query>
query Tag ($id: String!) {
  tag (id: $id) {
    title
    belongsTo {
      edges {
        node {
          ...on PodcastEpisode {
            title
            path
            date (format: "MMMM D, YYYY")
            content
          }
        }
      }
    }
  }
}
</page-query>

<style lang="stylus">
.date
  color var(--gray)
</style>
