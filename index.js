const Discord = require('discord.js');
const YTDL = require('ytdl-core');
const bot = new Discord.Client();

const token = '';

const PREFIX = '%';

bot.on('ready', () =>{
    console.log('This bot is online');
    bot.user.setActivity('%info')
});

bot.on('message', message=> {

    //if (!message.guild) return;

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

        case 'embed':
            const embed = new Discord.RichEmbed()

                .setTitle('User Information')
                .addField('Player Name', message.author.username, true)
                .addField('Version', 'v.0.1')
                .addField('Server', message.guild.name)
                .setColor(0x1abc9c)
                .setThumbnail(message.author.avatarURL)
                message.channel.send(embed);
                break;

        case 'play':
            if (!args[1]) return message.reply('gimme a link kind sir')
            if (message.member.voiceChannel) {
            message.member.voiceChannel.join()
                .then(connection => {
            connection.playStream(YTDL(args[1]));
                })};
            break;

        case 'stop':
            if (message.member.voiceChannel) {
                message.member.voiceChannel.leave(message.channel.send('see ya later c:'))
            };
    }


})



bot.login(token);

