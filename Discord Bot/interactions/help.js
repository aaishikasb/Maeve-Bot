module.exports = {
    data: {
        name: 'help',
        description: 'like you just now did, you can ask me to help you out!',
    },
    async execute(interaction, client) {
        const commands = new Map([...client.prefixed, ...client.interactions])
        const prefixedCommands = [...client.prefixed]
        const interactionCommands = [...client.interactions]

        await interaction.reply({
            embeds: [{
                title: `Hi, I currently know ${prefixedCommands.length} prefixed commands and ${interactionCommands.length} slash commands!`,
                color: 0xffcece,
                description: `Here are the commands I know:`,
                footer: {
                    text: 'Thank you for calling me!',
                },
                fields: [{
                        name: `Prefixed Commands (${prefixedCommands.length})`,
                        value: prefixedCommands
                            .map(
                                ([name, command]) =>
                                `\`${name}\` \`\`\`${command.data.description}\`\`\``,
                            )
                            .join('\n'),
                    },
                    {
                        name: `Slash Command (${interactionCommands.length})`,
                        value: interactionCommands
                            .map(
                                ([name, command]) =>
                                `\`${name}\` \`\`\`${command.data.description}\`\`\``,
                            )
                            .join('\n'),
                    },
                ],
            }, ],
        })
    },
}