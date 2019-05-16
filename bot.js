const Discord = require('discord.js'); // تعريف Discord.js
const fs = require('fs'); // تعريف fs.
const client = new Discord.Client(); // تعريف الكلينت
const prefix = "$"; //تعريف البرفك

client.on('guildMemberAdd', mem => {

setTimeout(function () {
        
if(mem.guild.channels.get('572452695156457472').send(" **_Welcome To _ Ruby' Server **🥂 "));
}, 5000);
})


client.on('ready',async () => {



    client.channels.find(ch => ch.id === "551057699459170314" && ch.type === 'voice').join();
    clie
  });
	
	

client.login(process.env.BOT_TOKEN);
