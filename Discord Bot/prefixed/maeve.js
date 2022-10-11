const {
    details
} = require('../config')
module.exports = {
    data: {
        name: 'maeve',
        description: "you can have me do random activities, a feature that is being coded right now, but as of yet I'll give you my introduction! By typing !help, like you just now did, you can ask me to help you out! !sleep makes me fall asleep, !eat gets me a carrot, !drink gives me a bowl of water and I love drinking water! Thank you for calling me!If you type !maeve, you can have me do random activities, a feature that is being coded right now, but as of yet I'll give you my introduction",
        aliases: ['m'],
    },
    async execute(msg, args, client) {
        const {
            maeve
        } = details
        msg.reply({
            embeds: [{
                title: maeve.description,
                image: {
                    url: maeve.image,
                },
            }, ],
        })
    },
}