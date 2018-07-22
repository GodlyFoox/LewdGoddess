const Discord = require("discord.js");
const ytdl = require("ytdl-core")

module.exports.run = async (bot, message, args) => {

  //First, we need to check if the author is connected to a voice channel
  if(!message.member.voiceChannel) return message.channel.send("Please connect to a voice channel :uwublob:");
  //if not, return & send a message to chat


  //Check if author input url
  if(!args[0]) return message.channel.send("Sorry, please input a url following the command");


  //Validate info
  let validate = await ytdl.validateURL(args[0]);


  //Check validation
  if(!validate) return message.channel.send('Sorry, pwease input a **valid** url following the command');
  //validate will contain a boolean if the url is valid or not.

  //Fetch Video info
  let info = await ytdl.getInfo(args[0]);

  //Stores author guild channel
  let connection = await message.member.voiceChannel.join();

  //Play song
  let dispatcher = await connection.playStream(ytdl(args[0], {filter: 'audioonly'}));

  //Oput now Playing
  message.channel.send(`Now playing ${info.title}`);
}

module.exports.help = {
  name:"play"
}
