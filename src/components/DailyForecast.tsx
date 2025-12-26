import React, { useState } from 'react';
import { format, parseISO } from 'date-fns';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { DailyWeather, HourlyWeather } from '../types/weather';
import { weatherService } from '../services/weatherService';
import { storageService, TemperatureUnit } from '../services/storageService';
import { getWeatherBackground } from './WeatherBackgrounds';

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
    <div className="animate-slide-up">
      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6">7-Day Forecast</h3>
      <div className="space-y-3">
        {daily.time.map((date, index) => {
          const weatherInfo = weatherService.getWeatherDescription(
            daily.weather_code[index],
            true
          );
          const maxTemp = storageService.convertTemperature(daily.temperature_2m_max[index], temperatureUnit);
          const minTemp = storageService.convertTemperature(daily.temperature_2m_min[index], temperatureUnit);
          const isExpanded = expandedDay === index;
          const hourlyData = getHourlyForDay(index);
          const WeatherBackground = getWeatherBackground(daily.weather_code[index], true);
          
          return (
            <div key={date} className="relative overflow-visible shadow-sm border border-gray-200 dark:border-gray-600 animate-card-pop" style={{ animationDelay: `${index * 0.05}s` }}>
              {/* Weather Background Illustration */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0" style={{ width: '70%' }}>
                    <WeatherBackground className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-white dark:via-gray-800/80 dark:to-gray-800"></div>
                </div>
              </div>
              
              <div
                className="relative z-10 flex items-center justify-between p-4 md:p-5 hover:bg-white/20 dark:hover:bg-gray-700/20 transition-all duration-200 cursor-pointer"
                onClick={() => setExpandedDay(isExpanded ? null : index)}
              >
                <div className="flex items-center space-x-3 md:space-x-4 flex-1 min-w-0">
                  <p className="text-sm md:text-base font-bold text-gray-800 dark:text-gray-100 w-20 md:w-28 flex-shrink-0 drop-shadow-md">
                    {index === 0 ? 'Today' : format(parseISO(date), 'EEE, MMM d')}
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 hidden lg:block capitalize truncate font-medium drop-shadow-sm">
                    {weatherInfo.description}
                  </p>
                </div>
                
                <div className="flex items-center space-x-2 md:space-x-4 flex-shrink-0">
                  {daily.precipitation_sum[index] > 0 && (
                    <div className="hidden sm:flex items-center text-blue-600 dark:text-blue-400 text-xs md:text-sm font-bold bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded-lg">
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
                  <div className="flex items-center space-x-2">
                    <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent dark:from-orange-400 dark:to-red-400">
                      {Math.round(maxTemp)}°
                    </span>
                    <span className="text-lg md:text-xl font-semibold text-gray-500 dark:text-gray-400">
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
                <div className="relative z-20 p-4 md:p-5 bg-white dark:bg-gray-800 border-t-2 border-gray-200 dark:border-gray-600">
                  <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
                    {hourlyData.map((hour: any, i: number) => {
                      const info = weatherService.getWeatherDescription(hour.code, true);
                      return (
                        <div key={i} className="text-center bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-gray-700 dark:to-gray-600 p-2 shadow-sm border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow">
                          <div className="text-xs font-semibold text-gray-600 dark:text-gray-300">
                            {format(parseISO(hour.time), 'HH:mm')}
                          </div>
                          <div className="text-2xl my-2">{info.icon}</div>
                          <div className="text-sm font-bold text-gray-900 dark:text-white">
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
