import React from 'react';

export const MainlyClearDay: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 1200 500" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    {/* Sky gradient */}
    <defs>
      <linearGradient id="mainlyClearSkyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#7DC8E7', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#D5EFFF', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <rect width="1200" height="500" fill="url(#mainlyClearSkyGradient)" />
    
    {/* Few small clouds */}
    <g className="animate-float" opacity="0.7">
      <ellipse cx="200" cy="120" rx="40" ry="25" fill="white" opacity="0.85"/>
      <ellipse cx="230" cy="115" rx="35" ry="22" fill="white" opacity="0.85"/>
      <ellipse cx="255" cy="122" rx="30" ry="20" fill="white" opacity="0.85"/>
    </g>
    
    <g className="animate-float-delayed" opacity="0.6">
      <ellipse cx="1000" cy="90" rx="35" ry="22" fill="white" opacity="0.8"/>
      <ellipse cx="1025" cy="85" rx="30" ry="20" fill="white" opacity="0.8"/>
      <ellipse cx="1045" cy="92" rx="28" ry="18" fill="white" opacity="0.8"/>
    </g>
    
    {/* Mountains */}
    <path d="M0 380 L200 300 L400 340 L600 280 L800 320 L1000 260 L1200 300 L1200 500 L0 500 Z" 
          fill="#A0B8D0" opacity="0.5"/>
    <path d="M0 410 L180 330 L360 380 L540 320 L720 370 L900 310 L1080 360 L1200 330 L1200 500 L0 500 Z" 
          fill="#7AA0C0" opacity="0.6"/>
    
    {/* Snow caps */}
    <path d="M180 330 L205 350 L155 350 Z" fill="white" opacity="0.9"/>
    <path d="M540 320 L570 345 L510 345 Z" fill="white" opacity="0.9"/>
    <path d="M900 310 L935 338 L865 338 Z" fill="white" opacity="0.9"/>
    
    {/* Green hills */}
    <path d="M0 450 L300 430 L600 440 L900 425 L1200 435 L1200 500 L0 500 Z" 
          fill="#81C784" opacity="0.85"/>
    <path d="M0 470 L400 460 L800 465 L1200 455 L1200 500 L0 500 Z" 
          fill="#66BB6A" opacity="0.9"/>
    
    {/* Trees */}
    <g opacity="0.85">
      <rect x="250" y="445" width="12" height="35" fill="#6D4C41"/>
      <path d="M256 445 L235 445 L245.5 415 Z" fill="#2E7D32"/>
      <path d="M256 430 L238 430 L247 405 Z" fill="#388E3C"/>
      
      <rect x="680" y="450" width="11" height="32" fill="#6D4C41"/>
      <path d="M685.5 450 L667 450 L676.25 422 Z" fill="#2E7D32"/>
      <path d="M685.5 436 L669 436 L677.25 412 Z" fill="#388E3C"/>
      
      <rect x="450" y="455" width="10" height="30" fill="#6D4C41"/>
      <path d="M455 455 L438 455 L446.5 430 Z" fill="#2E7D32"/>
    </g>
    
    {/* Bright sun */}
    <g className="animate-float">
      <circle cx="1000" cy="80" r="48" fill="#FFD700"/>
      <circle cx="1000" cy="80" r="40" fill="#FDB813"/>
    </g>
    
    {/* Birds */}
    <g opacity="0.35">
      <path d="M500 140 Q510 135 520 140" stroke="#333" strokeWidth="2" fill="none"/>
      <path d="M520 140 Q530 135 540 140" stroke="#333" strokeWidth="2" fill="none"/>
    </g>
  </svg>
);

export const MainlyClearNight: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 1200 500" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    {/* Night sky */}
    <defs>
      <linearGradient id="mainlyClearNightGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#1A2840', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#2C3E50', stopOpacity: 1 }} />
      </linearGradient>
      <radialGradient id="moonGlowMainly" cx="50%" cy="50%">
        <stop offset="0%" style={{ stopColor: '#FFF8DC', stopOpacity: 0.25 }} />
        <stop offset="100%" style={{ stopColor: '#FFF8DC', stopOpacity: 0 }} />
      </radialGradient>
    </defs>
    <rect width="1200" height="500" fill="url(#mainlyClearNightGradient)" />
    
    {/* Stars */}
    <g className="animate-twinkle">
      <circle cx="120" cy="70" r="2" fill="white" opacity="0.9"/>
      <circle cx="250" cy="100" r="1.5" fill="white" opacity="0.85"/>
      <circle cx="380" cy="50" r="2" fill="white" opacity="0.8"/>
      <circle cx="520" cy="120" r="1" fill="white" opacity="0.9"/>
      <circle cx="680" cy="80" r="1.5" fill="white" opacity="0.85"/>
      <circle cx="820" cy="110" r="2" fill="white" opacity="0.8"/>
      <circle cx="950" cy="60" r="1" fill="white" opacity="0.9"/>
      <circle cx="1080" cy="90" r="2" fill="white" opacity="0.85"/>
      <circle cx="180" cy="160" r="1.5" fill="white" opacity="0.8"/>
      <circle cx="440" cy="130" r="1" fill="white" opacity="0.85"/>
      <circle cx="750" cy="35" r="2" fill="white" opacity="0.9"/>
    </g>
    
    {/* Few dark clouds */}
    <g className="animate-float" opacity="0.4">
      <ellipse cx="300" cy="140" rx="45" ry="28" fill="#1C2B3A"/>
      <ellipse cx="335" cy="135" rx="40" ry="25" fill="#1C2B3A"/>
    </g>
    
    {/* Crescent moon */}
    <g className="animate-float">
      <circle cx="150" cy="100" r="70" fill="url(#moonGlowMainly)"/>
      <circle cx="150" cy="100" r="40" fill="#FFF8DC"/>
      <circle cx="165" cy="100" r="38" fill="#1A2840"/>
      {/* Visible crescent edge */}
      <circle cx="145" cy="95" r="7" fill="#E8D4B8" opacity="0.3"/>
      <circle cx="148" cy="110" r="5" fill="#E8D4B8" opacity="0.25"/>
    </g>
    
    {/* Mountain silhouettes */}
    <path d="M0 380 L200 300 L400 340 L600 280 L800 320 L1000 260 L1200 300 L1200 500 L0 500 Z" 
          fill="#141E2C" opacity="0.8"/>
    <path d="M0 410 L180 330 L360 380 L540 320 L720 370 L900 310 L1080 360 L1200 330 L1200 500 L0 500 Z" 
          fill="#1F2D3D" opacity="0.85"/>
    
    {/* Dark hills */}
    <path d="M0 450 L300 430 L600 440 L900 425 L1200 435 L1200 500 L0 500 Z" 
          fill="#1A2530" opacity="0.9"/>
    
    {/* Tree silhouettes */}
    <g opacity="0.65">
      <rect x="250" y="445" width="12" height="35" fill="#0A1015"/>
      <path d="M256 445 L235 445 L245.5 415 Z" fill="#0F171D"/>
      
      <rect x="680" y="450" width="11" height="32" fill="#0A1015"/>
      <path d="M685.5 450 L667 450 L676.25 422 Z" fill="#0F171D"/>
    </g>
  </svg>
);
