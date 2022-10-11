module.exports = {
  data: {
      name: 'ping',
      description: 'check if maeve, the bot, is alive!',
      aliases: ['health'],
  },
  async execute(msg, args, client) {
      msg.reply(`pong! \`${client.ws.ping}\`ms ping`)
  },
}