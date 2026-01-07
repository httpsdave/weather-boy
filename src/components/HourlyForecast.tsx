import React from 'react';
import { format, parseISO } from 'date-fns';
import { Wind, AlertTriangle, Droplets, Eye } from 'lucide-react';
import { HourlyWeather } from '../types/weather';
import { weatherService } from '../services/weatherService';
import { storageService, TemperatureUnit, WindSpeedUnit } from '../services/storageService';

interface HourlyForecastProps {
  hourly: HourlyWeather;
  temperatureUnit: TemperatureUnit;
  windSpeedUnit: WindSpeedUnit;
}

const HourlyForecast: React.FC<HourlyForecastProps> = ({ hourly, temperatureUnit, windSpeedUnit }) => {
  const next48Hours = hourly.time.slice(0, 48);
  const [showExtended, setShowExtended] = React.useState(false);
  const displayHours = showExtended ? next48Hours : hourly.time.slice(0, 24);
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = React.useState(false);
  const [startX, setStartX] = React.useState(0);
  const [scrollLeft, setScrollLeft] = React.useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  React.useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const wheelHandler = (e: WheelEvent) => {
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    };

    container.addEventListener('wheel', wheelHandler, { passive: false });
    return () => container.removeEventListener('wheel', wheelHandler);
  }, []);

  return (
    <div className="animate-slide-up">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">Hourly Forecast</h3>
        <button
          onClick={() => setShowExtended(!showExtended)}
          className="px-4 py-2 text-sm bg-gradient-to-r from-weather-blue to-sky-vibrant text-white rounded-full hover:shadow-lg transition-all duration-200 font-semibold active:scale-95"
        >
          {showExtended ? '24h' : '48h'}
        </button>
      </div>
      <div 
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        className="overflow-x-auto pb-3 -mx-6 md:mx-0 px-6 md:px-0 select-none cursor-grab active:cursor-grabbing scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="flex space-x-4 min-w-max">{displayHours.map((time, index) => {
            const weatherInfo = weatherService.getWeatherDescription(
              hourly.weather_code[index],
              true
            );
            const temp = storageService.convertTemperature(hourly.temperature_2m[index], temperatureUnit);
            const feelsLike = storageService.convertTemperature(hourly.apparent_temperature[index], temperatureUnit);
            const windSpeed = storageService.convertWindSpeed(hourly.wind_speed_10m[index], windSpeedUnit);
            const windGust = storageService.convertWindSpeed(hourly.wind_gusts_10m[index], windSpeedUnit);
            const precipProb = hourly.precipitation_probability[index];
            const precipAmount = hourly.precipitation[index];
            const visibility = hourly.visibility[index] / 1000; // Convert to km
            
            return (
              <div
                key={time}
                className="flex flex-col items-center bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-gray-700 dark:to-gray-600 p-4 min-w-[110px] shadow-sm border border-blue-200 dark:border-gray-600 hover:shadow-md hover:-translate-y-1 transition-all duration-200 select-none animate-card-pop"
                style={{ animationDelay: `${index * 0.03}s` }}
              >
                <p className="text-sm font-bold text-gray-700 dark:text-gray-200 mb-3 pointer-events-none">
                  {format(parseISO(time), 'HH:mm')}
                </p>
                <div className="text-3xl my-3 pointer-events-none">{weatherInfo.icon}</div>
                <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-400 pointer-events-none">
                  {Math.round(temp)}°
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 pointer-events-none">
                  Feels {Math.round(feelsLike)}°
                </p>
                {precipAmount > 0 && (
                  <div className="flex items-center space-x-1 text-xs text-blue-600 dark:text-blue-400 mt-2 font-semibold bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded-lg pointer-events-none">
                    <Droplets className="w-3 h-3" />
                    <span>{precipAmount.toFixed(1)}mm</span>
                  </div>
                )}
                {precipProb > 0 && precipAmount === 0 && (
                  <div className="flex items-center space-x-1 text-xs text-blue-500 dark:text-blue-400 mt-2 pointer-events-none">
                    <Droplets className="w-3 h-3" />
                    <span>{Math.round(precipProb)}%</span>
                  </div>
                )}
                <div className="flex flex-col items-center text-xs text-gray-600 dark:text-gray-400 mt-2 space-y-1 pointer-events-none">
                  <div className="flex items-center space-x-1">
                    <Wind className="w-3 h-3" />
                    <span className="font-medium">{Math.round(windSpeed)} {storageService.getWindSpeedSymbol(windSpeedUnit)}</span>
                  </div>
                  {windGust > windSpeed + (windSpeedUnit === 'mph' ? 3.1 : 5) && (
                    <div className="flex items-center space-x-1 text-orange-600 dark:text-orange-400 font-semibold bg-orange-100 dark:bg-orange-900/30 px-2 py-0.5 rounded">
                      <AlertTriangle className="w-3 h-3" />
                      <span>Gust {Math.round(windGust)}</span>
                    </div>
                  )}
                  {visibility < 10 && (
                    <div className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 font-medium">
                      <Eye className="w-3 h-3" />
                      <span>{visibility.toFixed(1)}km</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HourlyForecast;
