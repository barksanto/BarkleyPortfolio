export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets")
  eleventyConfig.addPassthroughCopy("src/favicon.svg")
  eleventyConfig.addPassthroughCopy("src/robots.txt")

  // Service pages in menu order (see `order` in each page's front matter)
  eleventyConfig.addCollection("services", (api) =>
    api.getFilteredByTag("service").sort((a, b) => a.data.order - b.data.order)
  )

  eleventyConfig.addFilter("isoDate", (date) => new Date(date).toISOString().slice(0, 10))

  return {
    dir: { input: "src", output: "_site" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  }
}
