module.exports = {
    player: (podcast, type, classes) => {
        if (type !== 'latest' && type !== 'playlist')
            throw Error(`${type} is not a valid player type.`)

        return `
            <iframe 
                title="${podcast.title} audio player"
                frameborder="no" 
                scrolling="no" 
                seamless=""
                class="${classes}" 
                src="https://share.transistor.fm/e/${podcast.slug}/${type}">
            </iframe>
        `;
    },
}