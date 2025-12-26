import React from 'react';
import { HourlyWeather } from '../types/weather';
import { storageService, TemperatureUnit } from '../services/storageService';
import { format, parseISO } from 'date-fns';

interface TemperatureChartProps {
  hourly: HourlyWeather;
  temperatureUnit: TemperatureUnit;
  hours?: number;
}

const TemperatureChart: React.FC<TemperatureChartProps> = ({ hourly, temperatureUnit, hours = 24 }) => {
  const data = hourly.time.slice(0, hours).map((time, index) => ({
    time,
    temp: storageService.convertTemperature(hourly.temperature_2m[index], temperatureUnit),
  }));

  const maxTemp = Math.max(...data.map(d => d.temp));
  const minTemp = Math.min(...data.map(d => d.temp));
  const range = maxTemp - minTemp || 1;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-3xl p-4 md:p-6 shadow-xl">
      <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white mb-4">Temperature Trend</h3>
      <div className="relative h-48 md:h-64">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="tempGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          
          {/* Grid lines */}
          {[0, 25, 50, 75, 100].map((percent) => (
            <line
              key={percent}
              x1="0"
              y1={`${percent}%`}
              x2="100%"
              y2={`${percent}%`}
              stroke="currentColor"
              strokeWidth="1"
              className="text-gray-200 dark:text-gray-700"
            />
          ))}

          {/* Temperature line */}
          <polyline
            points={data.map((d, i) => {
              const x = (i / (data.length - 1)) * 100;
              const y = 100 - ((d.temp - minTemp) / range) * 100;
              return `${x},${y}`;
            }).join(' ')}
            fill="url(#tempGradient)"
            stroke="rgb(59, 130, 246)"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />

          {/* Data points */}
          {data.map((d, i) => {
            const x = (i / (data.length - 1)) * 100;
            const y = 100 - ((d.temp - minTemp) / range) * 100;
            return (
              <circle
                key={i}
                cx={`${x}%`}
                cy={`${y}%`}
                r="3"
                fill="rgb(59, 130, 246)"
                className="hover:r-5"
              />
            );
          })}
        </svg>

        {/* X-axis labels */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-2">
          {[0, Math.floor(data.length / 2), data.length - 1].map((i) => (
            <span key={i}>{format(parseISO(data[i].time), 'HH:mm')}</span>
          ))}
        </div>

        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-500 dark:text-gray-400 -ml-10">
          <span>{Math.round(maxTemp)}°</span>
          <span>{Math.round((maxTemp + minTemp) / 2)}°</span>
          <span>{Math.round(minTemp)}°</span>
        </div>
      </div>
    </div>
  );
};

export default TemperatureChart;
