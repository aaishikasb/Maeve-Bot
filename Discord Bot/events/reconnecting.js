module.exports = {
    name: 'reconnecting',
    execute(client) {
        console.log(`Maeve is trying to reconnect: ${client.user.tag}!`)
    },
}