import React from 'react';
import { Settings } from 'lucide-react';
import { TemperatureUnit, WindSpeedUnit } from '../services/storageService';

interface SettingsPanelProps {
  temperatureUnit: TemperatureUnit;
  windSpeedUnit: WindSpeedUnit;
  onTemperatureUnitChange: (unit: TemperatureUnit) => void;
  onWindSpeedUnitChange: (unit: WindSpeedUnit) => void;
  isOpen: boolean;
  onClose: () => void;
}

const SettingsPanel: React.FC<SettingsPanelProps> = ({
  temperatureUnit,
  windSpeedUnit,
  onTemperatureUnitChange,
  onWindSpeedUnitChange,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-50 animate-fade-in"
        onClick={onClose}
        aria-label="Close settings"
      />
      <div className="fixed right-4 top-20 bg-white rounded-2xl shadow-2xl z-50 p-6 w-80 animate-slide-up">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Settings className="w-5 h-5 text-weather-blue" />
            <h3 className="text-lg font-bold text-gray-800">Settings</h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
            aria-label="Close settings panel"
          >
            ✕
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Temperature Unit
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => onTemperatureUnitChange('celsius')}
                className={`py-2 px-4 rounded-xl font-medium transition-all ${
                  temperatureUnit === 'celsius'
                    ? 'bg-weather-blue text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                aria-pressed={temperatureUnit === 'celsius'}
              >
                Celsius (°C)
              </button>
              <button
                onClick={() => onTemperatureUnitChange('fahrenheit')}
                className={`py-2 px-4 rounded-xl font-medium transition-all ${
                  temperatureUnit === 'fahrenheit'
                    ? 'bg-weather-blue text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                aria-pressed={temperatureUnit === 'fahrenheit'}
              >
                Fahrenheit (°F)
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Wind Speed Unit
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => onWindSpeedUnitChange('kmh')}
                className={`py-2 px-4 rounded-xl font-medium transition-all ${
                  windSpeedUnit === 'kmh'
                    ? 'bg-weather-blue text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                aria-pressed={windSpeedUnit === 'kmh'}
              >
                km/h
              </button>
              <button
                onClick={() => onWindSpeedUnitChange('mph')}
                className={`py-2 px-4 rounded-xl font-medium transition-all ${
                  windSpeedUnit === 'mph'
                    ? 'bg-weather-blue text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                aria-pressed={windSpeedUnit === 'mph'}
              >
                mph
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsPanel;
