const Pornhub = require("pornhub-api")
const Videos = new Pornhub.Videos()


module.exports.run = async (bot, message, args) => {
  Videos.search({
      search: "Pussy"
  }).then(videos => {
      console.log(videos)
  })

  let pornEmbed = new Discord.RichEmbed()
  .setDescription("PornHub Videos")
  .seColor("RANDOM")
  .addField(Videos)
  .setFooter("Heh I see you ya sly foox")

  message.channel.send(pornEmbed)
}

module.exports.help = {
  name: "phsearch"
}
