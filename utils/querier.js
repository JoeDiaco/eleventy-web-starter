// require the data files
const podcasts = require('../src/_data/podcasts').data;
const episodes = require('../src/_data/episodes').data;
const actors = require('../src/_data/actors').data;

module.exports = {
    getPodcastById: (id) => {
        return podcasts.find(podcast => podcast.id === id)
    },
}