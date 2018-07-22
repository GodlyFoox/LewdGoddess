const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
message.guild.leave()
.then(g => console.log(`Left the guild ${g}`))
.catch(console.error);
}

module.exports.help = {
name: "fleave"
}
