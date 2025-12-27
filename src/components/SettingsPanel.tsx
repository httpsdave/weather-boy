import React from 'react';
import { Settings } from 'lucide-react';
import { TemperatureUnit, WindSpeedUnit, PrecipitationUnit } from '../services/storageService';

interface SettingsPanelProps {
  temperatureUnit: TemperatureUnit;
  windSpeedUnit: WindSpeedUnit;
  precipitationUnit: PrecipitationUnit;
  onTemperatureUnitChange: (unit: TemperatureUnit) => void;
  onWindSpeedUnitChange: (unit: WindSpeedUnit) => void;
  onPrecipitationUnitChange: (unit: PrecipitationUnit) => void;
  isOpen: boolean;
  onClose: () => void;
}

const SettingsPanel: React.FC<SettingsPanelProps> = ({
  temperatureUnit,
  windSpeedUnit,
  precipitationUnit,
  onTemperatureUnitChange,
  onWindSpeedUnitChange,
  onPrecipitationUnitChange,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed right-2 md:right-4 top-16 md:top-20 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl z-50 p-4 md:p-6 w-[calc(100%-1rem)] max-w-xs md:max-w-sm origin-top-right animate-dropdown">
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <div className="flex items-center space-x-2">
            <Settings className="w-4 h-4 md:w-5 md:h-5 text-weather-blue" />
            <h3 className="text-base md:text-lg font-bold text-gray-800 dark:text-white">Settings</h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 p-1"
            aria-label="Close settings panel"
          >
            ✕
          </button>
        </div>

        <div className="space-y-4 md:space-y-6">
          <div>
            <label className="block text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 md:mb-3">
              Temperature Unit
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => onTemperatureUnitChange('celsius')}
                className={`py-2 px-3 md:px-4 rounded-xl text-sm md:text-base font-medium transition-all active:scale-95 ${
                  temperatureUnit === 'celsius'
                    ? 'bg-weather-blue text-white shadow-md'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
                aria-pressed={temperatureUnit === 'celsius'}
              >
                Celsius (°C)
              </button>
              <button
                onClick={() => onTemperatureUnitChange('fahrenheit')}
                className={`py-2 px-3 md:px-4 rounded-xl text-sm md:text-base font-medium transition-all active:scale-95 ${
                  temperatureUnit === 'fahrenheit'
                    ? 'bg-weather-blue text-white shadow-md'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
                aria-pressed={temperatureUnit === 'fahrenheit'}
              >
                Fahrenheit (°F)
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 md:mb-3">
              Wind Speed Unit
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => onWindSpeedUnitChange('kmh')}
                className={`py-2 px-3 md:px-4 rounded-xl text-sm md:text-base font-medium transition-all active:scale-95 ${
                  windSpeedUnit === 'kmh'
                    ? 'bg-weather-blue text-white shadow-md'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
                aria-pressed={windSpeedUnit === 'kmh'}
              >
                km/h
              </button>
              <button
                onClick={() => onWindSpeedUnitChange('mph')}
                className={`py-2 px-3 md:px-4 rounded-xl text-sm md:text-base font-medium transition-all active:scale-95 ${
                  windSpeedUnit === 'mph'
                    ? 'bg-weather-blue text-white shadow-md'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
                aria-pressed={windSpeedUnit === 'mph'}
              >
                mph
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 md:mb-3">
              Precipitation Unit
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => onPrecipitationUnitChange('mm')}
                className={`py-2 px-3 md:px-4 rounded-xl text-sm md:text-base font-medium transition-all active:scale-95 ${
                  precipitationUnit === 'mm'
                    ? 'bg-weather-blue text-white shadow-md'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
                aria-pressed={precipitationUnit === 'mm'}
              >
                Millimeters (mm)
              </button>
              <button
                onClick={() => onPrecipitationUnitChange('inches')}
                className={`py-2 px-3 md:px-4 rounded-xl text-sm md:text-base font-medium transition-all active:scale-95 ${
                  precipitationUnit === 'inches'
                    ? 'bg-weather-blue text-white shadow-md'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
                aria-pressed={precipitationUnit === 'inches'}
              >
                Inches (in)
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default SettingsPanel;
