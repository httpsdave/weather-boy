import { useState, useEffect, useCallback } from 'react';
import { WeatherData, Location } from '../types/weather';
import { weatherService } from '../services/weatherService';

export const useWeather = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentLocation, setCurrentLocation] = useState<Location | null>(null);

  const fetchWeather = useCallback(async (latitude: number, longitude: number) => {
    try {
      setLoading(true);
      setError(null);
      const data = await weatherService.getCurrentWeather(latitude, longitude);
      setWeatherData(data);
    } catch (err) {
      setError('Failed to fetch weather data. Please try again.');
      console.error('Weather fetch error:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleLocationSelect = useCallback((location: Location) => {
    setCurrentLocation(location);
    fetchWeather(location.latitude, location.longitude);
  }, [fetchWeather]);

  const useCurrentLocation = useCallback(() => {
    setLoading(true);
    setError(null);

    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser.');
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({
          name: 'Current Location',
          latitude,
          longitude,
          country: '',
        });
        fetchWeather(latitude, longitude);
      },
      (err) => {
        setError('Unable to retrieve your location. Please search for a city.');
        setLoading(false);
        console.error('Geolocation error:', err);
      }
    );
  }, [fetchWeather]);

  useEffect(() => {
    // On initial load, try to use current location
    useCurrentLocation();
  }, []);

  return {
    weatherData,
    loading,
    error,
    currentLocation,
    handleLocationSelect,
    useCurrentLocation,
    retryFetch: () => {
      if (currentLocation) {
        fetchWeather(currentLocation.latitude, currentLocation.longitude);
      } else {
        useCurrentLocation();
      }
    },
  };
};
