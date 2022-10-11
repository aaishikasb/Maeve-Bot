module.exports = {
  name: 'interactionCreate',
  async execute(interaction, client) {
      if (!interaction.isCommand()) return
      const command = client.interactions.get(interaction.commandName)
      if (!command) return
      try {
          await command.execute(interaction, client)
      } catch (error) {
          console.error({
              error
          })
          await interaction.reply({
              content: 'This command has resulted in an error! please report it to the devs',
              ephemeral: true,
          })
      }
  },
}