import React from 'react';
import { format, parseISO } from 'date-fns';
import { DailyWeather } from '../types/weather';
import { weatherService } from '../services/weatherService';

interface DailyForecastProps {
  daily: DailyWeather;
}

const DailyForecast: React.FC<DailyForecastProps> = ({ daily }) => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-xl animate-slide-up">
      <h3 className="text-xl font-bold text-gray-800 mb-4">7-Day Forecast</h3>
      <div className="space-y-3">
        {daily.time.map((date, index) => {
          const weatherInfo = weatherService.getWeatherDescription(
            daily.weather_code[index],
            true
          );
          
          return (
            <div
              key={date}
              className="flex items-center justify-between bg-gray-50 rounded-2xl p-4 hover:bg-blue-50 transition-colors"
            >
              <div className="flex items-center space-x-4 flex-1">
                <p className="text-sm md:text-base font-medium text-gray-700 w-24">
                  {index === 0 ? 'Today' : format(parseISO(date), 'EEE, MMM d')}
                </p>
                <div className="text-3xl">{weatherInfo.icon}</div>
                <p className="text-sm text-gray-600 hidden md:block capitalize">
                  {weatherInfo.description}
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                {daily.precipitation_probability_max[index] > 0 && (
                  <div className="flex items-center text-blue-500 text-sm">
                    <span>💧 {Math.round(daily.precipitation_probability_max[index])}%</span>
                  </div>
                )}
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-gray-800">
                    {Math.round(daily.temperature_2m_max[index])}°
                  </span>
                  <span className="text-lg text-gray-500">
                    {Math.round(daily.temperature_2m_min[index])}°
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
