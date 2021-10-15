module.exports = {
  title: '六文銭',
  description: '前端技术博客',
  themeConfig: {
    sidebar: {
      '/': [
        {
          title: '动画',
          children: [
            {
              text: '夕阳飞鸟',
              link: '/ui/flying-birds'
            },
            {
              text: '水波效果的按钮',
              link: '/ui/ripple-button'
            }
          ]
        }
      ]
    }
  },
  base: '/code/'
}
