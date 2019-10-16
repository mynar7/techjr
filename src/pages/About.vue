<template lang="pug">
  Layout
    .card
      h1 About the Show
      p Lee Warrick and Edwin Otero are Orlando-based web developers that are looking to give back to the tech community.
      p Becoming a developer isn't easy, and we don't mean just learning the technology.
      p There's a wild world to navigate when trying to get a job and build your personal brand.
      p We share our personal experiences as Junior Devs as well as interview industry professionals to answer listeners' and our own questions.
      p At the end of the day, we want to make becoming a Developer just a little bit better.

      h2 Contact
      p Please feel free to reach out to us at #[a.link(href="mailto:techjrpodcast@gmail.com") techjrpodcast@gmail.com]
      p We would love to hear from you!

      h2 Support
      p Please #[a.link(href="https://tinyletter.com/leewarrick") Subscribe] to the show!
      p Follow us on #[a.link(href="https://twitter.com/techjrpodcast") twitter]!
      p You can also support us by leaving us a review on #[a.link(href="https://podcasts.apple.com/us/podcast/tech-jr/id1465115096") itunes], liking, subscribing, following, and just telling your friends that you enjoy the show.

</template>

<script>
export default {
  metaInfo: {
    title: "About the show",
    meta: [
      {
        name: "description",
        key: "description",
        content:
          "Lee Warrick and Edwin Otero are Orlando-based web developers that are looking to give back to the tech community. We share our personal experiences as Junior Devs as well as interview industry professionals to answer listeners' and our own questions."
      },
      {
        property: "og:title",
        key: "og:title",
        content: "About the show - Tech Jr Podcast",
      },
      {
        property: "og:url",
        key: "og:url",
        content: "https://techjr.dev/about"
      },
      {
        property: "og:description",
        key: "og:description",
        content:
          "Lee Warrick and Edwin Otero are Orlando-based web developers that are looking to give back to the tech community. We share our personal experiences as Junior Devs as well as interview industry professionals to answer listeners' and our own questions."
      }
    ]
  }
};
</script>
