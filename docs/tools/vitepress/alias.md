# VitePress 设置路径别名

## 背景

之前在使用 webpack 开发的时候可以为当前项目中的任意常用文件夹设置别名（alias），例如最常见的是在使用 Vue CLI 时，直接可以用 `@` 表示项目下的 `src` 文件夹。在编辑 VitePress 文档的过程中，由于需要引入自定义的 Vue 组件，涉及到了路径的问题。一开始使用的是相对路径，但是当项目重新调整结构的时候就需要也重新调整对应的路径，非常麻烦。

## 目标

在 VitePress 项目中使用别名

## 设置别名

由于第一我没有深入使用过 Vite，因此不知道如何配置别名，第二 VitePress 下还没有 `vite.config.js` 配置文件，也不知道在哪里配置。

### 如何配置

一开始在 stackoverflow 上找到了针对 Vite 的配置，后来才在 Vite 的官网上找到[对应的说明][Vite - Config]。

### 在哪配置

一开始以为也是在项目根目录中创建一个 `vite.config.js` 文件，但是在官网上没有找到这个说法，配置文件只有 `.vitepress/config.js` 这一个。直接把 `alias` 的配置项放到文件中是没有生效的。后来在 [Vite CHANGELOG][Vite CHANGELOG] 里面找到了蛛丝马迹。

>alias option has been removed. Use vite.resovle.alias instead.

于是最终的配置如下：

```javascript
module.exports = {
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '../../')
      }
    }
  }
}
```

这里还有一个需要注意点的，`__dirname` 表示的是当前这个配置文件所在的文件夹，即 `/docs/.vitepress`，所以要定位到根目录还需要向上找两级目录。

## 参考资料

- [Vite - Config][Vite - Config]
- [Vite CHANGELOG][Vite CHANGELOG]

[Vite - Config]: https://vitejs.dev/config/#resolve-alias
[Vite CHANGELOG]: https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md
