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
      <div className="bg-white rounded-3xl p-6 shadow-xl animate-pulse">
        <div className="h-6 bg-gray-300 rounded w-32 mb-4"></div>
        <div className="h-20 bg-gray-200 rounded-2xl"></div>
      </div>
    );
  }

  if (!airQuality) return null;

  const aqiInfo = weatherService.getAQILevel(airQuality.us_aqi);

  return (
    <div className="bg-white rounded-3xl p-6 shadow-xl animate-slide-up">
      <div className="flex items-center space-x-2 mb-4">
        <Wind className="w-5 h-5 text-weather-blue" />
        <h3 className="text-xl font-bold text-gray-800">Air Quality</h3>
      </div>
      
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm text-gray-600 mb-1">US AQI</p>
            <p className={`text-4xl font-bold ${aqiInfo.color}`}>
              {Math.round(airQuality.us_aqi)}
            </p>
          </div>
          <div className="text-right">
            <p className={`text-lg font-bold ${aqiInfo.color}`}>{aqiInfo.level}</p>
            <p className="text-xs text-gray-600 mt-1">{aqiInfo.description}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mt-4">
          <div className="bg-white rounded-xl p-3">
            <p className="text-xs text-gray-600 mb-1">PM2.5</p>
            <p className="text-lg font-bold text-gray-800">{airQuality.pm2_5?.toFixed(1) || 'N/A'} μg/m³</p>
          </div>
          <div className="bg-white rounded-xl p-3">
            <p className="text-xs text-gray-600 mb-1">PM10</p>
            <p className="text-lg font-bold text-gray-800">{airQuality.pm10?.toFixed(1) || 'N/A'} μg/m³</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirQualityCard;
