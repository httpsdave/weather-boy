import React from 'react';

const WeatherSkeleton: React.FC = () => {
  return (
    <div className="space-y-6 animate-pulse">
      {/* Current Weather Card Skeleton */}
      <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl p-6 md:p-8 h-96 shadow-2xl">
        <div className="flex flex-col items-center">
          <div className="h-6 bg-gray-400 rounded-full w-48 mb-4"></div>
          <div className="h-32 w-32 bg-gray-400 rounded-full my-4"></div>
          <div className="h-16 bg-gray-400 rounded-full w-32 mb-4"></div>
          <div className="h-6 bg-gray-400 rounded-full w-40 mb-6"></div>
          <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
            <div className="bg-white/30 backdrop-blur-sm rounded-xl p-4 h-20"></div>
            <div className="bg-white/30 backdrop-blur-sm rounded-xl p-4 h-20"></div>
          </div>
        </div>
      </div>

      {/* Weather Details Skeleton */}
      <div className="bg-white rounded-3xl p-6 shadow-xl">
        <div className="h-6 bg-gray-300 rounded w-40 mb-4"></div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="bg-gray-100 rounded-2xl p-4 h-24">
              <div className="h-4 bg-gray-300 rounded w-20 mb-2"></div>
              <div className="h-6 bg-gray-300 rounded w-24"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Hourly Forecast Skeleton */}
      <div className="bg-white rounded-3xl p-6 shadow-xl">
        <div className="h-6 bg-gray-300 rounded w-40 mb-4"></div>
        <div className="overflow-x-auto pb-2">
          <div className="flex space-x-4 min-w-max">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="bg-gray-100 rounded-2xl p-4 min-w-[80px] h-32">
                <div className="h-4 bg-gray-300 rounded w-12 mb-2 mx-auto"></div>
                <div className="h-8 w-8 bg-gray-300 rounded-full my-2 mx-auto"></div>
                <div className="h-6 bg-gray-300 rounded w-10 mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Daily Forecast Skeleton */}
      <div className="bg-white rounded-3xl p-6 shadow-xl">
        <div className="h-6 bg-gray-300 rounded w-40 mb-4"></div>
        <div className="space-y-3">
          {[...Array(7)].map((_, i) => (
            <div key={i} className="bg-gray-100 rounded-2xl p-4 h-16 flex items-center justify-between">
              <div className="flex items-center space-x-4 flex-1">
                <div className="h-4 bg-gray-300 rounded w-24"></div>
                <div className="h-8 w-8 bg-gray-300 rounded-full"></div>
                <div className="h-4 bg-gray-300 rounded w-32 hidden md:block"></div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="h-6 bg-gray-300 rounded w-12"></div>
                <div className="h-6 bg-gray-300 rounded w-12"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherSkeleton;
