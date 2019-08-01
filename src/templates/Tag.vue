<template lang="pug">
Layout
  .card
    h1 Episodes tagged with "{{$page.tag.title}}"
    ul
      li(v-for="episode in $page.tag.belongsTo.edges")
        g-link.link(:to="episode.node.path") {{episode.node.title}}
        span.date &nbsp;- {{episode.node.date}}
</template>

<page-query>
query Tag ($id: String!) {
  tag (id: $id) {
    title
    path
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

<script>
export default {
  metaInfo() {
    return {
      title: 'Episodes tagged: ' + `"${this.$page.tag.title}"`,
      meta: [
        {
          name: "description",
          key: "description",
          content: `All episodes that match the tag of "${this.$page.tag.title}" on the Tech Jr Podcast`
        },
        {
          property: "og:title",
          key: "og:title",
          content: 'Episodes tagged: ' + `"${this.$page.tag.title}" - Tech Jr Podcast`,
        },
        {
          property: "og:url",
          key: "og:url",
          content: "https://techjr.dev" + this.$page.tag.path
        },
        {
          property: "og:description",
          key: "og:description",
          content: `All episodes that match the tag of "${this.$page.tag.title}" on the Tech Jr Podcast`
        }
      ],
      script: [
        {
          innerHTML: JSON.stringify({
            "@context": "http://schema.org",
            "@id": "https://techjr.dev/#radio-series",
            "@type": "RadioSeries",
            creator: {
              "@type": "Organization",
              name: "Tech Jr",
              url: "https://techjr.dev",
              sameAs: [
                "https://twitter.com/TechJrPodcast",
                "https://podcasts.apple.com/us/podcast/tech-jr/id1465115096",
                "https://playmusic.app.goo.gl/?ibi=com.google.PlayMusic&isi=691797987&ius=googleplaymusic&apn=com.google.android.music&link=https://play.google.com/music/m/Iqm76lldc555i6v2taar7d4fd3a?t%3DTech_Jr%26pcampaignid%3DMKT-na-all-co-pr-mu-pod-16",
                "https://www.google.com/podcasts?feed=aHR0cHM6Ly90ZWNoanIuZGV2L3Jzcy54bWw%3D",
                "https://open.spotify.com/show/4jFt5Yjfs1jmimj52S2Wve",
                "https://pca.st/podcast/c60819a0-645a-0137-f267-1d245fc5f9cf"
              ]
            },
            actor: [
              {
                "@type": "Person",
                affiliation: "Tech Jr",
                description:
                  "Lee is a tenacious and motivated web developer that is passionate about User Experience (UX/UI).",
                familyName: "Warrick",
                givenName: "Lee",
                jobTitle: "FullStack JavaScript Developer",
                name: "Lee Warrick",
                sameAs: [
                  "https://twitter.com/leewarrickjr",
                  "https://github.com/mynar7",
                  "https://www.linkedin.com/in/lee-warrick/"
                ],
                url: "https://leewarrick.com"
              },
              {
                "@type": "Person",
                affiliation: "Tech Jr",
                description:
                  "Full Stack Developer and web/print designer with over 15 years of industry experience. Versed in web languages such as HTML5, CSS3, JavaScript, jQuery, Node JS, Express JS, Handlebars JS, and Adobe certified in Photoshop and Dreamweaver. ",
                familyName: "Otero",
                givenName: "Edwin",
                jobTitle: "FullStack JavaScript Developer and Designer",
                name: "Edwin Otero",
                sameAs: [
                  "https://twitter.com/ed0ter0",
                  "https://github.com/Edii698",
                  "https://www.linkedin.com/in/edwin-otero/"
                ],
                url: "https://edii698.github.io/resume/"
              }
            ],
            director: [
              {
                "@type": "Person",
                affiliation: "Tech Jr",
                description:
                  "Lee is a tenacious and motivated web developer that is passionate about User Experience (UX/UI).",
                familyName: "Warrick",
                givenName: "Lee",
                jobTitle: "FullStack JavaScript Developer",
                name: "Lee Warrick",
                sameAs: [
                  "https://twitter.com/leewarrickjr",
                  "https://github.com/mynar7",
                  "https://www.linkedin.com/in/lee-warrick/"
                ],
                url: "https://leewarrick.com"
              },
              {
                "@type": "Person",
                affiliation: "Tech Jr",
                description:
                  "Full Stack Developer and web/print designer with over 15 years of industry experience. Versed in web languages such as HTML5, CSS3, JavaScript, jQuery, Node JS, Express JS, Handlebars JS, and Adobe certified in Photoshop and Dreamweaver. ",
                familyName: "Otero",
                givenName: "Edwin",
                jobTitle: "FullStack JavaScript Developer and Designer",
                name: "Edwin Otero",
                sameAs: [
                  "https://twitter.com/ed0ter0",
                  "https://github.com/Edii698",
                  "https://www.linkedin.com/in/edwin-otero/"
                ],
                url: "https://edii698.github.io/resume/"
              }
            ],
            author: {
              "@id": "https://techjr.dev/#identity"
            },
            copyrightHolder: {
              "@id": "https://techjr.dev/#identity"
            },
            copyrightYear: "2019",
            creator: {
              "@id": "https://techjr.dev/#creator"
            },
            image: {
              "@type": "ImageObject",
              height: 419,
              url: "https://techjr.dev/techJR_logo-card.jpg",
              width: 800,
            },
            inLanguage: "en-us",
            mainEntityOfPage: "http://techjr.dev/",
            name: "Tech Jr",
            url: "https://techjr.dev/"
          }),
          type: "application/ld+json"
        }
      ],
      __dangerouslyDisableSanitizers: ["script"]
    }
  }
}
</script>
