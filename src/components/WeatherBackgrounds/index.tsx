// Weather Background Illustrations
// Flat Design 2.0 style weather backgrounds for each weather condition

export { ClearSkyDay, ClearSkyNight } from './ClearSky';
export { MainlyClearDay, MainlyClearNight } from './MainlyClear';
export { PartlyCloudy, Overcast } from './CloudyWeather';
export { Foggy } from './Foggy';
export { LightDrizzle, ModerateRain, HeavyRain } from './RainyWeather';
export { LightSnow, ModerateSnow, HeavySnow } from './SnowyWeather';
export { LightShowers, HeavyShowers, Thunderstorm } from './StormsAndShowers';

import React from 'react';
import { ClearSkyDay, ClearSkyNight } from './ClearSky';
import { MainlyClearDay, MainlyClearNight } from './MainlyClear';
import { PartlyCloudy, Overcast } from './CloudyWeather';
import { Foggy } from './Foggy';
import { LightDrizzle, ModerateRain, HeavyRain } from './RainyWeather';
import { LightSnow, ModerateSnow, HeavySnow } from './SnowyWeather';
import { LightShowers, HeavyShowers, Thunderstorm } from './StormsAndShowers';

/**
 * Get the appropriate weather background component based on WMO weather code
 * @param weatherCode - WMO Weather interpretation code (0-99)
 * @param isDay - Whether it's daytime (true) or nighttime (false)
 * @returns React component for the weather background
 */
export function getWeatherBackground(
  weatherCode: number,
  isDay: boolean = true
): React.FC<{ className?: string }> {
  // Clear sky (0)
  if (weatherCode === 0) {
    return isDay ? ClearSkyDay : ClearSkyNight;
  }
  
  // Mainly clear (1)
  if (weatherCode === 1) {
    return isDay ? MainlyClearDay : MainlyClearNight;
  }
  
  // Partly cloudy (2)
  if (weatherCode === 2) {
    return PartlyCloudy;
  }
  
  // Overcast (3)
  if (weatherCode === 3) {
    return Overcast;
  }
  
  // Fog (45, 48)
  if (weatherCode === 45 || weatherCode === 48) {
    return Foggy;
  }
  
  // Drizzle (51, 53, 55)
  if (weatherCode === 51 || weatherCode === 53 || weatherCode === 55) {
    return LightDrizzle;
  }
  
  // Rain (61 = slight, 63 = moderate, 65 = heavy)
  if (weatherCode === 61) {
    return LightDrizzle;
  }
  if (weatherCode === 63) {
    return ModerateRain;
  }
  if (weatherCode === 65) {
    return HeavyRain;
  }
  
  // Snow (71 = light, 73 = moderate, 75 = heavy, 77 = grains)
  if (weatherCode === 71) {
    return LightSnow;
  }
  if (weatherCode === 73) {
    return ModerateSnow;
  }
  if (weatherCode === 75 || weatherCode === 77) {
    return HeavySnow;
  }
  
  // Rain showers (80 = light, 81 = moderate, 82 = violent)
  if (weatherCode === 80) {
    return LightShowers;
  }
  if (weatherCode === 81 || weatherCode === 82) {
    return HeavyShowers;
  }
  
  // Snow showers (85 = light, 86 = heavy)
  if (weatherCode === 85) {
    return LightSnow;
  }
  if (weatherCode === 86) {
    return ModerateSnow;
  }
  
  // Thunderstorm (95, 96, 99)
  if (weatherCode === 95 || weatherCode === 96 || weatherCode === 99) {
    return Thunderstorm;
  }
  
  // Default to clear sky for unknown codes
  return isDay ? ClearSkyDay : ClearSkyNight;
}
