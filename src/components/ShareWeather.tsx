import React from 'react';
import { Share2 } from 'lucide-react';
import { CurrentWeather, Location } from '../types/weather';
import { storageService, TemperatureUnit } from '../services/storageService';
import { weatherService } from '../services/weatherService';

interface ShareWeatherProps {
  weather: CurrentWeather;
  location: Location;
  temperatureUnit: TemperatureUnit;
}

const ShareWeather: React.FC<ShareWeatherProps> = ({ weather, location, temperatureUnit }) => {
  const handleShare = async () => {
    const temp = storageService.convertTemperature(weather.temperature_2m, temperatureUnit);
    const tempSymbol = storageService.getTemperatureSymbol(temperatureUnit);
    const weatherInfo = weatherService.getWeatherDescription(weather.weather_code, weather.is_day === 1);
    
    const shareText = `${weatherInfo.icon} ${Math.round(temp)}${tempSymbol} in ${location.name}\n${weatherInfo.description}\n\nCheck it out on Weather Boy!`;
    const shareUrl = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title: `Weather in ${location.name}`,
          text: shareText,
          url: shareUrl,
        });
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          console.error('Share failed:', err);
          fallbackShare(shareText);
        }
      }
    } else {
      fallbackShare(shareText);
    }
  };

  const fallbackShare = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Weather info copied to clipboard!');
    }).catch(() => {
      alert('Unable to share. Please copy manually:\n\n' + text);
    });
  };

  return (
    <button
      onClick={handleShare}
      className="p-3 hover:bg-gray-100 rounded-xl transition-colors"
      aria-label="Share weather"
      title="Share weather"
    >
      <Share2 className="w-6 h-6 text-gray-600" />
    </button>
  );
};

export default ShareWeather;
