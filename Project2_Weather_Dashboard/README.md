# Typed Weather Dashboard 🌍

A CLI-based weather application built with TypeScript that fetches real-time data from the OpenWeatherMap API. This project demonstrates handling asynchronous operations and defining strict interfaces for external API responses.

## 🚀 Features
- **Strict Typing:** Defines a clear interface for API response data.
- **Async/Await:** Uses modern asynchronous patterns for network requests.
- **Error Handling:** Robust try/catch blocks to handle invalid city names or network failures.
- **Environment Variables:** Securely handles API keys using `dotenv`.

## 🛠️ Tech Stack
- **Language:** TypeScript
- **Runtime:** Node.js
- **API:** [OpenWeatherMap](https://openweathermap.org/)
- **Libraries:** `dotenv`, `node-fetch` (if on Node < 18)

## 📋 TypeScript Concepts Used
- **Interfaces:** Mapping complex JSON objects to internal types.
- **Literal Types:** Restricting units to `"metric"` or `"imperial"`.
- **Promises:** Typing the return value of asynchronous functions (`Promise<WeatherData>`).
- **Type Guards:** Checking for the existence of data before processing.

## ⚙️ Setup
1. Clone the repository.
2. Navigate to this folder: `cd Project2_Weather_Dashboard`.
3. Install dependencies: `npm install`.
4. Create a `.env` file in this folder and add your API key:
   ```text
   OPENWEATHER_API_KEY=your_api_key_here
