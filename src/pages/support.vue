<template lang="pug">
  Layout
    .card
      h1 Support the Show!
      p There's two great ways that YOU can help us keep making this show!
      p First, you can sign up to be a patron:
      h2.pleaseClick
        a.link(href="https://www.patreon.com/techjr")
          | Click here to support us on #[Strong Patreon!]
      p Second, you can buy some sweet, sweet Tech JR Merchandise from our store:
      h2.pleaseClick
        a.link(href="https://teespring.com/stores/tech-jr-store")
          | Click here to visit the #[Strong Tech JR Store!]
      .support
        h3 There's also some great FREE ways to support us:
        p You can sign up for our #[a.link(href="https://tinyletter.com/leewarrick") Newsletter]!
        p Follow us on #[a.link(href="https://twitter.com/techjrpodcast") Twitter]!
        p And leave us a review on #[a.link(href="https://podcasts.apple.com/us/podcast/tech-jr/id1465115096") iTunes], then like, subscribe, and tell all your friends about the show!
      h2 Sponsors
      p If you're interested in sponsoring the show, we'd love to hear from you!
      p Please email us at
        | &nbsp;
        a.link(href="mailto:techjrpodcast@gmail.com") techjrpodcast@gmail.com

</template>

<style lang="stylus" scoped>
// .support, h2, h1
*
  text-align center
h1
  margin-top 20px
  margin-bottom 40px
h2
  margin-top 40px
  margin-bottom 40px
  display block

.pleaseClick:hover, .pleaseClick:focus
  animation 0.2s ease-in 0s 1 forwards buybuybuy

@keyframes buybuybuy
  to
    transform scale(1.5)

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
