module.exports = {
  base: '/docs/',
  dest: './docs',

  title: 'documents_collection',
  description: '我的文档收藏集',
  themeConfig: {
    nav: [
      {
        text: '教程',
        items: [
          {
            text: '',
            items: [
              { text: 'Vue', link: '/frameworks/vue/' },
              { text: 'React', link: '/frameworks/react/' }
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
        sidebar: 'auto'
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