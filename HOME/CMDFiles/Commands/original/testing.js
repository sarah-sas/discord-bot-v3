const cooldb = require('quick.db')
const prefix = require('../../../../config/config.json')
module.exports = {
    name: 'testing',
    run: async (client, message, args, Discord) => {
        
    }
}



module.exports.details = {
    name:'testing',
    author:'Sarah-SAS#4206',
    icon:'https://cdn.discordapp.com/avatars/633668381954015235/9b0672791e6f9d3d2319b37bc861b5e5',
    description:'this is a testing command',
    usage:`${prefix.prefix}testing`
}