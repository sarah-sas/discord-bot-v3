module.exports = {
	name: 'guildUnavailable', // Name of event that is executed.
	once: false, // Execute event only once. Default: False.
	run: async(client, message) => { // Your event args.) {
		console.log(chalk.red(`Guild Unavailable: ${guild.name} (${guild.id})`));
	},
};