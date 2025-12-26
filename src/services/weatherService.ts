import { WeatherData, GeocodingResult, AirQuality } from '../types/weather';

const BASE_URL = 'https://api.open-meteo.com/v1';
const GEOCODING_URL = 'https://geocoding-api.open-meteo.com/v1';
const AIR_QUALITY_URL = 'https://air-quality-api.open-meteo.com/v1';

export const weatherService = {
  async getCurrentWeather(latitude: number, longitude: number): Promise<WeatherData> {
    const params = new URLSearchParams({
      latitude: latitude.toString(),
      longitude: longitude.toString(),
      current: 'temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m,wind_direction_10m,is_day,uv_index,pressure_msl,precipitation,wind_gusts_10m,visibility,cloud_cover,dew_point_2m',
      hourly: 'temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,wind_gusts_10m,weather_code,precipitation_probability,precipitation,cloud_cover,visibility,dew_point_2m',
      daily: 'weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,precipitation_sum,sunrise,sunset,uv_index_max,wind_gusts_10m_max',
      timezone: 'auto',
      forecast_days: '7',
      forecast_hours: '48',
    });

    const response = await fetch(`${BASE_URL}/forecast?${params}`);
    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }

    const data = await response.json();
    
    // Cache the data for offline use
    try {
      localStorage.setItem('weatherboy_cached_data', JSON.stringify({
        data,
        timestamp: Date.now(),
        location: { latitude, longitude }
      }));
    } catch (e) {
      console.warn('Failed to cache weather data:', e);
    }

    return data;
  },

  getCachedWeather(): { data: WeatherData; timestamp: number; location: { latitude: number; longitude: number } } | null {
    try {
      const cached = localStorage.getItem('weatherboy_cached_data');
      if (cached) {
        return JSON.parse(cached);
      }
    } catch (e) {
      console.warn('Failed to retrieve cached data:', e);
    }
    return null;
  },

  async searchLocation(query: string): Promise<GeocodingResult> {
    const params = new URLSearchParams({
      name: query,
      count: '5',
      language: 'en',
      format: 'json',
    });

    const response = await fetch(`${GEOCODING_URL}/search?${params}`);
    if (!response.ok) {
      throw new Error('Failed to search location');
    }

    return response.json();
  },

  getWeatherDescription(code: number, isDay: boolean = true): { description: string; icon: string } {
    const weatherCodes: Record<number, { description: string; dayIcon: string; nightIcon: string }> = {
      0: { description: 'Clear sky', dayIcon: '☀️', nightIcon: '🌙' },
      1: { description: 'Mainly clear', dayIcon: '🌤️', nightIcon: '🌙' },
      2: { description: 'Partly cloudy', dayIcon: '⛅', nightIcon: '☁️' },
      3: { description: 'Overcast', dayIcon: '☁️', nightIcon: '☁️' },
      45: { description: 'Foggy', dayIcon: '🌫️', nightIcon: '🌫️' },
      48: { description: 'Foggy', dayIcon: '🌫️', nightIcon: '🌫️' },
      51: { description: 'Light drizzle', dayIcon: '🌦️', nightIcon: '🌧️' },
      53: { description: 'Moderate drizzle', dayIcon: '🌦️', nightIcon: '🌧️' },
      55: { description: 'Dense drizzle', dayIcon: '🌧️', nightIcon: '🌧️' },
      61: { description: 'Slight rain', dayIcon: '🌧️', nightIcon: '🌧️' },
      63: { description: 'Moderate rain', dayIcon: '🌧️', nightIcon: '🌧️' },
      65: { description: 'Heavy rain', dayIcon: '⛈️', nightIcon: '⛈️' },
      71: { description: 'Light snow', dayIcon: '🌨️', nightIcon: '🌨️' },
      73: { description: 'Moderate snow', dayIcon: '❄️', nightIcon: '❄️' },
      75: { description: 'Heavy snow', dayIcon: '❄️', nightIcon: '❄️' },
      77: { description: 'Snow grains', dayIcon: '❄️', nightIcon: '❄️' },
      80: { description: 'Light showers', dayIcon: '🌦️', nightIcon: '🌧️' },
      81: { description: 'Moderate showers', dayIcon: '🌧️', nightIcon: '🌧️' },
      82: { description: 'Heavy showers', dayIcon: '⛈️', nightIcon: '⛈️' },
      85: { description: 'Light snow showers', dayIcon: '🌨️', nightIcon: '🌨️' },
      86: { description: 'Heavy snow showers', dayIcon: '❄️', nightIcon: '❄️' },
      95: { description: 'Thunderstorm', dayIcon: '⛈️', nightIcon: '⛈️' },
      96: { description: 'Thunderstorm with hail', dayIcon: '⛈️', nightIcon: '⛈️' },
      99: { description: 'Thunderstorm with hail', dayIcon: '⛈️', nightIcon: '⛈️' },
    };

    const weather = weatherCodes[code] || weatherCodes[0];
    return {
      description: weather.description,
      icon: isDay ? weather.dayIcon : weather.nightIcon,
    };
  },

  getWindDirection(degrees: number): string {
    const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
    const index = Math.round(degrees / 22.5) % 16;
    return directions[index];
  },

  async getAirQuality(latitude: number, longitude: number): Promise<AirQuality | null> {
    try {
      const params = new URLSearchParams({
        latitude: latitude.toString(),
        longitude: longitude.toString(),
        current: 'european_aqi,us_aqi,pm10,pm2_5',
      });

      const response = await fetch(`${AIR_QUALITY_URL}/air-quality?${params}`);
      if (!response.ok) {
        return null;
      }

      const data = await response.json();
      return data.current;
    } catch (error) {
      console.error('Failed to fetch air quality:', error);
      return null;
    }
  },

  getAQILevel(aqi: number): { level: string; color: string; description: string } {
    if (aqi <= 50) {
      return { level: 'Good', color: 'text-green-600', description: 'Air quality is satisfactory' };
    } else if (aqi <= 100) {
      return { level: 'Moderate', color: 'text-yellow-600', description: 'Air quality is acceptable' };
    } else if (aqi <= 150) {
      return { level: 'Unhealthy for Sensitive Groups', color: 'text-orange-600', description: 'Sensitive groups may experience health effects' };
    } else if (aqi <= 200) {
      return { level: 'Unhealthy', color: 'text-red-600', description: 'Everyone may experience health effects' };
    } else if (aqi <= 300) {
      return { level: 'Very Unhealthy', color: 'text-purple-600', description: 'Health alert: everyone may experience serious effects' };
    } else {
      return { level: 'Hazardous', color: 'text-red-900', description: 'Health warning of emergency conditions' };
    }
  },
};
