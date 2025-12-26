import React from 'react';
import { Wind, Droplets } from 'lucide-react';
import { CurrentWeather, Location } from '../types/weather';
import { weatherService } from '../services/weatherService';
import { storageService, TemperatureUnit, WindSpeedUnit } from '../services/storageService';
import { getWeatherBackground } from './WeatherBackgrounds';
import SearchBar from './SearchBar';

interface CurrentWeatherCardProps {
  weather: CurrentWeather;
  locationName: string;
  humidity?: number;
  temperatureUnit: TemperatureUnit;
  windSpeedUnit: WindSpeedUnit;
  onLocationSelect: (location: Location) => void;
  onUseCurrentLocation: () => void;
  isLoadingLocation: boolean;
}

const CurrentWeatherCard: React.FC<CurrentWeatherCardProps> = ({ 
  weather, 
  locationName,
  humidity,
  temperatureUnit,
  windSpeedUnit,
  onLocationSelect,
  onUseCurrentLocation,
  isLoadingLocation,
}) => {
  const weatherInfo = weatherService.getWeatherDescription(
    weather.weather_code,
    weather.is_day === 1
  );

  const temp = storageService.convertTemperature(weather.temperature_2m, temperatureUnit);
  const windSpeed = storageService.convertWindSpeed(weather.wind_speed_10m, windSpeedUnit);
  const windSymbol = storageService.getWindSpeedSymbol(windSpeedUnit);

  const WeatherBackground = getWeatherBackground(weather.weather_code, weather.is_day === 1);

  return (
    <div className="relative overflow-hidden animate-fade-in">
      {/* Illustrated Weather Background */}
      <div className="absolute inset-0 z-0">
        <WeatherBackground className="w-full h-full object-cover" />
      </div>
      
      {/* Content Overlay with gradient fade */}
      <div className="relative z-10 bg-gradient-to-b from-black/20 via-black/10 to-black/40 py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-7xl">
        {/* Integrated SearchBar */}
        <div className="mb-6">
          <SearchBar
            onLocationSelect={onLocationSelect}
            onUseCurrentLocation={onUseCurrentLocation}
            isLoadingLocation={isLoadingLocation}
            temperatureUnit={temperatureUnit}
          />
        </div>
        
        <div className="flex flex-col items-center text-white">
          {/* Location */}
          <h2 className="text-xl md:text-2xl font-semibold mb-4 drop-shadow-lg">{locationName}</h2>
          
          {/* Large Temperature Display */}
          <div className="text-8xl md:text-9xl font-bold mb-2 drop-shadow-2xl tracking-tight">
            {Math.round(temp)}°
          </div>
          
          {/* Weather Description */}
          <p className="text-2xl md:text-3xl mb-8 capitalize drop-shadow-lg font-medium">
            {weatherInfo.description}
          </p>
          
          {/* Weather Stats Cards */}
          <div className="grid grid-cols-2 gap-4 w-full max-w-sm mt-4">
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl p-4 shadow-lg animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center space-x-3">
                <div className="bg-blue-500/20 p-2 rounded-xl">
                  <Wind className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">Wind</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">{Math.round(windSpeed)} {windSymbol}</p>
                </div>
              </div>
            </div>
            
            {humidity !== undefined && (
              <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl p-4 shadow-lg animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center space-x-3">
                  <div className="bg-cyan-500/20 p-2 rounded-xl">
                    <Droplets className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">Humidity</p>
                    <p className="text-lg font-bold text-gray-900 dark:text-white">{Math.round(humidity)}%</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeatherCard;
