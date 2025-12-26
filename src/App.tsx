import React from 'react';
import { Cloud } from 'lucide-react';
import { useWeather } from './hooks/useWeather';
import CurrentWeatherCard from './components/CurrentWeatherCard';
import HourlyForecast from './components/HourlyForecast';
import DailyForecast from './components/DailyForecast';
import SearchBar from './components/SearchBar';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';

function App() {
  const {
    weatherData,
    loading,
    error,
    currentLocation,
    handleLocationSelect,
    useCurrentLocation,
    retryFetch,
  } = useWeather();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center space-x-3">
            <Cloud className="w-8 h-8 text-weather-blue" />
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-weather-blue to-blue-600 bg-clip-text text-transparent">
              Weather Boy
            </h1>
          </div>
          <p className="text-center text-sm text-gray-600 mt-1">
            Your friendly weather companion
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <SearchBar
          onLocationSelect={handleLocationSelect}
          onUseCurrentLocation={useCurrentLocation}
          isLoadingLocation={loading && !weatherData}
        />

        {loading && !weatherData && <LoadingSpinner />}

        {error && !weatherData && (
          <ErrorMessage message={error} onRetry={retryFetch} />
        )}

        {weatherData && (
          <div className="space-y-6">
            <CurrentWeatherCard
              weather={weatherData.current}
              locationName={currentLocation?.name || 'Unknown Location'}
              humidity={weatherData.hourly.relative_humidity_2m[0]}
            />

            <HourlyForecast
              hourly={weatherData.hourly}
              timezone={weatherData.timezone}
            />

            <DailyForecast daily={weatherData.daily} />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-md mt-16 py-6">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p className="text-sm">
            Weather data provided by{' '}
            <a
              href="https://open-meteo.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-weather-blue hover:underline font-medium"
            >
              Open-Meteo
            </a>
          </p>
          <p className="text-xs mt-2">Weather Boy © 2025</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
