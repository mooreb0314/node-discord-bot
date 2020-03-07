const dotenv = require("dotenv");
const { CommandoClient } = require('discord.js-commando');
const path = require('path');

const client = new CommandoClient({
	commandPrefix: '!',
	owner: '318021117065428992'
});

dotenv.config();

client.registry
	.registerDefaultTypes()
	.registerGroups([
        ['first', 'Your First Command Group'],
        ['second', 'Your Second Command Group']
	])
	.registerDefaultGroups()
	.registerDefaultCommands()
	.registerCommandsIn(path.join(__dirname, 'commands'));

client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag}! (${client.user.id})`);
	client.user.setActivity('with Commando');
});

client.on('error', console.error);

client.login(process.env[`DISCORD_${process.env.ENV}`]);