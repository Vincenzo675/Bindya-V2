//Queen Bindya ~V i Nㄷㅌ


const { System, isPrivate } = require('../lib/');
const axios = require('axios');

// Function to fetch crypto price from CoinGecko API
async function fetchCryptoPrice(cryptoName) {
    try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${cryptoName}&vs_currencies=usd`);
        if (response.data && response.data[cryptoName]) {
            return response.data[cryptoName].usd;
        }
        return null;
    } catch (error) {
        console.error('Error fetching crypto price:', error);
        return null;
    }
}

// Supported cryptos list
const supportedCryptos = ['bitcoin', 'ethereum', 'dogecoin', 'cardano', 'solana'];

// Get crypto price by name
System({
    pattern: 'crypto ?(.*)',
    fromMe: isPrivate,
    desc: 'Get real-time cryptocurrency price',
    type: 'crypto',
}, async (message, match, m) => {
    const cryptoName = match.trim().toLowerCase();

    if (!cryptoName || !supportedCryptos.includes(cryptoName)) {
        const availableCryptos = supportedCryptos.join(', ');
        return await message.send(`Please specify a valid cryptocurrency.\nSupported: ${availableCryptos}`);
    }

    const price = await fetchCryptoPrice(cryptoName);

    if (price) {
        await message.send(`💰 *${cryptoName.charAt(0).toUpperCase() + cryptoName.slice(1)}* price: $${price} USD`);
    } else {
        await message.send('⚠️ Failed to fetch the price. Try again later.');
    }
});

// List supported cryptos
System({
    pattern: 'cryptos',
    fromMe: isPrivate,
    desc: 'List supported cryptocurrencies',
    type: 'crypto',
}, async (message, match, m) => {
    const availableCryptos = supportedCryptos.map((crypto) => crypto.charAt(0).toUpperCase() + crypto.slice(1)).join(', ');
    await message.send(`💱 Supported Cryptocurrencies: ${availableCryptos}`);
});
