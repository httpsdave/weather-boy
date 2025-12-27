import { useState, useEffect, useCallback } from 'react';
import { WeatherData, Location } from '../types/weather';
import { weatherService } from '../services/weatherService';
import { storageService } from '../services/storageService';

export const useWeather = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentLocation, setCurrentLocation] = useState<Location | null>(null);

  type ReverseGeocodeResponse = {
    city?: string;
    locality?: string;
    principalSubdivision?: string;
    countryName?: string;
  };

  const reverseGeocode = useCallback(async (latitude: number, longitude: number) => {
    const response = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
    );

    if (!response.ok) {
      throw new Error(`Reverse geocoding failed: ${response.status}`);
    }

    const data = (await response.json()) as ReverseGeocodeResponse;
    const name = data.city || data.locality || data.principalSubdivision;

    return {
      name: name || 'Current Location',
      country: data.countryName || '',
      admin1: data.principalSubdivision,
    };
  }, []);

  const fetchWeather = useCallback(async (latitude: number, longitude: number) => {
    try {
      setLoading(true);
      setError(null);
      const data = await weatherService.getCurrentWeather(latitude, longitude);
      setWeatherData(data);
    } catch (err) {
      // Try to load cached data if online fetch fails
      const cached = weatherService.getCachedWeather();
      if (cached && cached.location.latitude === latitude && cached.location.longitude === longitude) {
        setWeatherData(cached.data);
        setError('Showing cached data. Unable to fetch latest updates.');
      } else {
        setError('Failed to fetch weather data. Please try again.');
      }
      console.error('Weather fetch error:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleLocationSelect = useCallback((location: Location) => {
    setCurrentLocation(location);
    fetchWeather(location.latitude, location.longitude);
    storageService.savePreferences({ lastLocation: location });
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
      async (position) => {
        const { latitude, longitude } = position.coords;
        
        // Set temporary location while fetching name
        setCurrentLocation({
          name: 'Current Location',
          latitude,
          longitude,
          country: '',
        });
        
        // Fetch weather first
        await fetchWeather(latitude, longitude);
        
        // Then do reverse geocoding to get actual location name
        try {
          const resolved = await reverseGeocode(latitude, longitude);
          const actualLocation = {
            name: resolved.name,
            latitude,
            longitude,
            country: resolved.country,
            admin1: resolved.admin1,
          };
          setCurrentLocation(actualLocation);
          storageService.savePreferences({ lastLocation: actualLocation });
        } catch (err) {
          console.error('Reverse geocoding error:', err);
          // Keep 'Current Location' as fallback
        }
      },
      (err) => {
        setError('Unable to retrieve your location. Please search for a city.');
        setLoading(false);
        console.error('Geolocation error:', err);
      }
    );
  }, [fetchWeather, reverseGeocode]);

  useEffect(() => {
    // Try to load last location from storage
    const preferences = storageService.getPreferences();
    if (preferences.lastLocation) {
      setCurrentLocation(preferences.lastLocation);
      fetchWeather(preferences.lastLocation.latitude, preferences.lastLocation.longitude);
    } else {
      // Fall back to current location
      useCurrentLocation();
    }
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
