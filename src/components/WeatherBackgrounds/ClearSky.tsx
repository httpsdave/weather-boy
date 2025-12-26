import React from 'react';

export const ClearSkyDay: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 1200 500" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    {/* Sky gradient */}
    <defs>
      <linearGradient id="clearSkyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#87CEEB', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#E0F6FF', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <rect width="1200" height="500" fill="url(#clearSkyGradient)" />
    
    {/* Distant mountains */}
    <path d="M0 350 L150 280 L300 320 L450 260 L600 300 L750 240 L900 280 L1050 220 L1200 260 L1200 500 L0 500 Z" 
          fill="#A8C5DD" opacity="0.4"/>
    <path d="M0 380 L200 300 L400 340 L600 280 L800 320 L1000 260 L1200 300 L1200 500 L0 500 Z" 
          fill="#B8D5ED" opacity="0.5"/>
    
    {/* Middle mountains */}
    <path d="M0 400 L180 320 L360 370 L540 310 L720 360 L900 300 L1080 350 L1200 320 L1200 500 L0 500 Z" 
          fill="#7BA8C9" opacity="0.6"/>
    
    {/* Front mountains with snow caps */}
    <path d="M0 430 L150 350 L300 400 L450 340 L600 390 L750 330 L900 380 L1050 320 L1200 370 L1200 500 L0 500 Z" 
          fill="#5A8BB5" opacity="0.7"/>
    
    {/* Snow caps on front mountains */}
    <path d="M150 350 L175 370 L125 370 Z" fill="white" opacity="0.95"/>
    <path d="M450 340 L480 365 L420 365 Z" fill="white" opacity="0.95"/>
    <path d="M750 330 L785 358 L715 358 Z" fill="white" opacity="0.95"/>
    <path d="M1050 320 L1085 348 L1015 348 Z" fill="white" opacity="0.95"/>
    
    {/* Rolling hills */}
    <path d="M0 460 L300 440 L600 450 L900 435 L1200 445 L1200 500 L0 500 Z" 
          fill="#8BC34A" opacity="0.8"/>
    <path d="M0 475 L400 465 L800 470 L1200 460 L1200 500 L0 500 Z" 
          fill="#7CB342" opacity="0.9"/>
    
    {/* Trees scattered on hills */}
    <g opacity="0.85">
      {/* Tree 1 */}
      <rect x="180" y="450" width="12" height="35" fill="#6D4C41"/>
      <path d="M186 450 L165 450 L175.5 420 Z" fill="#2E7D32"/>
      <path d="M186 435 L168 435 L177 410 Z" fill="#388E3C"/>
      
      {/* Tree 2 */}
      <rect x="520" y="455" width="10" height="30" fill="#6D4C41"/>
      <path d="M525 455 L508 455 L516.5 430 Z" fill="#2E7D32"/>
      <path d="M525 442 L510 442 L517.5 420 Z" fill="#388E3C"/>
      
      {/* Tree 3 */}
      <rect x="850" y="448" width="11" height="33" fill="#6D4C41"/>
      <path d="M855.5 448 L837 448 L846.25 418 Z" fill="#2E7D32"/>
      <path d="M855.5 433 L839 433 L847.25 408 Z" fill="#388E3C"/>
      
      {/* Tree 4 */}
      <rect x="1080" y="452" width="10" height="30" fill="#6D4C41"/>
      <path d="M1085 452 L1068 452 L1076.5 427 Z" fill="#2E7D32"/>
      <path d="M1085 439 L1070 439 L1077.5 417 Z" fill="#388E3C"/>
    </g>
    
    {/* Small house */}
    <g opacity="0.9">
      <rect x="920" y="455" width="55" height="45" fill="#E8A87C"/>
      <path d="M912 455 L947.5 430 L983 455 Z" fill="#C41E3A"/>
      <rect x="935" y="475" width="15" height="25" fill="#795548"/>
      <rect x="955" y="465" width="12" height="12" fill="#90CAF9" opacity="0.7"/>
    </g>
    
    {/* Bright sun with rays */}
    <g className="animate-float">
      <circle cx="950" cy="100" r="50" fill="#FFD700"/>
      <circle cx="950" cy="100" r="42" fill="#FDB813"/>
      
      {/* Sun rays */}
      <line x1="950" y1="30" x2="950" y2="0" stroke="#FFD700" strokeWidth="4" opacity="0.6"/>
      <line x1="1010" y1="60" x2="1035" y2="35" stroke="#FFD700" strokeWidth="4" opacity="0.6"/>
      <line x1="1030" y1="100" x2="1060" y2="100" stroke="#FFD700" strokeWidth="4" opacity="0.6"/>
      <line x1="1010" y1="140" x2="1035" y2="165" stroke="#FFD700" strokeWidth="4" opacity="0.6"/>
      <line x1="950" y1="170" x2="950" y2="200" stroke="#FFD700" strokeWidth="4" opacity="0.6"/>
      <line x1="890" y1="140" x2="865" y2="165" stroke="#FFD700" strokeWidth="4" opacity="0.6"/>
      <line x1="870" y1="100" x2="840" y2="100" stroke="#FFD700" strokeWidth="4" opacity="0.6"/>
      <line x1="890" y1="60" x2="865" y2="35" stroke="#FFD700" strokeWidth="4" opacity="0.6"/>
    </g>
    
    {/* Birds */}
    <g opacity="0.4">
      <path d="M300 120 Q310 115 320 120" stroke="#333" strokeWidth="2" fill="none"/>
      <path d="M320 120 Q330 115 340 120" stroke="#333" strokeWidth="2" fill="none"/>
      
      <path d="M450 160 Q460 155 470 160" stroke="#333" strokeWidth="2" fill="none"/>
      <path d="M470 160 Q480 155 490 160" stroke="#333" strokeWidth="2" fill="none"/>
    </g>
  </svg>
);

export const ClearSkyNight: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 1200 500" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    {/* Night sky gradient */}
    <defs>
      <linearGradient id="nightSkyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#0B1929', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#1A2F4A', stopOpacity: 1 }} />
      </linearGradient>
      <radialGradient id="moonGlow" cx="50%" cy="50%">
        <stop offset="0%" style={{ stopColor: '#FFF8DC', stopOpacity: 0.3 }} />
        <stop offset="100%" style={{ stopColor: '#FFF8DC', stopOpacity: 0 }} />
      </radialGradient>
    </defs>
    <rect width="1200" height="500" fill="url(#nightSkyGradient)" />
    
    {/* Stars */}
    <g className="animate-twinkle">
      <circle cx="150" cy="80" r="2" fill="white" opacity="0.8"/>
      <circle cx="280" cy="120" r="1.5" fill="white" opacity="0.9"/>
      <circle cx="420" cy="60" r="2" fill="white" opacity="0.7"/>
      <circle cx="580" cy="140" r="1" fill="white" opacity="0.8"/>
      <circle cx="720" cy="90" r="2" fill="white" opacity="0.9"/>
      <circle cx="850" cy="130" r="1.5" fill="white" opacity="0.7"/>
      <circle cx="1000" cy="70" r="2" fill="white" opacity="0.8"/>
      <circle cx="1100" cy="110" r="1" fill="white" opacity="0.9"/>
      <circle cx="200" cy="180" r="1.5" fill="white" opacity="0.7"/>
      <circle cx="380" cy="150" r="1" fill="white" opacity="0.8"/>
      <circle cx="640" cy="40" r="2" fill="white" opacity="0.9"/>
      <circle cx="920" cy="50" r="1.5" fill="white" opacity="0.7"/>
    </g>
    
    {/* Moon with glow */}
    <g className="animate-float">
      <circle cx="250" cy="100" r="80" fill="url(#moonGlow)"/>
      <circle cx="250" cy="100" r="45" fill="#FFF8DC"/>
      <circle cx="250" cy="100" r="40" fill="#F5E6D3"/>
      {/* Moon craters */}
      <circle cx="235" cy="90" r="8" fill="#E8D4B8" opacity="0.4"/>
      <circle cx="260" cy="105" r="6" fill="#E8D4B8" opacity="0.3"/>
      <circle cx="248" cy="115" r="5" fill="#E8D4B8" opacity="0.35"/>
    </g>
    
    {/* Mountain silhouettes */}
    <path d="M0 350 L150 280 L300 320 L450 260 L600 300 L750 240 L900 280 L1050 220 L1200 260 L1200 500 L0 500 Z" 
          fill="#0D1B2A" opacity="0.8"/>
    <path d="M0 380 L200 300 L400 340 L600 280 L800 320 L1000 260 L1200 300 L1200 500 L0 500 Z" 
          fill="#1B263B" opacity="0.85"/>
    <path d="M0 410 L180 330 L360 380 L540 320 L720 370 L900 310 L1080 360 L1200 330 L1200 500 L0 500 Z" 
          fill="#263547" opacity="0.9"/>
    
    {/* Dark hills */}
    <path d="M0 450 L300 430 L600 440 L900 425 L1200 435 L1200 500 L0 500 Z" 
          fill="#1A2332" opacity="0.95"/>
    
    {/* Tree silhouettes */}
    <g opacity="0.7">
      <rect x="180" y="440" width="12" height="35" fill="#0A1118"/>
      <path d="M186 440 L165 440 L175.5 410 Z" fill="#0F1821"/>
      
      <rect x="520" y="445" width="10" height="30" fill="#0A1118"/>
      <path d="M525 445 L508 445 L516.5 420 Z" fill="#0F1821"/>
      
      <rect x="850" y="438" width="11" height="33" fill="#0A1118"/>
      <path d="M855.5 438 L837 438 L846.25 408 Z" fill="#0F1821"/>
    </g>
    
    {/* House with warm window light */}
    <g opacity="0.9">
      <rect x="920" y="445" width="55" height="45" fill="#1A1A2E"/>
      <path d="M912 445 L947.5 420 L983 445 Z" fill="#0F0F1E"/>
      <rect x="935" y="465" width="15" height="25" fill="#0D0D1A"/>
      {/* Glowing window */}
      <rect x="955" y="455" width="12" height="12" fill="#FFB347" opacity="0.9"/>
      <rect x="955" y="455" width="12" height="12" fill="#FFD700" opacity="0.4" className="animate-pulse-slow"/>
    </g>
  </svg>
);
