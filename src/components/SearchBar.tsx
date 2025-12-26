import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Search, MapPin, Loader } from 'lucide-react';
import { Location } from '../types/weather';
import { weatherService } from '../services/weatherService';
import { storageService, TemperatureUnit } from '../services/storageService';

interface LocationWithWeather extends Location {
  temperature?: number;
  weatherCode?: number;
}

interface SearchBarProps {
  onLocationSelect: (location: Location) => void;
  onUseCurrentLocation: () => void;
  isLoadingLocation: boolean;
  temperatureUnit: TemperatureUnit;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  onLocationSelect, 
  onUseCurrentLocation,
  isLoadingLocation,
  temperatureUnit
}) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<LocationWithWeather[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const debounceTimerRef = useRef<ReturnType<typeof setTimeout>>();

  const fetchWeatherPreview = async (locations: Location[]) => {
    const locationsWithWeather = await Promise.all(
      locations.map(async (loc) => {
        try {
          const weather = await weatherService.getCurrentWeather(loc.latitude, loc.longitude);
          return {
            ...loc,
            temperature: weather.current.temperature_2m,
            weatherCode: weather.current.weather_code,
          };
        } catch {
          return loc;
        }
      })
    );
    return locationsWithWeather;
  };

  const handleSearch = useCallback(async (searchQuery: string) => {
    if (searchQuery.length < 2) {
      setResults([]);
      setShowResults(false);
      return;
    }

    setIsSearching(true);
    try {
      const data = await weatherService.searchLocation(searchQuery);
      const locations = data.results || [];
      const locationsWithWeather = await fetchWeatherPreview(locations.slice(0, 5));
      setResults(locationsWithWeather);
      setShowResults(true);
    } catch (error) {
      console.error('Search error:', error);
      setResults([]);
    } finally {
      setIsSearching(false);
    }
  }, []);

  const debouncedSearch = useCallback((searchQuery: string) => {
    setQuery(searchQuery);
    
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    debounceTimerRef.current = setTimeout(() => {
      handleSearch(searchQuery);
    }, 300);
  }, [handleSearch]);

  useEffect(() => {
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, []);

  const handleSelectLocation = (location: Location) => {
    onLocationSelect(location);
    storageService.addRecentSearch(location);
    setQuery('');
    setResults([]);
    setShowResults(false);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto animate-fade-in z-50">
      <div className="flex space-x-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white w-5 h-5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" />
          <input
            type="text"
            value={query}
            onChange={(e) => debouncedSearch(e.target.value)}
            placeholder="Search for a city..."
            className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-white/30 backdrop-blur-md border border-white/40 focus:border-white/60 focus:bg-white/35 focus:outline-none text-white placeholder-white/70 text-base transition-all shadow-lg"
            aria-label="Search for a city"
          />
          {isSearching && (
            <Loader className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white w-4 h-4 animate-spin drop-shadow-md" />
          )}
        </div>
        
        <button
          onClick={onUseCurrentLocation}
          disabled={isLoadingLocation}
          className="bg-red-500 hover:bg-red-600 backdrop-blur-md text-white border border-red-400 px-4 py-2.5 rounded-xl font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 shadow-lg"
        >
          {isLoadingLocation ? (
            <Loader className="w-4 h-4 animate-spin" />
          ) : (
            <MapPin className="w-4 h-4" />
          )}
          <span className="hidden md:inline text-sm">Location</span>
        </button>
      </div>

      {showResults && results.length > 0 && (
        <div className="absolute w-full mt-2 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50 max-h-80 overflow-y-auto">
          {results.map((location, index) => {
            const weatherInfo = location.weatherCode 
              ? weatherService.getWeatherDescription(location.weatherCode, true)
              : null;
            const temp = location.temperature 
              ? Math.round(storageService.convertTemperature(location.temperature, temperatureUnit))
              : null;

            return (
              <button
                key={index}
                onClick={() => handleSelectLocation(location)}
                className="w-full text-left px-6 py-4 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors border-b border-gray-100 dark:border-gray-700 last:border-b-0 flex items-center justify-between"
              >
                <div>
                  <p className="font-semibold text-gray-800 dark:text-white">{location.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {location.admin1 && `${location.admin1}, `}{location.country}
                  </p>
                </div>
                {weatherInfo && temp !== null && (
                  <div className="flex items-center space-x-2 ml-4">
                    <span className="text-2xl">{weatherInfo.icon}</span>
                    <span className="text-xl font-bold text-gray-800 dark:text-white">{temp}°</span>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
