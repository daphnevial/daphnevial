import { HtmlBasePlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(HtmlBasePlugin);
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addFilter("year", () => new Date().getFullYear());
}

export const config = {
  dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
  // En GitHub Pages el sitio vive en /<repo>/; en local, en /
  pathPrefix: process.env.PATH_PREFIX || "/",
  htmlTemplateEngine: "njk",
  markdownTemplateEngine: "njk",
};
