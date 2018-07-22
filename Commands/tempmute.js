const Discord  = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) =>{

  //!tempmute @user 1s/m/h/d

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Couldn't find user! :frowning:");
  if(tomute.hasPermission("KICK_MEMBERS")) return message.reply("Can't Mute Them! :sob:");
  let muterole = message.guild.roles.find(`name`, "muted");
  //Start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "muted",
        color: "#00ffcb",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          READ_MESSAGE_HISTORY: false,
          CONNECT: false,
          CREATE_INSTANT_INVITE: true,
          READ_MESSAGES: true
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //End of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("You didn't specify a time! :weary:");
  let muteEmbed = new Discord.RichEmbed()
  .setDescription("~Muted~")
  .setColor("#6d00fc")
  .addField("Muted User", `${tomute} with ID: ${tomute.id}`)
  .addField("Muted By", `<@${message.author.id}> with ID: ${message.author.id}`)
  .addField("Muted In", message.channel)
  .addField("Time", message.createdAt)

  await tomute.addRole(muterole.id);
  message.reply(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> has been unmuted! :smile:`);
  }, ms(mutetime));

  let tempmutechannel = message.guild.channels.find(`name`, "incidents");
  if(!tempmutechannel) return message.channel.send("Couldn't find incidents channel");

      message.delete().catch(O_o=>{});
      tempmutechannel.send(muteEmbed);
  //ENd of module
}

module.exports.help = {
  name: "tempmute"
};
