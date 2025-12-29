
import React, { useState } from "react";

interface WeatherData {
  name: string;
  main: {
    temp: number;
  };
  weather: { description: string }[];
}

const Weather: React.FC = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const API_URL = import.meta.env.VITE_API_BASE_URL;


  // const API_KEY = import.meta.env.VITE_WEATHER_API_KEY; // Add this in .env file
  // const API_URL = "https://api.openweathermap.org/data/2.5/weather";

  const fetchWeather = async () => {
    if (!city) return;
    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      if (!response.ok) {
        throw new Error("City not found");
      }
      const data = await response.json();
      setWeather(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Weather App</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        style={{ padding: "8px", marginRight: "10px" }}
      />
      <button onClick={fetchWeather} style={{ padding: "8px" }}>
        Search
      </button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {weather && (
        <div style={{ marginTop: "20px" }}>
          <h2>{weather.name}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Condition: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;

