<template lang="pug">
Layout
  h2 Banana
  ul
    li(v-for="episode in $page.tag.belongsTo.edges")
      g-link(:to="episode.node.path") {{episode.node.title}}
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
            date (format: "D. MMMM YYYY")
            content
          }
        }
      }
    }
  }
}
</page-query>
