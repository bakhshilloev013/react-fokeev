import { useState, useEffect } from 'react';
import './index.css';

const API_KEY = 'b35a350d93be459c858160116260604';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [coords, setCoords] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCoords({ latitude, longitude });
        console.log(position);
      },
      (err) => {
        console.error('Geolocation error:', err.message);
        setError('Failed to get your location');
      },
    );
  }, []);

  useEffect(() => {
    if (!city.trim() && !coords) {
      setWeatherData(null);
      setError(null);
      return;
    }

    async function fetchData() {
      setIsLoading(true);
      try {
        const query = city.trim()
          ? city
          : `${coords.latitude},${coords.longitude}`;

        const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${query}`);
        const json = await res.json();
        if (json.hasOwnProperty('error')) {
          setError(json.error.message);
        } else {
          setWeatherData(json);
          setError(null);
        }
      } catch (error) {
        setError(error.message);
        setWeatherData(null);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [city, coords]);

  function renderLoading() {
    return <p>Loading...</p>;
  }

  function renderError() {
    return <p>{error}</p>;
  }

  function renderContent() {
    return (
      <div className="weather-card">
        <h2>
          {weatherData?.location?.country}, {weatherData?.location?.name}
        </h2>
        <img
          src={weatherData?.current?.condition?.icon}
          alt="icon"
          className="weather-icon"
        />
        <p className="temperature">
          {Math.round(weatherData?.current?.temp_c)}°C
        </p>
        <p className="condition">{weatherData?.current?.condition?.text}</p>
        <div className="weather-details">
          <p>Humidity: {weatherData?.current?.humidity}%</p>
          <p>Wind: {Math.round(weatherData?.current?.wind_kph)} km/h</p>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="widget-container">
        <div className="weather-card-container">
          <h1 className="app-title">Weather Widget</h1>
          <div className="search-container">
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              type="text"
              placeholder="Enter city name"
              className="search-input"
            />
          </div>
        </div>
        {isLoading && renderLoading()}
        {error && renderError()}
        {!isLoading && !error && weatherData && renderContent()}
      </div>
    </div>
  );
}

export default App;
