import React, { useEffect, useState } from 'react';
import { RadialBarChart, RadialBar, PolarAngleAxis } from 'recharts';
import { weatherService } from '../services/weatherService';
import { AirQuality } from '../types/weather';

interface AirQualityCardProps {
  latitude: number;
  longitude: number;
}

const AirQualityCard: React.FC<AirQualityCardProps> = ({ latitude, longitude }) => {
  const [airQuality, setAirQuality] = useState<AirQuality | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAQ = async () => {
      setLoading(true);
      const data = await weatherService.getAirQuality(latitude, longitude);
      setAirQuality(data);
      setLoading(false);
    };
    fetchAQ();
  }, [latitude, longitude]);

  if (loading) {
    return (
      <div className="animate-pulse">
        <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-32 mb-4"></div>
        <div className="h-48 bg-gray-200 dark:bg-gray-700 rounded"></div>
      </div>
    );
  }

  if (!airQuality) return null;

  const aqiInfo = weatherService.getAQILevel(airQuality.us_aqi);
  const aqiValue = Math.round(airQuality.us_aqi);
  
  // Prepare data for radial chart
  const maxAQI = 300;
  const chartData = [
    {
      name: 'AQI',
      value: Math.min(aqiValue, maxAQI),
      fill: aqiInfo.color.includes('green') ? '#00E400' :
            aqiInfo.color.includes('yellow') ? '#FFFF00' :
            aqiInfo.color.includes('orange') ? '#FF7E00' :
            aqiInfo.color.includes('red') && !aqiInfo.color.includes('dark') ? '#FF0000' :
            aqiInfo.color.includes('purple') ? '#8F3F97' : '#7E0023',
    },
  ];

  return (
    <div className="animate-slide-up">
      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6">Air Quality</h3>
      
      <div className="flex flex-col items-center">
        {/* Gauge Chart */}
        <div className="relative">
          <RadialBarChart
            width={300}
            height={180}
            cx={150}
            cy={150}
            innerRadius={80}
            outerRadius={130}
            barSize={20}
            data={chartData}
            startAngle={180}
            endAngle={0}
          >
            <PolarAngleAxis
              type="number"
              domain={[0, maxAQI]}
              angleAxisId={0}
              tick={false}
            />
            <RadialBar
              background={{ fill: '#e5e7eb' }}
              dataKey="value"
              cornerRadius={10}
            />
          </RadialBarChart>
          
          {/* Center AQI value */}
          <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ top: '40%' }}>
            <p className={`text-5xl md:text-6xl font-bold ${aqiInfo.color}`}>
              {aqiValue}
            </p>
            <p className={`text-lg font-bold mt-1 ${aqiInfo.color}`}>
              {aqiInfo.level}
            </p>
          </div>
        </div>

        {/* AQI Scale Legend */}
        <div className="grid grid-cols-3 gap-2 w-full max-w-md mt-4 text-xs">
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 rounded-full bg-[#00E400]"></div>
            <span className="text-gray-600 dark:text-gray-400">Good</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 rounded-full bg-[#FFFF00]"></div>
            <span className="text-gray-600 dark:text-gray-400">Moderate</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 rounded-full bg-[#FF7E00]"></div>
            <span className="text-gray-600 dark:text-gray-400">Unhealthy*</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 rounded-full bg-[#FF0000]"></div>
            <span className="text-gray-600 dark:text-gray-400">Unhealthy</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 rounded-full bg-[#8F3F97]"></div>
            <span className="text-gray-600 dark:text-gray-400">Very Unhealthy</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 rounded-full bg-[#7E0023]"></div>
            <span className="text-gray-600 dark:text-gray-400">Hazardous</span>
          </div>
        </div>

        {/* Pollutant details */}
        <div className="flex items-center space-x-8 mt-6 text-gray-700 dark:text-gray-300">
          <div className="text-center">
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1">PM2.5</p>
            <p className="text-2xl font-bold">{airQuality.pm2_5?.toFixed(1) || 'N/A'}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">μg/m³</p>
          </div>
          <div className="w-px h-12 bg-gray-300 dark:bg-gray-600"></div>
          <div className="text-center">
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1">PM10</p>
            <p className="text-2xl font-bold">{airQuality.pm10?.toFixed(1) || 'N/A'}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">μg/m³</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirQualityCard;
