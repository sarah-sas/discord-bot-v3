const prefix = require('../../../../config/config.json')
module.exports = {
    name: 'help',
    run: async (client, message, args, Discord) => {
        const commands = client.commands.array();
        const genres = [];
        // using forEach to get all commands
        commands.forEach(command => {
            command
            // push command.details.genre
            genres.push(command.details.genre);
        });

        // check an array for duplicates and remove them
        function popDuplicates(array) {
            return array.filter((item, pos) => {
                return array.indexOf(item) == pos;
            });
        }
        // remove duplicates
        const uniqueGenres = popDuplicates(genres);
        //create embed called genres
        const genresEmbed = new Discord.MessageEmbed()
            .setTitle('Genres')
            .setColor('#0099ff')
            .setDescription(uniqueGenres.join(', '))
            .setFooter('Genres are the categories of commands. You can use the command `' + prefix.prefix + 'help <genre>` to get a list of commands in a genre.');
        // send genresEmbed
        message.channel.sendEmbed(genresEmbed)
    }
}
module.exports.details = {
    name: 'help',
    author: 'Sarah-SAS#4206',
    icon: 'https://cdn.discordapp.com/avatars/633668381954015235/9b0672791e6f9d3d2319b37bc861b5e5',
    description: 'its a dice with custom max and custom min',
    usage: `${prefix.prefix}dice`,
    genre: 'fun',
}