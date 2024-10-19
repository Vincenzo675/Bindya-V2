//Queen Bindya - by ~V i Nㄷㅌ



const { System, isPrivate } = require('../lib/');

let poemCollection = {};

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
        await message.send(`Poem titled "${title.trim()}" added successfully.`);
    }
});

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
        await message.send(`Poem titled "${title}":\n\n${poem}${footer}`);
    } else {
        await message.send(`Poem titled "${title}" not found.`);
    }
});

System({
    pattern: 'poems',
    fromMe: isPrivate,
    desc: 'Lists all available poems',
    type: 'poem',
}, async (message, match, m) => {
    const titles = Object.keys(poemCollection);
    
    if (titles.length > 0) {
        await message.send(`Available poems: ${titles.join(', ')}`);
    } else {
        await message.send('*No poems have been added yet.*');
    }
});
