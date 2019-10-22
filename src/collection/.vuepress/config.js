module.exports = {
  base: '/collection/',
  dest: './collection',

  title: 'Collection',
  description: '收藏集',
  themeConfig: {
    nav: [
      {
        text: '文档',
        items: [
          {
            text: 'frameworks',
            items: [
              { text: 'Vue', link: '/docs/frameworks/vue/' },
              { text: 'React', link: '/docs/frameworks/react/' },
              { text: 'adfs', link: '/docs/frameworks/adf/' }
            ],
          },
          {
            text: 'program language',
            items: [
              { text: 'Python', link: '/docs/languages/python/' },
            ]
          },
          {
            text: 'webpack',
            items: [
              { text: 'webpack', link: 'https://webpack.js.org' },
            ]
          }
        ],
      },
      {
        text: '问题总结',
        items: [
          {
            text: '',
            items: [
              { text: 'Vue', link: '/guide/' }
            ],
          },
        ],
      },
      {
        text: '传送门',
        items: [
          {
            text: '搜索',
            items: [
              { text: '百度', link: 'https://baidu.com' },
              { text: 'Google', link: 'https://google.com' }
            ],
          },
        ],
      },
    ],
    sidebar: 'auto',
    evergreen: true,
    chainWebpack (config, isServer) {
      // config
      //   .output
      //   .publicPath('./')
    }
  }
}