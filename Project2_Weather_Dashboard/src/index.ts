import * as dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// --- Configuration Setup ---
// These two lines are required to use __dirname in ESM mode
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from the root folder (up one level from src)
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const API_KEY = process.env.OPENWEATHER_API_KEY;

type WeatherUnits = "metric" | "imperial";

interface WeatherData {
    cityName: string;
    temperature: number;
    description: string;
    humidity: number;
    windSpeed: number;
}

async function fetchWeather(city: string, units: WeatherUnits): Promise<WeatherData> {
    // Error check for the API Key
    if (!API_KEY) {
        throw new Error("API_KEY is missing. Check your .env file in the root folder.");
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${API_KEY}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`City not found or API error: ${response.statusText}`);
        }

        const data: any = await response.json();

        return {
            cityName: data.name,
            temperature: data.main.temp,
            description: data.weather[0].description,
            humidity: data.main.humidity,
            windSpeed: data.wind.speed
        };
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
        throw new Error("An unknown error occurred");
    }
}

function formatOutput(data: WeatherData, units: WeatherUnits): string {
    const tempUnit = units === "metric" ? "°C" : "°F";
    const speedUnit = units === "metric" ? "m/s" : "mph";

    return `
🌍  Weather in ${data.cityName}:
🌡️  Temperature: ${data.temperature}${tempUnit}
☁️  Condition: ${data.description}
💧  Humidity: ${data.humidity}%
💨  Wind Speed: ${data.windSpeed} ${speedUnit}
    `;
}

// --- TEST SUITE ---
const runTest = async () => {
    console.log("Checking API Key setup...");
    if (API_KEY) {
        console.log("✅ API Key found.");
    } else {
        console.error("❌ API Key NOT found in .env");
        return;
    }

    try {
        console.log("--- Test: Fetching London Weather ---");
        const london = await fetchWeather("London", "metric");
        console.log(formatOutput(london, "metric"));
    } catch (err) {
        if (err instanceof Error) {
            console.error("❌ Error caught:", err.message);
        }
    }
};

runTest();