import React, { useState } from "react";

interface WeatherData {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
}

const Weather: React.FC = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ✅ Environment variables (Vite)
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const API_URL = import.meta.env.VITE_API_BASE_URL;

  const fetchWeather = async () => {
    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }

    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const url = `${API_URL}?q=${encodeURIComponent(
        city
      )}&appid=${API_KEY}&units=metric`;

      console.log("Fetching:", url);

      const response = await fetch(url);

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.message || "City not found");
      }

      const data: WeatherData = await response.json();
      setWeather(data);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-8">🌤 Weather App</h1>

      {/* Search Box */}
      <div className="flex gap-3 mb-6">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && fetchWeather()}
          placeholder="Enter city name"
          className="px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none w-64"
        />
        <button
          onClick={fetchWeather}
          className="px-5 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-black font-semibold"
        >
          Search
        </button>
      </div>

      {/* States */}
      {loading && <p className="text-gray-400">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* Weather Card */}
      {weather && (
        <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 w-80 text-center shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">{weather.name}</h2>

          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="weather icon"
            className="mx-auto"
          />

          <p className="text-4xl font-bold mb-1">
            {Math.round(weather.main.temp)}°C
          </p>

          <p className="capitalize text-gray-400 mb-4">
            {weather.weather[0].description}
          </p>

          <div className="text-sm text-gray-300 space-y-1">
            <p>Feels like: {weather.main.feels_like}°C</p>
            <p>Humidity: {weather.main.humidity}%</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
