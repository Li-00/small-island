module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      "import", //ant按需引入
      { libraryName: "ant-design-vue", libraryDirectory: "es", style: 'css'}
    ]
  ]
}
