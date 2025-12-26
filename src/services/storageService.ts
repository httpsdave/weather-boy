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
};
