const { Command } = require("discord.js-commando");

module.exports = class TeamCommand extends Command {
    constructor(client) {
        super(client, {
            name: "teams",
            aliases: ["rt", "randomteams"],
            group: "utilities",
            memberName: "teams",
            description: "Randomizes teams in a channel",
            args: [
                {
                    key: "numTeams",
                    prompt: "Number of teams to split",
                    type: "string",
                    default: "2"
                }
            ]
        });
    }

    run(message, { numTeams }) {
        
        const voiceChannel = message.member.voiceChannelID;
        const membersMap = message.channel.guild.channels.get(voiceChannel).members;
        const members = Array.from(membersMap.keys());
        const shuffledMembers = shuffle(members).map(member => {
            return `<@${member}>`;
        });
            

        // Split in group of 3 items
        const splitTeams = shuffledMembers.chunk(Math.ceil(members.length/numTeams));
        // Outputs : [ [1,2,3] , [4,5,6] ,[7,8] ]

        let teamString = `--- Randomized Teams ---\n`;

        for(let splitTeam in splitTeams){
            teamString += `Team ${parseInt(splitTeam) + 1}: \n`;
            for(let teamMember of splitTeams[splitTeam]){
                teamString += `${teamMember} \n`;
            }
        }

        return message.say(`${teamString}`);
    }
};

/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

/**
 * Define the chunk method in the prototype of an array
 * that returns an array with arrays of the given size.
 *
 * @param chunkSize {Integer} Size of every group
 */
Object.defineProperty(Array.prototype, 'chunk', {
    value: function(chunkSize){
        var temporal = [];
        
        for (var i = 0; i < this.length; i+= chunkSize){
            temporal.push(this.slice(i,i+chunkSize));
        }
                
        return temporal;
    }
});