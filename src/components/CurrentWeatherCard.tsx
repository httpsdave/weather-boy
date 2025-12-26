import React from 'react';
import { Wind, Droplets } from 'lucide-react';
import { CurrentWeather } from '../types/weather';
import { weatherService } from '../services/weatherService';
import { storageService, TemperatureUnit, WindSpeedUnit } from '../services/storageService';

interface CurrentWeatherCardProps {
  weather: CurrentWeather;
  locationName: string;
  humidity?: number;
  temperatureUnit: TemperatureUnit;
  windSpeedUnit: WindSpeedUnit;
}

const CurrentWeatherCard: React.FC<CurrentWeatherCardProps> = ({ 
  weather, 
  locationName,
  humidity,
  temperatureUnit,
  windSpeedUnit,
}) => {
  const weatherInfo = weatherService.getWeatherDescription(
    weather.weather_code,
    weather.is_day === 1
  );

  const temp = storageService.convertTemperature(weather.temperature_2m, temperatureUnit);
  const windSpeed = storageService.convertWindSpeed(weather.wind_speed_10m, windSpeedUnit);
  const windSymbol = storageService.getWindSpeedSymbol(windSpeedUnit);

  return (
    <div className="bg-gradient-to-br from-weather-blue to-blue-600 dark:from-blue-800 dark:to-blue-900 rounded-3xl p-6 md:p-8 text-white shadow-2xl animate-fade-in">
      <div className="flex flex-col items-center">
        <h2 className="text-xl md:text-2xl font-medium mb-2">{locationName}</h2>
        <div className="text-7xl md:text-8xl my-4">{weatherInfo.icon}</div>
        <div className="text-6xl md:text-7xl font-bold mb-2">
          {Math.round(temp)}°
        </div>
        <p className="text-xl md:text-2xl mb-6 capitalize">{weatherInfo.description}</p>
        
        <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
          <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-xl p-4 flex items-center space-x-3">
            <Wind className="w-6 h-6" />
            <div>
              <p className="text-xs opacity-80">Wind</p>
              <p className="text-lg font-semibold">{Math.round(windSpeed)} {windSymbol}</p>
            </div>
          </div>
          
          {humidity !== undefined && (
            <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-xl p-4 flex items-center space-x-3">
              <Droplets className="w-6 h-6" />
              <div>
                <p className="text-xs opacity-80">Humidity</p>
                <p className="text-lg font-semibold">{Math.round(humidity)}%</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CurrentWeatherCard;
