import React from 'react';

export const SunnyScene: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Mountains */}
    <path d="M0 250 L100 150 L200 200 L300 120 L400 180 L400 300 L0 300 Z" fill="#7C5DBD" opacity="0.3"/>
    <path d="M50 220 L150 140 L250 180 L350 110 L400 160 L400 300 L0 300 Z" fill="#8B7BB8" opacity="0.4"/>
    
    {/* Snow caps */}
    <path d="M100 150 L120 170 L80 170 Z" fill="white" opacity="0.9"/>
    <path d="M300 120 L320 145 L280 145 Z" fill="white" opacity="0.9"/>
    
    {/* Trees */}
    <g>
      <rect x="70" y="240" width="8" height="30" fill="#8B6F47"/>
      <path d="M74 240 L60 240 L67 220 L74 240 Z" fill="#2D5016"/>
      <path d="M74 230 L62 230 L68 215 L74 230 Z" fill="#3A6B1E"/>
      
      <rect x="130" y="250" width="8" height="25" fill="#8B6F47"/>
      <path d="M134 250 L122 250 L128 233 L134 250 Z" fill="#2D5016"/>
      <path d="M134 242 L124 242 L129 228 L134 242 Z" fill="#3A6B1E"/>
    </g>
    
    {/* House */}
    <g>
      <rect x="280" y="250" width="40" height="35" fill="#E8A87C" opacity="0.9"/>
      <path d="M275 250 L300 230 L325 250 Z" fill="#C41E3A"/>
      <rect x="290" y="265" width="10" height="20" fill="#8B6F47"/>
      <rect x="305" y="260" width="8" height="8" fill="#87CEEB" opacity="0.6"/>
    </g>
    
    {/* Sun */}
    <circle cx="320" cy="60" r="35" fill="#FFD700" className="animate-float"/>
    <circle cx="320" cy="60" r="30" fill="#FFA500"/>
  </svg>
);

export const CloudyScene: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Mountains */}
    <path d="M0 250 L100 180 L200 220 L300 160 L400 200 L400 300 L0 300 Z" fill="#5A7BA6" opacity="0.3"/>
    <path d="M50 240 L150 170 L250 200 L350 140 L400 180 L400 300 L0 300 Z" fill="#6B8DB8" opacity="0.4"/>
    
    {/* Sun behind clouds */}
    <circle cx="100" cy="80" r="30" fill="#FFD700" opacity="0.4"/>
    
    {/* Clouds */}
    <g className="animate-float">
      <ellipse cx="80" cy="90" rx="35" ry="25" fill="white" opacity="0.9"/>
      <ellipse cx="110" cy="85" rx="40" ry="28" fill="white" opacity="0.9"/>
      <ellipse cx="130" cy="95" rx="30" ry="22" fill="white" opacity="0.9"/>
    </g>
    
    <g className="animate-float-delayed">
      <ellipse cx="280" cy="70" rx="40" ry="28" fill="white" opacity="0.8"/>
      <ellipse cx="310" cy="75" rx="35" ry="25" fill="white" opacity="0.8"/>
      <ellipse cx="330" cy="68" rx="30" ry="22" fill="white" opacity="0.8"/>
    </g>
    
    {/* Trees */}
    <g opacity="0.7">
      <rect x="50" y="250" width="8" height="30" fill="#6B4423"/>
      <path d="M54 250 L42 250 L48 230 L54 250 Z" fill="#2D5016"/>
      
      <rect x="320" y="260" width="8" height="25" fill="#6B4423"/>
      <path d="M324 260 L314 260 L319 243 L324 260 Z" fill="#2D5016"/>
    </g>
  </svg>
);

export const RainyScene: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Dark clouds */}
    <g>
      <ellipse cx="100" cy="60" rx="45" ry="32" fill="#6B7B8C" opacity="0.8"/>
      <ellipse cx="140" cy="55" rx="50" ry="35" fill="#5B6B7C" opacity="0.8"/>
      <ellipse cx="180" cy="65" rx="40" ry="30" fill="#6B7B8C" opacity="0.8"/>
    </g>
    
    <g>
      <ellipse cx="250" cy="70" rx="50" ry="35" fill="#5B6B7C" opacity="0.7"/>
      <ellipse cx="290" cy="75" rx="45" ry="32" fill="#6B7B8C" opacity="0.7"/>
      <ellipse cx="320" cy="68" rx="40" ry="28" fill="#5B6B7C" opacity="0.7"/>
    </g>
    
    {/* Rain drops */}
    <g opacity="0.6">
      <line x1="80" y1="100" x2="75" y2="130" stroke="#4DB8E8" strokeWidth="2" strokeLinecap="round"/>
      <line x1="110" y1="95" x2="105" y2="125" stroke="#4DB8E8" strokeWidth="2" strokeLinecap="round"/>
      <line x1="140" y1="100" x2="135" y2="135" stroke="#4DB8E8" strokeWidth="2" strokeLinecap="round"/>
      <line x1="170" y1="105" x2="165" y2="140" stroke="#4DB8E8" strokeWidth="2" strokeLinecap="round"/>
      
      <line x1="230" y1="110" x2="225" y2="145" stroke="#4DB8E8" strokeWidth="2" strokeLinecap="round"/>
      <line x1="260" y1="105" x2="255" y2="140" stroke="#4DB8E8" strokeWidth="2" strokeLinecap="round"/>
      <line x1="290" y1="110" x2="285" y2="150" stroke="#4DB8E8" strokeWidth="2" strokeLinecap="round"/>
      <line x1="320" y1="105" x2="315" y2="140" stroke="#4DB8E8" strokeWidth="2" strokeLinecap="round"/>
    </g>
    
    {/* Ground with puddles */}
    <path d="M0 260 L400 260 L400 300 L0 300 Z" fill="#4A5568" opacity="0.2"/>
    <ellipse cx="120" cy="270" rx="30" ry="8" fill="#4DB8E8" opacity="0.3"/>
    <ellipse cx="280" cy="275" rx="40" ry="10" fill="#4DB8E8" opacity="0.3"/>
  </svg>
);

export const NightScene: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Mountains */}
    <path d="M0 250 L100 150 L200 200 L300 120 L400 180 L400 300 L0 300 Z" fill="#2C1F47" opacity="0.6"/>
    <path d="M50 220 L150 140 L250 180 L350 110 L400 160 L400 300 L0 300 Z" fill="#3D2E5C" opacity="0.7"/>
    
    {/* Moon */}
    <circle cx="320" cy="70" r="35" fill="#F0E68C" className="animate-float"/>
    <circle cx="325" cy="65" r="30" fill="#2D3748" opacity="0.3"/>
    
    {/* Stars */}
    <g fill="white" opacity="0.8">
      <circle cx="80" cy="50" r="2"/>
      <circle cx="150" cy="40" r="2"/>
      <circle cx="220" cy="60" r="2"/>
      <circle cx="270" cy="35" r="2"/>
      <circle cx="360" cy="45" r="2"/>
      <circle cx="120" cy="80" r="1.5"/>
      <circle cx="190" cy="70" r="1.5"/>
      <circle cx="340" cy="90" r="1.5"/>
    </g>
    
    {/* Trees */}
    <g opacity="0.5">
      <rect x="70" y="240" width="8" height="30" fill="#1A1A2E"/>
      <path d="M74 240 L60 240 L67 220 L74 240 Z" fill="#0F1419"/>
      
      <rect x="300" y="250" width="8" height="25" fill="#1A1A2E"/>
      <path d="M304 250 L292 250 L298 233 L304 250 Z" fill="#0F1419"/>
    </g>
  </svg>
);

export const SnowyScene: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Mountains with snow */}
    <path d="M0 250 L100 150 L200 200 L300 120 L400 180 L400 300 L0 300 Z" fill="#B8C5D6" opacity="0.5"/>
    <path d="M50 220 L150 140 L250 180 L350 110 L400 160 L400 300 L0 300 Z" fill="#C8D5E6" opacity="0.6"/>
    
    {/* Snow caps on mountains */}
    <path d="M100 150 L130 180 L70 180 Z" fill="white" opacity="0.95"/>
    <path d="M300 120 L330 155 L270 155 Z" fill="white" opacity="0.95"/>
    
    {/* Clouds */}
    <g opacity="0.7">
      <ellipse cx="100" cy="70" rx="40" ry="28" fill="#E8EFF5"/>
      <ellipse cx="140" cy="75" rx="45" ry="30" fill="#E8EFF5"/>
      <ellipse cx="170" cy="68" rx="35" ry="25" fill="#E8EFF5"/>
    </g>
    
    {/* Snowflakes */}
    <g fill="white" opacity="0.8">
      <circle cx="80" cy="120" r="3"/>
      <circle cx="150" cy="140" r="3"/>
      <circle cx="220" cy="110" r="3"/>
      <circle cx="290" cy="150" r="3"/>
      <circle cx="340" cy="130" r="3"/>
      <circle cx="120" cy="170" r="2.5"/>
      <circle cx="190" cy="155" r="2.5"/>
      <circle cx="260" cy="175" r="2.5"/>
    </g>
    
    {/* Snowy ground */}
    <path d="M0 260 L400 260 L400 300 L0 300 Z" fill="white" opacity="0.8"/>
    
    {/* Trees with snow */}
    <g>
      <rect x="60" y="245" width="8" height="25" fill="#6B4423"/>
      <path d="M64 245 L52 245 L58 228 L64 245 Z" fill="#1A4D1A"/>
      <path d="M64 238 L54 238 L59 225 L64 238 Z" fill="#2D6B2D"/>
      <path d="M59 225 L64 228 L54 228 Z" fill="white" opacity="0.9"/>
      
      <rect x="320" y="250" width="8" height="30" fill="#6B4423"/>
      <path d="M324 250 L312 250 L318 230 L324 250 Z" fill="#1A4D1A"/>
      <path d="M324 242 L314 242 L319 227 L324 242 Z" fill="#2D6B2D"/>
      <path d="M319 227 L324 230 L314 230 Z" fill="white" opacity="0.9"/>
    </g>
  </svg>
);

export const getWeatherScene = (weatherCode: number, isDay: boolean) => {
  // Clear
  if (weatherCode === 0 || weatherCode === 1) {
    return isDay ? SunnyScene : NightScene;
  }
  // Partly cloudy
  if (weatherCode === 2 || weatherCode === 3) {
    return CloudyScene;
  }
  // Rain
  if (weatherCode >= 51 && weatherCode <= 67) {
    return RainyScene;
  }
  // Snow
  if (weatherCode >= 71 && weatherCode <= 77 || weatherCode === 85 || weatherCode === 86) {
    return SnowyScene;
  }
  // Default to cloudy
  return CloudyScene;
};
