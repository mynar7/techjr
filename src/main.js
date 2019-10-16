// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import '~/assets/styles/_global.styl'
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  head.link.push({
    type: 'application/rss+xml',
    rel: 'alternate',
    title: 'Tech Jr Podcast',
    href: 'https://techjr.dev/rss.xml'
  })
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Ubuntu:300,400,700'
  })
  head.link.push({
    rel: 'apple-touch-icon',
    sizes: "180x180",
    href: '/apple-touch-icon.png'
  })
  head.link.push({
    rel: 'icon',
    type: 'image/png',
    sizes: "32x32",
    href: '/favicon-32x32.png'
  })
  head.link.push({
    rel: 'icon',
    type: 'image/png',
    sizes: "16x16",
    href: '/favicon-16x16.png'
  })
  head.link.push({
    rel: 'manifest',
    href: '/site.webmanifest'
  })
  head.link.push({
    rel: 'mask-icon',
    href: '/safari-pinned-tab.svg',
    color: '#5bbad5'
  })
  head.link.push({
    name: 'msapplication-Tilecolor',
    content: '#da532c'
  })
  head.link.push({
    name: 'theme-color',
    content: '#005bc3'
  })
  head.meta.push({
    name: 'keywords',
    content: 'HTML, CSS, JavaScript, junior developer, Web Development, junior developer podcast'
  })
  head.meta.push({
    property: 'og:title',
    key: 'og:title',
    content: 'The TechJr Podcast'
  })
  head.meta.push({
    property: 'og:description',
    key: 'og:description',
    content: 'Lee Warrick and Edwin Otero explore what it\'s like to break into the Tech field as junior developers as well as how to stay up-to-date on new technology.',
  })
  head.meta.push({
    name: 'description',
    key: 'description',
    content: 'Lee Warrick and Edwin Otero explore what it\'s like to break into the Tech field as junior developers as well as how to stay up-to-date on new technology.',
  })
  head.meta.push({
    property: 'og:image',
    content: 'https://techjr.dev/techJR_logo-card.jpg'
  })
  head.meta.push({
    property: 'og:url',
    content: 'https://techjr.dev'
  })
  head.meta.push({
    property: 'twitter:site',
    content: '@TechJrPodcast'
  })
  head.meta.push({
    property: 'twitter:creater',
    content: '@leewarrickjr'
  })
  head.meta.push({
    name: 'twitter:image',
    content: 'https://techjr.dev/techJR_logo-card.jpg'
  })
  head.meta.push({
    name: 'twitter:alt:image',
    content: 'Tech Jr Logo'
  })
  head.meta.push({
    name: 'twitter:card',
    content: 'summary_large_image'
  })
}
