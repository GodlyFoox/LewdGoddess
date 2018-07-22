const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
    let user = message.mentions.users.first() || message.author;


    let userembed = new Discord.RichEmbed()
    .setDescription(`This is **${user.username}** their info!`)
    .setThumbnail(user.displayAvatarURL)
    .setColor("RANDOM")
    .setAuthor(`${user.username}`)
    .addField("Full Username", `${user.username}#${user.discriminator}`)
    .addField("ID", user.id)
    .addField("Mention", user)
    .addField("Joined On", message.guild.member(user).joinedAt )
    .addField("Created On: ", user.createdAt);



    message.channel.send(userembed);
}


module.exports.help = {
    name: "userinfo"
  }
