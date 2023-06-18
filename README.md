# small-island

## 项目结构
```
├── README.md
├── node_modules
├── public.ts
├── src
│   ├── assets
    |———— logo.png
    └── commponents
    |———— HelloWord.vue
    |—— App.vue
    |—— main.js
├── babel.comfig.js
├── jsconfig.json
├── package.json
├── vue.config.json
```


## 目录解析
目录/文件        | 说明                                       |
| ------------ | ---------------------------------------- |
| node_modules | 项目依赖模块，npm install 产物                            |
| src          | 开发目录             |
| assets       | 静态资源，字体图片等                           |
| components   | vue 组件存放目录               |
| App.vue      | 项目入口文件 |
| main.js      | 项目的核心文件                                 |
| index.html   | 首页入口文件          |
| package.json | 项目配置文件                                  |
vue 使用参考官方文档  https://cn.vuejs.org/

# 项目配置
注意：项目使用 yarn 作为包管理器
环境版本
@vue/cli 5.0.8
yarn 1.22.19
npm 9.6.7
node v18.5.0


git clone https://github.com/Li-00/small-island.git
cd island

可使用 npm 或 yarn 启动，
npm install
npm run-script serve
或
yarn install
yarn run serve

