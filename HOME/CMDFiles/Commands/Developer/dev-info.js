const discord = require("discord.js");
const prefix = require('../../../../config/config.json')
module.exports = {
    name: 'dev-info',
    run: async (client, message, args, Discord) => {
        // get first mentioned user
        let user = message.mentions.users.first();
        // if no user is mentioned, get the author
        if (!user) user = message.author;
        //get the users id
        let id = user.id;
        const created = user.createdAt;
        // create embed with user info
        const embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle(`Info on the user: ${user.username}#${user.discriminator}`)
            .setThumbnail(client.user.avatarURL())
            .addFields(
                { name: '\u200B', value: '\u200B' },
                { name: 'ID', value: `${id}`, inline: true },
                { name: 'Account created at', value: `${created}`, inline: true },
            )
            .setFooter(`Requested by ${message.author.username}`, message.author.avatarURL())
            .setTimestamp();
        // send the embed to the channel
        message.channel.sendEmbed(embed)
    }
}
module.exports.details = {
    name: 'dev-info',
    author: 'Sarah-SAS#4206',
    icon: 'https://cdn.discordapp.com/avatars/633668381954015235/9b0672791e6f9d3d2319b37bc861b5e5',
    description: 'Ask the 8-Ball a question!',
    usage: `${prefix.prefix}dev-info`
}