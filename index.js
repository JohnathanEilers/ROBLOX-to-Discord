const express = require('express');
const app = express();
const Discord = require('discord.js');
const client = new Discord.Client();
const version = '1.0.0'
const prefix = '!'

// set the port of our application
// process.env.PORT lets the port be set by Heroku
const port = process.env.PORT || 5000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the `public` directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', (request, response) => {
    // ejs render automatically looks in the views folder
    response.render('index');
});

app.listen(port, () => {
    // will echo 'Our app is running on http://localhost:5000 when run locally'
    console.log('Our app is running on http://localhost:' + port);
});

client.on('ready', () => {
  console.log('Starting R2D v' + version);
});

client.on('message', message => {
  if (message.content === prefix + 'linkaccount ') {
    message.reply('pong but more updated xd');
  }
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'new-member-entry');
  if (!channel) return;
  channel.send(`Welcome to the Cobalt Nation Discord server, ${member}! In order to smoothly and automatically receive your role(s), please follow the instructions below.\n\n1. Say !linkaccount <username> where "<username>" is your exact ROBLOX username. For example, !linkaccount XxZONExXx would link Zone's Discord account to his ROBLOX account.\n2. Link your account via the given instructions\n3. say !getrole to receive your role.\nIf you need help, ask any @High Rank!`);
});

client.login('Mzk1NjY0MDcxODM3NDgzMDMx.DSWKbg.0JL1QtoK_a6Q27v-htwcErA0kb0');