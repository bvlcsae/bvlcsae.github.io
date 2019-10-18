module.exports = {
  base: '/collection/',
  dest: './collection',

  title: 'Collection',
  description: '收藏集',
  themeConfig: {
    nav: [
      {
        text: '教程',
        items: [
          {
            text: '',
            items: [
              { text: 'Vue', link: '/frameworks/vue/' }
            ],
          },
        ],
      },
      {
        text: '文档列表',
        items: [
          {
            text: 'frameworks',
            items: [
              { text: 'Vue', link: '/frameworks/vue/' },
              { text: 'React', link: '/frameworks/react/' }
            ],
          },
        ],
      },
      {
        text: '传送门',
        items: [
          {
            text: '我的',
            items: [
              { text: 'Vue', link: '/frameworks/vue/' },
              { text: 'React', link: '/frameworks/react/' }
            ],
          },
        ],
      },
    ],
    evergreen: true,
    chainWebpack (config, isServer) {
      // config
      //   .output
      //   .publicPath('./')
    }
  }
}