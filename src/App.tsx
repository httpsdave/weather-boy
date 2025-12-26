import { Cloud, Settings as SettingsIcon, Star, RefreshCw } from 'lucide-react';
import { useState } from 'react';
import { useWeather } from './hooks/useWeather';
import { storageService, TemperatureUnit, WindSpeedUnit } from './services/storageService';
import CurrentWeatherCard from './components/CurrentWeatherCard';
import HourlyForecast from './components/HourlyForecast';
import DailyForecast from './components/DailyForecast';
import SearchBar from './components/SearchBar';
import ErrorMessage from './components/ErrorMessage';
import ErrorBoundary from './components/ErrorBoundary';
import SettingsPanel from './components/SettingsPanel';
import WeatherDetails from './components/WeatherDetails';
import WeatherSkeleton from './components/WeatherSkeleton';
import SavedLocations from './components/SavedLocations';
import AirQualityCard from './components/AirQualityCard';

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

  const [temperatureUnit, setTemperatureUnit] = useState<TemperatureUnit>(
    storageService.getPreferences().temperatureUnit
  );
  const [windSpeedUnit, setWindSpeedUnit] = useState<WindSpeedUnit>(
    storageService.getPreferences().windSpeedUnit
  );
  const [showSettings, setShowSettings] = useState(false);
  const [showSavedLocations, setShowSavedLocations] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleTemperatureUnitChange = (unit: TemperatureUnit) => {
    setTemperatureUnit(unit);
    storageService.savePreferences({ temperatureUnit: unit });
  };

  const handleWindSpeedUnitChange = (unit: WindSpeedUnit) => {
    setWindSpeedUnit(unit);
    storageService.savePreferences({ windSpeedUnit: unit });
  };

  const handleRefresh = async () => {
    if (currentLocation && !isRefreshing) {
      setIsRefreshing(true);
      await handleLocationSelect(currentLocation);
      setTimeout(() => setIsRefreshing(false), 1000);
    }
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-40">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
              <div className="flex items-center space-x-3">
                <Cloud className="w-8 h-8 text-weather-blue" />
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-weather-blue to-blue-600 bg-clip-text text-transparent">
                    Weather Boy
                  </h1>
                  <p className="text-xs text-gray-600 hidden md:block">
                    Your friendly weather companion
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setShowSavedLocations(!showSavedLocations)}
                  className="p-3 hover:bg-gray-100 rounded-xl transition-colors"
                  aria-label="Open saved locations"
                >
                  <Star className={`w-6 h-6 ${showSavedLocations ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'}`} />
                </button>
                {weatherData && (
                  <button
                    onClick={handleRefresh}
                    disabled={isRefreshing}
                    className="p-3 hover:bg-gray-100 rounded-xl transition-colors disabled:opacity-50"
                    aria-label="Refresh weather data"
                  >
                    <RefreshCw className={`w-6 h-6 text-gray-600 ${isRefreshing ? 'animate-spin' : ''}`} />
                  </button>
                )}
                <button
                  onClick={() => setShowSettings(!showSettings)}
                  className="p-3 hover:bg-gray-100 rounded-xl transition-colors"
                  aria-label="Open settings"
                >
                  <SettingsIcon className="w-6 h-6 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </header>

        <SavedLocations
          onLocationSelect={handleLocationSelect}
          currentLocation={currentLocation}
          isOpen={showSavedLocations}
          onClose={() => setShowSavedLocations(false)}
        />

        <SettingsPanel
          temperatureUnit={temperatureUnit}
          windSpeedUnit={windSpeedUnit}
          onTemperatureUnitChange={handleTemperatureUnitChange}
          onWindSpeedUnitChange={handleWindSpeedUnitChange}
          isOpen={showSettings}
          onClose={() => setShowSettings(false)}
        />

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8 max-w-7xl" role="main">
          <SearchBar
            onLocationSelect={handleLocationSelect}
            onUseCurrentLocation={useCurrentLocation}
            isLoadingLocation={loading && !weatherData}
          />

          {loading && !weatherData && <WeatherSkeleton />}

          {error && !weatherData && (
            <ErrorMessage message={error} onRetry={retryFetch} />
          )}

          {weatherData && (
            <div className="space-y-6">
              <CurrentWeatherCard
                weather={weatherData.current}
                locationName={currentLocation?.name || 'Unknown Location'}
                humidity={weatherData.hourly.relative_humidity_2m[0]}
                temperatureUnit={temperatureUnit}
                windSpeedUnit={windSpeedUnit}
              />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <WeatherDetails
                  weather={weatherData.current}
                  sunrise={weatherData.daily.sunrise[0]}
                  sunset={weatherData.daily.sunset[0]}
                  humidity={weatherData.hourly.relative_humidity_2m[0]}
                  temperatureUnit={temperatureUnit}
                  windSpeedUnit={windSpeedUnit}
                />

                {currentLocation && (
                  <AirQualityCard
                    latitude={currentLocation.latitude}
                    longitude={currentLocation.longitude}
                  />
                )}
              </div>

              <HourlyForecast
                hourly={weatherData.hourly}
                temperatureUnit={temperatureUnit}
                windSpeedUnit={windSpeedUnit}
              />

              <DailyForecast
                daily={weatherData.daily}
                temperatureUnit={temperatureUnit}
              />
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="bg-white/80 backdrop-blur-md mt-16 py-6" role="contentinfo">
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
    </ErrorBoundary>
  );
}

export default App;
