import React from 'react';
import { Sunrise, Sunset, Wind, Droplets, Gauge, Sun } from 'lucide-react';
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
  const windSpeed = storageService.convertWindSpeed(weather.wind_speed_10m, windSpeedUnit);
  const windDir = weatherService.getWindDirection(weather.wind_direction_10m);
  const tempSymbol = storageService.getTemperatureSymbol(temperatureUnit);
  const windSymbol = storageService.getWindSpeedSymbol(windSpeedUnit);

  const details = [
    {
      icon: <Wind className="w-5 h-5" />,
      label: 'Wind',
      value: `${Math.round(windSpeed)} ${windSymbol} ${windDir}`,
    },
    {
      icon: <Droplets className="w-5 h-5" />,
      label: 'Humidity',
      value: `${Math.round(humidity)}%`,
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
    <div className="bg-white rounded-3xl p-4 md:p-6 shadow-xl animate-slide-up">
      <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">Weather Details</h3>
      <div className="grid grid-cols-2 gap-3 md:gap-4">
        {details.map((detail, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-xl md:rounded-2xl p-3 md:p-4 hover:bg-blue-50 transition-colors active:scale-95"
          >
            <div className="flex items-center space-x-1 md:space-x-2 text-weather-blue mb-1 md:mb-2">
              {detail.icon}
              <span className="text-xs font-medium text-gray-600">{detail.label}</span>
            </div>
            <p className="text-base md:text-lg font-bold text-gray-800 break-words">{detail.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherDetails;
