const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let helpembed = new Discord.RichEmbed()
  .setDescription("Help Menu")
  .addField("Member Commands:", "help, serverinfo, botinfo, userinfo, report, 8ball, ping, avatar, ascii, weather, help, urban, poll, math, cat, react.");

  message.channel.send(helpembed);

if(message.member.hasPermission("MANAGE_MESSAGES")){
  let modembed = new Discord.RichEmbed()
  .setDescription("Mod Help Menu")
  .setColor("#8300ff")
  .addField("Mod Commands:", "addrole, removerole, kick, warn, ban, clear, say, tempmute, Announcement.");

  try{
    await message.author.send(modembed);
  message.react("🌺")
  }catch(e){
    message.reply("your DMs are locked. I cannot send you the mod commands.")
  }
}

}

module.exports.help = {
  name: "help"
}
