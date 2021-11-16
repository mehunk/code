const path = require('path')

module.exports = {
  title: '六文銭',
  description: '前端技术博客',
  themeConfig: {
    nav: [
      {
        text: 'UI',
        link: '/',
        activeMatch: '^/$|^/ui/'
      },
      {
        text: '工具',
        link: '/tools/vitepress/alias',
        activeMatch: '^/tools/'
      },
      {
        text: 'JavaScript',
        link: '/js/dom/trigger-mouseover-manually',
        activeMatch: '^/js/'
      }
    ],
    sidebar: {
      '/ui/': getUiSidebar(),
      '/tools/': getToolsSidebar(),
      '/js/': getJsSidebar(),
      '/': getUiSidebar(),
    }
  },
  base: '/code/',
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '../../')
      }
    }
  }
}

function getUiSidebar () {
  return [
    {
      text: '动画',
      children: [
        {
          text: '夕阳飞鸟',
          link: '/ui/animation/flying-birds'
        },
        {
          text: '水波效果的按钮',
          link: '/ui/animation/ripple-button'
        }
      ]
    }
  ]
}

function getToolsSidebar () {
  return [
    {
      text: 'VitePress',
      children: [
        {
          text: '设置路径别名',
          link: '/tools/vitepress/alias'
        }
      ]
    }
  ]
}

function getJsSidebar () {
  return [
    {
      text: 'JavaScript',
      children: [
        {
          text: '手动触发鼠标移入事件',
          link: '/js/dom/trigger-mouseover-manually'
        }
      ]
    }
  ]
}
