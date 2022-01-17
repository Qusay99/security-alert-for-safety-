// import { TelegramBot, UpdateType } from "https://deno.land/x/telegram_bot_api/mod.ts"
import { TelegramBot, UpdateType } from "https://raw.githubusercontent.com/michael-spengler/deno-telegram-bot-api/master/mod.ts"
import "https://deno.land/x/dot_env@0.2.0/load.ts"

const TOKEN = Deno.env.get("TOKEN");
if (!TOKEN) throw new Error("Bot token is not provided");
const bot = new TelegramBot(TOKEN);

bot.on(UpdateType.Message, async (message: any) => {

    const text = message.message.text || "I can't hear you";
    console.log(message)
    await bot.sendMessage({ chat_id: -713194120, text: `echo ${text}` })

});

bot.run({
    polling: true,
});