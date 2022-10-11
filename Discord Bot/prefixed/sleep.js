const {
    details
} = require('../config')
module.exports = {
    data: {
        name: 'sleep',
        description: 'this makes me fall asleep',
        aliases: ['s'],
    },
    async execute(msg, args, client) {
        const {
            sleep
        } = details
        msg.reply({
            embeds: [{
                title: sleep.description,
                image: {
                    url: sleep.image,
                },
            }, ],
        })
    },
}