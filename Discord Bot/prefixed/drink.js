const {
    details
} = require('../config')
module.exports = {
    data: {
        name: 'drink',
        description: 'drink gives me a bowl of water and I love drinking water',
        aliases: ['water', 'w'],
    },
    async execute(msg, args, client) {
        const {
            drink
        } = details
        msg.reply({
            embeds: [{
                title: drink.description,
                image: {
                    url: drink.image,
                },
            }, ],
        })
    },
}