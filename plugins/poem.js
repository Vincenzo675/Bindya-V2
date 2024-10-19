//Queen Bindya - by ~V i Nㄷㅌ
const { System, isPrivate } = require('../lib/');
const fs = require('fs');
const filePath = './poems.json'; // Path to store the poems

// Function to load poems from the file ~V i Nㄷㅌ
function loadPoems() {
    if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath);
        return JSON.parse(data);
    }
    return {};
}

// Function to save poems to the file ~V i Nㄷㅌ
function savePoems(poems) {
    fs.writeFileSync(filePath, JSON.stringify(poems, null, 2));
}

// Initialize poem collection from the file ~V i Nㄷㅌ
let poemCollection = loadPoems();

// Add Poem Function ~V i Nㄷㅌ
System({
    pattern: 'addpoem ?(.*)',
    fromMe: isPrivate,
    desc: 'Adds a poem',
    type: 'poem',
}, async (message, match, m) => {
    const [title, ...contentParts] = match.split(':');
    const content = contentParts.join(':').trim();
    
    if (!title || !content) {
        await message.send('Please use the format: addpoem <title>: <poem content>');
    } else {
        poemCollection[title.trim().toLowerCase()] = content;
        savePoems(poemCollection); // Save the updated poems to file
        await message.send(`Poem titled "${title.trim()}" added successfully.`);
    }
});

// Get Poem Function ~V i Nㄷㅌ
System({
    pattern: 'getpoem ?(.*)',
    fromMe: isPrivate,
    desc: 'Retrieves a poem by title',
    type: 'poem',
}, async (message, match, m) => {
    const title = match.trim().toLowerCase();
    const poem = poemCollection[title];
    
    if (poem) {
        const footer = "\n\n*~V i Nㄷㅌ*";
        await message.send(` "*${title}*"\n\n${poem}${footer}`);
    } else {
        await message.send(`Poem titled "${title}" not found.`);
    }
});

// List All Poems Function ~V i Nㄷㅌ
System({
    pattern: 'poems',
    fromMe: isPrivate,
    desc: 'Lists all available poems',
    type: 'poem',
}, async (message, match, m) => {
    const titles = Object.keys(poemCollection);
    
    if (titles.length > 0) {
        // Formatting the response like a bulletin ~V i Nㄷㅌ
        const bulletin = titles.map((title, index) => `\n${index + 1}. ${title.charAt(0).toUpperCase() + title.slice(1)}`).join('');
        await message.send(`*Available Poems:*${bulletin}`);
    } else {
        await message.send('No poems have been added yet.');
    }
});
