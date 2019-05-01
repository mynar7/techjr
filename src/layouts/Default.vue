<template lang="pug">
  div(class="layout")
    header(v-if="$route.path !== '/'" class="header")
      strong
        g-link(to="/")
          img(src="../assets/images/logo.png")
      nav(class="nav")
        g-link(class="nav__link" to="/") Home
        g-link(class="nav__link" to="/about") About
    slot
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px 0;
  height: 80px;
}

.header img {
  margin-left: -30px
}

.nav__link {
  margin-left: 20px;
}
</style>
