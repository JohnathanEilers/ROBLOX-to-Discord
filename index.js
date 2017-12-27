const express = require('express');
const app = express();
const Discord = require('discord.js');
const client = new Discord.Client();
const version = '1.0.0'

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
  if (message.content === 'ping') {
    message.reply('pong but more updated xd');
  }
});

client.login('Mzk1NjY0MDcxODM3NDgzMDMx.DSWKbg.0JL1QtoK_a6Q27v-htwcErA0kb0');