export type TemperatureUnit = 'celsius' | 'fahrenheit';
export type WindSpeedUnit = 'kmh' | 'mph';

export interface UserPreferences {
  temperatureUnit: TemperatureUnit;
  windSpeedUnit: WindSpeedUnit;
  lastLocation?: {
    name: string;
    latitude: number;
    longitude: number;
    country: string;
  };
  savedLocations?: Array<{
    name: string;
    latitude: number;
    longitude: number;
    country: string;
  }>;
  recentSearches?: Array<{
    name: string;
    latitude: number;
    longitude: number;
    country: string;
    timestamp: number;
  }>;
}

const STORAGE_KEY = 'weatherboy_preferences';

export const storageService = {
  getPreferences(): UserPreferences {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch {
        return this.getDefaultPreferences();
      }
    }
    return this.getDefaultPreferences();
  },

  savePreferences(preferences: Partial<UserPreferences>): void {
    const current = this.getPreferences();
    const updated = { ...current, ...preferences };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  },

  getDefaultPreferences(): UserPreferences {
    return {
      temperatureUnit: 'celsius',
      windSpeedUnit: 'kmh',
    };
  },

  convertTemperature(celsius: number, unit: TemperatureUnit): number {
    if (unit === 'fahrenheit') {
      return (celsius * 9) / 5 + 32;
    }
    return celsius;
  },

  convertWindSpeed(kmh: number, unit: WindSpeedUnit): number {
    if (unit === 'mph') {
      return kmh * 0.621371;
    }
    return kmh;
  },

  getTemperatureSymbol(unit: TemperatureUnit): string {
    return unit === 'celsius' ? '°C' : '°F';
  },

  getWindSpeedSymbol(unit: WindSpeedUnit): string {
    return unit === 'kmh' ? 'km/h' : 'mph';
  },

  addRecentSearch(location: { name: string; latitude: number; longitude: number; country: string }): void {
    const prefs = this.getPreferences();
    const recentSearches = prefs.recentSearches || [];
    
    // Remove duplicate if exists
    const filtered = recentSearches.filter(
      s => !(s.latitude === location.latitude && s.longitude === location.longitude)
    );
    
    // Add new search at the beginning with timestamp
    filtered.unshift({ ...location, timestamp: Date.now() });
    
    // Keep only last 5 searches
    const updated = filtered.slice(0, 5);
    
    this.savePreferences({ recentSearches: updated });
  },

  getRecentSearches(): Array<{ name: string; latitude: number; longitude: number; country: string; timestamp: number }> {
    const prefs = this.getPreferences();
    return prefs.recentSearches || [];
  },

  toggleSavedLocation(location: { name: string; latitude: number; longitude: number; country: string }): boolean {
    const prefs = this.getPreferences();
    const savedLocations = prefs.savedLocations || [];
    
    const index = savedLocations.findIndex(
      s => s.latitude === location.latitude && s.longitude === location.longitude
    );
    
    if (index > -1) {
      // Remove if exists
      savedLocations.splice(index, 1);
      this.savePreferences({ savedLocations });
      return false;
    } else {
      // Add if doesn't exist (max 10 locations)
      if (savedLocations.length < 10) {
        savedLocations.push(location);
        this.savePreferences({ savedLocations });
        return true;
      }
      return false;
    }
  },

  isSavedLocation(latitude: number, longitude: number): boolean {
    const prefs = this.getPreferences();
    const savedLocations = prefs.savedLocations || [];
    return savedLocations.some(s => s.latitude === latitude && s.longitude === longitude);
  },

  getSavedLocations(): Array<{ name: string; latitude: number; longitude: number; country: string }> {
    const prefs = this.getPreferences();
    return prefs.savedLocations || [];
  },
};
