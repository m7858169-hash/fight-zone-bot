const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const client = new Client({ intents: [32767] });

client.on('ready', () => {
  console.log(`✅ ${client.user.tag} online`);
});

client.on('messageCreate', async message => {
  if (message.author.bot) return;
  if (message.content == '!fight') {
    const embed = new EmbedBuilder()
    .setTitle('⚔️ FIGHT ZONE')
    .setDescription('🔥 بدأت المعركة! اكتب!fight مرة ثانية للتجربة')
    .setColor(0xFF0000);
    message.channel.send({ embeds: [embed] });
  }
});

client.login(process.env.TOKEN);
