const {
    details
} = require('../config')
const {
    images
} = details.eat
module.exports = {
    data: {
        name: 'eat',
        description: 'this feeds me!',
        options: [{
            name: 'food',
            description: 'the food you want to eat',
            type: 3,
            required: true,
            choices: Object.keys(images).map(food => {
                return {
                    name: `eat ${food}`,
                    value: food,
                }
            }),
        }, ],
    },
    async execute(interaction, client) {
        const food = interaction.options.getString('food')
        await interaction.reply({
            embeds: [{
                title: `I'm hungry, see I have ${
            food.endsWith('s') ? '' : 'a'
          } ${food}!`,
                image: {
                    url: images.food,
                },
            }, ],
        })
    },
}