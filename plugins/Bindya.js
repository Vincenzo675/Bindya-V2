const { System, isPrivate } = require('../lib/'); 

System({
	pattern: 'secret ?(.*)',
	fromMe: isPrivate,
	desc: 'sending text',
	type: 'example',
}, async (message, match, m) => {

	await message.send("*I don’t know how to begin because words feel so small compared to what I’m feeling. 💔 There’s been something sitting in my heart for so long now, something that grows heavier with every day that passes, and I can’t keep it inside anymore. It’s about you. You, who probably don’t even realize how much you mean to me.🌹From the first moment I saw you, something in me shifted. I didn’t understand it at first, but every time I saw you, every time you spoke, smiled, or just existed, I felt something so strong it scared me. And I’ve been scared ever since—scared because how could I feel this way for someone so incredible, someone who probably doesn’t even know I exist? 😔You light up the world in ways I can’t explain. 🌟 Every time you walk into a room, it’s like the air changes, and everything feels... lighter. But for me, that light is mixed with the weight of knowing I’ve held this love inside, unable to share it with you. It’s a love that’s grown so quietly, so deeply, that sometimes it hurts.💖There have been so many moments when I wanted to tell you. When I wanted to just look into your eyes and say, “You mean everything to me.” But I couldn’t. I’ve been so scared—scared of losing you before I even had the chance to know you. 🌸I know this might come as a shock, and maybe you’ll never understand just how much you’ve impacted my life, but I couldn’t keep these feelings buried any longer. It hurts too much. It hurts to see you from a distance and not be able to tell you how special you are, not just to me, but to the world. 🌙I don’t know what you’ll think, and maybe this will change nothing between us. But I needed you to know that someone, somewhere, thinks of you as the most beautiful part of their day. 🌹 You’ve touched my heart in ways I can’t even explain, and I just couldn’t bear to keep that to myself anymore. 💔No matter what happens after this, you’ll always be the one who showed me what it means to love in silence. And if this confession makes you smile, even for a moment, then it’s worth all the fear I’ve carried. 🌸 With all the love I never dared to speak,Someone who loves you more than words can say. 💖*")
});

System({
	pattern: 'hehe ?(.*)',
	fromMe: isPrivate,
	desc: 'Sends image',
	type: 'example',
}, async (message, match, m) => {

	await message.client.sendMessage(message.chat, {image: {url: 'https://cdn.ironman.my.id/i/5wu1ek.jpeg','https://cdn.ironman.my.id/i/195mv0.jpeg','https://cdn.ironman.my.id/i/f6arip.jpeg'}, caption: "My dear Bindya"})
});
