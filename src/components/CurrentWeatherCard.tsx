import React from 'react';
import { Wind, Droplets } from 'lucide-react';
import { CurrentWeather } from '../types/weather';
import { weatherService } from '../services/weatherService';

interface CurrentWeatherCardProps {
  weather: CurrentWeather;
  locationName: string;
  humidity?: number;
}

const CurrentWeatherCard: React.FC<CurrentWeatherCardProps> = ({ 
  weather, 
  locationName,
  humidity 
}) => {
  const weatherInfo = weatherService.getWeatherDescription(
    weather.weather_code,
    weather.is_day === 1
  );

  return (
    <div className="bg-gradient-to-br from-weather-blue to-blue-600 rounded-3xl p-6 md:p-8 text-white shadow-2xl animate-fade-in">
      <div className="flex flex-col items-center">
        <h2 className="text-xl md:text-2xl font-medium mb-2">{locationName}</h2>
        <div className="text-7xl md:text-8xl my-4">{weatherInfo.icon}</div>
        <div className="text-6xl md:text-7xl font-bold mb-2">
          {Math.round(weather.temperature_2m)}°
        </div>
        <p className="text-xl md:text-2xl mb-6 capitalize">{weatherInfo.description}</p>
        
        <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center space-x-3">
            <Wind className="w-6 h-6" />
            <div>
              <p className="text-xs opacity-80">Wind</p>
              <p className="text-lg font-semibold">{Math.round(weather.wind_speed_10m)} km/h</p>
            </div>
          </div>
          
          {humidity !== undefined && (
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center space-x-3">
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
