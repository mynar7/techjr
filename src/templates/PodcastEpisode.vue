<template lang="pug">
  Layout
    .card.podcast-episode
      h1 {{$page.podcastEpisode.title}}
      p.listen Listen to the episode:
      audio(:src="s3Folder + this.$page.podcastEpisode.fileUrl" controls="true")
      div.content(v-html="$page.podcastEpisode.content")
      //- h4 {{this.$route.params}}
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
    excerpt
    fileSize
    fileUrl
    showLength
    date
    path
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
      s3Folder: "https://s3.amazonaws.com/techjr/episodes/"
    };
  },
  filters: {
    showDate(val) {
      const d = new Date(val);
      const timeOptions = {
        weekday: "short",
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        timeZoneName: "short"
      };
      return d.toLocaleString("en-us", timeOptions);
    }
  },
  metaInfo: {
    title: this.$page.podcastEpisode.title,
    meta: [
      {
        name: "description",
        key: "description",
        content: this.$page.podcastEpisode.excerpt
      },
      {
        property: "og:title",
        key: "og:title",
        content: this.$page.podcastEpisode.title + " - Tech Jr Podcast"
      },
      {
        property: "og:url",
        key: "og:url",
        content: "https://techjr.dev" + this.$page.podcastEpisode.path
      },
      {
        property: "og:description",
        key: "og:description",
        content: this.$page.podcastEpisode.excerpt
      }
    ],
    script: [
      {
        innerHTML: JSON.stringify({
          "@context": "http://schema.org",
          "@type": "RadioEpisode",
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
          audio: {
            "@context": "http://schema.org",
            "@type": "AudioObject",
            // bitrate: "64k",
            contentSize: String(
              Number(this.$page.podcastEpisode.fileSize) * 1000 * 1000
            ),
            contentUrl: this.s3Folder + this.$page.podcastEpisode.fileUrl,
            duration: String(this.$page.podcastEpisode.showLength),
            // embedUrl:
            //   "https://devmode.fm/player-card/webpack-inside-out-with-sean-larkin",
            encodingFormat: "audio/mpeg",
            productionCompany: {
              "@id": "https://techjr.dev/#creator"
            },
            uploadDate: this.$page.podcastEpisode.date
          },
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
          dateModified: new Date(
            this.$page.podcastEpisode.date
          ).toISOString(),
          datePublished: new Date(
            this.$page.podcastEpisode.date
          ).toISOString(),
          description: this.$page.podcastEpisode.excerpt,
          genre: "technology",
          headline: this.$page.podcastEpisode.title,
          image: {
            "@type": "ImageObject",
            url: "https://techjr.dev/techJR-v.png"
          },
          inLanguage: "en-us",
          isAccessibleForFree: "true",
          mainEntityOfPage:
            "https://techjr.dev" + this.$page.podcastEpisode.path,
          name: this.$page.podcastEpisode.title,
          publisher: {
            "@id": "https://techjr.dev/#creator"
          },
          url: "https://techjr.dev" + this.$page.podcastEpisode.path
        }),
        type: "application/ld+json"
      }
    ],
    __dangerouslyDisableSanitizers: ["script"]
  }
};
</script>


<style lang="stylus">
.card.podcast-episode
  p.listen
    font-size 0.9rem
    color var(--lightGray)
    margin-bottom 6px
  .content
    margin-bottom 36px
    li, ul
      list-style-type disc
    ul
      padding 0 24px
      p
        margin 0
    li
      li
        list-style-type circle
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
  // max-width 450px
  width 100%
  height 30px
  margin 0 0 24px 0

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
