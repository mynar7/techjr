<template lang="pug">
.card
  h2 {{episode.title}}
  p {{ new Date(episode.date).toLocaleString() }}
  p {{episode.excerpt}}
  g-link(:to="episode.path") Read More
</template>

<script>
export default {
  props: ['episode']
}
</script>


