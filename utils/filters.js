const { DateTime } = require('luxon')
const querier = require('./querier');
const slugify = require("slugify");
const markdownIt = require("markdown-it");
const md = new markdownIt({
	html: true,
});

let exp = {
	// https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
	htmlDateString: (dateObj) => {
		return DateTime.fromJSDate(dateObj, {
			zone: 'utc'
		}).toFormat('yyyy-LL-dd');
	},
	postDate: (dateObj) => {
		return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
	},
	slug: (str) => {
		if (!str) {
			return;
		}

		return slugify(str, {
			lower: true,
			strict: true,
			remove: /["]/g,
		});
	},
	markdown: (content) => {
		return md.render(content);
	},
	excerpt: (post) => {
		const content = post.replace(/(<([^>]+)>)/gi, "");
		return content.substr(0, content.lastIndexOf(" ", 200)) + "...";
	},
	addNbsp: (str) => {
		if (!str) {
			return;
		}
		let title = str.replace(/((.*)\s(.*))$/g, "$2&nbsp;$3");
		title = title.replace(/"(.*)"/g, '\\"$1\\"');
		return title;
	},
	unique: (arr) => {
		return arr.filter((value, index, array) => array.indexOf(value) === index)
	},
	randomItem: (arr) => {
		arr.sort(() => {
			return 0.5 - Math.random();
		});
		return arr.slice(0, 1);
	},
	randomItem: (arr) => {
		arr.sort(() => {
			return 0.5 - Math.random();
		});
		return arr.slice(0, 1);
	},
	grab: (arr, value, key) => {
		return arr.filter(item => Array.from(value).includes(item.data[key]));
	},
	grabUnique: (arr, value, key) => {
		return this.unique(this.grab(arr, value, key));
	},
	pluck: (arr, uniqueValue, key) => this.grab(arr, uniqueValue, key)[0],
	pluckById: (arr, id) => {
		return this.pluck(arr, id, 'id');
	},
}

module.exports = exp;