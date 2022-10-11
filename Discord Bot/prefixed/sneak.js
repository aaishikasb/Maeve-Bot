const {
  sneak
} = require('../config')
module.exports = {
  data: {
      name: 'sneak',
      description: 'sneak description',
      aliases: ['sn'],
  },
  async execute(msg, args, client) {
      const {
          sneak
      } = details
      msg.reply({
          embeds: [{
              title: sneak.description,
              image: {
                  url: sneak.image,
              },
          }, ],
      })
  },
}