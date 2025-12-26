import React from 'react';
import { format, parseISO } from 'date-fns';
import { HourlyWeather } from '../types/weather';
import { weatherService } from '../services/weatherService';
import { storageService, TemperatureUnit, WindSpeedUnit } from '../services/storageService';

interface HourlyForecastProps {
  hourly: HourlyWeather;
  temperatureUnit: TemperatureUnit;
  windSpeedUnit: WindSpeedUnit;
}

const HourlyForecast: React.FC<HourlyForecastProps> = ({ hourly, temperatureUnit, windSpeedUnit }) => {
  const next24Hours = hourly.time.slice(0, 24);

  return (
    <div className="bg-white rounded-3xl p-6 shadow-xl animate-slide-up">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Hourly Forecast</h3>
      <div className="overflow-x-auto pb-2">
        <div className="flex space-x-4 min-w-max">
          {next24Hours.map((time, index) => {
            const weatherInfo = weatherService.getWeatherDescription(
              hourly.weather_code[index],
              true
            );
            const temp = storageService.convertTemperature(hourly.temperature_2m[index], temperatureUnit);
            const windSpeed = storageService.convertWindSpeed(hourly.wind_speed_10m[index], windSpeedUnit);
            const precipProb = hourly.precipitation_probability[index];
            
            return (
              <div
                key={time}
                className="flex flex-col items-center bg-gray-50 rounded-2xl p-4 min-w-[80px] hover:bg-blue-50 transition-colors"
              >
                <p className="text-sm font-medium text-gray-600 mb-2">
                  {format(parseISO(time), 'HH:mm')}
                </p>
                <div className="text-3xl my-2">{weatherInfo.icon}</div>
                <p className="text-lg font-bold text-gray-800">
                  {Math.round(temp)}°
                </p>
                {precipProb > 0 && (
                  <div className="text-xs text-blue-500 mt-1">
                    💧 {Math.round(precipProb)}%
                  </div>
                )}
                <div className="flex items-center text-xs text-gray-500 mt-2">
                  <span>💨 {Math.round(windSpeed)}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HourlyForecast;
