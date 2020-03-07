const { Command } = require('discord.js-commando');

module.exports = class BarkCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'bark',
			aliases: ['puppy-dog'],
			group: 'test',
			memberName: 'bark-test',
			description: 'Replies with a bark, puppy dog.',
		});
    }
    
    run(message) {
		return message.say('BARK BARK BARK BARK!');
	}
};