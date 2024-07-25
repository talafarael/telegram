const telegramApi=require('node-telegram-bot-api')

const token='7218356256:AAE-8mBqDMnzso1WEQLTROnSv49a9WbXc4w'
const bot=new telegramApi(token,{polling:true})
bot.setMyCommands([
    {command:'/start',description:'start'}
])
bot.on('message',async msg=>{
    const text=msg.text
    const chatId=msg.chat.id
    bot.sendMessage(chatId,`hello ${text}`)
})