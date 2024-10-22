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

// Extended supported cryptos list, adding more popular cryptocurrencies
const supportedCryptos = [
    'bitcoin', 'ethereum', 'dogecoin', 'cardano', 'solana', 'binancecoin', 'ripple', 'polkadot', 'litecoin', 
    'chainlink', 'stellar', 'vechain', 'theta-token', 'uniswap', 'aave', 'bitcoin-cash', 'tron', 'monero', 
    'tezos', 'avalanche-2', 'shiba-inu', 'near', 'cosmos', 'algorand', 'ftx-token', 'fantom', 'decentraland', 
    'elrond-erd-2', 'axie-infinity', 'sandbox', 'hedera-hashgraph', 'zilliqa', 'iota', 'harmony', 'pancakeswap', 
    'curve-dao-token', 'kusama', 'gala', 'enjincoin', 'chiliz', 'thorchain', 'flow', 'quant-network', 
    'arweave', 'the-graph', 'helium', 'ravencoin', 'icon', 'waves', 'celo', 'maker', 'synthetix-network-token', 
    'terra-luna', 'filecoin', 'theta-fuel', 'neo', 'dydx', 'injective-protocol', 'dash', 'zencash', 
    'compound-governance-token', '1inch', 'balancer', 'ren', 'loopring', 'toncoin', // Added more cryptos below
    'aptos', 'hedera', 'internet-computer', 'klaytn', 'mina-protocol', 'bitget-token', 'optimism', 'rocket-pool',
    'lido-dao', 'frax-share', 'injective-protocol', 'arbitrum', 'sui', 'conflux-token', 'floki', 'pepe',
    'stargate-finance', 'ronin', 'synapse', 'space-id', 'hashflow', 'zkspace', 'eos', 'rose', 'multiversx',
    'oasis-network', 'blur', 'gmx', 'hive', 'kadena', 'braintrust', 'ecomi', 'moonriver', 'marlin', 
    'paris-saint-germain-fan-token', 'juventus-fan-token', 'og-fan-token', 'ac-milan-fan-token', 'as-roma-fan-token'
];

// Get crypto price by name
System({
    pattern: 'crpt ?(.*)',
    fromMe: isPrivate,
    desc: 'Get real-time cryptocurrency price',
    type: 'crypto',
}, async (message, match, m) => {
    const cryptoName = match.trim().toLowerCase();

    if (!cryptoName || !supportedCryptos.includes(cryptoName)) {
        return await message.send('Please specify a valid cryptocurrency.');
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
    pattern: 'crpts',
    fromMe: isPrivate,
    desc: 'Lists all supported cryptocurrencies',
    type: 'crypto',
}, async (message, match, m) => {
    const availableCryptos = supportedCryptos.map((crypto) => `• ${crypto.charAt(0).toUpperCase() + crypto.slice(1)}`).join('\n');
    await message.send(`🌐 *Supported Cryptocurrencies:*\n\n${availableCryptos}`);
});
