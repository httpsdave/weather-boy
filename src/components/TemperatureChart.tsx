import React, { useState } from 'react';
import { DailyWeather } from '../types/weather';
import { storageService, TemperatureUnit } from '../services/storageService';
import { format, parseISO } from 'date-fns';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface TemperatureChartProps {
  daily: DailyWeather;
  temperatureUnit: TemperatureUnit;
}

const TemperatureChart: React.FC<TemperatureChartProps> = ({ daily, temperatureUnit }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Use daily temperature data from Open-Meteo (up to 16 days available)
  const dailyData = daily.time.slice(0, 7).map((time, index) => {
    const high = Math.round(storageService.convertTemperature(daily.temperature_2m_max[index], temperatureUnit));
    const low = Math.round(storageService.convertTemperature(daily.temperature_2m_min[index], temperatureUnit));
    const date = parseISO(time);
    
    return {
      day: format(date, 'EEE'),
      date: format(date, 'MMM d'),
      high,
      low,
      range: high - low,
    };
  });

  // Find min and max for scaling
  const allTemps = dailyData.flatMap(d => [d.high, d.low]);
  const minTemp = Math.min(...allTemps);
  const maxTemp = Math.max(...allTemps);
  const tempRange = maxTemp - minTemp || 1;

  return (
    <div className="animate-slide-up">
      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6">7-Day Temperature Trend</h3>
      <div className="space-y-3">
        {dailyData.map((data, index) => {
          const barWidth = ((data.high - minTemp) / tempRange) * 100;
          const isHovered = hoveredIndex === index;
          
          return (
            <div 
              key={index} 
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex items-center space-x-4">
                {/* Day label */}
                <div className="w-20 flex-shrink-0">
                  <p className="text-sm font-bold text-gray-800 dark:text-gray-200">
                    {index === 0 ? 'Today' : data.day}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{data.date}</p>
                </div>

                {/* Temperature bar */}
                <div className="flex-1 flex items-center space-x-3">
                  {/* Low temp */}
                  <div className="flex items-center space-x-1">
                    <TrendingDown className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 w-8 text-right">
                      {data.low}°
                    </span>
                  </div>

                  {/* Visual bar */}
                  <div className="flex-1 h-8 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden relative">
                    <div 
                      className={`h-full bg-sky-400 dark:bg-sky-500 rounded-full transition-all duration-300 ${
                        isHovered ? 'opacity-100' : 'opacity-80'
                      }`}
                      style={{ width: `${Math.max(barWidth, 15)}%` }}
                    ></div>
                  </div>

                  {/* High temp */}
                  <div className="flex items-center space-x-1">
                    <span className="text-sm font-bold text-orange-600 dark:text-orange-400 w-8">
                      {data.high}°
                    </span>
                    <TrendingUp className="w-4 h-4 text-orange-500 dark:text-orange-400" />
                  </div>
                </div>
              </div>

              {/* Range indicator */}
              {isHovered && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 -right-16 bg-white dark:bg-gray-800 px-3 py-1 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 whitespace-nowrap z-20">
                  <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                    Range: {data.range}°
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TemperatureChart;
