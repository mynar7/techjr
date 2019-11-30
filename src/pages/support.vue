<template lang="pug">
  Layout
    .card
      .support
        h2 Free ways to support us:
        p Please sign up for our #[a.link(href="https://tinyletter.com/leewarrick") Newsletter]!
        p Follow us on #[a.link(href="https://twitter.com/techjrpodcast") twitter]!
        p You can also support us by leaving us a review on #[a.link(href="https://podcasts.apple.com/us/podcast/tech-jr/id1465115096") itunes], liking, subscribing, following, and just telling your friends that you enjoy the show.

</template>

<style lang="stylus" scoped>
.support
  text-align center
h1
  margin-top 20px
  margin-bottom 40px
h2
  margin-top 40px
  margin-bottom 40px
</style>

<script>
export default {
  metaInfo: {
    title: "Support the Show",
    meta: [
      {
        name: "description",
        key: "description",
        content:
          "Help support the podcast by becoming a patron or buying Tech JR merchandise."
      },
      {
        property: "og:title",
        key: "og:title",
        content: "Support the Show - Tech Jr Podcast",
      },
      {
        property: "og:url",
        key: "og:url",
        content: "https://techjr.dev/support"
      },
      {
        property: "og:description",
        key: "og:description",
        content:
          "Help support the podcast by becoming a patron or buying Tech JR merchandise."
      }
    ]
  }
};
</script>
