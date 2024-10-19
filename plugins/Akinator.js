import fetch from "node-fetch";
import { System, isPrivate } from '../lib/'; // Import your main functions

const handler = async (m, { conn, usedPrefix, command, text }) => {
    if (m.isGroup) return; // Ensure the command can only be used in private chats

    // Initialize Akinator session data if it doesn't exist
    if (!db.data.users[m.sender]) {
        db.data.users[m.sender] = { akinator: {} };
    }
    
    let aki = db.data.users[m.sender].akinator;

    if (text === "end") {
        // Handle ending the Akinator session
        if (!aki.sesi) return m.reply("You are not in an Akinator session (V2)");
        aki.sesi = false; // End the session
        aki.soal = null; // Clear the question
        return m.reply("Successfully exited the Akinator session (V2).");
    } else {
        // If the user is already in a session
        if (aki.sesi) return await conn.reply(m.chat, "You are still in an Akinator session (V2)", aki.soal);
        
        try {
            // Start a new Akinator session
            const apiKey = Object.entries(APIKeys).find(([key]) => key.includes("lolhuman"))?.[1];
            if (!apiKey) throw new Error("API key not found");

            let res = await fetch(`https://api.lolhuman.xyz/api/akinator/start?apikey=${apiKey}`);
            let anu = await res.json();

            if (anu.status !== 200) throw new Error("Error: Unable to start session");

            // Destructure response
            let { server, frontaddr, session, signature, question } = anu.result;
            aki.sesi = true; // Start the session
            aki.server = server;
            aki.frontaddr = frontaddr;
            aki.session = session;
            aki.signature = signature;
            aki.question = question;

            // Prepare the message to send
            let txt = `🎮 *Akinator (V2)* 🎮\n\n@${m.sender.split("@")[0]}\n${question}\n\n`;
            txt += "0 - Yes\n";
            txt += "1 - No\n";
            txt += "2 - I Don't Know\n";
            txt += "3 - Maybe\n";
            txt += "4 - Probably Not\n\n";
            txt += `*${usedPrefix + command} end* to exit the Akinator session (V2)`;

            let soal = await conn.sendMessage(m.chat, { text: txt, mentions: [m.sender] }, { quoted: m });
            aki.soal = soal; // Store the question for future reference

        } catch (e) {
            console.log(e); // Log any errors for debugging
            return m.reply("Feature Error! Please try again later.");
        }
    }
};

handler.menu = ["akinatorv2"];
handler.tags = ["game"];
handler.command = /^(akinatorv2)$/i;
handler.limit = true;

export default handler;
