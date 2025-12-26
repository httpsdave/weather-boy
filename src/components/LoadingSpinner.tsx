import React from 'react';
import { Cloud } from 'lucide-react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Cloud className="w-16 h-16 text-weather-blue animate-pulse mb-4" />
      <p className="text-xl text-gray-600">Loading weather data...</p>
    </div>
  );
};

export default LoadingSpinner;
