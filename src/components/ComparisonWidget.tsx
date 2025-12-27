import React, { useState, useEffect } from 'react';
import { X, TrendingUp, Droplets, Wind } from 'lucide-react';
import { weatherService } from '../services/weatherService';
import { storageService, TemperatureUnit, WindSpeedUnit } from '../services/storageService';
import { WeatherData, Location } from '../types/weather';

interface ComparisonWidgetProps {
  isOpen: boolean;
  onClose: () => void;
  temperatureUnit: TemperatureUnit;
  windSpeedUnit: WindSpeedUnit;
}

const ComparisonWidget: React.FC<ComparisonWidgetProps> = ({
  isOpen,
  onClose,
  temperatureUnit,
  windSpeedUnit,
}) => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [weatherDataMap, setWeatherDataMap] = useState<Map<string, WeatherData>>(new Map());
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const saved = storageService.getSavedLocations();
      setLocations(saved.slice(0, 4)); // Max 4 for comparison
      
      // Fetch weather for each location
      setLoading(true);
      Promise.all(
        saved.slice(0, 4).map(async (loc) => {
          try {
            const data = await weatherService.getCurrentWeather(loc.latitude, loc.longitude);
            return { key: `${loc.latitude},${loc.longitude}`, data };
          } catch {
            return null;
          }
        })
      ).then((results) => {
        const map = new Map();
        results.forEach((result) => {
          if (result) map.set(result.key, result.data);
        });
        setWeatherDataMap(map);
        setLoading(false);
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-x-2 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 top-20 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl z-50 p-4 md:p-6 w-auto md:w-[800px] max-h-[80vh] overflow-y-auto origin-top animate-dropdown">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-weather-blue" />
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">Compare Locations</h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {loading && (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            Loading comparison data...
          </div>
        )}

        {!loading && locations.length === 0 && (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            Save some locations to compare them here!
          </div>
        )}

        {!loading && locations.length > 0 && (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b dark:border-gray-700">
                  <th className="text-left p-2 text-sm font-medium text-gray-600 dark:text-gray-400">Location</th>
                  <th className="text-center p-2 text-sm font-medium text-gray-600 dark:text-gray-400">Temp</th>
                  <th className="text-center p-2 text-sm font-medium text-gray-600 dark:text-gray-400">Condition</th>
                  <th className="text-center p-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                    <Droplets className="w-4 h-4 inline" />
                  </th>
                  <th className="text-center p-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                    <Wind className="w-4 h-4 inline" />
                  </th>
                </tr>
              </thead>
              <tbody>
                {locations.map((loc) => {
                  const key = `${loc.latitude},${loc.longitude}`;
                  const weather = weatherDataMap.get(key);
                  if (!weather) return null;

                  const temp = storageService.convertTemperature(weather.current.temperature_2m, temperatureUnit);
                  const windSpeed = storageService.convertWindSpeed(weather.current.wind_speed_10m, windSpeedUnit);
                  const weatherInfo = weatherService.getWeatherDescription(
                    weather.current.weather_code,
                    weather.current.is_day === 1
                  );

                  return (
                    <tr key={key} className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="p-2">
                        <div className="font-medium text-gray-800 dark:text-white">{loc.name}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{loc.country}</div>
                      </td>
                      <td className="text-center p-2 text-xl font-bold text-gray-800 dark:text-white">
                        {Math.round(temp)}°
                      </td>
                      <td className="text-center p-2">
                        <div className="text-3xl">{weatherInfo.icon}</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">{weatherInfo.description}</div>
                      </td>
                      <td className="text-center p-2 text-gray-700 dark:text-gray-300">
                        {Math.round(weather.hourly.relative_humidity_2m[0])}%
                      </td>
                      <td className="text-center p-2 text-gray-700 dark:text-gray-300">
                        {Math.round(windSpeed)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
  );
};

export default ComparisonWidget;
