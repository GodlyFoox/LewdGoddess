const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(message.author.id !== `412686680772837379`){
    message.channel.send(`${message.author} Sorry dude! Wrong user!`);
  }else {
    let botmessage = args.join(" ");
    message.delete().catch();
    message.channel.send(botmessage);
  }
}
module.exports.help = {
  name: "say"
};
