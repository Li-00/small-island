const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  loaderOptions: {
    less: {
      javascriptEnabled: true
    }
  }
})
