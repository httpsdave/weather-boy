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
    
    {/* Few small clouds with enhanced depth */}
    <g className="animate-float" opacity="0.75">
      <ellipse cx="200" cy="120" rx="40" ry="25" fill="white" opacity="0.92"/>
      <ellipse cx="230" cy="115" rx="35" ry="22" fill="white" opacity="0.95"/>
      <ellipse cx="255" cy="122" rx="30" ry="20" fill="white" opacity="0.92"/>
    </g>
    
    <g className="animate-float-delayed" opacity="0.68">
      <ellipse cx="1000" cy="90" rx="35" ry="22" fill="white" opacity="0.88"/>
      <ellipse cx="1025" cy="85" rx="30" ry="20" fill="white" opacity="0.90"/>
      <ellipse cx="1045" cy="92" rx="28" ry="18" fill="white" opacity="0.88"/>
    </g>
    
    {/* Mountains - flat 2.0 with layered faces */}
    <g opacity="0.55">
      <path d="M0 395 L120 330 L165 355 L0 415 Z" fill="#ABC3D8"/>
      <path d="M165 355 L120 330 L260 315 L305 340 Z" fill="#98B0CA"/>
      <path d="M305 340 L260 315 L400 305 L445 330 Z" fill="#ABC3D8"/>
      <path d="M445 330 L400 305 L540 300 L585 325 Z" fill="#98B0CA"/>
      <path d="M585 325 L540 300 L680 310 L725 335 Z" fill="#ABC3D8"/>
      <path d="M725 335 L680 310 L820 315 L865 340 Z" fill="#98B0CA"/>
      <path d="M865 340 L820 315 L960 320 L1005 345 Z" fill="#ABC3D8"/>
      <path d="M1005 345 L960 320 L1100 325 L1200 350 Z" fill="#98B0CA"/>
      <path d="M0 415 L165 355 L305 340 L445 330 L585 325 L725 335 L865 340 L1005 345 L1200 350 L1200 500 L0 500 Z" fill="#85A3BD"/>
    </g>
    <g opacity="0.68">
      <path d="M0 420 L130 355 L170 380 L0 440 Z" fill="#82ACc8"/>
      <path d="M170 380 L130 355 L290 343 L330 368 Z" fill="#6D96B8"/>
      <path d="M330 368 L290 343 L450 333 L490 358 Z" fill="#82ACCA"/>
      <path d="M490 358 L450 333 L610 328 L650 353 Z" fill="#6D96B8"/>
      <path d="M650 353 L610 328 L770 338 L810 363 Z" fill="#82ACCA"/>
      <path d="M810 363 L770 338 L930 345 L970 370 Z" fill="#6D96B8"/>
      <path d="M970 370 L930 345 L1090 350 L1200 373 Z" fill="#82ACCA"/>
      <path d="M0 440 L170 380 L330 368 L490 358 L650 353 L810 363 L970 370 L1200 373 L1200 500 L0 500 Z" fill="#5D87AD"/>
    </g>
    
    {/* Snow caps on mountains - enhanced */}
    <g opacity="0.95">
      <path d="M130 355 L158 373 L102 373 Z" fill="white"/>
      <path d="M130 355 L145 365 L115 365 Z" fill="#F0F8FF" opacity="0.9"/>
      
      <path d="M450 333 L482 355 L418 355 Z" fill="white"/>
      <path d="M450 333 L467 345 L433 345 Z" fill="#F0F8FF" opacity="0.9"/>
      
      <path d="M770 338 L805 360 L735 360 Z" fill="white"/>
      <path d="M770 338 L789 350 L751 350 Z" fill="#F0F8FF" opacity="0.9"/>
    </g>
    
    {/* Green hills - flat 2.0 layered */}
    <path d="M0 453 L150 443 L300 438 L450 433 L600 440 L750 435 L900 432 L1050 438 L1200 442 L1200 500 L0 500 Z" 
          fill="#76C77A"/>
    <path d="M0 453 L150 443 L300 438 L450 433 L600 440 L750 435 L900 432 L1050 438 L1200 442 L1200 473 L0 473 Z" 
          fill="#62B365" opacity="0.35"/>
    <path d="M0 475 L200 470 L400 465 L600 469 L800 472 L1000 467 L1200 462 L1200 500 L0 500 Z" 
          fill="#5CA35F"/>
    
    {/* Trees - flat 2.0 with depth and shadows */}
    <g>
      {/* Tree 1 with shadow */}
      <ellipse cx="257" cy="483" rx="11" ry="3" fill="#4A9450" opacity="0.3"/>
      <rect x="250" y="445" width="12" height="35" fill="#6D4C41"/>
      <rect x="250" y="445" width="4" height="35" fill="#5A3D34"/>
      <path d="M256 445 L238 445 L256 415 L274 445 Z" fill="#2E7D32"/>
      <path d="M256 445 L238 445 L256 427 Z" fill="#1B5E20"/>
      <path d="M256 430 L240 430 L256 405 L272 430 Z" fill="#388E3C"/>
      <path d="M256 430 L240 430 L256 415 Z" fill="#2E7D32"/>
      
      {/* Tree 2 with shadow */}
      <ellipse cx="686" cy="485" rx="10" ry="3" fill="#4A9450" opacity="0.3"/>
      <rect x="680" y="450" width="11" height="32" fill="#6D4C41"/>
      <rect x="680" y="450" width="4" height="32" fill="#5A3D34"/>
      <path d="M685.5 450 L669 450 L685.5 422 L702 450 Z" fill="#2E7D32"/>
      <path d="M685.5 450 L669 450 L685.5 433 Z" fill="#1B5E20"/>
      <path d="M685.5 436 L671 436 L685.5 412 L700 436 Z" fill="#388E3C"/>
      <path d="M685.5 436 L671 436 L685.5 422 Z" fill="#2E7D32"/>
      
      {/* Tree 3 with shadow */}
      <ellipse cx="456" cy="488" rx="9" ry="3" fill="#4A9450" opacity="0.3"/>
      <rect x="450" y="455" width="10" height="30" fill="#6D4C41"/>
      <rect x="450" y="455" width="3.5" height="30" fill="#5A3D34"/>
      <path d="M455 455 L440 455 L455 430 L470 455 Z" fill="#2E7D32"/>
      <path d="M455 455 L440 455 L455 440 Z" fill="#1B5E20"/>
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
    
    {/* Few dark clouds with better depth */}
    <g className="animate-float" opacity="0.48">
      <ellipse cx="300" cy="140" rx="45" ry="28" fill="#1C2B3A" opacity="0.85"/>
      <ellipse cx="335" cy="135" rx="40" ry="25" fill="#1C2B3A" opacity="0.88"/>
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
    
    {/* Mountain silhouettes - flat 2.0 */}
    <g opacity="0.82">
      <path d="M0 395 L120 335 L165 360 L0 415 Z" fill="#182838"/>
      <path d="M165 360 L120 335 L260 320 L305 345 Z" fill="#101E2C"/>
      <path d="M305 345 L260 320 L400 310 L445 335 Z" fill="#182838"/>
      <path d="M445 335 L400 310 L540 305 L585 330 Z" fill="#101E2C"/>
      <path d="M585 330 L540 305 L680 315 L725 340 Z" fill="#182838"/>
      <path d="M725 340 L680 315 L820 320 L865 345 Z" fill="#101E2C"/>
      <path d="M865 345 L820 320 L960 325 L1005 350 Z" fill="#182838"/>
      <path d="M1005 350 L960 325 L1100 330 L1200 355 Z" fill="#101E2C"/>
      <path d="M0 415 L165 360 L305 345 L445 335 L585 330 L725 340 L865 345 L1005 350 L1200 355 L1200 500 L0 500 Z" fill="#0A1420"/>
    </g>
    <g opacity="0.88">
      <path d="M0 420 L130 360 L170 385 L0 440 Z" fill="#243545"/>
      <path d="M170 385 L130 360 L290 348 L330 373 Z" fill="#182638"/>
      <path d="M330 373 L290 348 L450 338 L490 363 Z" fill="#243545"/>
      <path d="M490 363 L450 338 L610 333 L650 358 Z" fill="#182638"/>
      <path d="M650 358 L610 333 L770 343 L810 368 Z" fill="#243545"/>
      <path d="M810 368 L770 343 L930 350 L970 375 Z" fill="#182638"/>
      <path d="M970 375 L930 350 L1090 355 L1200 378 Z" fill="#243545"/>
      <path d="M0 440 L170 385 L330 373 L490 363 L650 358 L810 368 L970 375 L1200 378 L1200 500 L0 500 Z" fill="#12202E"/>
    </g>
    
    {/* Dark hills - flat 2.0 layered */}
    <path d="M0 453 L150 443 L300 438 L450 433 L600 440 L750 435 L900 432 L1050 438 L1200 442 L1200 500 L0 500 Z" 
          fill="#1E2D38"/>
    <path d="M0 453 L150 443 L300 438 L450 433 L600 440 L750 435 L900 432 L1050 438 L1200 442 L1200 473 L0 473 Z" 
          fill="#14232E" opacity="0.4"/>
    
    {/* Tree silhouettes - flat 2.0 with depth */}
    <g>
      <ellipse cx="257" cy="483" rx="11" ry="3" fill="#0A1420" opacity="0.4"/>
      <rect x="250" y="445" width="12" height="35" fill="#0A1015"/>
      <rect x="250" y="445" width="4" height="35" fill="#050810"/>
      <path d="M256 445 L238 445 L256 415 L274 445 Z" fill="#0F171D"/>
      <path d="M256 445 L238 445 L256 427 Z" fill="#080F14"/>
      
      <ellipse cx="686" cy="485" rx="10" ry="3" fill="#0A1420" opacity="0.4"/>
      <rect x="680" y="450" width="11" height="32" fill="#0A1015"/>
      <rect x="680" y="450" width="4" height="32" fill="#050810"/>
      <path d="M685.5 450 L669 450 L685.5 422 L702 450 Z" fill="#0F171D"/>
      <path d="M685.5 450 L669 450 L685.5 433 Z" fill="#080F14"/>
    </g>
  </svg>
);
