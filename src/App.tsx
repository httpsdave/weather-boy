import { Cloud, Settings as SettingsIcon, Star, RefreshCw, WifiOff, Sun, Moon, TrendingUp } from 'lucide-react';
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
import PullToRefresh from './components/PullToRefresh';
import { useKeyboardShortcuts } from './hooks/useKeyboardShortcuts';
import { useTheme } from './contexts/ThemeContext';
import { weatherService } from './services/weatherService';
import { getWeatherBackground } from './components/WeatherBackgrounds';

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
            {/* Full-width Weather Card with integrated header */}
            {weatherData && (
              <div className="relative overflow-hidden animate-fade-in">
                {/* Illustrated Weather Background - Extended to cover header */}
                <div className="absolute inset-0 z-0">
                  {(() => {
                    const WeatherBackground = getWeatherBackground(
                      weatherData.current.weather_code,
                      weatherData.current.is_day === 1
                    );
                    return <WeatherBackground className="w-full h-full object-cover" />;
                  })()}
                </div>
                
                {/* Content Overlay with gradient fade */}
                <div className="relative z-10 bg-gradient-to-b from-black/20 via-black/10 to-black/40">
                  {/* Header integrated into weather background */}
                  <header className="sticky top-0 z-40">
                    <div className="container mx-auto px-4 py-4">
                      <div className="flex items-center justify-between max-w-7xl mx-auto">
                        {/* Left: Hamburger (Mobile) + Logo */}
                        <div className="flex items-center space-x-3">
                          {/* Hamburger Menu - Mobile Only */}
                          <button
                            onClick={() => setShowMobileSidebar(true)}
                            className="md:hidden p-2 hover:bg-white/20 rounded-xl transition-colors backdrop-blur-sm"
                            aria-label="Open menu"
                          >
                            <svg
                              className="w-6 h-6 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <line x1="3" y1="6" x2="19" y2="6" />
                              <line x1="3" y1="12" x2="40" y2="12" />
                              <line x1="3" y1="18" x2="19" y2="18" />
                            </svg>
                          </button>
                          
                          {/* Logo */}
                          <div className="flex items-center space-x-2">
                            {/* Boy with Cloud Hair Icon */}
                            <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="none">
                              {/* Cloud Hair (behind) */}
                              <g transform="translate(0, -2)">
                                <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" fill="#E8E8E0" />
                              </g>
                              {/* Face (in front) */}
                              <circle cx="12" cy="14" r="6" fill="#FBBF77" stroke="#1e293b" strokeWidth="1" />
                              {/* Eyes */}
                              <circle cx="10" cy="13.5" r="1.2" fill="#1e293b" />
                              <circle cx="14" cy="13.5" r="1.2" fill="#1e293b" />
                              {/* Smile */}
                              <path d="M 9 15.5 Q 12 17.5 15 15.5" stroke="#1e293b" strokeWidth="1.2" fill="none" strokeLinecap="round" />
                            </svg>
                            <div>
                              <h1 className="text-lg md:text-2xl font-bold logo-text">
                                <span className="text-yellow-300">Weather</span><span className="text-sky-300">Boy</span>
                              </h1>
                              {!isOnline && (
                                <div className="flex items-center space-x-1 text-xs font-bold text-white bg-orange-500/70 backdrop-blur-md px-2 py-0.5 rounded-full shadow-lg">
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
                          <button
                            onClick={handleRefresh}
                            disabled={isRefreshing}
                            className="p-2 md:p-3 hover:bg-white/20 rounded-xl transition-colors disabled:opacity-50 backdrop-blur-sm"
                            aria-label="Refresh weather data"
                          >
                            <RefreshCw className={`w-5 h-5 md:w-6 md:h-6 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] ${isRefreshing ? 'animate-spin' : ''}`} />
                          </button>

                          {/* Desktop-only buttons */}
                          <div className="hidden md:flex items-center space-x-2">
                            <button
                              onClick={() => setShowComparison(!showComparison)}
                              className="p-3 hover:bg-white/20 rounded-xl transition-colors backdrop-blur-sm"
                              aria-label="Compare locations"
                              title="Compare Locations"
                            >
                              <TrendingUp className={`w-6 h-6 ${showComparison ? 'text-yellow-300' : 'text-white'} drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]`} />
                            </button>
                            <button
                              onClick={toggleTheme}
                              className="p-3 hover:bg-white/20 rounded-xl transition-colors backdrop-blur-sm"
                              aria-label="Toggle theme"
                              title={`Theme: ${theme}`}
                            >
                              {effectiveTheme === 'dark' ? (
                                <Moon className="w-6 h-6 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" />
                              ) : (
                                <Sun className="w-6 h-6 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" />
                              )}
                            </button>
                            <button
                              onClick={() => setShowSavedLocations(!showSavedLocations)}
                              className="p-3 hover:bg-white/20 rounded-xl transition-colors backdrop-blur-sm"
                              aria-label="Open saved locations"
                              title="Saved Locations"
                            >
                              <Star className={`w-6 h-6 ${showSavedLocations ? 'fill-yellow-300 text-yellow-300' : 'text-white'} drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]`} />
                            </button>
                            <ShareWeather
                              weather={weatherData.current}
                              location={currentLocation!}
                              temperatureUnit={temperatureUnit}
                            />
                            <button
                              onClick={() => setShowSettings(!showSettings)}
                              className="p-3 hover:bg-white/20 rounded-xl transition-colors backdrop-blur-sm"
                              aria-label="Open settings"
                              title="Settings"
                            >
                              <SettingsIcon className="w-6 h-6 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </header>

                  {/* Weather content */}
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
                </div>
              </div>
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

                <HourlyForecast
                  hourly={weatherData.hourly}
                  temperatureUnit={temperatureUnit}
                  windSpeedUnit={windSpeedUnit}
                />

                {currentLocation && (
                  <AirQualityCard
                    latitude={currentLocation.latitude}
                    longitude={currentLocation.longitude}
                  />
                )}

                <DailyForecast
                  daily={weatherData.daily}
                  hourly={weatherData.hourly}
                  temperatureUnit={temperatureUnit}
                />

                <TemperatureChart
                  daily={weatherData.daily}
                  temperatureUnit={temperatureUnit}
                />
              </div>
            )}
            </div>
          </main>

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
