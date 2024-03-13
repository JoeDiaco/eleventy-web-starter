module.exports = {
	"title": "Total Pillow Chad Productions",
	"description": "Total Pillow Chad Productions is taking audio storytelling to the next level.",
	"slogan": "Entertain the pain away.",
	"url": "https://totalpillowchad.com",
	"author": "Joe Diaco",
	"socials": {
		"twitter": {
			"handle": "@totalpillowchad",
			"url": "https://twitter.com/totalpillowchad",
		},
		"instagram": {
			"handle": "@totalpillowchad",
			"url": "https://twitter.com/totalpillowchad",
		},
		"facebook": {
			"url": "https://www.facebook.com/profile.php?id=61557333870494"
		}
	},
	"logo": {
		"main": "",
		"opengraph_default": "/static/opengraph-default.jpg",
		"favicon": {
			"16px": "/static/favicon-16x16.png",
			"32px": "/static/favicon-32x32.png",
			"appletouch": "/static/apple-touch-icon.png"
		}
	},
	"env": process.env.ELEVENTY_ENV === 'production',
	"navigationOptions":
	{
		"navbar": {
			listElement: "ul",            // Change the top level tag
			listItemElement: "li",        // Change the item tag
			listClass: "flex flex-col space-y-4 lg:mt-0 lg:flex-row lg:space-y-0",
			anchorClass: "text-gray-700 lg:mx-6 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500",              // Add a class to the anchor
			activeAnchorClass: "",        // Add a class to the current page’s anchor
			showExcerpt: false
		},
		"footer": {
			listElement: "ul",            // Change the top level tag
			listItemElement: "li",        // Change the item tag
			listClass: "flex flex-wrap justify-center mt-6 -mx-4",
			anchorClass: "mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400",              // Add a class to the anchor
			activeAnchorClass: "",        // Add a class to the current page’s anchor
			showExcerpt: false
		}
	}
}

// #F7B539