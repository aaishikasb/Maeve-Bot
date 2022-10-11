const {
    owners
} = require('../config')
module.exports = {
    data: {
        name: 'reload',
        description: 'reload all the commands!',
        aliases: ['dep'],
    },
    async execute(msg, args, client) {
        if (!owners.includes(msg.author.id)) return
        switch (args[0]) {
            case '-i':
                reloadInteractionCommands(client, msg, args)
                break
            case '-p':
                reloadPrefixedCommands(client, msg)
                break

            case '-a':
                reloadInteractionCommands(client, msg, args).then(() => {
                    reloadPrefixedCommands(client, msg).then(i => {
                        msg.reply(
                            `Reloaded all commands! ${i.map(i => `\`${i}\``).join(', ')}`,
                        )
                    })
                })
                break

            default:
                msg.reply(
                    'Please specify a type of command to reload! `-i` for interaction commands, `-p` for prefixed commands, `-a` for all commands.',
                )
                break
        }
    },
}

function reloadInteractionCommands(client, msg, args) {
    let deployedCommands = [];
    [...client.interactions.values()].forEach(command => {
        delete require.cache[
            require.resolve(`../interactions/${command.data.name}.js`)
        ]
        const newCommand = require(`../interactions/${command.data.name}.js`)
        client.interactions.set(newCommand.data.name, newCommand)
        deployedCommands.push(newCommand.data.name)
    })
    msg.reply('Reloaded interaction commands!')
    const deployCommand = client.prefixed.get('deploy')
    deployCommand.execute(msg, args, client)
    return deployedCommands
}

function reloadPrefixedCommands(client, msg) {
    let deployedCommands = [];
    [...client.prefixed.values()].forEach(command => {
        delete require.cache[require.resolve(`../prefixed/${command.data.name}.js`)]
        console.log(`../prefixed/${command.data.name}.js`)
        const newCommand = require(`../prefixed/${command.data.name}.js`)
        client.prefixed.set(newCommand.data.name, newCommand)
        console.log(`Reloaded ${newCommand.data.name}!`)
        deployedCommands.push(newCommand.data.name)
    })
    console.log({
        deployedCommands
    })
    msg.reply(
        `Reloaded prefixed commands! ${deployedCommands
      .map(i => `\`${i}\``)
      .join(', ')}`,
    )
    return deployedCommands
}