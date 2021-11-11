var figlet = require('figlet');
const lolcatjs = require('lolcatjs');
const vers = require("../../config/version.json")
const config = require("../../config/config.json")
const discord = require('../../bot.js')
const db = require('quick.db')
module.exports = {
    name: 'ready',
    once: true,
    run: async (client) => {
        const chalk = require('chalk')
        client.user.setActivity('your servers.', {
            type: `WATCHING`,
        });
        var banner = figlet.textSync('Discord BOT Dashboard V2', {
            font: 'Small',
            horizontalLayout: 'default',
            width: 2000,
            whitespaceBreak: true
        });
        lolcatjs.fromString(banner);
        console.log(chalk.bold.green('Launched Succesfully...'))
        console.log(chalk.magenta('Version:'), chalk.cyan(`${vers.ver}`))
        console.log(chalk.magenta('Made by:'), chalk.cyan('LachlanDev#8014'))
        console.log(chalk.magenta('some alterations by:'), chalk.cyan('Sarah-SAS#4206'))
        console.log(chalk.magenta('Prefix:'), chalk.cyan(`${config.prefix}\n`))
        console.log(chalk.green(chalk.bold(`${discord.client.user.username}`), `is online!`))
        console.log(chalk.green(chalk.bold(`Dashboard:`), `http://localhost:` + config.port))
        const info = require(HOME + "/Home/Classes/Handler")
        info.Handler.loadSlashCommands(client) // SLASHCMDS HANDLER, MUST BE IN READY EVENT.
        // check if connected to database
        if (!db.get("connected")) {
            console.log(chalk.whiteBright(`Since this is your first time using this bot you will have had an sqlite file made in the root folder`))
            db.set("connected", true)
        }
        if (db.get('connected') == true) {
            console.log(chalk.green(chalk.bold(`Database:`), `Connected!`))
        } else {
            console.log(chalk.red(chalk.bold(`Database:`), `Not Connected!`))
        }
        console.log(chalk.bold.yellowBright("[Bot] ") + chalk.bold.blueBright(`Connected to Sqlite database`))
        console.log(chalk.bold.yellowBright("[Bot] ") + chalk.bold.blueBright(`Connected to ${client.user.tag}`))
        if (info.commandFiles.length > 0) console.log(chalk.bold.redBright("[Handler]") + chalk.bold.greenBright(` Loaded ${info.commandFiles.length} commands.`))
        if (info.aliasesCount.length > 0) console.log(chalk.bold.whiteBright("[Handler]") + chalk.bold.magentaBright(` Loaded ${info.aliasesCount.length} aliases.`))
        if (info.eventFiles.length > 0) console.log(chalk.bold.greenBright("[Handler]") + chalk.bold.cyanBright(` Loaded ${info.eventFiles.length} events.`))
        if (info.buttonFiles.length > 0) console.log(chalk.bold.yellow("[Handler]") + chalk.bold.blue(` Loaded ${info.buttonFiles.length} buttons.`))
        if (info.selectMenuFiles.length > 0) console.log(chalk.bold.white("[Handler]") + chalk.bold.green(` Loaded ${info.selectMenuFiles.length} selectMenus.`))
        if (info.slashCount.length > 0) console.log(chalk.bold.red("[Handler]") + chalk.bold.yellow(` Loaded ${info.slashCount.length} slashCommands.`))
        console.log(chalk.bold.red("[Warning] ") + chalk.bold.yellow(`Some of the commands that are in the original folder (the name) do not work`))
    },
};