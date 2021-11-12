module.exports = {
    name: 'food', // Should be same as Menu Custom Id or The menu options set values.
    expireAfter: 10000,
    run: async (client, interaction, Discord) => {
        interaction.reply("The interactions for this have to be made again as the old setup sucked (this message should delete in 10s)")
        setTimeout(deletereply, 10000)
        function deletereply(params) {
            interaction.deleteReply()
        }
    }
}