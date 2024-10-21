<template lang="pug">
  Layout
    .card
      h1 About the Show
      p Tech JR is a show created to help early career developers navigate the tech industry.
      |  Show topics include programming lanugages, web technologies and frameworks, as well as job search strategies and soft skills.
      h2 Hosts
      .hosts
        .bio
          div 
            img.host-pic(src='../assets/images/lee.jpg')
            strong.host-name Lee Warrick
          p Lee Warrick is a software engineer and educator with experience across the stack in web development.
            |  Being a Career-Changer himself, Lee has made it his mission to pay-forward all of the help he received as a new developer ten-fold, and improve the lives of new developers in any way he can.
          .social-icons
            a(href="https://www.linkedin.com/in/lee-warrick/")
              img.social(src='../assets/images/linkedin.png')
            a(href="https://twitter.com/leewarrickjr")
              img.social(src='../assets/images/twitter.png')
        .bio
          div
            img.host-pic(src='../assets/images/eddie.jpg')
            strong.host-name Edwin Otero
          p Eddie Otero is a Front-end Developer for Capco and former designer of 15 years.
            |  Eddie would much rather doodle or code than engage in public speaking, so naturally he thought a podcast would be a perfect fit for his quiet nature!
          .social-icons
            a(href="https://www.linkedin.com/in/edwin-otero/")
              img.social(src='../assets/images/linkedin.png')
            a(href="https://twitter.com/ed0ter0")
              img.social(src='../assets/images/twitter.png')
            a(href="https://instagram.com/ed0ter0")
              img.social(src='../assets/images/instagram.png')



      h2 Contact
      p Please feel free to reach out to us at #[a.link(href="mailto:techjrpodcast@gmail.com") techjrpodcast@gmail.com]
        |  with any questions or sponsorship inquiries.
      p We would love to hear from you!

</template>

<style lang="stylus" scoped>
*
  text-align center
h1
  margin-top 20px
  margin-bottom 40px
h2
  margin-top 40px
  margin-bottom 40px
.host-pic
  border-radius 100px
  max-width 150px
  height auto
  display block
  margin auto
  margin-bottom 10px
.social-icons
  display flex
  align-items center
  justify-content center
.social
  width 30px
  height auto
  margin 0 3px
.host-name
  text-align center
  display block
.hosts
  display flex
  flex-wrap wrap
  justify-content space-around
.bio
  width 350px
  margin-bottom 40px
</style>

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
