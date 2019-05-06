// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import '~/assets/styles/_global.styl'
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Ubuntu:300,400,700'
  })
  head.link.push({
    rel: 'icon',
    type: 'image/x-icon',
    href: './favicon.ico'
  })
  head.meta.push({
    name: 'keywords',
    content: 'HTML,CSS,JavaScript,Junior Developers,Web Development'
  })
  head.meta.push({
    property: 'og:title',
    content: 'The TechJr Podcast'
  })
  head.meta.push({
    property: 'og:description',
    content: 'Lee Warrick and Edwin Otero explore what it\'s like to break into the Tech field as junior developers as well as how to stay up-to-date on new technology.'
  })
  head.meta.push({
    property: 'og:image',
    content: 'https://techjr.dev/techJR-v.png'
  })
  head.meta.push({
    property: 'og:url',
    content: 'https://techjr.dev'
  })
}
