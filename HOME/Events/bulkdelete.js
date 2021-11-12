module.exports = {
	name: 'messageDeleteBulk', // Name of event that is executed.
	once: false, // Execute event only once. Default: False.
	run: async (client, message) => { // Your event args.) {
		console.log('A user has bulk deleted messages')
		},
};