import React from 'react';
import { MapPin, Star, Clock, X } from 'lucide-react';
import { Location } from '../types/weather';
import { storageService } from '../services/storageService';

interface SavedLocationsProps {
  onLocationSelect: (location: Location) => void;
  currentLocation: Location | null;
  isOpen: boolean;
  onClose: () => void;
}

const SavedLocations: React.FC<SavedLocationsProps> = ({
  onLocationSelect,
  currentLocation,
  isOpen,
  onClose,
}) => {
  const [savedLocations, setSavedLocations] = React.useState(storageService.getSavedLocations());
  const recentSearches = storageService.getRecentSearches();

  const handleToggleSave = (location: Location) => {
    storageService.toggleSavedLocation(location);
    setSavedLocations(storageService.getSavedLocations());
  };

  const handleSelectLocation = (location: Location) => {
    onLocationSelect(location);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Mobile overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-50 md:hidden transition-opacity duration-200"
        onClick={onClose}
        aria-label="Close saved locations"
      />
      
      {/* Mobile: Full screen modal, Desktop: Dropdown */}
      <div className="fixed inset-0 md:inset-auto md:right-2 md:right-4 md:top-16 md:top-20 bg-white dark:bg-gray-800 md:rounded-2xl md:shadow-2xl z-50 p-4 md:p-6 md:w-[calc(100%-1rem)] md:max-w-xs md:max-w-sm overflow-y-auto md:origin-top-right md:animate-dropdown animate-slide-up">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Star className="w-5 h-5 text-weather-blue" />
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">Saved & Recent</h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            aria-label="Close saved locations panel"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Current Location */}
        {currentLocation && (
          <div className="mb-6">
            <div className="flex items-center space-x-2 mb-3">
              <MapPin className="w-4 h-4 text-weather-blue" />
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Current</h4>
            </div>
            <button
              onClick={() => handleToggleSave(currentLocation)}
              className="w-full text-left px-4 py-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors border-2 border-weather-blue"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-800 dark:text-white">{currentLocation.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{currentLocation.country}</p>
                </div>
                <Star
                  className={`w-5 h-5 ${
                    storageService.isSavedLocation(currentLocation.latitude, currentLocation.longitude)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-400'
                  }`}
                />
              </div>
            </button>
          </div>
        )}

        {/* Saved Locations */}
        {savedLocations.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center space-x-2 mb-3">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Saved Locations</h4>
            </div>
            <div className="space-y-2">
              {savedLocations.map((location, index) => (
                <button
                  key={index}
                  onClick={() => handleSelectLocation(location)}
                  className="w-full text-left px-4 py-3 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-white">{location.name}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{location.country}</p>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleToggleSave(location);
                      }}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="w-4 h-4 text-red-500" />
                    </button>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Recent Searches */}
        {recentSearches.length > 0 && (
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <Clock className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Recent Searches</h4>
            </div>
            <div className="space-y-2">
              {recentSearches.map((search, index) => (
                <button
                  key={index}
                  onClick={() => handleSelectLocation(search)}
                  className="w-full text-left px-4 py-3 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-white">{search.name}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{search.country}</p>
                    </div>
                    <Clock className="w-4 h-4 text-gray-400" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {savedLocations.length === 0 && recentSearches.length === 0 && (
          <div className="text-center py-8">
            <Star className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-2" />
            <p className="text-gray-500 dark:text-gray-400 text-sm">No saved locations yet</p>
            <p className="text-gray-400 dark:text-gray-500 text-xs mt-1">Star a location to save it</p>
          </div>
        )}
      </div>
    </>
  );
};

export default SavedLocations;
