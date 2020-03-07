const { Command } = require('discord.js-commando');
const Roll = require('roll');
const roll = new Roll();

module.exports = class SayCommand extends Command {
	constructor(client) {
		super(client, {
            name: 'roll',
            aliases: ['dice'],
            group: 'utilities',
            memberName: 'roll',
            description: 'Rolls a `n` sided dice.',
            args: [
                {
                    key: 'dice',
                    prompt: 'What sided dice would you like to roll',
                    type: 'string',
                    default: "6"
                }
            ]
        });
	}

	run(message, {dice}) {
        const valid = roll.validate(dice);
        if(!valid){
            return message.reply(`Invalid input ${dice}`);
        }

        const output = roll.roll(dice);
		return message.say(`Rolls: ${output.rolled}\nTotal: ${output.result}`);
	}
};