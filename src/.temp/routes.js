export default [
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "component--home" */ "/Users/lee.warrick/Projects/techjr/src/pages/Index.vue"),
    meta: { isStatic: true }
  },
  {
    name: "about",
    path: "/about",
    component: () => import(/* webpackChunkName: "component--about" */ "/Users/lee.warrick/Projects/techjr/src/pages/About.vue"),
    meta: { isStatic: true }
  },
  {
    name: "404",
    path: "/404",
    component: () => import(/* webpackChunkName: "component--404" */ "/Users/lee.warrick/Projects/techjr/node_modules/gridsome/app/pages/404.vue"),
    meta: { isStatic: true, isIndex: false }
  },
  {
    name: "tag",
    path: "/episodes/tag/:id",
    component: () => import(/* webpackChunkName: "component--tag" */ "/Users/lee.warrick/Projects/techjr/src/templates/Tag.vue")
  },
  {
    name: "podcastEpisode",
    path: "/episodes/:year/:slug",
    component: () => import(/* webpackChunkName: "component--podcast-episode" */ "/Users/lee.warrick/Projects/techjr/src/templates/PodcastEpisode.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "component--404" */ "/Users/lee.warrick/Projects/techjr/node_modules/gridsome/app/pages/404.vue"),
    meta: { isStatic: true, isIndex: false }
  }
]

