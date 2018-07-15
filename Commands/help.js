const Discord = require("discord.js")

module.exports.run = (client, message, args) => {
  let modEmbed = new Discord.RichEmbed()
  .setTitle("Moderation Commands :3")
  .setColor("RANDOM")
  .addField("!ban @user <reason>", "Bans them")
  .addField("!kick @user <reason>", "Kicks them")
  .addField("!warn @user <reason>", "Warns them")
  .addField("!warnlevel @user", "Checks how many wwarns they have")
  .addField("!addrole @user <rolename no mention>", "Adds a role to a specified user")
  .addField("!removerole @user <rolename no mention>", "Removes the specified users")
  .addField("!report @user <reason>", "Reports the user, members can use it too")
  .addField("!prefix <newprefix>", "sets new prefix")
  .setFooter("Make sure the bot's role is above all roles except owner");

  let miscEmbed = new Discord.RichEmbed()
  .setTitle("Misc Commands")
  .setColor("RANDOM")
  .addField("!weather <name city/place>", "Gives you the weather of that place in celisus")
  .addField("!react", "Puts up a sad face on your message")
  .addField("!urban <word you want to search>", "Tells you the definition of that word based on the urban dictionary")
  .addField("!avatar", "Displays your avatar");

  let infoEmbed = new Discord.RichEmbed()
  .setTitle("Information Commands")
  .setColor("RANDOM")
  .addField("!botinfo", "Gives info on the server")
  .addField("!userinfo (views your info for now)", "Gives info on you")
  .addField("!serverinfo", "Gives info on the server")
  .addField("!say <put what you want to say> (Only people with MANAGE_MESSAGES can use this)", "Says whatever word you said");

  let funEmbed = new Discord.RichEmbed()
  .setTitle("Fun Commands")
  .setColor("RANDOM")
  .addField("!8ball <question>", "It answers a question")
  .addField("!poll <question>", "Creates a poll")
  .addField("!math <equeation(not to complicated)>", "The bot solves an equation")
  .addField("!ascii <word here>", "it brings up weird text of the word you put")

  let speicalEmbed = new Discord.RichEmbed()
  .setTitle("Commands for someone special to me!")
  .addField("!love", "Writes a message")
  .addField("!love2", "Writes a message");

  let nsfwEmbed = new Discord.RichEmbed()
  .setTitle("NSFW Commands :wink:")
  .setColor("RANDOM")
  .addField("!lewd", "Gives you neko")
  .addField("!anal", "Gives you anal")
  .addField("!pussy", "Gives you pussy")
  .addField("!thigh", "Gives you thigh")
  .addField("!hentai", "Gives you hentai")
  .addField("!hentaigif", "Gives you a hentaigif")
  .addField("!gif", "Gives you a gif")
  .addField("!4k", "Gives you 4k")
  .addField("!holo", "Gives you holo")
  .setFooter("Can only be used in nsfw channels, also some commands are delayed effected");
  message.channel.send(modEmbed)
  message.channel.send(nsfwEmbed)
  message.channel.send(miscEmbed)
  message.channel.send(infoEmbed)
  message.channel.send(funEmbed)
  message.channel.send(speicalEmbed);
}

module.exports.help = {
  name: "help"
}
