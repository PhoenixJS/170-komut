const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {

let prefix = ayarlar.prefix

.setTitle("BRK Ekonomi | Komut Listesi")

.setColor("YELLOW")

.setDescription(`

💼 \`Komutlat

**\`.günlük\` - __24 saat aralıkla 2300-2700 arası para kazanırsınız.__**

**\`.hediyem\` - __12 saat aralıkla 5000-6000 arası para kazanırsınız.__**

**\`.para\` - __Etiketlediğiniz kişinin veya kendi paranızı görürsünüz.__**

**\`.gönder\` - __Etiketlediğiniz kullanıcıya para gönderirsiniz.__**

**\`.soygun\` - __14 dakikada bir soygun yaparsınız.__**

**\`.çalış\` - __Rastgele bir işte çalışıp maaş alırsınız.__**

**\`.yatır\` - __Kendi cüzdanınızdan bankaya para yatırırsınız.__**

**\`.çek\` - __Bankadan kendi cüzdanınıza para çekersiniz.**

**\`.çal\` - __Etiketlediğiniz kişinin cüzdanından para çalarsınız.__**

🎮 \`Oyunlar\`

**\`.bahis\` - __Bahis oynarsınız, para kaybeder veya 2 katını kazanırsınız.__**

**\`.balık-tut\` - __Balık tutarsınız, rastgele para kazanırsınız veya kaybedersiniz.__** 

`)




  
//== BEERCODE (discord.gg/ew3dpTu4Z5) BEERCODE ==\\  




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