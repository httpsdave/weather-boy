import React from 'react';

export const Foggy: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 1200 500" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    {/* Misty gray sky */}
    <defs>
      <linearGradient id="foggySkyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#A8B2BE', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#D0D5DB', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <rect width="1200" height="500" fill="url(#foggySkyGradient)" />
    
    {/* Fog layers - horizontal bands */}
    <g opacity="0.7">
      <ellipse cx="600" cy="100" rx="700" ry="60" fill="white" opacity="0.5"/>
      <ellipse cx="600" cy="130" rx="750" ry="65" fill="white" opacity="0.45"/>
      <ellipse cx="600" cy="170" rx="680" ry="55" fill="white" opacity="0.5"/>
      <ellipse cx="600" cy="210" rx="720" ry="60" fill="white" opacity="0.48"/>
    </g>
    
    {/* More fog layers */}
    <g className="animate-float" opacity="0.6">
      <ellipse cx="200" cy="250" rx="400" ry="70" fill="#E8EAED" opacity="0.6"/>
      <ellipse cx="800" cy="270" rx="450" ry="75" fill="#E8EAED" opacity="0.55"/>
      <ellipse cx="500" cy="300" rx="420" ry="65" fill="#E8EAED" opacity="0.6"/>
    </g>
    
    <g className="animate-float-delayed" opacity="0.65">
      <ellipse cx="350" cy="330" rx="380" ry="70" fill="#DFE1E4" opacity="0.6"/>
      <ellipse cx="900" cy="350" rx="400" ry="72" fill="#DFE1E4" opacity="0.58"/>
    </g>
    
    {/* Barely visible mountains through fog - flat 2.0 */}
    <g opacity="0.32">
      <path d="M0 395 L110 335 L155 360 L0 415 Z" fill="#8A95A0"/>
      <path d="M155 360 L110 335 L250 320 L295 345 Z" fill="#7A858F"/>
      <path d="M295 345 L250 320 L390 310 L435 335 Z" fill="#8A95A0"/>
      <path d="M435 335 L390 310 L530 305 L575 330 Z" fill="#7A858F"/>
      <path d="M575 330 L530 305 L670 315 L715 340 Z" fill="#8A95A0"/>
      <path d="M715 340 L670 315 L810 320 L855 345 Z" fill="#7A858F"/>
      <path d="M855 345 L810 320 L950 325 L995 350 Z" fill="#8A95A0"/>
      <path d="M995 350 L950 325 L1090 330 L1200 355 Z" fill="#7A858F"/>
      <path d="M0 415 L155 360 L295 345 L435 335 L575 330 L715 340 L855 345 L995 350 L1200 355 L1200 500 L0 500 Z" fill="#6A757E"/>
    </g>
    <g opacity="0.38">
      <path d="M0 420 L125 360 L165 385 L0 440 Z" fill="#9AA5B0"/>
      <path d="M165 385 L125 360 L285 350 L325 375 Z" fill="#8A95A0"/>
      <path d="M325 375 L285 350 L445 342 L485 367 Z" fill="#9AA5B0"/>
      <path d="M485 367 L445 342 L605 338 L645 363 Z" fill="#8A95A0"/>
      <path d="M645 363 L605 338 L765 345 L805 370 Z" fill="#9AA5B0"/>
      <path d="M805 370 L765 345 L925 352 L965 377 Z" fill="#8A95A0"/>
      <path d="M965 377 L925 352 L1085 358 L1200 380 Z" fill="#9AA5B0"/>
      <path d="M0 440 L165 385 L325 375 L485 367 L645 363 L805 370 L965 377 L1200 380 L1200 500 L0 500 Z" fill="#7A858F"/>
    </g>
    
    {/* Hills barely visible - flat 2.0 */}
    <path d="M0 453 L150 443 L300 438 L450 433 L600 440 L750 435 L900 432 L1050 438 L1200 442 L1200 500 L0 500 Z" 
          fill="#B5BAC0"/>
    <path d="M0 453 L150 443 L300 438 L450 433 L600 440 L750 435 L900 432 L1050 438 L1200 442 L1200 475 L0 475 Z" 
          fill="#A5AAB0" opacity="0.4"/>
    
    {/* Dense fog in foreground */}
    <g opacity="0.75">
      <ellipse cx="250" cy="430" rx="350" ry="80" fill="white" opacity="0.6"/>
      <ellipse cx="750" cy="445" rx="400" ry="85" fill="white" opacity="0.65"/>
      <ellipse cx="500" cy="465" rx="380" ry="75" fill="white" opacity="0.7"/>
    </g>
    
    {/* Tree silhouettes barely visible through fog - flat 2.0 */}
    <g opacity="0.28">
      <ellipse cx="306" cy="488" rx="9" ry="2.5" fill="#8A8A8A" opacity="0.3"/>
      <rect x="300" y="455" width="10" height="30" fill="#606060"/>
      <rect x="300" y="455" width="3.5" height="30" fill="#505050"/>
      <path d="M305 455 L290 455 L305 430 L320 455 Z" fill="#505050"/>
      <path d="M305 455 L290 455 L305 440 Z" fill="#404040"/>
      
      <ellipse cx="656" cy="485" rx="10" ry="2.5" fill="#8A8A8A" opacity="0.3"/>
      <rect x="650" y="450" width="11" height="32" fill="#606060"/>
      <rect x="650" y="450" width="4" height="32" fill="#505050"/>
      <path d="M655.5 450 L639 450 L655.5 422 L672 450 Z" fill="#505050"/>
      <path d="M655.5 450 L639 450 L655.5 433 Z" fill="#404040"/>
      
      <ellipse cx="955" cy="489" rx="8" ry="2.5" fill="#8A8A8A" opacity="0.3"/>
      <rect x="950" y="458" width="9" height="28" fill="#606060"/>
      <rect x="950" y="458" width="3" height="28" fill="#505050"/>
      <path d="M954.5 458 L940 458 L954.5 435 L969 458 Z" fill="#505050"/>
      <path d="M954.5 458 L940 458 L954.5 444 Z" fill="#404040"/>
    </g>
    
    {/* House outline barely visible - flat 2.0 */}
    <g opacity="0.32">
      <ellipse cx="522.5" cy="499" rx="25" ry="3" fill="#A5AAB0" opacity="0.3"/>
      {/* House side */}
      <path d="M545 460 L545 498 L500 498 L500 478 Z" fill="#707070"/>
      {/* House front */}
      <rect x="500" y="460" width="45" height="38" fill="#808080"/>
      {/* Roof side */}
      <path d="M551 460 L522.5 440 L522.5 440 L545 460 Z" fill="#606060"/>
      {/* Roof front */}
      <path d="M494 460 L522.5 440 L551 460 Z" fill="#707070"/>
    </g>
    
    {/* More fog wisps in front */}
    <g className="animate-float" opacity="0.8">
      <ellipse cx="150" cy="480" rx="300" ry="60" fill="white" opacity="0.7"/>
      <ellipse cx="950" cy="475" rx="280" ry="55" fill="white" opacity="0.68"/>
    </g>
  </svg>
);

export const FoggyDay = Foggy;

export const FoggyNight: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 1200 500" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    {/* Dark misty night sky */}
    <defs>
      <linearGradient id="foggyNightSkyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#2a3542', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#3f4d5b', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <rect width="1200" height="500" fill="url(#foggyNightSkyGradient)" />
    
    {/* Dim moon behind fog */}
    <g opacity="0.3">
      <circle cx="900" cy="90" r="40" fill="#d4c4a8"/>
    </g>
    
    {/* Dark fog layers - horizontal bands */}
    <g opacity="0.6">
      <ellipse cx="600" cy="100" rx="700" ry="60" fill="#606870" opacity="0.5"/>
      <ellipse cx="600" cy="130" rx="750" ry="65" fill="#606870" opacity="0.45"/>
      <ellipse cx="600" cy="170" rx="680" ry="55" fill="#606870" opacity="0.5"/>
      <ellipse cx="600" cy="210" rx="720" ry="60" fill="#606870" opacity="0.48"/>
    </g>
    
    {/* More fog layers */}
    <g className="animate-float" opacity="0.55">
      <ellipse cx="200" cy="250" rx="400" ry="70" fill="#505860" opacity="0.6"/>
      <ellipse cx="800" cy="270" rx="450" ry="75" fill="#505860" opacity="0.55"/>
      <ellipse cx="500" cy="300" rx="420" ry="65" fill="#505860" opacity="0.6"/>
    </g>
    
    <g className="animate-float-delayed" opacity="0.6">
      <ellipse cx="350" cy="330" rx="380" ry="70" fill="#4a5560" opacity="0.6"/>
      <ellipse cx="900" cy="350" rx="400" ry="72" fill="#4a5560" opacity="0.58"/>
    </g>
    
    {/* Barely visible mountains through fog - flat 2.0 */}
    <g opacity="0.42">
      <path d="M0 395 L110 340 L155 365 L0 415 Z" fill="#2D3A48"/>
      <path d="M155 365 L110 340 L250 325 L295 350 Z" fill="#232F3D"/>
      <path d="M295 350 L250 325 L390 315 L435 340 Z" fill="#2D3A48"/>
      <path d="M435 340 L390 315 L530 310 L575 335 Z" fill="#232F3D"/>
      <path d="M575 335 L530 310 L670 320 L715 345 Z" fill="#2D3A48"/>
      <path d="M715 345 L670 320 L810 325 L855 350 Z" fill="#232F3D"/>
      <path d="M855 350 L810 325 L950 330 L995 355 Z" fill="#2D3A48"/>
      <path d="M995 355 L950 330 L1090 335 L1200 360 Z" fill="#232F3D"/>
      <path d="M0 415 L155 365 L295 350 L435 340 L575 335 L715 345 L855 350 L995 355 L1200 360 L1200 500 L0 500 Z" fill="#1A2530"/>
    </g>
    <g opacity="0.48">
      <path d="M0 420 L125 365 L165 390 L0 440 Z" fill="#313E4D"/>
      <path d="M165 390 L125 365 L285 355 L325 380 Z" fill="#273441"/>
      <path d="M325 380 L285 355 L445 347 L485 372 Z" fill="#313E4D"/>
      <path d="M485 372 L445 347 L605 343 L645 368 Z" fill="#273441"/>
      <path d="M645 368 L605 343 L765 350 L805 375 Z" fill="#313E4D"/>
      <path d="M805 375 L765 350 L925 357 L965 382 Z" fill="#273441"/>
      <path d="M965 382 L925 357 L1085 363 L1200 385 Z" fill="#313E4D"/>
      <path d="M0 440 L165 390 L325 380 L485 372 L645 368 L805 375 L965 382 L1200 385 L1200 500 L0 500 Z" fill="#1D2935"/>
    </g>
    
    {/* Hills barely visible - flat 2.0 */}
    <path d="M0 453 L150 443 L300 438 L450 433 L600 440 L750 435 L900 432 L1050 438 L1200 442 L1200 500 L0 500 Z" 
          fill="#3E4D5C"/>
    <path d="M0 453 L150 443 L300 438 L450 433 L600 440 L750 435 L900 432 L1050 438 L1200 442 L1200 475 L0 475 Z" 
          fill="#343F4E" opacity="0.4"/>
    
    {/* Dense fog in foreground */}
    <g opacity="0.7">
      <ellipse cx="250" cy="430" rx="350" ry="80" fill="#4a5560" opacity="0.6"/>
      <ellipse cx="750" cy="445" rx="400" ry="85" fill="#4a5560" opacity="0.65"/>
      <ellipse cx="500" cy="465" rx="380" ry="75" fill="#4a5560" opacity="0.7"/>
    </g>
    
    {/* Tree silhouettes barely visible through fog - flat 2.0 */}
    <g opacity="0.22">
      <ellipse cx="306" cy="488" rx="9" ry="2.5" fill="#1A1A1A" opacity="0.4"/>
      <rect x="300" y="455" width="10" height="30" fill="#2a2a2a"/>
      <rect x="300" y="455" width="3.5" height="30" fill="#1a1a1a"/>
      <path d="M305 455 L290 455 L305 430 L320 455 Z" fill="#1a1a1a"/>
      <path d="M305 455 L290 455 L305 440 Z" fill="#0F0F0F"/>
      
      <ellipse cx="656" cy="485" rx="10" ry="2.5" fill="#1A1A1A" opacity="0.4"/>
      <rect x="650" y="450" width="11" height="32" fill="#2a2a2a"/>
      <rect x="650" y="450" width="4" height="32" fill="#1a1a1a"/>
      <path d="M655.5 450 L639 450 L655.5 422 L672 450 Z" fill="#1a1a1a"/>
      <path d="M655.5 450 L639 450 L655.5 433 Z" fill="#0F0F0F"/>
      
      <ellipse cx="955" cy="489" rx="8" ry="2.5" fill="#1A1A1A" opacity="0.4"/>
      <rect x="950" y="458" width="9" height="28" fill="#2a2a2a"/>
      <rect x="950" y="458" width="3" height="28" fill="#1a1a1a"/>
      <path d="M954.5 458 L940 458 L954.5 435 L969 458 Z" fill="#1a1a1a"/>
      <path d="M954.5 458 L940 458 L954.5 444 Z" fill="#0F0F0F"/>
    </g>
    
    {/* House outline with lit window - flat 2.0 */}
    <g opacity="0.38">
      <ellipse cx="522.5" cy="499" rx="25" ry="3" fill="#1A2530" opacity="0.4"/>
      {/* House side */}
      <path d="M545 460 L545 498 L500 498 L500 478 Z" fill="#2E3840"/>
      {/* House front */}
      <rect x="500" y="460" width="45" height="38" fill="#3a4550"/>
      {/* Roof side */}
      <path d="M551 460 L522.5 440 L522.5 440 L545 460 Z" fill="#1F2830"/>
      {/* Roof front */}
      <path d="M494 460 L522.5 440 L551 460 Z" fill="#2a3540"/>
      {/* Glowing window */}
      <rect x="516" y="472" width="10" height="10" fill="#ffaa33"/>
      <rect x="515" y="472" width="10" height="10" fill="#ffcc66" opacity="0.75"/>
    </g>
    
    {/* More fog wisps in front */}
    <g className="animate-float" opacity="0.75">
      <ellipse cx="150" cy="480" rx="300" ry="60" fill="#505860" opacity="0.7"/>
      <ellipse cx="950" cy="475" rx="280" ry="55" fill="#505860" opacity="0.68"/>
    </g>
  </svg>
);
