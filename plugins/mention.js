/*------------------------------------------------------------------------------------------------------------------------------------------------------
Copyright (C) 2023 Loki - Xer.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Jarvis - Loki-Xer 
------------------------------------------------------------------------------------------------------------------------------------------------------*/

const { System, getBuffer, toAudio } = require("../lib/");

const logo = 'https://cdn.ironman.my.id/i/f6arip.jpeg';
const audios = ["https://cdn.ironman.my.id/i/ablatm.mp4", "https://i.imgur.com/0BYmNbz.mp4"];

System({ pattern: "mnew", on: "all", fromMe: 'public', desc: "mention audio" }, async (message, match) => {
  if (!message.mention.isOwner) return;

  try {
    const audio = audios[Math.floor(Math.random() * audios.length)];
    const Audio = await getBuffer(audio);
    const image2 = await getBuffer(logo);
    const res = await toAudio(Audio);

    await message.client.sendMessage(message.jid, {
      audio: res,
      mimetype: 'audio/mpeg',
      ptt: true,
      waveform: [00, 99, 00, 99, 00, 99, 00],
      contextInfo: {
        externalAdReply: {
          title: "⇆ㅤ ||◁ㅤ❚❚ㅤ▷||ㅤ ⇆",
          body: "02:23 ━━━━●───── 03:50",
          renderLargerThumbnail: false,
          thumbnail: image2,
          mediaType: 1,
          mediaUrl: 'https://www.instagram.com/craftastic_land_/profilecard/?igsh=MWFibHFndGJxZnhyaQ==',
          sourceUrl: "https://www.instagram.com/craftastic_land_/profilecard/?igsh=MWFibHFndGJxZnhyaQ==",
          showAdAttribution: true
        }
      }
    }, { quoted: message });
  } catch (error) {
    console.log(error);
  }
});


// mention audio for Jarvis-md
// credit : @Loki-Xer
// Thanks to @inrl-official 
