import React, { useEffect, useState } from 'react';
import { Wind } from 'lucide-react';
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
      <div className="bg-white dark:bg-gray-800 rounded-[28px] p-6 md:p-8 shadow-card animate-pulse">
        <div className="h-6 bg-gradient-to-r from-gray-300 to-gray-200 dark:from-gray-600 dark:to-gray-700 rounded-full w-32 mb-4"></div>
        <div className="h-24 bg-gradient-to-br from-gray-200 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl"></div>
      </div>
    );
  }

  if (!airQuality) return null;

  const aqiInfo = weatherService.getAQILevel(airQuality.us_aqi);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-[28px] p-6 md:p-8 shadow-card hover:shadow-card-hover transition-shadow duration-300 animate-slide-up">
      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-blue-500/20 p-2 rounded-xl">
          <Wind className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">Air Quality</h3>
      </div>
      
      <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-6 shadow-inner-glow">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-sm font-bold text-gray-600 dark:text-gray-300 mb-2 uppercase tracking-wide">US AQI</p>
            <p className={`text-5xl md:text-6xl font-bold ${aqiInfo.color}`}>
              {Math.round(airQuality.us_aqi)}
            </p>
          </div>
          <div className="text-right">
            <p className={`text-xl font-bold ${aqiInfo.color}`}>{aqiInfo.level}</p>
            <p className="text-xs text-gray-600 dark:text-gray-300 mt-2 max-w-[120px]">{aqiInfo.description}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-card hover:shadow-card-hover transition-shadow">
            <p className="text-xs font-bold text-gray-600 dark:text-gray-300 mb-2 uppercase tracking-wide">PM2.5</p>
            <p className="text-xl font-bold text-gray-900 dark:text-white">{airQuality.pm2_5?.toFixed(1) || 'N/A'}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">μg/m³</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-card hover:shadow-card-hover transition-shadow">
            <p className="text-xs font-bold text-gray-600 dark:text-gray-300 mb-2 uppercase tracking-wide">PM10</p>
            <p className="text-xl font-bold text-gray-900 dark:text-white">{airQuality.pm10?.toFixed(1) || 'N/A'}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">μg/m³</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirQualityCard;
