module.exports = {
  plugins: [
    require('postcss-nested'),
    require('postcss-import'),
    require('cssnano')({
      preset: 'default',
    }),
  ]
}