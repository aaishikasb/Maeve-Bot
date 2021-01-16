const Discord = require("discord.js");
const { MessageAttachment } = require("discord.js")
const client = new Discord.Client();

const arr = ["./token.json", "ready", "message", "!maeve", "!help", "reconnecting", "!drink", "!sleep"];

const {
    token
} = require(arr[0]);

client.on(arr[1], () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on(arr[5], () => {
    console.log(`Maeve is trying to reconnect: ${client.user.tag}!`);
});

client.on(arr[2], msg => {
    // Failsafe
    const msgContent = msg.content.toLowerCase();
    //image attachment for !maeve
    const attachment = new MessageAttachment ("https://wallpapercave.com/wp/wp3769883.jpg");

    if (msgContent === arr[3]){
        msg.reply("hey, I am Maeve!", attachment);
    }

    // !help command
    else if (msgContent === arr[4]){
        msg.reply("hi, I currently know 2 commands: !maeve !help. If you type !maeve, you can have me do random activities, a feature that is being coded right now! By typing !help, like you just now did, you can ask me to help you out! Thank you for calling me!");
    }
});

client.login(token);