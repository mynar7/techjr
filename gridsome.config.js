module.exports = {
  siteName: 'Tech Jr',
  siteUrl: 'https://techjr.dev',
  // pathPrefix: '/gridsome-test',
  plugins: [
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
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'PodcastEpisode',
        feedOptions: {
          title: 'Tech Jr',
          description: 'Thinking of pursuing a career as a programmer? We did too, and then we did! Lee Warrick and Edwin Otero explore what it\'s like to break into the Tech field as junior developers as well as how to stay up-to-date on new technology.',
          feed_url: 'https://techjr.dev/rss.xml',
          site_url: 'https://techjr.dev',
          image_url: 'http://example.com/icon.png',
          // docs: 'http://example.com/rss/docs.html',
          managingEditor: 'leewarrick@gmail.com (Lee Warrick)',
          webMaster: 'leewarrick@gmail.com (Lee Warrick)',
          copyright: '2019 Lee Warrick',
          language: 'en-us',
          categories: ['Technology', 'Software How-To', 'Tech News'],
          pubDate: 'May 20, 2012 04:00:00 GMT',
          ttl: '60',
          custom_namespaces: {
            'itunes': 'http://www.itunes.com/dtds/podcast-1.0.dtd'
          },
          custom_elements: [
            { 'itunes:subtitle': 'A show about everything' },
            { 'itunes:explicit': 'no' },
            { 'itunes:author': 'Lee Warrick &amp; Edwin Otero' },
            { 'itunes:summary': 'All About Everything is a show about everything. Each week we dive into any subject known to man and talk about it as much as we can. Look for our podcast in the Podcasts app or in the iTunes Store' },
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
                  href: 'http://example.com/podcasts/everything/AllAboutEverything.jpg'
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
                    text: 'Technology'
                  }
                },
                {
                  'itunes:category': {
                    _attr: {
                      text: 'Software How-To'
                    }
                  }
                }
              ]
            }
          ]
        },
        feedItemOptions: node => {
          // console.log(node)
          return ({
            title: node.title,
            description: node.excerpt,
            date: node.fields.date,
            url: 'https://techjr.dev/episodes/' + node.year + '/' + node.slug,
            author: node.fields.author,
            categories: node.fields.tags,
            enclosure: { url: 'https://s3.amazonaws.com/techjr/episodes/' + node.fields.fileUrl, size: node.fields.fileSize, type: 'audio/mpeg' }, // optional enclosure
            custom_elements: [
              { 'itunes:author': 'Lee Warrick &amp; Edwin Otero' },
              { 'itunes:subtitle': 'A short primer on table spices' },
              {
                'itunes:image': {
                  _attr: {
                    href: 'http://example.com/podcasts/everything/AllAboutEverything/Episode1.jpg'
                  }
                }
              },
              { 'itunes:duration': node.fields.showLength },
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