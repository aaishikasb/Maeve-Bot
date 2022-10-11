const {
    images
} = require('../config')
module.exports = {
    data: {
        name: 'lick',
        description: 'this makes me lick you!',
        aliases: ['l'],
    },
    async execute(msg, args, client) {
        const {
            lick
        } = images
        msg.reply({
            embeds: [{
                title: lick.description,
                image: {
                    url: lick.image,
                },
            }, ],
        })
    },
}