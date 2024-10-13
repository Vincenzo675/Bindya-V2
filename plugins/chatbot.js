const { System, getJson, config, isPrivate, getData, setData } = require('../lib');

System({
    pattern: "chatbot", 
    fromMe: true,
    desc: "chat bot", 
    type: "misc",
},
async (message, match) => {
    if(!match) await message.send(` *${message.prefix} chatbot on* to activate chat bot\n *${message.prefix} chatbot off* to disable chat bot\n *${message.prefix} chatbot only/pm* to activate chat bot only for PM\n *${message.prefix} chatbot only/group* to activate chat bot only for group chats\n *${message.prefix} chatbot on/chat* to activate chat bot for both group and PM`);
    const { chatBot } = await getData(message.user.id);
    if(match === "on") {
        const action = chatBot && chatBot.message ? chatBot.message : "chat";
        await setData(message.user.id, action, "true", "chatBot");
        await message.send("_*Chat bot active*_");
    } else if(match === "off") {
        const action = chatBot && chatBot.message ? chatBot.message : "chat";
        await setData(message.user.id, action, "false", "chatBot");
        await message.send("_*Chat bot disabled*_");
    } else if(match === "only/pm") {
        const status = chatBot && chatBot.status ? chatBot.status : "false";
        await setData(message.user.id, "pm", status, "chatBot");
        await message.send("_*Chat bot only works in PM*_");
    } else if (match === "only/group") {
        const status = chatBot && chatBot.status ? chatBot.status : "false";
        await setData(message.user.id, "group", status, "chatBot");
        await message.send("_*Chat bot only works in group chats*_");
    } else if (match === "on/chat") {
        const status = chatBot && chatBot.status ? chatBot.status : "false";
        await setData(message.user.id, "chat", status, "chatBot");
        await message.send("_*Chat bot works in both group and PM*_");
    } else {
        await message.send(` *${message.prefix} chatbot on* to activate chat bot\n *${message.prefix} chatbot off* to disable chat bot\n *${message.prefix} chatbot only/pm* to activate chat bot only for PM\n *${message.prefix} chatbot only/group* to activate chat bot only for group chats\n *${message.prefix} chatbot on/chat* to activate chat bot for both group and PM`);
    }
});


System({
    on: 'text',
    fromMe: isPrivate,
    dontAddCommandList: true
}, async (m, match) => {
    if(m.isBot) return;
    const { chatBot } = await getData(m.user.id);
    if(chatBot && chatBot.status === 'true' && chatBot.message === "chat") {
        let { cnt } = await getJson(`http://api.brainshop.ai/get?bid=${config.BRAINSHOP.split(/[,;|]/)[0]}&key=${config.BRAINSHOP.split(/[,;|]/)[1]}&uid=[${m.sender.split('@')[0]}]&msg=[${m.body}]`)
        return await m.reply(cnt)
    } else if(chatBot && chatBot.status === 'true' && chatBot.message === 'group' && m.isGroup) {
        let { cnt } = await getJson(`http://api.brainshop.ai/get?bid=${config.BRAINSHOP.split(/[,;|]/)[0]}&key=${config.BRAINSHOP.split(/[,;|]/)[1]}&uid=[${m.sender.split('@')[0]}]&msg=[${m.body}]`)
        return await m.reply(cnt)
    } else if(chatBot && chatBot.status === 'true' && chatBot.message === 'pm' && !m.isGroup) {
        let { cnt } = await getJson(`http://api.brainshop.ai/get?bid=${config.BRAINSHOP.split(/[,;|]/)[0]}&key=${config.BRAINSHOP.split(/[,;|]/)[1]}&uid=[${m.sender.split('@')[0]}]&msg=[${m.body}]`)
        return await m.reply(cnt)
    }
});
