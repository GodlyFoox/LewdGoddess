const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
const token = "process.env.token"
bot.commands = new Discord.Collection();


fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
  console.log("Couldn't find commands.");
  return;
  }

  jsfile.forEach((f, i) =>{
      let props = require(`./commands/Administrative/Fun/Information/Misc/NSFW${f}`)
      console.log(`${f} loaded!`);
      bot.commands.set(props.help.name, props);
    });

  });


bot.on("ready", async () => {
  console.log(`${bot.user.username} is online`);
  bot.user.setActivity("!info", {type: "STREAMING"}, {color: "#2f004c"});
  console.log(`${bot.user.tag} is online with ${bot.guilds.size} guilds!`);

});


bot.on("guildMemberAdd", async member => {
  console.log(`${member.id} joined the server`);

  let welcomechannel = member.guild.channels.find(`name`, "welcome_leave");
  welcomechannel.send(`LOOK OUT EVERYONE! ${member} has joined!! :smile:`);
});

bot.on("guildMemberRemove", async member => {
  console.log(`${member.id} has left the server`);

let welcomechannel = member.guild.channels.find(`name`, "welcome_leave")
welcomechannel.send(`Awww sad to see you leave :sob:, everyone say goodbye to ${member} :frowning:`)
});

bot.on("channelCreate", async channel => {
  console.log(`${channel.name} has been created`)

  let sChannel = channel.guild.channels.find(`name`, "log-book");
  sChannel.send(`${channel} has been created.`);
});

bot.on("channelDelete", async channel => {
  console.log(`${channel.name} has been deleted!`)

  let sChannel = channel.guild.channels.find(`name`, "logs");
  sChannel.send(`${channel.name} has been deleted!.`);
});


bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: botconfig.prefix
    };
  }

  let prefix = prefixes[message.guild.id].prefixes;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);



  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot, message, args);
});




 bot.login(token)
