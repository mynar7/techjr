module.exports = {
  siteName: 'Tech Jr Podcast',
  siteUrl: 'https://techjr.dev',
  // pathPrefix: '/gridsome-test',
  plugins: [
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-144549907-3'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: './episodes/**/*.md',
        typeName: 'PodcastEpisode',
        // route: '/blog/:year/:month/:day/:slug'
        route: '/episodes/:year/:slug',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            route: '/episodes/tag/:id',
            create: true
          }
        }
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        // cacheTime: 600000, // default
        // exclude: ['/episodes/tag/*'],
        config: {
          '/': {
            changefreq: 'weekly',
            priority: 1.0
          },
          '/episodes/**/*': {
            changefreq: 'weekly',
            priority: 0.8
          },
          '/about': {
            changefreq: 'monthly',
            priority: 0.5
          }
        },
        // staticUrls: [
        //   {
        //     url: '/images/',
        //     img: [
        //       {
        //         url: '/images/img1.jpg',
        //         caption: 'Image One',
        //         title: 'The Title of Image One',
        //         geoLocation: 'Trondheim, Norway',
        //         license: 'https://creativecommons.org/licenses/by/4.0/'
        //       },
        //       {
        //         url: '/images/img2.jpg',
        //         caption: 'Image Two',
        //         title: 'The Title of Image Two',
        //         geoLocation: 'Trondheim, Norway',
        //         license: 'https://creativecommons.org/licenses/by/4.0/'
        //       }
        //     ]
        //   }
        // ]
      }
    },
    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'PodcastEpisode',
        latest: true,
        maxItems: 25,
        feedOptions: {
          title: 'Tech Jr',
          description: 'Thinking of pursuing a career as a programmer? Lee Warrick and Edwin Otero explore what it\'s like to break into the Tech field as junior developers as well as how to stay up-to-date on new technology.',
          feed_url: 'https://techjr.dev/rss.xml',
          site_url: 'https://techjr.dev',
          image_url: 'https://techjr.dev/techJR-apple-logo.jpg',
          // docs: 'http://example.com/rss/docs.html',
          managingEditor: 'leewarrick@gmail.com (Lee Warrick)',
          webMaster: 'leewarrick@gmail.com (Lee Warrick)',
          copyright: '2019 Lee Warrick and Edwin Otero',
          language: 'en-us',
          categories: ['Technology', 'Business', 'Education'],
          // pubDate: 'May 19, 2019 04:00:00 GMT',
          pubDate: 'April 8, 2019 14:00:00 GMT',
          ttl: '60',
          custom_namespaces: {
            'itunes': 'http://www.itunes.com/dtds/podcast-1.0.dtd'
          },
          custom_elements: [
            { 'itunes:subtitle': 'A Tech podcast by Juniors Devs, for Junior Devs!' },
            { 'itunes:explicit': 'no' },
            { 'itunes:author': 'Lee Warrick and Edwin Otero' },
            { 'itunes:summary': 'Thinking of pursuing a career as a programmer? Lee Warrick and Edwin Otero explore what it\'s like to break into the Tech field as junior developers as well as how to stay up-to-date on new technology.' },
            {
              'itunes:owner': [
                { 'itunes:name': 'Lee Warrick' },
                { 'itunes:email': 'leewarrick@gmail.com' }
              ]
            },
            { 'itunes:type': 'episodic' },
            { 'itunes:keywords': 'webdevelopment,html,css,javascript,js' },
            {
              'itunes:image': {
                _attr: {
                  href: 'https://techjr.dev/techJR-apple-logo.jpg'
                }
              }
            },
            {
              'itunes:category': [
                {
                  _attr: {
                    text: 'Technology'
                  }
                },
              ]
            },
            {
              'itunes:category': [
                {
                  _attr: {
                    text: 'Business'
                  }
                },
              ]
            },
            {
              'itunes:category': [
                {
                  _attr: {
                    text: 'Education'
                  }
                },
              ]
            },
          ]
        },
        feedItemOptions: node => {
          // console.log(node)
          return ({
            title: node.title,
            description: node.excerpt,
            date: node.date,
            url: 'https://techjr.dev' + node.path,
            author: node.author,
            categories: node.tags,
            enclosure: { url: 'https://s3.amazonaws.com/techjr/episodes/' + node.fileUrl, size: (Number(node.fileSize) * 1000 * 1000), type: 'audio/mpeg' }, // optional enclosure
            custom_elements: [
              { 'itunes:author': 'Lee Warrick and Edwin Otero' },
              { 'itunes:subtitle': node.excerpt },
              {
                'itunes:image': {
                  _attr: {
                    href: 'https://techjr.dev/techJR-apple-logo.jpg'
                  }
                }
              },
              { 'itunes:duration': node.showLength },
              { 'itunes:explicit': 'no' }
            ]
          })
        },
        output: {
          dir: './static',
          name: 'rss.xml'
        }
      }
    }
  ],
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      // anchorClassName: 'icon icon-link',
      // plugins: [
      //   // ...global plugins
      // ]
    }
  },
  chainWebpack: config => {
    config.module
      .rule('pug')
      .test(/\.pug$/)
      .use('pug-plain-loader')
      .loader('pug-plain-loader')
    config.module
      .rule('styl')
      .test(/\.styl$/)
      .use('stylus-loader')
      .loader('stylus-loader')
  }
}