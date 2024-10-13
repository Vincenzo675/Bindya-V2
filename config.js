const { Sequelize } = require('sequelize');
const fs = require('fs');

if (fs.existsSync('config.env')) {
  require('dotenv').config({
      path: './config.env'
  });
};

const toBool = (x) => x === 'true';

const DATABASE_URL = process.env.DATABASE_URL === undefined ? "./database.db" : process.env.DATABASE_URL

module.exports = {
  VERSION: require('./package.json').version,
  BAN_CHATS: process.env.BAN_CHATS || "",
  PORT: toBool(process.env.PORT) || 8000,
  PM_BLOCKER: toBool(process.env.PM_BLOCKER) || false,
  PM_BLOCKER_MSG: process.env.PM_BLOCKER_MSG || "_*Pm blocker active on this chat*_",
  AUDIO_DATA: process.env.AUDIO_DATA || 'Vince;𝓠𝓾𝓮𝓮𝓷 𝓑𝓲𝓷𝓭𝔂𝓪;https://cdn.ironman.my.id/i/f6arip.jpeg',
  WARN_COUNT: process.env.WARN_COUNT || '3',
  ANTILINK_MSG: process.env.ANTILINK_MSG || "_*Link Not allowed in this group*_",
  ANTIBOT_MSG: process.env.ANTIBOT_MSG || "_*Bot Not allowed in this group*_",
  ANTIWORD_MSG: process.env.ANTIWORD_MSG || "_*antiword deleted successfully*_",
  ALIVE_DATA : process.env.ALIVE_DATA || "_*Hy &sender i am alive now*_\n\n_PLATFORM: &platform_\n_RUNTIME : &runtime_\n\n_. type alive to update your alive message_",
  SESSION_ID: process.env.SESSION_ID || 'Jarvis_a0ac_24b5_c78d_5b79_bdf0_e029_539f_e86d',
  LANG: 'EN',
  SETVV: process.env.SETVV || 'DM',
  ELEVENLABS: process.env.ELEVENLABS,
  HANDLERS: process.env.HANDLERS || process.env.HANDLER || process.env.PREFIX || '.',
  ALLWAYS_ONLINE: toBool(process.env.ALLWAYS_ONLINE || "false"),
  READ_MSG: toBool(process.env.READ_MSG || "false"),
  BRANCH: "main",
  LINKPREVIEW: toBool(process.env.LINKPREVIEW || "false"),
  CONTEXTINFO: process.env.CONTEXTINFO || `{"title": "𝓠𝓾𝓮𝓮𝓷 𝓑𝓲𝓷𝓭𝔂𝓪", "body": "ᴀᴡᴇꜱᴏᴍᴇ ❦", "thumbnailUrl": "https://cdn.ironman.my.id/i/195mv0.jpeg", "renderLargerThumbnail": true, "mediaType": 1, "mediaUrl": "", "sourceUrl": "https://github.com/Vincenzo675/Jarvis", "showAdAttribution": true}`,
  KOYEB_API: process.env.KOYEB_API,
  BRAINSHOP: process.env.BRAINSHOP || '172372,nbjE0YAlyw3cpoMl',
  TGTOKEN: "bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4",
  API: 'https://api-loki-ser-1o2h.onrender.com/',
  STICKER_PACKNAME: process.env.STICKER_PACKNAME || '𝓠𝓾𝓮𝓮𝓷 𝓑𝓲𝓷𝓭𝔂𝓪',
  CALL_BLOCK: toBool(process.env.CALL_BLOCK) || false,
  SAVE_STATUS: toBool(process.env.SAVE_STATUS) || false,
  STATUS_VIEW: process.env.STATUS_VIEW || "true",
  REJECT_CALL: toBool(process.env.REJECT_CALL || "true"),
  ERROR_MSG: toBool(process.env.ERROR_MSG) || true,
  WELCOME_MSG: process.env.WELCOME_MSG || "Hi &mention Welcome to &gname",
  GOODBYE_MSG: process.env.GOODBYE_MSG || "Hi $mention It was Nice Seeing you",
  MEDIA_DATA: process.env.MEDIA_DATA|| 'ʟɪꜱᴛ ᴍᴇɴᴜ;𝓠𝓾𝓮𝓮𝓷 𝓑𝓲𝓷𝓭𝔂𝓪;https://cdn.ironman.my.id/i/5wu1ek.jpeg',
  MENU_FONT: process.env.MENU_FONT || "0;0",
  SUDO: process.env.SUDO || '',
  STARTING_MSG: toBool(process.env.STARTING_MSG) || true,
  LOG_MSG: toBool(process.env.LOG_MSG) || true,
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || '',
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || '',
  BOT_INFO: process.env.BOT_INFO || '𝓠𝓾𝓮𝓮𝓷 𝓑𝓲𝓷𝓭𝔂𝓪;𝑽𝒊𝒏𝒄𝒆;https://cdn.ironman.my.id/i/vl7541.mp4',
  WORK_TYPE: process.env.WORK_TYPE || 'private',
  DATABASE: DATABASE_URL === "./database.db" ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: false }) : new Sequelize(DATABASE_URL, {dialect: "postgres", ssl: true, protocol: "postgres", dialectOptions: { native: true, ssl: { require: true, rejectUnauthorized: false },}, logging: false }),
};
