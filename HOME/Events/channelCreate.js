// use chalk to colorize text
const chalk = require('chalk');
// use quickdb
const db = require('quick.db');
module.exports = {
	name: 'channelCreate', // Name of event that is executed.
	once: false, // Execute event only once. Default: False.
	run: async (client, message) => { // Your event args.) {
		// TODO add user tracking
		db.push(`${client.guild.name}.channelCreate.channel`, `Guild: ${client.guild.name} ChannelName: ${client.name}`);
		console.log(db.get(`${client.guild.name}.channelCreate.channel`))
		},
};