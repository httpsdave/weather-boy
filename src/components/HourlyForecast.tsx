import React from 'react';
import { format, parseISO } from 'date-fns';
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

  return (
    <div className="bg-white dark:bg-gray-800 rounded-3xl p-4 md:p-6 shadow-xl animate-slide-up">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white">Hourly Forecast</h3>
        <button
          onClick={() => setShowExtended(!showExtended)}
          className="text-xs md:text-sm text-weather-blue hover:text-blue-600 font-medium"
        >
          {showExtended ? 'Show 24h' : 'Show 48h'}
        </button>
      </div>
      <div className="overflow-x-auto pb-2 -mx-4 md:mx-0 px-4 md:px-0">
        <div className="flex space-x-3 md:space-x-4 min-w-max">{displayHours.map((time, index) => {
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
                className="flex flex-col items-center bg-gray-50 dark:bg-gray-700 rounded-2xl p-3 md:p-4 min-w-[90px] md:min-w-[100px] hover:bg-blue-50 dark:hover:bg-gray-600 transition-colors active:scale-95"
              >
                <p className="text-xs md:text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
                  {format(parseISO(time), 'HH:mm')}
                </p>
                <div className="text-2xl md:text-3xl my-2">{weatherInfo.icon}</div>
                <p className="text-base md:text-lg font-bold text-gray-800 dark:text-white">
                  {Math.round(temp)}°
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Feels {Math.round(feelsLike)}°
                </p>
                {precipAmount > 0 && (
                  <div className="text-xs text-blue-600 mt-1 font-medium">
                    💧 {precipAmount.toFixed(1)}mm
                  </div>
                )}
                {precipProb > 0 && precipAmount === 0 && (
                  <div className="text-xs text-blue-500 mt-1">
                    💧 {Math.round(precipProb)}%
                  </div>
                )}
                <div className="flex flex-col items-center text-xs text-gray-500 dark:text-gray-400 mt-2 space-y-1">
                  <span>💨 {Math.round(windSpeed)}</span>
                  {windGust > windSpeed + 5 && (
                    <span className="text-orange-600 font-medium">
                      ⚠️ {Math.round(windGust)}
                    </span>
                  )}
                  {visibility < 10 && (
                    <span className="text-gray-600 dark:text-gray-300">
                      👁️ {visibility.toFixed(1)}km
                    </span>
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
