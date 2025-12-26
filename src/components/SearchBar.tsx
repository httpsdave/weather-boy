import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Search, MapPin, Loader } from 'lucide-react';
import { Location } from '../types/weather';
import { weatherService } from '../services/weatherService';

interface SearchBarProps {
  onLocationSelect: (location: Location) => void;
  onUseCurrentLocation: () => void;
  isLoadingLocation: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  onLocationSelect, 
  onUseCurrentLocation,
  isLoadingLocation 
}) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Location[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const debounceTimerRef = useRef<ReturnType<typeof setTimeout>>();

  const handleSearch = useCallback(async (searchQuery: string) => {
    if (searchQuery.length < 2) {
      setResults([]);
      setShowResults(false);
      return;
    }

    setIsSearching(true);
    try {
      const data = await weatherService.searchLocation(searchQuery);
      setResults(data.results || []);
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
    setQuery('');
    setResults([]);
    setShowResults(false);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto mb-6 animate-fade-in">
      <div className="flex space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            value={query}
            onChange={(e) => debouncedSearch(e.target.value)}
            placeholder="Search for a city..."
            className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-weather-blue focus:outline-none text-gray-800 text-lg transition-colors"
            aria-label="Search for a city"
          />
          {isSearching && (
            <Loader className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 animate-spin" />
          )}
        </div>
        
        <button
          onClick={onUseCurrentLocation}
          disabled={isLoadingLocation}
          className="bg-weather-blue hover:bg-blue-600 text-white px-6 py-4 rounded-2xl font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
        >
          {isLoadingLocation ? (
            <Loader className="w-5 h-5 animate-spin" />
          ) : (
            <MapPin className="w-5 h-5" />
          )}
          <span className="hidden md:inline">Location</span>
        </button>
      </div>

      {showResults && results.length > 0 && (
        <div className="absolute w-full mt-2 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden z-50 max-h-80 overflow-y-auto">
          {results.map((location, index) => (
            <button
              key={index}
              onClick={() => handleSelectLocation(location)}
              className="w-full text-left px-6 py-4 hover:bg-blue-50 transition-colors border-b border-gray-100 last:border-b-0"
            >
              <p className="font-semibold text-gray-800">{location.name}</p>
              <p className="text-sm text-gray-500">
                {location.admin1 && `${location.admin1}, `}{location.country}
              </p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
