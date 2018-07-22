const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(message.member.hasPermission("ADMINISTRATOR")) {
    let announceEmned = new Discord.RichEmbed()
    .setTitle("Important Announcement")
    .setDescription(args.join(" "))
    .setColor("RANDOM")
    message.channel.send("@everyone")
    message.channel.send(announceEmned)
  }
}

module.exports.help = {
  name:"Announcement"
}
