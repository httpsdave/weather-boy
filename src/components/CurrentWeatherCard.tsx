import React from 'react';
import { Wind, Droplets, ThermometerSun } from 'lucide-react';
import { CurrentWeather, Location } from '../types/weather';
import { weatherService } from '../services/weatherService';
import { storageService, TemperatureUnit, WindSpeedUnit } from '../services/storageService';
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

  return (
    <div className="pt-0 pb-4 md:pb-6">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Integrated SearchBar */}
        <div className="mb-10">
          <SearchBar
            onLocationSelect={onLocationSelect}
            onUseCurrentLocation={onUseCurrentLocation}
            isLoadingLocation={isLoadingLocation}
            temperatureUnit={temperatureUnit}
          />
        </div>
        
        <div className="flex flex-col items-center text-white">
          {/* Location */}
          <h2 className="text-xl md:text-2xl font-semibold mb-1 drop-shadow-lg">{locationName}</h2>
          
          {/* Data timestamp */}
          <p className="text-xs text-white/60 mb-3 drop-shadow-md">
            As of {new Date(weather.time).toLocaleTimeString('en-US', { 
              hour: 'numeric', 
              minute: '2-digit',
              hour12: true 
            })}
          </p>
          
          {/* Large Temperature Display */}
          <div className="text-8xl md:text-9xl font-bold mb-2 drop-shadow-2xl tracking-tight">
            {Math.round(temp)}°
          </div>
          
          {/* Weather Description */}
          <p className="text-2xl md:text-3xl mb-6 capitalize drop-shadow-lg font-medium">
            {weatherInfo.description}
          </p>
          
          {/* Weather Stats - Integrated without containers */}
          <div className="flex items-center space-x-6 mb-6">
            <div className="flex items-center space-x-2">
              <Wind className="w-5 h-5 text-white drop-shadow-md" />
              <div className="text-white drop-shadow-lg">
                <p className="text-xs font-medium opacity-90">Wind</p>
                <p className="text-lg font-bold">{Math.round(windSpeed)} {windSymbol}</p>
              </div>
            </div>
            
            {humidity !== undefined && (
              <div className="flex items-center space-x-2">
                <Droplets className="w-5 h-5 text-white drop-shadow-md" />
                <div className="text-white drop-shadow-lg">
                  <p className="text-xs font-medium opacity-90">Humidity</p>
                  <p className="text-lg font-bold">{Math.round(humidity)}%</p>
                </div>
              </div>
            )}
            
            <div className="flex items-center space-x-2">
              <ThermometerSun className="w-5 h-5 text-white drop-shadow-md" />
              <div className="text-white drop-shadow-lg">
                <p className="text-xs font-medium opacity-90">Feels Like</p>
                <p className="text-lg font-bold">{Math.round(storageService.convertTemperature(weather.apparent_temperature, temperatureUnit))}°</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeatherCard;
