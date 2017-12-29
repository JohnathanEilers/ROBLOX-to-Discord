const express = require('express');
const app = express();
const Discord = require('discord.js');
const client = new Discord.Client();
const version = '1.0.0'
const prefix = '!'

const port = process.env.PORT || 5000;

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
    response.render('index');
});

app.listen(port, () => {
    console.log('Our app is running on http://localhost:' + port);
});

client.on('ready', () => {
  console.log('Starting R2D v' + version);
});

client.on('message', message => {
  if (message.content === prefix + 'linkaccount ') {
    message.reply('In progress!');
  }
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'new-member-entry');
  if (!channel) return;
  channel.send(`Welcome to the Cobalt Nation Discord server, ${member}! In order to smoothly and automatically receive your role(s), please follow the instructions below.\n\n1. Say !linkaccount <username> where "<username>" is your exact ROBLOX username. For example, !linkaccount XxZONExXx would link Zone's Discord account to his ROBLOX account.\n2. Link your account via the given instructions\n3. say !getrole to receive your role.\n\nIf you need help, ask any @High Rank!`);
});

client.login('Mzk2MTQ2MzU0ODg5NDI0ODk5.DSdLjw.i_XScCg3d6RiErIFbnFsR-MfkFc');

var http = require("http");
setInterval(function() {
    http.get("http://roblox-to-discord.herokuapp.com");
}, 300000); // every 5 minutes (300000)