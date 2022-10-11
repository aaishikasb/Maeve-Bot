const {
    details
} = require('../config')
module.exports = {
    data: {
        name: 'scratch',
        description: 'this makes me scratch myself!',
        aliases: ['sc'],
    },
    async execute(msg, args, client) {
        const {
            scratch
        } = details
        msg.reply({
            embeds: [{
                title: scratch.description,
                image: {
                    url: scratch.image,
                },
            }, ],
        })
    },
}