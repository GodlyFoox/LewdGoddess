const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let infoEmbed = new Discord.RichEmbed()
  .setDescription("LoverBotv2 bot is a Moderation and NSFW and Fun bot, it has many commands more to come to it. LoverBotv2 is made from discord.js version 11.3.2")
  .setColor("RANDOM")
  .addField('Prefix', '!', true)
  .addField('Getting started', '!help', true)
  .addField('Invite the bot!', '[By clicking here!](https://discordapp.com/api/oauth2/authorize?client_id=470510663412744202&permissions=8&scope=bot)', true)
  .addField('Join the support server!', '[By clicking here!](https://discord.gg/DmJhdSP)', true)


  message.channel.send(infoEmbed)
}

module.exports.help = {
  name: "info"
}
