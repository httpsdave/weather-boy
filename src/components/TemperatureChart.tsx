import React, { useState } from 'react';
import { DailyWeather } from '../types/weather';
import { storageService, TemperatureUnit } from '../services/storageService';
import { format, parseISO } from 'date-fns';

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

  // Color bars based on temperature
  const getColor = (temp: number) => {
    if (temp >= 30) return 'bg-red-500';
    if (temp >= 25) return 'bg-orange-500';
    if (temp >= 20) return 'bg-amber-500';
    if (temp >= 15) return 'bg-yellow-500';
    if (temp >= 10) return 'bg-lime-500';
    if (temp >= 5) return 'bg-green-500';
    return 'bg-blue-500';
  };

  return (
    <div className="animate-slide-up">
      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6">7-Day Temperature Trend</h3>
      <div className="relative">
        {/* Chart container */}
        <div className="flex items-end justify-between gap-2 px-2" style={{ height: '240px' }}>
          {dailyData.map((data, index) => {
            const heightPercent = ((data.high - minTemp) / tempRange) * 100;
            
            return (
              <div key={index} className="flex-1 flex flex-col items-center justify-end gap-1 h-full relative">
                {/* Bar */}
                <div 
                  className="relative w-full cursor-pointer transition-opacity hover:opacity-80 flex items-start justify-center pt-2"
                  style={{ height: `${Math.max(heightPercent, 10)}%` }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className={`absolute inset-0 w-full h-full ${getColor(data.high)}`}></div>
                  
                  {/* Temperature label inside bar */}
                  <div className="relative z-10 text-xl md:text-2xl font-bold text-white drop-shadow-md">
                    {data.high}°
                  </div>
                  
                  {/* Tooltip */}
                  {hoveredIndex === index && (
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white dark:bg-gray-800 p-3 shadow-lg border border-gray-200 dark:border-gray-600 whitespace-nowrap z-20">
                      <p className="font-bold text-gray-900 dark:text-white text-sm">{data.day}, {data.date}</p>
                      <p className="text-xs text-orange-600 dark:text-orange-400">High: {data.high}°</p>
                      <p className="text-xs text-blue-600 dark:text-blue-400">Low: {data.low}°</p>
                    </div>
                  )}
                </div>
                
                {/* Day label */}
                <div className="text-sm md:text-base font-semibold text-gray-700 dark:text-gray-300 pt-2 pb-1">
                  {data.day}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TemperatureChart;
