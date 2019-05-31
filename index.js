const Discord = require('discord.js');
const bot = new Discord.Client();

const token = '';

const PREFIX = '%';

bot.on('ready', () =>{
    console.log('This bot is online');
    bot.user.setActivity('%info')
});

bot.on('message', message=> {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'czesc':
            message.reply('seawus c:');
            break;
        case 'avatar':
            message.reply(message.author.avatarURL);
            break;
        case 'status':
            if (message.author.presence.game == null) return message.reply('not playing any game atm c:')
            message.channel.send(message.author.presence.game.name);

            break;
        case 'clean':
            if (!args[1]) return message.reply('but, how many lines kind sir?')
            message.channel.bulkDelete(args[1]), message.channel.sendMessage('Cleaning done c:');
            break;


    }

})



bot.login(token);

