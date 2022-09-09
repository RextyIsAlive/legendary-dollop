const {EmbedBuilder} = require("discord.js");

exports.run = async (client, message, args) => {
  if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply(`   **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);
  let aciklama = args.slice(0).join(" ")
if (!aciklama) return message.reply("Lütfen kanal açıklamasını yaz!")
let kanal = message.channel
client.channels.cache.get(message.channel.id).setTopic(aciklama)
message.reply("Başarıyla kanal açıklaması değiştirildi!")


};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "kanal-açıklama"
};
