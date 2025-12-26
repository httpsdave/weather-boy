export interface CurrentWeather {
  time: string;
  temperature_2m: number;
  apparent_temperature: number;
  wind_speed_10m: number;
  wind_direction_10m: number;
  weather_code: number;
  is_day: number;
  uv_index: number;
  pressure_msl: number;
  precipitation: number;
  wind_gusts_10m: number;
  visibility: number;
  cloud_cover: number;
  dew_point_2m: number;
}

export interface HourlyWeather {
  time: string[];
  temperature_2m: number[];
  apparent_temperature: number[];
  relative_humidity_2m: number[];
  wind_speed_10m: number[];
  wind_gusts_10m: number[];
  weather_code: number[];
  precipitation_probability: number[];
  precipitation: number[];
  cloud_cover: number[];
  visibility: number[];
  dew_point_2m: number[];
}

export interface DailyWeather {
  time: string[];
  weather_code: number[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  precipitation_probability_max: number[];
  precipitation_sum: number[];
  sunrise: string[];
  sunset: string[];
  uv_index_max: number[];
  wind_gusts_10m_max: number[];
}

export interface WeatherData {
  current: CurrentWeather;
  hourly: HourlyWeather;
  daily: DailyWeather;
  timezone: string;
}

export interface AirQuality {
  european_aqi: number;
  us_aqi: number;
  pm10: number;
  pm2_5: number;
}

export interface Location {
  name: string;
  latitude: number;
  longitude: number;
  country: string;
  admin1?: string;
}

export interface GeocodingResult {
  results: Location[];
}
