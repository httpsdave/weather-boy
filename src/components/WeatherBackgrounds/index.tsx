// Weather Background Illustrations
// Flat Design 2.0 style weather backgrounds for each weather condition

export { ClearSkyDay, ClearSkyNight } from './ClearSky';
export { MainlyClearDay, MainlyClearNight } from './MainlyClear';
export { PartlyCloudy, PartlyCloudyDay, PartlyCloudyNight, Overcast, OvercastDay, OvercastNight } from './CloudyWeather';
export { Foggy, FoggyDay, FoggyNight } from './Foggy';
export { LightDrizzle, LightDrizzleDay, LightDrizzleNight, ModerateRain, ModerateRainDay, ModerateRainNight, HeavyRain, HeavyRainDay, HeavyRainNight } from './RainyWeather';
export { LightSnow, LightSnowDay, LightSnowNight, ModerateSnow, ModerateSnowDay, ModerateSnowNight, HeavySnow, HeavySnowDay, HeavySnowNight } from './SnowyWeather';
export { LightShowers, LightShowersDay, LightShowersNight, HeavyShowers, HeavyShowersDay, HeavyShowersNight, Thunderstorm, ThunderstormDay, ThunderstormNight } from './StormsAndShowers';

import React from 'react';
import { ClearSkyDay, ClearSkyNight } from './ClearSky';
import { MainlyClearDay, MainlyClearNight } from './MainlyClear';
import { PartlyCloudyDay, PartlyCloudyNight, OvercastDay, OvercastNight } from './CloudyWeather';
import { FoggyDay, FoggyNight } from './Foggy';
import { LightDrizzleDay, LightDrizzleNight, ModerateRainDay, ModerateRainNight, HeavyRainDay, HeavyRainNight } from './RainyWeather';
import { LightSnowDay, LightSnowNight, ModerateSnowDay, ModerateSnowNight, HeavySnowDay, HeavySnowNight } from './SnowyWeather';
import { LightShowersDay, LightShowersNight, HeavyShowersDay, HeavyShowersNight, ThunderstormDay, ThunderstormNight } from './StormsAndShowers';

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
    return isDay ? PartlyCloudyDay : PartlyCloudyNight;
  }
  
  // Overcast (3)
  if (weatherCode === 3) {
    return isDay ? OvercastDay : OvercastNight;
  }
  
  // Fog (45, 48)
  if (weatherCode === 45 || weatherCode === 48) {
    return isDay ? FoggyDay : FoggyNight;
  }
  
  // Drizzle (51, 53, 55)
  if (weatherCode === 51 || weatherCode === 53 || weatherCode === 55) {
    return isDay ? LightDrizzleDay : LightDrizzleNight;
  }
  
  // Rain (61 = slight, 63 = moderate, 65 = heavy)
  if (weatherCode === 61) {
    return isDay ? LightDrizzleDay : LightDrizzleNight;
  }
  if (weatherCode === 63) {
    return isDay ? ModerateRainDay : ModerateRainNight;
  }
  if (weatherCode === 65) {
    return isDay ? HeavyRainDay : HeavyRainNight;
  }
  
  // Snow (71 = light, 73 = moderate, 75 = heavy, 77 = grains)
  if (weatherCode === 71) {
    return isDay ? LightSnowDay : LightSnowNight;
  }
  if (weatherCode === 73) {
    return isDay ? ModerateSnowDay : ModerateSnowNight;
  }
  if (weatherCode === 75 || weatherCode === 77) {
    return isDay ? HeavySnowDay : HeavySnowNight;
  }
  
  // Rain showers (80 = light, 81 = moderate, 82 = violent)
  if (weatherCode === 80) {
    return isDay ? LightShowersDay : LightShowersNight;
  }
  if (weatherCode === 81 || weatherCode === 82) {
    return isDay ? HeavyShowersDay : HeavyShowersNight;
  }
  
  // Snow showers (85 = light, 86 = heavy)
  if (weatherCode === 85) {
    return isDay ? LightSnowDay : LightSnowNight;
  }
  if (weatherCode === 86) {
    return isDay ? ModerateSnowDay : ModerateSnowNight;
  }
  
  // Thunderstorm (95, 96, 99)
  if (weatherCode === 95 || weatherCode === 96 || weatherCode === 99) {
    return isDay ? ThunderstormDay : ThunderstormNight;
  }
  
  // Default to clear sky for unknown codes
  return isDay ? ClearSkyDay : ClearSkyNight;
}
