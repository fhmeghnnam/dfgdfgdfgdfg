const Discord = require('discord.js');
const client = new Discord.Client();
let prefix = "!"
client.on('ready',async () => {
  client.channels.find(ch => ch.id === "704859219144212511" && ch.type === 'voice').join();
});


client.login(process.env.BOT_TOKEN);
