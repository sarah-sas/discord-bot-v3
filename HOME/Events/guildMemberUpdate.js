module.exports = {
	name: 'guildMemberUpdate', // Name of event that is executed.
	once: false, // Execute event only once. Default: False.
	run: async (client, message) => { // Your event args.) {
		console.log('a user has changed there username or has a new role (or removed one)')
		},
};