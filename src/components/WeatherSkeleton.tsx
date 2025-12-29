import React from 'react';

const WeatherSkeleton: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 animate-pulse">
      {/* Header Skeleton */}
      <div className="sticky top-0 z-40 backdrop-blur-md bg-white/10 dark:bg-gray-800/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div className="flex items-center space-x-2">
              <div className="w-24 h-24 bg-gray-300/50 dark:bg-gray-600/50 rounded-full"></div>
              <div className="h-8 w-32 bg-gray-300/50 dark:bg-gray-600/50 rounded-lg"></div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gray-300/50 dark:bg-gray-600/50 rounded-xl"></div>
              <div className="w-10 h-10 bg-gray-300/50 dark:bg-gray-600/50 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 space-y-8 max-w-7xl">
        {/* Search Bar Skeleton */}
        <div className="h-14 bg-white/50 dark:bg-gray-800/50 rounded-2xl w-full max-w-2xl mx-auto"></div>

        {/* Current Weather Skeleton */}
        <div className="text-center space-y-6 py-8">
          <div className="h-8 w-64 bg-gray-300/50 dark:bg-gray-600/50 rounded-lg mx-auto"></div>
          <div className="h-32 w-32 bg-gray-300/50 dark:bg-gray-600/50 rounded-full mx-auto"></div>
          <div className="h-20 w-40 bg-gray-300/50 dark:bg-gray-600/50 rounded-lg mx-auto"></div>
          <div className="h-6 w-48 bg-gray-300/50 dark:bg-gray-600/50 rounded-lg mx-auto"></div>
        </div>

        {/* Weather Details Grid Skeleton */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="bg-white/40 dark:bg-gray-800/40 rounded-2xl p-4 h-24 space-y-2">
              <div className="h-4 w-16 bg-gray-300/50 dark:bg-gray-600/50 rounded"></div>
              <div className="h-6 w-20 bg-gray-300/50 dark:bg-gray-600/50 rounded"></div>
            </div>
          ))}
        </div>

        {/* Hourly Forecast Skeleton */}
        <div className="space-y-4">
          <div className="h-7 w-48 bg-gray-300/50 dark:bg-gray-600/50 rounded-lg"></div>
          <div className="overflow-x-auto">
            <div className="flex space-x-3 pb-2">
              {[...Array(24)].map((_, i) => (
                <div key={i} className="flex-shrink-0 w-20 bg-white/40 dark:bg-gray-800/40 rounded-2xl p-3 h-32 space-y-2">
                  <div className="h-3 w-12 bg-gray-300/50 dark:bg-gray-600/50 rounded mx-auto"></div>
                  <div className="h-8 w-8 bg-gray-300/50 dark:bg-gray-600/50 rounded-full mx-auto"></div>
                  <div className="h-5 w-10 bg-gray-300/50 dark:bg-gray-600/50 rounded mx-auto"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Daily Forecast Skeleton */}
        <div className="space-y-4">
          <div className="h-7 w-48 bg-gray-300/50 dark:bg-gray-600/50 rounded-lg"></div>
          <div className="space-y-3">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="bg-white/40 dark:bg-gray-800/40 rounded-2xl p-4 h-20 flex items-center justify-between">
                <div className="h-5 w-24 bg-gray-300/50 dark:bg-gray-600/50 rounded"></div>
                <div className="flex items-center space-x-4">
                  <div className="h-5 w-12 bg-gray-300/50 dark:bg-gray-600/50 rounded"></div>
                  <div className="h-5 w-12 bg-gray-300/50 dark:bg-gray-600/50 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Temperature Chart Skeleton */}
        <div className="space-y-4">
          <div className="h-7 w-64 bg-gray-300/50 dark:bg-gray-600/50 rounded-lg"></div>
          <div className="space-y-3">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="flex items-center space-x-4">
                <div className="h-5 w-20 bg-gray-300/50 dark:bg-gray-600/50 rounded"></div>
                <div className="flex-1 h-8 bg-gray-300/50 dark:bg-gray-600/50 rounded-full"></div>
                <div className="h-5 w-12 bg-gray-300/50 dark:bg-gray-600/50 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherSkeleton;
