const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: '/',
  productionSourceMap: false,
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/styles/variables.scss";`
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule('svg')
      .exclude.add(resolve('src/assets/images'))
      .end()
    config.module
      .rule('svg1')
      .test(/\.svg$/)
      .use('svg-sprite')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
      .include.add(resolve('src/assets/images'))
      .end()
  }
}
