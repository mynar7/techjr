---
title: Learning how to write front-end tests with Tomasz Łakomy
date: 2020-02-05T10:00:00-05:00
excerpt: Front-end testing is a notoriously difficult subject to study, so we got a notorious teacher. This week senior front-end engineer Tomasz Łakomy walks us through the basics of front-end testing and explains the importance of writing tests for your code.
author: Lee Warrick &amp; Eddie Otero
tags: ['react', 'testing', 'jquery', "interviews", "tomasz lakomy"]
showLength: 1:11:00
fileUrl: 038_TechJr_TomaszLakomy.mp3
fileSize: 75.5
---

## Front-end Testing is Tough!

Eddie and I have spent a lot of time thinking about how to write front-end tests.

Sure, we learned how to write them almost immediately when we started our first developer jobs, but we didn't know how to write them _correctly_.

It's painful trying to learn front-end testing on your own. It's incredible easy to write bad front-end tests.

So we're always on the lookout for testing gurus to interview to teach us how to do things the right way. We've talked to a few guests about testing JavaScript before, but we never discussed front-end testing explicitly. ...Until now!

## Enter Tomasz

<style>
img[alt="tomasz"]:hover {
  opacity: 0;
  display: none;
}

img[alt="jquery"] {
  opacity: 0;
  transition: opacity 0.5s;
}

img[alt="jquery"]:hover {
  opacity: 1;
  animation: spin 5s linear 0.5s infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg)
  }
}

#app > div.card.podcast-episode > div.content > p:nth-child(8) {
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 200px 1fr;
  grid-template-rows: 200px;
}

#app > div.card.podcast-episode > div.content img {
  grid-area: 1 / 2 / 1 / 2;
  margin: 0;
  height: 200px;
  width: 200px;
  border-radius: 100px;
}
</style>

![jquery](./jquery-logo.png)
![tomasz](./tomasz.jpg)

[Tomasz](https://twitter.com/tlakomy) is a senior front-end engineer that knows a thing or two about writing front-end tests. We get into Jest, Cypress, and React-testing-library, as well as the right attitudes and strategies to bring into your testing practices.

Tomasz also likes jQuery, so we talk about that too.

---

Show Notes:

* 1:01 - Intro
* 3:36 - What tools do you use to test React?
  * [Jest](https://jestjs.io/en/)
  * [React-testing-library](https://testing-library.com/docs/react-testing-library/intro)
* 5:40 - Test Coverage
* 9:55 - Mocking with Jest
* 11:15 - How Jest renders the component tree
* 13:40 - React-testing-library and Accessibility
* 14:10 - E2E Tests and [Cypress](https://www.cypress.io/)
* 16:42 - What types of things would you test with Cypress?
* 19:08 - "Smoke Tests"
* 20:48 - Cross-browser testing
* 24:39 - Why you have to trust your tests
* 25:31 - Preventing deploys when tests fail
* 27:46 - Peace of mind from testing
* 30:11 - How to ensure your E2E tests aren't brittle
* 34:16 - How do you handle API calls in Cypress?
* 35:54 - Integration tests
  * _Write tests. Not too many. Mostly integration._ by Kent C Dodds - [Article](https://kentcdodds.com/blog/write-tests)
* 40:18 - Advice for people that are brand-new to testing
* 44:11 - Test Driven Development
* 46:10 - Who owns the code? Pushing for tests on your team
* 47:12 - React VR
  * [React 360 Demo](https://tlakomy-react-360.netlify.com/)
  * [Egghead React VR Course](https://egghead.io/courses/vr-applications-using-react-360)
* 51:59 - jQuery??
* 55:26 - Plugs! Follow Tomasz on:
  * [Twitter](https://twitter.com/tlakomy)
  * [Dev.to](https://dev.to/tlakomy)
* 56:23 - Nerd Minute!
  * Super Mario Speedruns
  * Webpack configs suck
  * Outer Worlds
  * Doom Patrol
  * Joker