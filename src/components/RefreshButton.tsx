import React from 'react';
import { RefreshCw } from 'lucide-react';

interface RefreshButtonProps {
  onRefresh: () => void;
  isRefreshing: boolean;
}

const RefreshButton: React.FC<RefreshButtonProps> = ({ onRefresh, isRefreshing }) => {
  return (
    <button
      onClick={onRefresh}
      disabled={isRefreshing}
      className="bg-white/80 backdrop-blur-sm hover:bg-white text-weather-blue p-3 rounded-xl shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      aria-label="Refresh weather data"
      title="Refresh weather data"
    >
      <RefreshCw
        className={`w-5 h-5 ${isRefreshing ? 'animate-spin' : ''}`}
      />
    </button>
  );
};

export default RefreshButton;
