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
    <div className="bg-white dark:bg-gray-800 rounded-[28px] p-6 md:p-8 shadow-card hover:shadow-card-hover transition-shadow duration-300 animate-slide-up">
      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6">Weather Details</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {details.map((detail, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 animate-card-pop ${
              detail.highlight ? 'ring-2 ring-orange-400 shadow-lg' : ''
            }`}
            style={{ animationDelay: `${index * 0.03}s` }}
          >
            <div className="flex items-center space-x-2 mb-3">
              <div className="bg-blue-500/20 dark:bg-blue-400/20 p-2 rounded-xl text-blue-600 dark:text-blue-400">
                {detail.icon}
              </div>
              <span className="text-xs font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wide">{detail.label}</span>
            </div>
            <p className={`text-lg md:text-xl font-bold break-words ${
              detail.highlight ? 'text-orange-600 dark:text-orange-400' : 'text-gray-900 dark:text-white'
            }`}>{detail.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherDetails;
