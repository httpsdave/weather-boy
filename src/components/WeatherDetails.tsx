import React from 'react';
import { Sunrise, Sunset, Wind, Droplets, Gauge, Sun, Cloud, Eye } from 'lucide-react';
import { CurrentWeather } from '../types/weather';
import { weatherService } from '../services/weatherService';
import { storageService, TemperatureUnit, WindSpeedUnit } from '../services/storageService';

interface WeatherDetailsProps {
  weather: CurrentWeather;
  sunrise: string;
  sunset: string;
  humidity: number;
  temperatureUnit: TemperatureUnit;
  windSpeedUnit: WindSpeedUnit;
}

const WeatherDetails: React.FC<WeatherDetailsProps> = ({
  weather,
  sunrise,
  sunset,
  humidity,
  temperatureUnit,
  windSpeedUnit,
}) => {
  const feelsLike = storageService.convertTemperature(weather.apparent_temperature, temperatureUnit);
  const dewPoint = storageService.convertTemperature(weather.dew_point_2m, temperatureUnit);
  const windSpeed = storageService.convertWindSpeed(weather.wind_speed_10m, windSpeedUnit);
  const windGust = storageService.convertWindSpeed(weather.wind_gusts_10m, windSpeedUnit);
  const windDir = weatherService.getWindDirection(weather.wind_direction_10m);
  const tempSymbol = storageService.getTemperatureSymbol(temperatureUnit);
  const windSymbol = storageService.getWindSpeedSymbol(windSpeedUnit);
  const visibility = (weather.visibility / 1000).toFixed(1); // Convert to km

  const details = [
    {
      icon: <Wind className="w-5 h-5" />,
      label: 'Wind',
      value: `${Math.round(windSpeed)} ${windSymbol} ${windDir}`,
    },
    {
      icon: <Wind className="w-5 h-5" />,
      label: 'Wind Gusts',
      value: `${Math.round(windGust)} ${windSymbol}`,
      highlight: windGust > windSpeed + 10,
    },
    {
      icon: <Droplets className="w-5 h-5" />,
      label: 'Humidity',
      value: `${Math.round(humidity)}%`,
    },
    {
      icon: <Droplets className="w-5 h-5" />,
      label: 'Dew Point',
      value: `${Math.round(dewPoint)}${tempSymbol}`,
    },
    {
      icon: <Sun className="w-5 h-5" />,
      label: 'Feels Like',
      value: `${Math.round(feelsLike)}${tempSymbol}`,
    },
    {
      icon: <Gauge className="w-5 h-5" />,
      label: 'Pressure',
      value: `${Math.round(weather.pressure_msl)} hPa`,
    },
    {
      icon: <Cloud className="w-5 h-5" />,
      label: 'Cloud Cover',
      value: `${Math.round(weather.cloud_cover)}%`,
    },
    {
      icon: <Eye className="w-5 h-5" />,
      label: 'Visibility',
      value: `${visibility} km`,
    },
    {
      icon: <Sun className="w-5 h-5" />,
      label: 'UV Index',
      value: Math.round(weather.uv_index).toString(),
    },
    {
      icon: <Droplets className="w-5 h-5" />,
      label: 'Precipitation',
      value: `${weather.precipitation.toFixed(1)} mm`,
    },
    {
      icon: <Sunrise className="w-5 h-5" />,
      label: 'Sunrise',
      value: new Date(sunrise).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
    },
    {
      icon: <Sunset className="w-5 h-5" />,
      label: 'Sunset',
      value: new Date(sunset).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
    },
  ];

  return (
    <div className="animate-slide-up max-w-6xl mx-auto">
      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center md:text-left">Weather Details</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-x-12 md:gap-y-8">
        {details.map((detail, index) => (
          <div
            key={index}
            className={`transition-all duration-200 ${
              detail.highlight ? 'bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 pl-3 py-2' : 'py-2'
            }`}
          >
            <div className="flex items-center space-x-2 mb-2">
              <div className="text-blue-500 dark:text-blue-400">
                {detail.icon}
              </div>
              <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">{detail.label}</span>
            </div>
            <p className={`text-lg md:text-xl font-bold ${
              detail.highlight ? 'text-orange-600 dark:text-orange-400' : 'text-gray-900 dark:text-white'
            }`}>{detail.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherDetails;
