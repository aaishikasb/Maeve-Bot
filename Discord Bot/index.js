const {
    Client,
    Collection,
    IntentsBitField
} = require('discord.js')

const fs = require('node:fs')
const path = require('node:path')

require('dotenv').config()

const config = require('./config')

const client = new Client({
    intents: new IntentsBitField().add(
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.MessageContent,
    ),
    presence: {
        activities: [{
            name: 'with aaishika',
        }],
        status: config.status || 'idle',
    }
})
client.prefixed = new Collection();
client.interactions = new Collection();

const validDirs = ['interactions', 'prefixed', 'events'];

validDirs.map(ctx => {
    const dirPath = path.join(__dirname, ctx)
    const commandFiles = fs
        .readdirSync(dirPath)
        .filter(file => file.endsWith('.js'))
    for (const file of commandFiles) {
        const filePath = path.join(dirPath, file)
        const context = require(filePath)
        if (ctx === 'events') {
            context.once ?
                client.once(context.name, (...args) =>
                    context.execute(...args, client),
                ) :
                client.on(context.name, (...args) => context.execute(...args, client))
            console.log(`Loaded ${context.name} (event)`)
        } else {
            client[ctx]?.set(context.data.name, context)
            console.log(`loaded ${context.data.name} (${ctx} command)`)
        }
    }
})
client.login(process.env.token)