const { exec } = require('child_process');

exec('npm install discord.js', (error, stdout, stderr) => {
  if (error) { console.error(`Erro ao instalar discord.js: ${error.message}`); return; }
  if (stderr) { console.error(`Aviso ao instalar discord.js: ${stderr}`); return; }
  
  const Discord = require('discord.js');
  const client = new Discord.Client();
  
  const token = 'MTI1OTkwMTE2MjczNjU4Njk0Mw.GRSuIc.lZYVCDOhpVsoQ_HuhXbc1yjgq0bm9qHUAiXf5c';
  
  client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });
  
  client.on('message', msg => {
    if (msg.content.toLowerCase() === '!help') {
      msg.reply('olaa');
    }
  });
  
  client.login(token);
});
