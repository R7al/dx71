const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs"); //npm i fs
const ms = require("ms");   //npm i ms 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});



client.on('ready', () => {

    client.user.setActivity("#تقديم",{type: 'Streaming'})

});



client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});












var guilds = {};
client.on('message', message => {
 var prefix2 = '#';//البرفكس
  if(message.content.startsWith(prefix2 + "تقديم")) {

if(!message.channel.guild) return message.reply(' ');


  let submite = message.guild.channels.find(`name`, "members1");

  if(!submite) return message.channel.send("❌لم اجد الروم الخاص بالتقديمات");

    let filter = m => m.author.id === message.author.id;

    let thisMessage;

    let thisFalse;

    message.channel.send('📝 **| من فضلك اكتب اسمك الأن... ✏ **').then(msg => {



    message.channel.awaitMessages(filter, {

      max: 1,

      time: 90000,

      errors: ['time']

    })

    .then(collected => {

      collected.first().delete();

      thisMessage = collected.first().content;

      let boi;

      msg.edit('📜 **| مدة لعبك لللعبة     ... ✏ **').then(msg => {



          message.channel.awaitMessages(filter, {

            max: 1,

            time: 90000,

            errors: ['time']

          })

          .then(collected => {

            collected.first().delete();

            boi = collected.first().content;

            let boi2;

            msg.edit('🤵 **| سيرفر الي تلعب بيه   ... ✏ **').then(msg => {



              message.channel.awaitMessages(filter, {

                max: 1,

                time: 90000,

                errors: ['time']

              })

              .then(collected => {

                collected.first().delete();

              boi2 = collected.first().content;

      msg.edit('🛡 **| [ هل انت متأكد من تقديمك؟ | [ نعم ] او [ لا**');

 message.channel.awaitMessages(response => response.content === 'نعم' || 'لا' && filter,{

        max: 1,

        time: 90000,

        errors: ['time']

      })

      .then(collected => {

        if(collected.first().content === 'لا') {

          msg.delete();

          message.delete();

          thisFalse = false;

        }

        if(collected.first().content === 'نعم') {

          if(thisFalse === false) return;

          msg.edit('🕊 **| Done ✅, تم بنجاح نشر تقديم في روم التقديمات**');

          collected.first().delete();

          submite.send(`@everyone | @here
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
**[ ${message.guild.name}:arrow_down: ] Submite⬇**

[**اسم المقدم**]: 
${thisMessage}

[**خبرته**]: 
${boi}

[**كلانات سابقة **]: 
${boi2}

[**تم التقديم بواسطة**]: 
${message.author}

[**ايدي المقدم**]: 
${message.author.id}`);

        }

      }

  );

});

    });

  }

    );

  });

}

);

    })}});







client.login(process.env.BOT_TOKEN);
