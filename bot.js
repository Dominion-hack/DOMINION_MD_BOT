const TelegramBot = require('node-telegram-bot-api');

// 🔑 Bot token hardcoded
const TOKEN = '8654076422:AAFXyZW8aRKmYMwhNr1LEF8k2iXGAcCA_Oo';  // <-- put your token here
const OWNER_ID = 8402519157; // <-- your Telegram numeric ID

const bot = new TelegramBot(TOKEN, { polling: true });

// ===== COMMANDS =====
const commands = {
  // 🌐 General
  ping: (msg) => bot.sendMessage(msg.chat.id, "🏓 Pong!"),
  alive: (msg) => bot.sendMessage(msg.chat.id, "✅ Bot is alive!"),
  joke: (msg) => bot.sendMessage(msg.chat.id, "😂 Here's a joke!"),
  quote: (msg) => bot.sendMessage(msg.chat.id, "💡 Stay positive!"),
  fact: (msg) => bot.sendMessage(msg.chat.id, "🌍 Honey never spoils!"),
  owner: (msg) => bot.sendMessage(msg.chat.id, `👑 Bot Owner: ${OWNER_ID}`),

  // 👮 Group/Admin
  ban: (msg) => bot.sendMessage(msg.chat.id, "🚫 User banned!"),
  kick: (msg) => bot.sendMessage(msg.chat.id, "👢 User kicked!"),
  promote: (msg) => bot.sendMessage(msg.chat.id, "⭐ User promoted!"),
  demote: (msg) => bot.sendMessage(msg.chat.id, "⬇ User demoted!"),
  mute: (msg) => bot.sendMessage(msg.chat.id, "🔇 User muted!"),
  unmute: (msg) => bot.sendMessage(msg.chat.id, "🔊 User unmuted!"),
  warn: (msg) => bot.sendMessage(msg.chat.id, "⚠️ User warned!"),
  warnings: (msg) => bot.sendMessage(msg.chat.id, "📜 User warnings shown!"),
  clear: (msg) => bot.sendMessage(msg.chat.id, "🧹 Group cleared!"),
  resetlink: (msg) => bot.sendMessage(msg.chat.id, "🔗 Group invite reset!"),
  setgname: (msg) => bot.sendMessage(msg.chat.id, "✏️ Group name changed!"),
  setgdesc: (msg) => bot.sendMessage(msg.chat.id, "📝 Group description updated!"),
  setgpp: (msg) => bot.sendMessage(msg.chat.id, "🖼️ Group profile picture updated!"),
  welcome: (msg) => bot.sendMessage(msg.chat.id, "👋 Welcome messages toggled!"),
  goodbye: (msg) => bot.sendMessage(msg.chat.id, "👋 Goodbye messages toggled!"),
  antilink: (msg) => bot.sendMessage(msg.chat.id, "🚫 Anti-link toggled!"),
  antibadword: (msg) => bot.sendMessage(msg.chat.id, "😡 Anti-badword toggled!"),
  tagall: (msg) => bot.sendMessage(msg.chat.id, "📢 All members tagged!"),
  tagadmin: (msg) => bot.sendMessage(msg.chat.id, "👑 Admins tagged!"),
  hidetag: (msg) => bot.sendMessage(msg.chat.id, "🙈 Hidden tag sent!"),
  tagnotadmin: (msg) => bot.sendMessage(msg.chat.id, "⚠️ Non-admins tagged!"),
  mention: (msg) => bot.sendMessage(msg.chat.id, "💬 Mention mode toggled!"),
  setmention: (msg) => bot.sendMessage(msg.chat.id, "✏️ Mention message set!"),

  // 🎮 Fun / Games
  truth: (msg) => bot.sendMessage(msg.chat.id, "🤔 Truth question sent!"),
  dare: (msg) => bot.sendMessage(msg.chat.id, "🎯 Dare challenge sent!"),
  hangman: (msg) => bot.sendMessage(msg.chat.id, "🪢 Hangman game started!"),
  tictactoe: (msg) => bot.sendMessage(msg.chat.id, "❌⭕ TicTacToe started!"),
  guess: (msg) => bot.sendMessage(msg.chat.id, "🔢 Guessing game started!"),
  trivia: (msg) => bot.sendMessage(msg.chat.id, "🧠 Trivia question sent!"),
  answer: (msg) => bot.sendMessage(msg.chat.id, "✅ Answer submitted!"),
  compliment: (msg) => bot.sendMessage(msg.chat.id, "😊 You’re awesome!"),
  insult: (msg) => bot.sendMessage(msg.chat.id, "😂 Try harder next time"),
  ship: (msg) => bot.sendMessage(msg.chat.id, "❤️ 80% match!"),
  simp: (msg) => bot.sendMessage(msg.chat.id, "😂 SIMP LEVEL: 100%"),
  wasted: (msg) => bot.sendMessage(msg.chat.id, "💀 You’re wasted!"),
  character: (msg) => bot.sendMessage(msg.chat.id, "🎭 Character stats sent!"),
  shayari: (msg) => bot.sendMessage(msg.chat.id, "📝 Romantic shayari..."),
  rosday: (msg) => bot.sendMessage(msg.chat.id, "🌹 Sending rose..."),
  goodnight: (msg) => bot.sendMessage(msg.chat.id, "🌙 Goodnight!"),
  flirt: (msg) => bot.sendMessage(msg.chat.id, "😏 Flirt sent!"),

  // 🖼️ Stickers & Images
  sticker: (msg) => bot.sendMessage(msg.chat.id, "🖼️ Reply to an image to make sticker!"),
  simage: (msg) => bot.sendMessage(msg.chat.id, "📸 Sticker image sent!"),
  removebg: (msg) => bot.sendMessage(msg.chat.id, "🖌️ Background removed!"),
  blur: (msg) => bot.sendMessage(msg.chat.id, "💨 Image blurred!"),
  remini: (msg) => bot.sendMessage(msg.chat.id, "✨ Image enhanced!"),
  crop: (msg) => bot.sendMessage(msg.chat.id, "✂️ Image cropped!"),
  tgsticker: (msg) => bot.sendMessage(msg.chat.id, "🎨 Telegram sticker processed!"),

  // 🔤 Textmaker
  metallic: (msg) => bot.sendMessage(msg.chat.id, "⚡ METALLIC text created!"),
  ice: (msg) => bot.sendMessage(msg.chat.id, "❄️ ICE text created!"),
  snow: (msg) => bot.sendMessage(msg.chat.id, "☃️ SNOW text created!"),
  impressive: (msg) => bot.sendMessage(msg.chat.id, "✨ IMPRESSIVE text created!"),
  matrix: (msg) => bot.sendMessage(msg.chat.id, "🖥️ MATRIX text created!"),
  light: (msg) => bot.sendMessage(msg.chat.id, "💡 LIGHT text created!"),
  neon: (msg) => bot.sendMessage(msg.chat.id, "🌈 NEON text created!"),
  devil: (msg) => bot.sendMessage(msg.chat.id, "😈 DEVIL text created!"),
  fire: (msg) => bot.sendMessage(msg.chat.id, "🔥 FIRE text created!"),
  hacker: (msg) => bot.sendMessage(msg.chat.id, "💻 HACKER text created!"),
  blackpink: (msg) => bot.sendMessage(msg.chat.id, "💖 BLACKPINK style text created!"),

  // 🧩 Misc
  heart: (msg) => bot.sendMessage(msg.chat.id, "❤️"),
  horny: (msg) => bot.sendMessage(msg.chat.id, "😏"),
  circle: (msg) => bot.sendMessage(msg.chat.id, "⭕"),
  jail: (msg) => bot.sendMessage(msg.chat.id, "🚔 Sent to jail!"),
  triggered: (msg) => bot.sendMessage(msg.chat.id, "⚡ Triggered!"),
  comrade: (msg) => bot.sendMessage(msg.chat.id, "✊ Comrade!"),
  lolice: (msg) => bot.sendMessage(msg.chat.id, "😂 L O L I C E!"),
};

// ===== MESSAGE HANDLER (slash, dot, plain) =====
bot.on('message', (msg) => {
  if (!msg.text) return;

  let text = msg.text.trim();

  // Remove possible prefix '/' or '.'
  if (text.startsWith('/') || text.startsWith('.')) {
    text = text.slice(1);
  }

  const args = text.split(' ');
  const cmd = args.shift().toLowerCase();

  if (commands[cmd]) {
    commands[cmd](msg, args);
  }
});

// ===== MENU COMMAND =====
bot.onText(/\/start|\.start|start/, (msg) => {
  bot.sendMessage(msg.chat.id, "🤖 Mega Bot Ready! Use .menu or /menu to see commands.");
});

bot.onText(/\/menu|\.menu|menu/, (msg) => {
  bot.sendMessage(msg.chat.id, `
📜 MENU

🌐 General: .ping .alive .joke .quote .fact .owner
🎮 Games/Fun: .truth .dare .hangman .tictactoe .guess .trivia .answer .compliment .insult .ship .simp .wasted .character .shayari .rosday .goodnight .flirt
🖼️ Stickers/Images: .sticker .simage .removebg .blur .remini .crop .tgsticker
🔤 Textmaker: .metallic .ice .snow .impressive .matrix .light .neon .devil .fire .hacker .blackpink
👮 Group/Admin: .ban .kick .promote .demote .mute .unmute .warn .warnings .clear .resetlink .setgname .setgdesc .setgpp .welcome .goodbye .antilink .antibadword .tagall .tagadmin .hidetag .tagnotadmin .mention .setmention
🧩 Misc: .heart .horny .circle .jail .triggered .comrade .lolice
  `);
});
