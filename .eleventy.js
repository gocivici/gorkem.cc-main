const markdownIt = require('markdown-it')
const markdownItAttrs = require('markdown-it-attrs')
const markdownItAnchor = require('markdown-it-anchor')
const pluginTOC = require('eleventy-plugin-toc')
const embeds = require("eleventy-plugin-embed-everything");
const syntaxHighlightPlugin = require('@11ty/eleventy-plugin-syntaxhighlight');



const { DateTime } = require("luxon");

const markdownItOptions = {
  html: true,
  breaks: true,
  linkify: true
}
// set html to tru for the image slideshow
const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs).use(markdownItAnchor)

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlightPlugin);
  eleventyConfig.addCollection("projectList", function(collection) {
    const coll = collection.getFilteredByTag("projects");
    coll.sort((a,b)=>a.data.created-b.data.created);
    coll.reverse();
    console.log(coll)
    for(let i = 0; i < coll.length ; i++) {
      // console.log(coll[i].data.created);
      const prevPost = coll[i-1];
      const nextPost = coll[i + 1];
  
      coll[i].data["prevPost"] = prevPost;
      coll[i].data["nextPost"] = nextPost;
    }
  
    return coll;
  });

  // https://lewisdale.dev/post/adding-categories-to-eleventy/
  eleventyConfig.addCollection('categories', (collectionApi) => {
    const posts = collectionApi
        .getFilteredByTag("blog")
        .filter(p => !p.data.tags.includes("draft"));
        console.log(typeof posts);
    return posts.reduce((tags, post) => {
        post.data.tags.filter(tag => tag !== 'blog').forEach(tag => {
            if (!tags[tag]) {
                tags[tag] = 0;
            }
            tags[tag]++;
        });
        return tags;
    }, {"All posts": posts.length})
});

  eleventyConfig.addCollection('projectTags', (collectionApi) => {
    const projects = collectionApi
        .getFilteredByTag("projects")
        .filter(p => !p.data.tags.includes("draft"));
        console.log(typeof projects);

    return projects.reduce((tech, post) => {
        post.data.tech.filter(tag => tag !== 'projects').forEach(tag => {
            if (!tech[tag]) {
                tech[tag] = 0;
            }
            tech[tag]++;
        });
        return tech;
    }, {"All Projects": projects.length})
});

  eleventyConfig.setLibrary(
    'md',
    markdownLib
  );
  eleventyConfig.addPlugin(embeds);
  eleventyConfig.addPlugin(pluginTOC, {
    tags: ['h2', 'h3'], 
    wrapper:'ul',
    wrapperClass:'tree-view',
    ul: true,
  });
  eleventyConfig.addPassthroughCopy("./src/css/*");
  // eleventyConfig.addPassthroughCopy("**/*.webp");
  eleventyConfig.addPassthroughCopy('./src/**/*.{webp,jpeg,jpg,png,gif,svg,kmz,zip,css,js,ico,pdf,html}');
  // eleventyConfig.addPassthroughCopy('./src/**/*');
  // eleventyConfig.addPassthroughCopy("./src/custom.js");
  // eleventyConfig.addPassthroughCopy("./src/figlet.js");
  // eleventyConfig.addPassthroughCopy("./src/projects.js");
  // eleventyConfig.addPassthroughCopy("./src/splide-init.js");
  eleventyConfig.addWatchTarget("./src/css/");
  // eleventyConfig.addPassthroughCopy("./src/images/*");
  // eleventyConfig.addPassthroughCopy({ "./src/favicons": "/" });
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_FULL);
  });
    return {
      dir: {
        input: "src",
        output: "public"
      }
    };
    
  };

