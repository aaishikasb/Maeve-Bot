const config = require('../config')
module.exports = {
    name: 'messageCreate',
    async execute(msg, client) {
        if (msg.author.bot) return
        const prefix = config.prefix
        if (!msg.content.startsWith(prefix)) return
        const args = msg.content.slice(prefix.length).trim().split(/ +/)
        const name = args.shift().toLowerCase()
        const command =
            client.prefixed.get(name) ||
            client.prefixed.find(
                cmd => cmd.data.aliases && cmd.data.aliases.includes(name),
            )
        if (!command) return
        try {
            await command.execute(msg, args, client)
        } catch (error) {
            console.error({
                error
            })
            await msg.reply({
                content: 'This command has resulted in an error! Please report it to the devs',
            })
        }
    },
}