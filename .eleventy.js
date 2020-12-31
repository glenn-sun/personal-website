module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('css')
  eleventyConfig.addPassthroughCopy('docs')
  eleventyConfig.addPassthroughCopy('img')

  return {
    passthroughFileCopy: true
  }
}