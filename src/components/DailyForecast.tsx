import React from 'react';
import { format, parseISO } from 'date-fns';
import { DailyWeather } from '../types/weather';
import { weatherService } from '../services/weatherService';
import { storageService, TemperatureUnit } from '../services/storageService';

interface DailyForecastProps {
  daily: DailyWeather;
  temperatureUnit: TemperatureUnit;
}

const DailyForecast: React.FC<DailyForecastProps> = ({ daily, temperatureUnit }) => {
  return (
    <div className="bg-white rounded-3xl p-4 md:p-6 shadow-xl animate-slide-up">
      <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">7-Day Forecast</h3>
      <div className="space-y-2 md:space-y-3">
        {daily.time.map((date, index) => {
          const weatherInfo = weatherService.getWeatherDescription(
            daily.weather_code[index],
            true
          );
          const maxTemp = storageService.convertTemperature(daily.temperature_2m_max[index], temperatureUnit);
          const minTemp = storageService.convertTemperature(daily.temperature_2m_min[index], temperatureUnit);
          
          return (
            <div
              key={date}
              className="flex items-center justify-between bg-gray-50 rounded-xl md:rounded-2xl p-3 md:p-4 hover:bg-blue-50 transition-colors active:scale-[0.99]"
            >
              <div className="flex items-center space-x-2 md:space-x-4 flex-1 min-w-0">
                <p className="text-xs md:text-sm font-medium text-gray-700 w-16 md:w-24 flex-shrink-0">
                  {index === 0 ? 'Today' : format(parseISO(date), 'EEE, MMM d')}
                </p>
                <div className="text-2xl md:text-3xl flex-shrink-0">{weatherInfo.icon}</div>
                <p className="text-xs text-gray-600 hidden lg:block capitalize truncate">
                  {weatherInfo.description}
                </p>
              </div>
              
              <div className="flex items-center space-x-2 md:space-x-4 flex-shrink-0">
                {daily.precipitation_probability_max[index] > 0 && (
                  <div className="hidden sm:flex items-center text-blue-500 text-xs md:text-sm">
                    <span>💧 {Math.round(daily.precipitation_probability_max[index])}%</span>
                  </div>
                )}
                {daily.uv_index_max[index] > 6 && (
                  <div className="hidden md:flex items-center text-orange-500 text-xs md:text-sm">
                    <span>☀️ {Math.round(daily.uv_index_max[index])}</span>
                  </div>
                )}
                <div className="flex items-center space-x-1 md:space-x-2">
                  <span className="text-base md:text-lg font-bold text-gray-800">
                    {Math.round(maxTemp)}°
                  </span>
                  <span className="text-base md:text-lg text-gray-500">
                    {Math.round(minTemp)}°
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DailyForecast;
