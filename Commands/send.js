const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


  mention = message.mentions.users.first();

  if(mention == null) {return;}
  message.delete();
  mentionMessage = message.content.slice(8);
  mention.send(mentionMessage);
  message.channel.send("**Done!!**")
}

module.exports.help = {
  name:"send"
}
