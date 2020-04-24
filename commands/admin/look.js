const { Command } = require("discord.js-commando");

module.exports = class LookCommand extends Command {
    constructor(client) {
        super(client, {
            name: "look",
            aliases: ["l"],
            group: "admin",
            memberName: "look",
            description: "Looks at all channels"
        });
    }

    run(message) {
        
        
        if(message.author.id === process.env.ADMIN_ID){
            console.log(message);
            const channels = message.channel.guild.channels
            console.log(channels);

        }

        return null;
    }
};
