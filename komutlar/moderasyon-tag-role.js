const Discord = require('discord.js');
const data = require('croxydb');
const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, args) => {
let prefix = ayarlar.prefix

  if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed()

.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.discordapp.com/attachments/779780476071575574/782329055117836328/31.gif')
.setImage('https://cdn.glitch.com/0c8ef551-5187-48a8-9daf-f2cc35630f21%2Fyoneticigif.gif')
.setTitle('Bir hata oldu!').setDescription(`• \`${prefix}tag-role\` **kullanmak için,** \`Yönetici\` **yetkisine sahip olman gerekiyor.**`));
  if(!message.mentions.roles.first()) return message.channel.send(new Discord.MessageEmbed()
                                                                  
  .setColor('#f6ff00').setTitle('Bir hata oldu!')
  .setDescription('Bir rol etiketlemeyi unuttunuz.'));
  let mentionRole = message.mentions.roles.first();
  data.set(`tag.role.${message.guild.id}`, mentionRole.id);
  message.channel.send(new Discord.MessageEmbed()
                       
  .setTitle('İşte bu kadar!')
  .setDescription(`Tagı alana verilecek: ${mentionRole} rolü olarak seçtiniz.`));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'tag-role'
};