/*
 * @Author: huangxiaomei huangxiaomei@gdgjedu.org
 * @Date: 2023-08-25 08:29:37
 * @LastEditors: huangxiaomei huangxiaomei@gdgjedu.org
 * @LastEditTime: 2023-08-25 16:34:27
 * @Description:
 */
const { defineConfig } = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
module.exports = defineConfig({
    transpileDependencies: true,
    css: {
        loaderOptions: {
            scss: {
                additionalData: `
                @import "./src/styles/index.scss";
              `,
            },
        },
    },
    configureWebpack: {
        plugins: [
            //配置webpack自动按需引入element-plus，
            require('unplugin-element-plus/webpack')({
                libs: [
                    {
                        libraryName: 'element-plus',
                        esModule: true,
                        resolveStyle: (name) => {
                            return `element-plus/theme-chalk/${name}.css`
                        },
                    },
                ],
            }),
            AutoImport({
                resolvers: [ElementPlusResolver()],
            }),
            Components({
                resolvers: [ElementPlusResolver()],
            }),
        ],
    },
})
