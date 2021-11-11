const { Message, InteractionCollector, Interaction } = require('discord.js');
const numbro = require('numbro')
module.exports = {
    name: 'dfood', // Should be same as Menu Custom Id or The menu options set values.
    run: async (client, interaction, message, Discord) => {
        interaction.update({
            content: "how much gas are donating?",
            components: []
        }).catch(console.error);
        
        InteractionCollector.on('collect', async (response) => {
            if (response.content.toLowerCase() === 'cancel') {
                message.channel.send('Cancelled.').catch(console.error);
            } else {
                const gas = numbro(response.content).value();
                interaction.stop().catch(console.error);
                message.channel.send(`${gas} of gas donated.`).catch(console.error);
            }
        }
    }
}