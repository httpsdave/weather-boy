import React, { useState, useEffect } from 'react';
import { Bell, X, AlertTriangle } from 'lucide-react';
import { WeatherData } from '../types/weather';
import { useToast } from './Toast';

interface WeatherAlert {
  id: string;
  type: 'temperature' | 'precipitation' | 'wind' | 'uv';
  condition: 'above' | 'below';
  threshold: number;
  enabled: boolean;
}

interface WeatherAlertsProps {
  weather: WeatherData | null;
}

const defaultAlerts: WeatherAlert[] = [
  { id: '1', type: 'temperature', condition: 'above', threshold: 35, enabled: false },
  { id: '2', type: 'temperature', condition: 'below', threshold: 0, enabled: false },
  { id: '3', type: 'precipitation', condition: 'above', threshold: 5, enabled: false },
  { id: '4', type: 'wind', condition: 'above', threshold: 50, enabled: false },
  { id: '5', type: 'uv', condition: 'above', threshold: 7, enabled: false },
];

const WeatherAlerts: React.FC<WeatherAlertsProps> = ({ weather }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [alerts, setAlerts] = useState<WeatherAlert[]>([]);
  const { showToast } = useToast();

  useEffect(() => {
    const saved = localStorage.getItem('weatherboy_alerts');
    if (saved) {
      setAlerts(JSON.parse(saved));
    } else {
      setAlerts(defaultAlerts);
    }
  }, []);

  useEffect(() => {
    if (alerts.length > 0) {
      localStorage.setItem('weatherboy_alerts', JSON.stringify(alerts));
    }
  }, [alerts]);

  useEffect(() => {
    if (!weather) return;

    alerts.forEach((alert) => {
      if (!alert.enabled) return;

      let value = 0;
      let label = '';

      switch (alert.type) {
        case 'temperature':
          value = weather.current.temperature_2m;
          label = 'Temperature';
          break;
        case 'precipitation':
          value = weather.hourly.precipitation[0] || 0;
          label = 'Precipitation';
          break;
        case 'wind':
          value = weather.current.wind_speed_10m;
          label = 'Wind Speed';
          break;
        case 'uv':
          value = weather.daily.uv_index_max[0];
          label = 'UV Index';
          break;
      }

      const triggered =
        alert.condition === 'above'
          ? value > alert.threshold
          : value < alert.threshold;

      if (triggered) {
        showToast(
          `⚠️ ${label} is ${alert.condition} ${alert.threshold}! Current: ${Math.round(value)}`,
          'error'
        );
      }
    });
  }, [weather, alerts, showToast]);

  const toggleAlert = (id: string) => {
    setAlerts(alerts.map(a => a.id === id ? { ...a, enabled: !a.enabled } : a));
  };

  const updateThreshold = (id: string, threshold: number) => {
    setAlerts(alerts.map(a => a.id === id ? { ...a, threshold } : a));
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 right-4 md:bottom-6 md:right-24 bg-orange-500 hover:bg-orange-600 text-white p-3 md:p-4 rounded-full shadow-lg z-40 transition-colors"
        aria-label="Weather Alerts"
      >
        <Bell className="w-5 h-5 md:w-6 md:h-6" />
        {alerts.some(a => a.enabled) && (
          <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
        )}
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-50 animate-fade-in"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed inset-x-2 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 top-20 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl z-50 p-4 md:p-6 w-auto md:w-[600px] max-h-[80vh] overflow-y-auto animate-slide-up">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="w-5 h-5 text-orange-500" />
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">Custom Weather Alerts</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              {alerts.map((alert) => (
                <div
                  key={alert.id}
                  className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl"
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <input
                        type="checkbox"
                        checked={alert.enabled}
                        onChange={() => toggleAlert(alert.id)}
                        className="w-4 h-4 rounded"
                      />
                      <span className="font-medium text-gray-800 dark:text-white capitalize">
                        {alert.type}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <select
                        value={alert.condition}
                        disabled
                        className="px-2 py-1 border dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                      >
                        <option value="above">Above</option>
                        <option value="below">Below</option>
                      </select>
                      <input
                        type="number"
                        value={alert.threshold}
                        onChange={(e) => updateThreshold(alert.id, parseFloat(e.target.value))}
                        className="w-20 px-2 py-1 border dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                      />
                      <span className="text-gray-500 dark:text-gray-400">
                        {alert.type === 'temperature' && '°C'}
                        {alert.type === 'precipitation' && 'mm'}
                        {alert.type === 'wind' && 'km/h'}
                        {alert.type === 'uv' && ''}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-blue-50 dark:bg-gray-700 rounded-xl text-sm text-gray-600 dark:text-gray-300">
              <p className="font-medium mb-1">💡 How it works:</p>
              <p>Enable alerts to get notifications when weather conditions meet your thresholds. Alerts are checked when weather data updates.</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default WeatherAlerts;
