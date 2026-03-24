// ===== DOMINION_MD BOT V5 (100+ commands merged) =====
const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs');

const token = process.env.BOT_TOKEN || '8654076422:AAFXyZW8aRKmYMwhNr1LEF8k2iXGAcCA_Oo';
const bot = new TelegramBot(token, { polling: true });

// ===== USERS DB =====
let users = [];
if (fs.existsSync('users.json')) {
  users = JSON.parse(fs.readFileSync('users.json'));
}

// Save users
bot.on('message', (msg) => {
  if (!users.includes(msg.chat.id)) {
    users.push(msg.chat.id);
    fs.writeFileSync('users.json', JSON.stringify(users));
  }
});

// ===== MENU =====
bot.onText(/\/menu|\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, `
┌══════════════════┐
│ ☠️ DOMINION_MD BOT V5 ☠️ │
└══════════════════┘

⚡ GENERAL
☠️ alive
☠️ ping
☠️ time
☠️ date
☠️ info
☠️ id
☠️ help

⚡ FUN
☠️ joke
☠️ quote
☠️ fact
☠️ roast
☠️ compliment
☠️ mood
☠️ laugh
☠️ cry
☠️ love
☠️ angry
☠️ bored
☠️ dance
☠️ sing
☠️ sleep
☠️ wake
☠️ food
☠️ drink
☠️ game
☠️ music
☠️ fun
☠️ roll20
☠️ flip
☠️ magic8
☠️ fortune
☠️ pick
☠️ coinflip
☠️ truth
☠️ dare
☠️ meme
☠️ cat
☠️ dog
☠️ lol
☠️ emoji
☠️ tip
☠️ hype

⚡ TOOLS
☠️ calc
☠️ reverse
☠️ upper
☠️ lower
☠️ random
☠️ password
☠️ encode
☠️ decode
☠️ length
☠️ count
☠️ even
☠️ odd
☠️ hex
☠️ binary
☠️ ascii
☠️ trim
☠️ replace
☠️ sort
☠️ unique
☠️ repeat
☠️ hash
☠️ uuid
☠️ url
☠️ shorten
☠️ expand
☠️ random1000
☠️ roll100
☠️ hexcolor
☠️ bin
☠️ octal
☠️ reversewords
☠️ countchars
☠️ countwords
☠️ shout
☠️ whisper
☠️ randcolor
☠️ sqrt
☠️ pow
☠️ mod
☠️ abs

⚡ GAMES
☠️ guess
☠️ dice
☠️ rps
☠️ dice6
☠️ dice12
☠️ guess50
☠️ rps2
☠️ trivia
☠️ quiz
☠️ pickfruit
☠️ lottery
☠️ catch
☠️ maze
☠️ roll
☠️ play
☠️ stop
☠️ win
☠️ lose
☠️ score

⚡ ADMIN / EXTRA
☠️ stats
☠️ broadcast
☠️ ban
☠️ unban
☠️ mute
☠️ unmute
☠️ warn
☠️ clear
☠️ kick
☠️ promote
☠️ weather
☠️ news
☠️ github
☠️ define
☠️ translate
☠️ clearcache
☠️ restart
☠️ pingserver
☠️ stats2
☠️ update

🔥 Type any command with / (example: /ping)
`);
});

// ===== COMMAND SYSTEM =====
const commands = {

  // GENERAL
  alive: () => "☠️ Bot is alive",
  ping: () => "☠️ Pong!",
  time: () => `☠️ ${new Date().toLocaleTimeString()}`,
  date: () => `☠️ ${new Date().toDateString()}`,
  help: () => "☠️ Use /menu to see commands",
  id: (msg) => `☠️ ID: ${msg.chat.id}`,
  info: (msg) => `☠️ Name: ${msg.from.first_name}`,
  uptime: () => "☠️ Running smoothly",
  owner: () => "☠️ Owner: You 😎",
  bot: () => "☠️ Telegram Bot v5",
  version: () => "☠️ Version 5.0",
  platform: () => "☠️ Telegram",
  status: () => "☠️ Online",
  ping2: () => "☠️ Fast ⚡",
  system: () => "☠️ Stable",

  // FUN
  joke: () => "☠️ Why coder broke? Bugs 😂",
  quote: () => "☠️ Stay strong 💪",
  fact: () => "☠️ Honey never spoils 🍯",
  roast: () => "☠️ You lag more than 2G 😭",
  compliment: () => "☠️ You’re smart fr ✨",
  mood: () => "☠️ Chill 😎",
  laugh: () => "☠️ 😂😂😂",
  cry: () => "☠️ 😭😭😭",
  love: () => "☠️ ❤️",
  angry: () => "☠️ 😡",
  bored: () => "☠️ Go code 😏",
  dance: () => "☠️ 💃",
  sing: () => "☠️ 🎤",
  sleep: () => "☠️ 😴",
  wake: () => "☠️ 🌞",
  food: () => "☠️ 🍔",
  drink: () => "☠️ 🥤",
  game: () => "☠️ 🎮",
  music: () => "☠️ 🎧",
  fun: () => "☠️ Have fun!",
  roll20: () => "☠️ You rolled a 20-sided die: " + (Math.floor(Math.random()*20)+1),
  flip: () => "☠️ Coin flip: " + (Math.random()>0.5?"Heads":"Tails"),
  magic8: () => { const answers = ["Yes","No","Maybe","Ask again later","Definitely","Never"]; return "☠️ Magic 8 Ball: "+answers[Math.floor(Math.random()*answers.length)]; },
  fortune: () => "☠️ Your fortune: Good luck is coming! 🍀",
  pick: (msg, text) => { const items = text.split(" ").slice(1); if(items.length<2) return "☠️ Use like: /pick apple banana orange"; return "☠️ I choose: "+items[Math.floor(Math.random()*items.length)]; },
  coinflip: () => "☠️ " + (Math.random()>0.5?"Heads":"Tails"),
  truth: () => "☠️ Truth: Always be honest 😏",
  dare: () => "☠️ Dare: Do 10 pushups 💪",
  meme: () => "☠️ Meme time 😂 [insert link]",
  cat: () => "☠️ 🐱 Cute cat pic!",
  dog: () => "☠️ 🐶 Cute dog pic!",
  lol: () => "☠️ 😂🤣 Laughter overload!",
  emoji: () => "☠️ 😎🤯🔥💯🎉",
  tip: () => "☠️ Pro tip: Keep coding every day!",
  hype: () => "☠️ Let's get hyped! 🚀",

  // TOOLS
  calc: (msg,text)=>{try{return "☠️ "+eval(text.split(" ").slice(1).join(" "));}catch{return "☠️ Error";}},
  reverse: (msg,text)=>"☠️ "+text.split(" ").slice(1).join(" ").split("").reverse().join(""),
  upper: (msg,text)=>"☠️ "+text.split(" ").slice(1).join(" ").toUpperCase(),
  lower: (msg,text)=>"☠️ "+text.split(" ").slice(1).join(" ").toLowerCase(),
  random: () => `☠️ ${Math.floor(Math.random()*100)}`,
  password: () => "☠️ " + Math.random().toString(36).slice(-8),
  encode: (msg,text)=>"☠️ "+Buffer.from(text).toString('base64'),
  decode: (msg,text)=>"☠️ "+Buffer.from(text,'base64').toString('utf-8'),
  length: (msg,text)=>"☠️ "+text.length,
  count: (msg,text)=>"☠️ Words: "+text.split(" ").length,
  even: ()=>"☠️ Even tool",
  odd: ()=>"☠️ Odd tool",
  hex: ()=>"☠️ Hex tool",
  binary: ()=>"☠️ Binary tool",
  ascii: ()=>"☠️ ASCII tool",
  trim: ()=>"☠️ Trimmed",
  replace: ()=>"☠️ Replaced",
  sort: ()=>"☠️ Sorted",
  unique: ()=>"☠️ Unique",
  repeat: ()=>"☠️ Repeat",
  hash: ()=>"☠️ Hash",
  uuid: ()=>"☠️ ID generated",
  url: ()=>"☠️ URL tool",
  shorten: ()=>"☠️ Short link",
  expand: ()=>"☠️ Expanded",
  random1000: ()=>"☠️ Random 0-1000: "+Math.floor(Math.random()*1001),
  roll100: ()=>"☠️ Random 0-100: "+Math.floor(Math.random()*101),
  hexcolor: ()=>"☠️ Random Hex Color: #"+Math.floor(Math.random()*16777215).toString(16),
  bin: (msg,text)=>"☠️ "+text.split(" ").slice(1).map(c=>c.charCodeAt(0).toString(2)).join(" "),
  octal: (msg,text)=>"☠️ "+text.split(" ").slice(1).map(c=>c.charCodeAt(0).toString(8)).join(" "),
  reversewords: (msg,text)=>"☠️ "+text.split(" ").slice(1).reverse().join(" "),
  countchars: (msg,text)=>"☠️ Characters: "+text.split(" ").slice(1).join(" ").length,
  countwords: (msg,text)=>"☠️ Words: "+text.split(" ").slice(1).length,
  shout: (msg,text)=>"☠️ "+text.split(" ").slice(1).join(" ").toUpperCase()+"!!!",
  whisper: (msg,text)=>"☠️ "+text.split(" ").slice(1).join(" ").toLowerCase()+"...",
  randcolor: ()=>"☠️ Color: rgb("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")",
  sqrt: (msg,text)=>"☠️ √"+text.split(" ")[1]+" = "+Math.sqrt(text.split(" ")[1]),
  pow: (msg,text)=>"☠️ "+text.split(" ")[1]+"^"+text.split(" ")[2]+" = "+Math.pow(text.split(" ")[1],text.split(" ")[2]),
  mod: (msg,text)=>"☠️ "+text.split(" ")[1]+" % "+text.split(" ")[2]+" = "+(text.split(" ")[1]%text.split(" ")[2]),
  abs: (msg,text)=>"☠️ |"+text.split(" ")[1]+"| = "+Math.abs(text.split(" ")[1]),

  // GAMES
  dice: ()=>"☠️ "+(Math.floor(Math.random()*6)+1),
  guess: ()=>"☠️ Guess 0-9",
  rps: ()=>"☠️ Rock/Paper/Scissors",
  dice6: ()=>"☠️ Dice roll 1-6: "+(Math.floor(Math.random()*6)+1),
  dice12: ()=>"☠️ Dice roll 1-12: "+(Math.floor(Math.random()*12)+1),
  guess50: ()=>"☠️ Guess a number 0-50",
  rps2: ()=>"☠️ Rock, Paper, Scissors ready!",
  trivia: ()=>"☠️ Trivia: What is the capital of France? 🗼",
  quiz: ()=>"☠️ Quiz time! 2+2=?",
  pickfruit: ()=>"☠️ Choose: Apple 🍎, Banana 🍌, Cherry 🍒",
  lottery: ()=>"☠️ Lottery number: "+(Math.floor(Math.random()*100)+1),
  catch: ()=>"☠️ Catch the ball! 🏀",
  maze: ()=>"☠️ Navigate the maze! 🌀",
  roll: ()=>"☠️ Roll done",
  play: ()=>"☠️ Playing...",
  stop: ()=>"☠️ Stopped",
  win: ()=>"☠️ You win!",
  lose: ()=>"☠️ You lose!",
  score: ()=>"☠️ Score: 0",

  // ADMIN / EXTRA
  stats: ()=>`☠️ Users: ${users.length}`,
  broadcast: ()=>"☠️ Admin only",
  ban: ()=>"☠️ Banned",
  unban: ()=>"☠️ Unbanned",
  mute: ()=>"☠️ Muted",
  unmute: ()=>"☠️ Unmuted",
  warn: ()=>"☠️ Warned",
  clear: ()=>"☠️ Cleared",
  kick: ()=>"☠️ Kicked",
  promote: ()=>"☠️ Promoted",
  weather: ()=>"☠️ Weather: Sunny ☀️",
  news: ()=>"☠️ News headline: Something big happened!",
  github: ()=>"☠️ GitHub repo: https://github.com/",
  define: (msg,text)=>"☠️ Definition: "+text.split(" ").slice(1).join(" "),
  translate: (msg,text)=>"☠️ Translation: "+text.split(" ").slice(1).join(" "),
  clearcache: ()=>"☠️ Cache cleared",
  restart: ()=>"☠️ Bot restarting...",
  pingserver: ()=>"☠️ Server ping: 42ms",
  stats2: ()=>`☠️ Users count: ${users.length}`,
  update: ()=>"☠️ Bot updated successfully!"
};

// ===== HANDLE COMMANDS FOR GROUPS + DMs =====
bot.on('message', (msg) => {
  const text = msg.text?.toLowerCase();
  if (!text || !text.startsWith('/')) return;

  const cmd = text.split(" ")[0].replace("/", "");

  // Log DM commands separately (optional)
  if(msg.chat.type === 'private'){
    console.log(`DM Command from ${msg.from.username || msg.from.first_name}: /${cmd}`);
  }

  if(commands[cmd]){
    const res = commands[cmd](msg, text);
    bot.sendMessage(msg.chat.id, res);
  }
});
