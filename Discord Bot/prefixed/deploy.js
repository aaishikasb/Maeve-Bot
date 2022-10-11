const {
    owners
} = require('../config')
module.exports = {
    data: {
        name: 'deploy',
        description: 'deploy slash commands!',
        aliases: ['dep'],
    },
    async execute(msg, args, client) {
        if (!owners.includes(msg.author.id)) return
        const commands = [...client.interactions.values()].map(i => i.data)
        await client.application.commands.set(commands)
        await msg.reply({
            content: `Successfully loaded \`${
        commands.length
      }\` slash commands: [${commands.map(i => `\`${i.name}\``).join(', ')}]`,
        })
    },
}