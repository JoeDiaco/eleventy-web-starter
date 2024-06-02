module.exports = {
	"title": "Total Pillow Chad Productions",
	"description": "Total Pillow Chad Productions is taking audio storytelling to the next level.",
	"slogan": "Entertain the pain away.",
	"url": process.env.URL || "http://localhost:8080",
	"author": "Joe Diaco",
	"socials": {
		"twitter": {
			"handle": "@totalpillowchad",
			"url": "https://twitter.com/totalpillowchad",
		},
		"instagram": {
			"handle": "@totalpillowchad",
			"url": "https://www.instagram.com/totalpillowchad/",
		},
		"facebook": {
			"url": "https://www.facebook.com/profile.php?id=61557333870494"
		}
	},
	"logo": {
		"main": {
			"flat": "/static/tpc_logo_flat.svg",
			"alt": "Total Pillow Chad Productions logo"
		},
		"opengraph_default": "/static/opengraph-default.jpg",
		"favicon": {
			"16px": "/static/favicon-16x16.png",
			"32px": "/static/favicon-32x32.png",
			"appletouch": "/static/apple-touch-icon.png"
		}
	},
	"env": process.env.ELEVENTY_ENV === 'production',
}

// #F7B539