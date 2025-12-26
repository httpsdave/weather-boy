import React, { useState } from 'react';
import { format, parseISO } from 'date-fns';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { DailyWeather, HourlyWeather } from '../types/weather';
import { weatherService } from '../services/weatherService';
import { storageService, TemperatureUnit } from '../services/storageService';

interface DailyForecastProps {
  daily: DailyWeather;
  hourly?: HourlyWeather;
  temperatureUnit: TemperatureUnit;
}

const DailyForecast: React.FC<DailyForecastProps> = ({ daily, hourly, temperatureUnit }) => {
  const [expandedDay, setExpandedDay] = useState<number | null>(null);

  const getHourlyForDay = (dayIndex: number) => {
    if (!hourly) return [];
    const dayStart = dayIndex * 24;
    return Array.from({ length: 8 }, (_, i) => {
      const index = dayStart + i * 3; // Every 3 hours
      if (index >= hourly.time.length) return null;
      return {
        time: hourly.time[index],
        temp: storageService.convertTemperature(hourly.temperature_2m[index], temperatureUnit),
        code: hourly.weather_code[index],
      };
    }).filter(Boolean);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-3xl p-4 md:p-6 shadow-xl animate-slide-up">
      <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white mb-4">7-Day Forecast</h3>
      <div className="space-y-2 md:space-y-3">
        {daily.time.map((date, index) => {
          const weatherInfo = weatherService.getWeatherDescription(
            daily.weather_code[index],
            true
          );
          const maxTemp = storageService.convertTemperature(daily.temperature_2m_max[index], temperatureUnit);
          const minTemp = storageService.convertTemperature(daily.temperature_2m_min[index], temperatureUnit);
          const isExpanded = expandedDay === index;
          const hourlyData = getHourlyForDay(index);
          
          return (
            <div key={date} className="bg-gray-50 dark:bg-gray-700 rounded-xl md:rounded-2xl overflow-hidden">
              <div
                className="flex items-center justify-between p-3 md:p-4 hover:bg-blue-50 dark:hover:bg-gray-600 transition-colors active:scale-[0.99] cursor-pointer"
                onClick={() => setExpandedDay(isExpanded ? null : index)}
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
                {daily.precipitation_sum[index] > 0 && (
                  <div className="hidden sm:flex items-center text-blue-600 text-xs md:text-sm font-medium">
                    <span>💧 {daily.precipitation_sum[index].toFixed(1)}mm</span>
                  </div>
                )}
                {daily.precipitation_probability_max[index] > 0 && daily.precipitation_sum[index] === 0 && (
                  <div className="hidden sm:flex items-center text-blue-500 text-xs md:text-sm">
                    <span>💧 {Math.round(daily.precipitation_probability_max[index])}%</span>
                  </div>
                )}
                {daily.wind_gusts_10m_max[index] > 40 && (
                  <div className="hidden md:flex items-center text-orange-600 text-xs md:text-sm">
                    <span>💨 {Math.round(daily.wind_gusts_10m_max[index])}</span>
                  </div>
                )}
                {daily.uv_index_max[index] > 6 && (
                  <div className="hidden md:flex items-center text-orange-500 text-xs md:text-sm">
                    <span>☀️ {Math.round(daily.uv_index_max[index])}</span>
                  </div>
                )}
                <div className="flex items-center space-x-1 md:space-x-2">
                  <span className="text-base md:text-lg font-bold text-gray-800 dark:text-white">
                    {Math.round(maxTemp)}°
                  </span>
                  <span className="text-base md:text-lg text-gray-500 dark:text-gray-400">
                    {Math.round(minTemp)}°
                  </span>
                </div>
                {hourly && (
                  <button className="ml-2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                )}
              </div>
            </div>
            
            {isExpanded && hourly && hourlyData.length > 0 && (
              <div className="p-3 md:p-4 bg-gray-100 dark:bg-gray-800 border-t dark:border-gray-600">
                <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
                  {hourlyData.map((hour: any, i: number) => {
                    const info = weatherService.getWeatherDescription(hour.code, true);
                    return (
                      <div key={i} className="text-center">
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {format(parseISO(hour.time), 'HH:mm')}
                        </div>
                        <div className="text-xl my-1">{info.icon}</div>
                        <div className="text-sm font-medium text-gray-800 dark:text-white">
                          {Math.round(hour.temp)}°
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
          );
        })}
      </div>
    </div>
  );
};

export default DailyForecast;
