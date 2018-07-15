const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  message.channel.send(`${message.author} here is your unique ID **${message.author.id}**`);
  message.delete().catch();
}

module.exports.help = {
  name: "GetID"
}
