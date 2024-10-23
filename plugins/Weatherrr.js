const { System, isPrivate } = require('../lib'); // Assuming your bot structure

const fetch = require("node-fetch");
const OPENWEATHERMAP_API_KEY = "060a6bcfa19809c2cd4d97a212b19273";
const GEOCODING_URL = "http://api.openweathermap.org/geo/1.0/direct";
const CURRENT_WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather";
const FORECAST_URL = "https://api.openweathermap.org/data/2.5/forecast";

// Function to get map tile for location
const latLonToTile = (lat, lon, zoom) => {
  const x = Math.floor((lon + 180) / 360 * Math.pow(2, zoom));
  const latRad = lat * Math.PI / 180;
  const y = Math.floor((1 - Math.log(Math.tan(latRad) + 1 / Math.cos(latRad)) / Math.PI) / 2 * Math.pow(2, zoom));
  return `https://tile.openstreetmap.org/${zoom}/${x}/${y}.png`;
};

// Get current weather data
const getWeatherData = async (lat, lon) => {
  try {
    const params = new URLSearchParams({
      lat: lat,
      lon: lon,
      appid: OPENWEATHERMAP_API_KEY,
      units: "metric",
      lang: "en" // Changed to English
    });
    const response = await fetch(`${CURRENT_WEATHER_URL}?${params}`);
    if (!response.ok) throw new Error("Failed to get weather data");
    return await response.json();
  } catch (error) {
    throw new Error(`Error fetching weather data: ${error.message}`);
  }
};

// Get weather forecast data
const getForecastData = async (lat, lon) => {
  try {
    const params = new URLSearchParams({
      lat: lat,
      lon: lon,
      appid: OPENWEATHERMAP_API_KEY,
      units: "metric",
      lang: "en" // Changed to English
    });
    const response = await fetch(`${FORECAST_URL}?${params}`);
    if (!response.ok) throw new Error("Failed to get forecast data");
    return await response.json();
  } catch (error) {
    throw new Error(`Error fetching forecast data: ${error.message}`);
  }
};

// Main weather function
const weather = async text => {
  try {
    const geocodingParams = new URLSearchParams({
      q: text,
      limit: 1,
      appid: OPENWEATHERMAP_API_KEY
    });
    const geocodingResponse = await fetch(`${GEOCODING_URL}?${geocodingParams}`);
    if (!geocodingResponse.ok) throw new Error("Failed to get location data");
    const [location] = await geocodingResponse.json();
    const { lat, lon, name, country } = location ?? {};
    if (!lat || !lon) throw new Error("Location not found");

    const weatherData = await getWeatherData(lat, lon);
    const forecastData = await getForecastData(lat, lon);
    const { main, wind, weather: [weatherCondition], dt, sys } = weatherData;
    const iconUrl = `http://openweathermap.org/img/wn/${weatherCondition?.icon ?? "01d"}.png`;
    const tileUrl = latLonToTile(lat, lon, 12);

    const localtime = new Date(dt * 1e3).toLocaleString("en-GB"); // English locale
    const sunriseTime = new Date(sys?.sunrise * 1e3).toLocaleTimeString("en-GB");
    const sunsetTime = new Date(sys?.sunset * 1e3).toLocaleTimeString("en-GB");

    const forecastList = forecastData.list.slice(0, 5).map(item => {
      const date = new Date(item.dt * 1e3).toLocaleDateString("en-GB");
      return `${date}: ${item.main.temp}°C, ${item.weather[0]?.description ?? "Unavailable"}`;
    }).join("\n");

    return {
      caption: `
🌦️ *Current Weather: ${weatherCondition?.description ?? "Unavailable"}* 🌦️
📌 *Location:* ${name ?? "Unavailable"}
🌍 *Country:* ${country ?? "Unavailable"}
🌐 *Latitude:* ${lat ?? "Unavailable"}
🌐 *Longitude:* ${lon ?? "Unavailable"}
🕰️ *Local Time:* ${localtime}
🌡️ *Temperature:* ${main?.temp ?? "Unavailable"} °C
🌡️ *Feels Like:* ${main?.feels_like ?? "Unavailable"} °C
💧 *Humidity:* ${main?.humidity ?? "Unavailable"}%
🌬️ *Wind Speed:* ${wind?.speed ?? "Unavailable"} m/s
🧭 *Wind Direction:* ${wind?.deg ?? "Unavailable"}°
🌡️ *Pressure:* ${main?.pressure ?? "Unavailable"} hPa
🌅 *Sunrise:* ${sunriseTime ?? "Unavailable"}
🌇 *Sunset:* ${sunsetTime ?? "Unavailable"}
📅 *5-Day Forecast:*
${forecastList}
`.trim(),
      iconUrl: iconUrl,
      tileUrl: tileUrl
    };
  } catch (error) {
    throw new Error(`Error processing weather data: ${error.message}`);
  }
};

// Weather handler for bot
System({
  pattern: 'weather ?(.*)', // Command pattern
  fromMe: isPrivate, // Private use
  desc: 'Get weather info for a city', // Description
  type: 'info', // Plugin type
}, async (message, match, m) => {
  const who = m.mentionedJid?.[0] ?? (m.fromMe ? m.user.jid : m.sender);
  try {
    if (!match) throw "Please provide a city name!";
    await message.react('⏳'); // Reacting to the command

    const { caption, iconUrl, tileUrl } = await weather(match);
    await message.sendFile(m.chat, tileUrl, "", caption, m, null, {
      contextInfo: {
        mentionedJid: [who],
        externalAdReply: {
          title: "Weather Forecast",
          body: "Weather Information",
          thumbnail: (await message.getFile(iconUrl))?.data
        }
      }
    });
  } catch (error) {
    await message.react('❌'); // Reacting on error
    await message.send(`Error: ${error}`);
  }
});
