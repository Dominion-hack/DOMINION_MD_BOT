const TelegramBot = require('node-telegram-bot-api');
const express = require('express');

const TOKEN = '8751562394:AAGPAESSjoO73vfa1D971KZvYeBXamcaBP8';
const bot = new TelegramBot(TOKEN, { polling: true });

// ===== RENDER FIX =====
const app = express();
const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => res.send("☠️ Dominion Bot Running"));
app.listen(PORT);

// ===== MESSAGE HANDLER =====
bot.on('message', async (msg) => {
  if (!msg.text) return;

  let text = msg.text.trim();
  if (text.startsWith('/') || text.startsWith('.')) text = text.slice(1);

  const args = text.split(' ');
  const cmd = args.shift().toLowerCase();
  const chatId = msg.chat.id;

  try {

    // ===== GENERAL =====
    if (cmd === "ping") return bot.sendMessage(chatId,"🏓 Pong!");
    if (cmd === "alive") return bot.sendMessage(chatId,"✅ Bot Alive!");
    if (cmd === "time") return bot.sendMessage(chatId,new Date().toLocaleTimeString());
    if (cmd === "date") return bot.sendMessage(chatId,new Date().toLocaleDateString());
    if (cmd === "id") return bot.sendMessage(chatId,`🆔 ${msg.from.id}`);

    // ===== TOOLS (REAL) =====
    if (["calc","sqrt","pow","mod","abs"].includes(cmd)) {
      try {
        return bot.sendMessage(chatId, `🧮 ${eval(args.join(" "))}`);
      } catch {
        return bot.sendMessage(chatId,"❌ Error");
      }
    }

    if (cmd === "reverse") return bot.sendMessage(chatId,args.join(" ").split("").reverse().join(""));
    if (cmd === "upper") return bot.sendMessage(chatId,args.join(" ").toUpperCase());
    if (cmd === "lower") return bot.sendMessage(chatId,args.join(" ").toLowerCase());
    if (cmd === "length") return bot.sendMessage(chatId,args.join(" ").length.toString());

    if (["random","roll","roll100","random1000"].includes(cmd)) {
      let max = cmd==="roll100"?100:cmd==="random1000"?1000:50;
      return bot.sendMessage(chatId,`🎲 ${Math.floor(Math.random()*max)+1}`);
    }

    if (cmd === "binary") return bot.sendMessage(chatId,Number(args[0]).toString(2));
    if (cmd === "hex") return bot.sendMessage(chatId,Number(args[0]).toString(16));

    // ===== FUN =====
    const fun = ["😂","😭","❤️","😡","😴","💃","🎤","🍔","🥤"];
    if (["laugh","cry","love","angry","bored","dance","sing","food","drink"].includes(cmd)) {
      return bot.sendMessage(chatId, fun[Math.floor(Math.random()*fun.length)]);
    }

    if (cmd==="joke") return bot.sendMessage(chatId,"😂 Why dev broke? Too many bugs!");
    if (cmd==="quote") return bot.sendMessage(chatId,"💡 Keep pushing forward!");
    if (cmd==="fact") return bot.sendMessage(chatId,"🌍 The internet never sleeps.");
    if (cmd==="compliment") return bot.sendMessage(chatId,"🔥 You’re powerful!");
    if (cmd==="roast") return bot.sendMessage(chatId,"💀 Even WiFi is faster than you!");

    // ===== GAMES =====
    if (["guess","guess50"].includes(cmd)) {
      let max = cmd==="guess50"?50:10;
      let num = Math.floor(Math.random()*max)+1;
      let user = parseInt(args[0]);
      if (!user) return bot.sendMessage(chatId,`Guess 1-${max}`);
      return bot.sendMessage(chatId,user===num?"🎉 Correct!":`❌ It was ${num}`);
    }

    if (["dice","dice6","dice12"].includes(cmd)) {
      let max = cmd==="dice12"?12:6;
      return bot.sendMessage(chatId,`🎲 ${Math.floor(Math.random()*max)+1}`);
    }

    if (cmd==="coinflip") return bot.sendMessage(chatId,Math.random()>0.5?"Heads":"Tails");

    // ===== GROUP ADMIN (REAL) =====
    if (["ban","kick"].includes(cmd)) {
      if (!msg.reply_to_message) return bot.sendMessage(chatId,"Reply to user");
      await bot.banChatMember(chatId,msg.reply_to_message.from.id);
      return bot.sendMessage(chatId,"🚫 Done");
    }

    if (cmd==="unban") {
      if (!msg.reply_to_message) return bot.sendMessage(chatId,"Reply to user");
      await bot.unbanChatMember(chatId,msg.reply_to_message.from.id);
      return bot.sendMessage(chatId,"✅ Unbanned");
    }

    if (cmd==="mute") {
      if (!msg.reply_to_message) return bot.sendMessage(chatId,"Reply to user");
      await bot.restrictChatMember(chatId,msg.reply_to_message.from.id,{can_send_messages:false});
      return bot.sendMessage(chatId,"🔇 Muted");
    }

    if (cmd==="unmute") {
      if (!msg.reply_to_message) return bot.sendMessage(chatId,"Reply to user");
      await bot.restrictChatMember(chatId,msg.reply_to_message.from.id,{can_send_messages:true});
      return bot.sendMessage(chatId,"🔊 Unmuted");
    }

  } catch(e){
    console.log(e);
    bot.sendMessage(chatId,"⚠️ Error");
  }
});

// ===== MENU =====
bot.onText(/\/start|\.start|start|\/menu|\.menu|menu/, msg => {
  bot.sendMessage(msg.chat.id, `
┌══════════════════┐
│ ☠️ DOMINION_MD BOT V5 ☠️ │
└══════════════════┘

⚡ GENERAL
☠️ alive
☠️ ping
☠️ time
☠️ date
☠️ id

⚡ FUN
☠️ joke
☠️ quote
☠️ fact
☠️ compliment
☠️ roast
☠️ laugh
☠️ cry
☠️ love
☠️ angry
☠️ bored
☠️ dance
☠️ sing
☠️ food
☠️ drink

⚡ TOOLS
☠️ calc
☠️ reverse
☠️ upper
☠️ lower
☠️ length
☠️ random
☠️ roll100
☠️ random1000
☠️ binary
☠️ hex

⚡ GAMES
☠️ guess
☠️ guess50
☠️ dice
☠️ dice12
☠️ coinflip

⚡ ADMIN
☠️ ban
☠️ unban
☠️ mute
☠️ unmute
☠️ kick

🔥 Use / or . or normal command
`);
});

console.log("☠️ BOT RUNNING PERFECTLY 🔥");
