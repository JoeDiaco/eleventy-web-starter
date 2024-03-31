const filters = require('./utils/filters.js')
const transforms = require('./utils/transforms.js')
const collections = require('./utils/collections.js')
const plugins = require('./utils/plugins.js')
const shortcodes = require('./utils/shortcodes.js')
const pairedShortcodes = require('./utils/paired_shortcodes.js')

module.exports = function (eleventyConfig) {
	// Folders to copy to build dir (See. 1.1)
	eleventyConfig.addPassthroughCopy("src/static");

	// Filters 
	Object.keys(filters).forEach((filterName) => {
		eleventyConfig.addFilter(filterName, filters[filterName])
	});

	// Transforms
	Object.keys(transforms).forEach((transformName) => {
		eleventyConfig.addTransform(transformName, transforms[transformName])
	});

	// Collections
	Object.keys(collections).forEach((collectionName) => {
		eleventyConfig.addCollection(collectionName, collections[collectionName])
	});

	// Plugins
	Object.keys(plugins).forEach((pluginName) => {
		eleventyConfig.addPlugin(plugins[pluginName])
	});

	// shortcodes
	Object.keys(shortcodes).forEach((shortcodeName) => {
		eleventyConfig.addShortcode(shortcodeName, shortcodes[shortcodeName])
	});

	// paired shortcodes
	Object.keys(pairedShortcodes).forEach((pairedShortcodeName) => {
		eleventyConfig.addPairedShortcode(pairedShortcodeName, pairedShortcodes[pairedShortcodeName])
	});

	// This allows Eleventy to watch for file changes during local development.
	eleventyConfig.setUseGitIgnore(false);

	return {
		dir: {
			input: "src/",
			output: "dist",
			includes: "_includes",
			layouts: "_layouts"
		},
		templateFormats: ["html", "md", "njk"],
		htmlTemplateEngine: "njk",

		// 1.1 Enable eleventy to pass dirs specified above
		passthroughFileCopy: true
	};
};
