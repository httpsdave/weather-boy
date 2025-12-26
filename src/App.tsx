import { Cloud, Settings as SettingsIcon, Star, RefreshCw, WifiOff, Sun, Moon, TrendingUp, Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useWeather } from './hooks/useWeather';
import { storageService, TemperatureUnit, WindSpeedUnit, PrecipitationUnit } from './services/storageService';
import CurrentWeatherCard from './components/CurrentWeatherCard';
import HourlyForecast from './components/HourlyForecast';
import DailyForecast from './components/DailyForecast';
import ErrorMessage from './components/ErrorMessage';
import ErrorBoundary from './components/ErrorBoundary';
import SettingsPanel from './components/SettingsPanel';
import WeatherDetails from './components/WeatherDetails';
import WeatherSkeleton from './components/WeatherSkeleton';
import SavedLocations from './components/SavedLocations';
import AirQualityCard from './components/AirQualityCard';
import ShareWeather from './components/ShareWeather';
import MobileSidebar from './components/MobileSidebar';
import ComparisonWidget from './components/ComparisonWidget';
import TemperatureChart from './components/TemperatureChart';
import WeatherAlerts from './components/WeatherAlerts';
import PullToRefresh from './components/PullToRefresh';
import { useKeyboardShortcuts } from './hooks/useKeyboardShortcuts';
import { useTheme } from './contexts/ThemeContext';
import { weatherService } from './services/weatherService';

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

  const { theme, setTheme, effectiveTheme } = useTheme();

  const [temperatureUnit, setTemperatureUnit] = useState<TemperatureUnit>(
    storageService.getPreferences().temperatureUnit
  );
  const [windSpeedUnit, setWindSpeedUnit] = useState<WindSpeedUnit>(
    storageService.getPreferences().windSpeedUnit
  );
  const [precipitationUnit, setPrecipitationUnit] = useState<PrecipitationUnit>(
    storageService.getPreferences().precipitationUnit
  );
  const [showSettings, setShowSettings] = useState(false);
  const [showSavedLocations, setShowSavedLocations] = useState(false);
  const [showComparison, setShowComparison] = useState(false);
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [lastUpdated, setLastUpdated] = useState<number | null>(null);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    // Check for cached data timestamp
    const cached = weatherService.getCachedWeather();
    if (cached) {
      setLastUpdated(cached.timestamp);
    }
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  useEffect(() => {
    if (weatherData) {
      setLastUpdated(Date.now());
    }
  }, [weatherData]);

  const handleTemperatureUnitChange = (unit: TemperatureUnit) => {
    setTemperatureUnit(unit);
    storageService.savePreferences({ temperatureUnit: unit });
  };

  const handleWindSpeedUnitChange = (unit: WindSpeedUnit) => {
    setWindSpeedUnit(unit);
    storageService.savePreferences({ windSpeedUnit: unit });
  };

  const handlePrecipitationUnitChange = (unit: PrecipitationUnit) => {
    setPrecipitationUnit(unit);
    storageService.savePreferences({ precipitationUnit: unit });
  };

  const handleRefresh = async () => {
    if (currentLocation && !isRefreshing) {
      setIsRefreshing(true);
      await handleLocationSelect(currentLocation);
      setLastUpdated(Date.now());
      setTimeout(() => setIsRefreshing(false), 1000);
    }
  };

  const toggleTheme = () => {
    // Simple toggle between light and dark
    setTheme(effectiveTheme === 'light' ? 'dark' : 'light');
  };

  // Keyboard shortcuts
  useKeyboardShortcuts([
    { key: 'r', ctrl: true, callback: handleRefresh },
    { key: '/', callback: () => document.querySelector<HTMLInputElement>('input[type="text"]')?.focus() },
    { key: 'Escape', callback: () => { setShowSettings(false); setShowSavedLocations(false); setShowComparison(false); setShowMobileSidebar(false); } },
    { key: 's', callback: () => setShowSettings(true) },
    { key: 'l', callback: () => setShowSavedLocations(true) },
    { key: 'd', callback: toggleTheme },
    { key: 'c', callback: () => setShowComparison(true) },
  ]);

  const getTimeSinceUpdate = () => {
    if (!lastUpdated) return '';
    const minutes = Math.floor((Date.now() - lastUpdated) / 60000);
    if (minutes < 1) return 'Just now';
    if (minutes === 1) return '1 min ago';
    if (minutes < 60) return `${minutes} mins ago`;
    const hours = Math.floor(minutes / 60);
    if (hours === 1) return '1 hour ago';
    return `${hours} hours ago`;
  };

  return (
    <ErrorBoundary>
      <PullToRefresh onRefresh={handleRefresh}>
        <div className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-500">
          {/* Mobile Sidebar */}
          <MobileSidebar
            isOpen={showMobileSidebar}
            onClose={() => setShowMobileSidebar(false)}
            onShowSavedLocations={() => setShowSavedLocations(true)}
            onShowSettings={() => setShowSettings(true)}
            onShowComparison={() => setShowComparison(true)}
            onToggleTheme={toggleTheme}
            onShare={weatherData && currentLocation ? () => {
              // Trigger share from ShareWeather component
              document.querySelector<HTMLButtonElement>('[aria-label="Share weather"]')?.click();
            } : undefined}
            effectiveTheme={effectiveTheme}
          />

          {/* Header */}
          <header className="bg-white dark:bg-gray-800 backdrop-blur-xl shadow-md sticky top-0 z-40 border-b border-gray-200 dark:border-gray-700">
            <div className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-between max-w-7xl mx-auto">
                {/* Left: Hamburger (Mobile) + Logo */}
                <div className="flex items-center space-x-3">
                  {/* Hamburger Menu - Mobile Only */}
                  <button
                    onClick={() => setShowMobileSidebar(true)}
                    className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors"
                    aria-label="Open menu"
                  >
                    <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  </button>
                  
                  {/* Logo */}
                  <div className="flex items-center space-x-2">
                    <div className="bg-blue-500 p-2 rounded-xl shadow-sm">
                      <Cloud className="w-6 h-6 md:w-7 md:h-7 text-white" />
                    </div>
                    <div>
                      <h1 className="text-lg md:text-2xl font-bold text-gray-900 dark:text-white">
                        Weather Boy
                      </h1>
                      {!isOnline && (
                        <div className="flex items-center space-x-1 text-xs font-bold text-orange-600 bg-orange-100 dark:bg-orange-900/40 px-2 py-0.5 rounded-full">
                          <WifiOff className="w-3 h-3" />
                          <span className="hidden sm:inline">Offline</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right: Actions */}
                <div className="flex items-center space-x-1 md:space-x-2">
                  {/* Refresh Button - Always visible */}
                  {weatherData && (
                    <button
                      onClick={handleRefresh}
                      disabled={isRefreshing}
                      className="p-2 md:p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors disabled:opacity-50"
                      aria-label="Refresh weather data"
                    >
                      <RefreshCw className={`w-5 h-5 md:w-6 md:h-6 text-gray-700 dark:text-gray-300 ${isRefreshing ? 'animate-spin' : ''}`} />
                    </button>
                  )}

                  {/* Desktop-only buttons */}
                  <div className="hidden md:flex items-center space-x-2">
                    <button
                      onClick={() => setShowComparison(!showComparison)}
                      className="p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors"
                      aria-label="Compare locations"
                    >
                      <TrendingUp className={`w-6 h-6 ${showComparison ? 'text-blue-600' : 'text-gray-600 dark:text-gray-300'}`} />
                    </button>
                    <button
                      onClick={toggleTheme}
                      className="p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors"
                      aria-label="Toggle theme"
                      title={`Theme: ${theme}`}
                    >
                      {effectiveTheme === 'dark' ? (
                        <Moon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                      ) : (
                        <Sun className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                      )}
                    </button>
                    <button
                      onClick={() => setShowSavedLocations(!showSavedLocations)}
                      className="p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors"
                      aria-label="Open saved locations"
                    >
                      <Star className={`w-6 h-6 ${showSavedLocations ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600 dark:text-gray-300'}`} />
                    </button>
                    {weatherData && currentLocation && (
                      <ShareWeather
                        weather={weatherData.current}
                        location={currentLocation}
                        temperatureUnit={temperatureUnit}
                      />
                    )}
                    <button
                      onClick={() => setShowSettings(!showSettings)}
                      className="p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors"
                      aria-label="Open settings"
                    >
                      <SettingsIcon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                    </button>
                  </div>
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
            precipitationUnit={precipitationUnit}
            onTemperatureUnitChange={handleTemperatureUnitChange}
            onWindSpeedUnitChange={handleWindSpeedUnitChange}
            onPrecipitationUnitChange={handlePrecipitationUnitChange}
            isOpen={showSettings}
            onClose={() => setShowSettings(false)}
          />

          <ComparisonWidget
            isOpen={showComparison}
            onClose={() => setShowComparison(false)}
            temperatureUnit={temperatureUnit}
            windSpeedUnit={windSpeedUnit}
          />

          {/* Main Content */}
          <main role="main">
            {/* Full-width Weather Card */}
            {weatherData && (
              <CurrentWeatherCard
                weather={weatherData.current}
                locationName={currentLocation?.name || 'Unknown Location'}
                humidity={weatherData.hourly.relative_humidity_2m[0]}
                temperatureUnit={temperatureUnit}
                windSpeedUnit={windSpeedUnit}
                onLocationSelect={handleLocationSelect}
                onUseCurrentLocation={useCurrentLocation}
                isLoadingLocation={loading && !weatherData}
              />
            )}

            {/* Contained Content */}
            <div className="container mx-auto px-4 py-8 max-w-7xl">
            {lastUpdated && weatherData && (
              <div className="text-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                Updated {getTimeSinceUpdate()}
              </div>
            )}

            {loading && !weatherData && <WeatherSkeleton />}

            {error && !weatherData && (
              <ErrorMessage message={error} onRetry={retryFetch} />
            )}

            {weatherData && (
              <div className="space-y-6">

                <WeatherDetails
                  weather={weatherData.current}
                  sunrise={weatherData.daily.sunrise[0]}
                  sunset={weatherData.daily.sunset[0]}
                  humidity={weatherData.hourly.relative_humidity_2m[0]}
                  temperatureUnit={temperatureUnit}
                  windSpeedUnit={windSpeedUnit}
                />

                <TemperatureChart
                  hourly={weatherData.hourly}
                  temperatureUnit={temperatureUnit}
                  hours={24}
                />

                {currentLocation && (
                  <AirQualityCard
                    latitude={currentLocation.latitude}
                    longitude={currentLocation.longitude}
                  />
                )}

                <HourlyForecast
                  hourly={weatherData.hourly}
                  temperatureUnit={temperatureUnit}
                  windSpeedUnit={windSpeedUnit}
                />

                <DailyForecast
                  daily={weatherData.daily}
                  hourly={weatherData.hourly}
                  temperatureUnit={temperatureUnit}
                />
              </div>
            )}
            </div>
          </main>

          <WeatherAlerts weather={weatherData} />

          {/* Footer */}
          <footer className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md mt-16 py-6" role="contentinfo">
            <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
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
      </PullToRefresh>
    </ErrorBoundary>
  );
}

export default App;
