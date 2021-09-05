const Discord = require('discord.js')

exports.run = function(client, message, args) {//== BEERCODE (discord.gg/ew3dpTu4Z5) BEERCODE ==\\

let yardim = new Discord.MessageEmbed()

.setTitle("BRK Ekonomi | Komut Listesi")//== BEERCODE (discord.gg/ew3dpTu4Z5) BEERCODE ==\\

.setColor("YELLOW")

.addField("__💰  Ekonomi__",`

**\`.ekonomi\`** - *Ekonomi komutları hakkında bilgi edinin!*

\`.günlük\`, \`.çalış\`, \`.soygun\`, \`.yatır\`, \`.çek\`, \`.gönder\`

`)//== BEERCODE (discord.gg/ew3dpTu4Z5) BEERCODE ==\\

.addField("__💼  Destek__",`


\`.davet\`, \`.yardım\`



`)//== BEERCODE (discord.gg/ew3dpTu4Z5) BEERCODE ==\\

let ekonomi = new Discord.MessageEmbed()

.setTitle("__💰  Ekonomi Komutları__")

.setColor("YELLOW")

.setDescription(`

**\`.günlük\` - __24 saat aralıkla 2300-2700 arası para kazanırsınız.__**

**\`.hediyem\` - __12 saat aralıkla 5000-6000 arası para kazanırsınız.__**

**\`.para\` - __Etiketlediğiniz kişinin veya kendi paranızı görürsünüz.__**

**\`.gönder\` - __Etiketlediğiniz kullanıcıya para gönderirsiniz.__**

**\`.soygun\` - __14 dakikada bir soygun yaparsınız.__**

**\`.çalış\` - __Rastgele bir işte çalışıp maaş alırsınız.__**

**\`.yatır\` - __Kendi cüzdanınızdan bankaya para yatırırsınız.__**

**\`.çek\` - __Bankadan kendi cüzdanınıza para çekersiniz.**

**\`.çal\` - __Etiketlediğiniz kişinin cüzdanından para çalarsınız.__**

[Destek Sunucumuza](https://discord.gg/tahsineren) katılmayı unutmayın

`)

let oyunlar = new Discord.MessageEmbed()

.setTitle("__🎲  Oyun Komutları__")

.setColor("YELLOW")

.setDescription(`

**\`.bahis\` - __Bahis oynarsınız, para kaybeder veya 2 katını kazanırsınız.__**

**\`.balık-tut\` - __Balık tutarsınız, rastgele para kazanırsınız veya kaybedersiniz.__** 

`)//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\

let destek = new Discord.MessageEmbed()

.setTitle("__💼  Destek Komutları__")

.setColor("YELLOW")

.setDescription(`

**\`d!davet\` - __Botu kendi sunucunuza eklersiniz.__**

**\`d!istatistik\` - __Botun istatistiğini atar.__**

**\`d!oyver\` - __Botun oy verme linkini atar.(yakında)__**

[Destek Sunucumuza](https://discord.gg/tahsineren) katılmayı unutmayın

`)



  if(!args[0]) return message.channel.send(yardim)

  

//== BEERCODE (discord.gg/ew3dpTu4Z5) BEERCODE ==\\  

  if(args[0] === 'ekonomi' || args[0] === 'economy') return message.channel.send(ekonomi)

  if(args[0] === 'oyunlar' || args[0] === 'oyun' || args[0] === 'games' || args[0] === 'game') return message.channel.send(oyunlar)

  if(args[0] === 'destek' || args[0] === 'support') return message.channel.send(destek)

  

  

};

//== BEERCODE (discord.gg/ew3dpTu4Z5) BEERCODE ==\\

exports.conf = {

    enabled: true, 

    aliases: ["yardim","help",'komutlar','commands'],

  };

  

  exports.help = {

    name: 'ekonomi'

  };

//== BEERCODE (discord.gg/ew3dpTu4Z5) BEERCODE ==\\