const dotenv = require("dotenv");
dotenv.config();
const Discord = require("discord.js");

const prefix = process.env.PREFIX;
const TOKEN = process.env[`DISCORD_${process.env.ENV}`];
const client = new Discord.Client();

client.on("message", async (message) => {
    // Exit and stop if it's not there and prevent botception
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    try {
        if (message.content.startsWith(`${prefix}ping`)) {
            await message.channel.send("pong!");
        }

        if (message.content.startsWith(`${prefix}foo`)) {
            await message.channel.send("bar!");
        }
    } catch (err) {
        message.channel.send(err);
    }
});

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});


client.login(TOKEN);