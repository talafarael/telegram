const telegramApi=require('node-telegram-bot-api')

const token='7218356256:AAE-8mBqDMnzso1WEQLTROnSv49a9WbXc4w'
const bot=new telegramApi(token,{polling:true})
const chats={}
const start=()=>{
   bot.setMyCommands([
    {command:'/start',description:'start'},
    {command:'/game',description:'game'}
])
bot.on('message',async msg=>{
    const text=msg.text
    const chatId=msg.chat.id
 if(text=='/start'){
    return bot.sendMessage(chatId,'start')
}
if(text=='/game'){
    await bot.sendMessage(chatId,'сеййчас загадаю игру')
    const randomNumber=Math.floor(Math.random()*100)
    chats[chatId]=randomNumber
    return bot.sendMessage(chatId,'отгадывай')
}
return bot.sendMessage(chatId,'i dont understand')
}) 

}
start()