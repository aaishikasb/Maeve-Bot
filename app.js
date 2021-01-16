const Discord = require("discord.js");
const { MessageAttachment } = require("discord.js")
const client = new Discord.Client();

const arr = ["./token.json", "ready", "message", "!maeve", "!help", "reconnecting", "!drink", "!sleep", "!eat"];

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
    // Maeve Attachments
    // !maeve
    const attachment = new MessageAttachment ("https://i.pinimg.com/originals/6e/18/70/6e1870c814c32e8c8727df90f31a3fc4.jpg");
    // !sleep
    const sleep = new MessageAttachment ("https://wallpapercave.com/wp/wp3769883.jpg");
    // !drink
    const drink = new MessageAttachment ("https://www.wikihow.com/images/b/be/Feed-Your-Rabbit-with-Pellets-Step-18.jpg");
    // !eat
    const eat = new MessageAttachment ("https://www.pngitem.com/pimgs/m/298-2987097_transparent-bunny-with-carrot-clipart-anime-rabbit-hd.png");
    
    // Send back a reply when the specific command has been written by a user.
    if (msgContent === arr[3]){
        msg.reply("hey, I am Maeve!", attachment);
    }
    if (msgContent === arr[6]){
        msg.reply("I love drinking water, watch me!", drink);
    }
    if (msgContent === arr[7]){
        msg.reply("I am sleepy, I will sleep!", sleep);
    }
    if (msgContent === arr[8]){
        msg.reply("I am hungry, see I have a carrot!", eat);
    }

    // !help command
    else if (msgContent === arr[4]){
        msg.reply("hi, I currently know 5 commands: !maeve, !sleep, !eat, !drink, and !help. If you type !maeve, you can have me do random activities, a feature that is being coded right now, but as of yet I'll give you my introduction! By typing !help, like you just now did, you can ask me to help you out! !sleep makes me fall asleep, !eat gets me a carrot, !drink gives me a bowl of water and I love drinking water! Thank you for calling me!");
    }
});

client.login(token);