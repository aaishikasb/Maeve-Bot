const {
  details
} = require('../config')
module.exports = {
  data: {
      name: 'cuddle',
      description: 'this makes me cuddle with you!',
      aliases: ['c'],
  },
  async execute(msg, args, client) {
      const {
          cuddle
      } = details
      msg.reply({
          embeds: [{
              title: cuddle.description,
              image: {
                  url: cuddle.image,
              },
          }, ],
      })
  },
}