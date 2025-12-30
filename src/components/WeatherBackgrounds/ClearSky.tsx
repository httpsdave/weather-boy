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
    
    {/* Distant mountains - flat 2.0 with enhanced depth */}
    <g opacity="0.48">
      <path d="M0 380 L105 310 L155 335 L0 395 Z" fill="#B8D3EA"/>
      <path d="M155 335 L105 310 L200 295 L245 320 Z" fill="#A5C3DD"/>
      <path d="M245 320 L200 295 L295 280 L340 305 Z" fill="#B8D3EA"/>
      <path d="M340 305 L295 280 L390 270 L435 295 Z" fill="#A5C3DD"/>
      <path d="M435 295 L390 270 L485 260 L530 285 Z" fill="#B8D3EA"/>
      <path d="M530 285 L485 260 L580 252 L625 277 Z" fill="#A5C3DD"/>
      <path d="M625 277 L580 252 L675 262 L720 287 Z" fill="#B8D3EA"/>
      <path d="M720 287 L675 262 L770 268 L815 293 Z" fill="#A5C3DD"/>
      <path d="M815 293 L770 268 L865 275 L910 300 Z" fill="#B8D3EA"/>
      <path d="M910 300 L865 275 L960 280 L1005 305 Z" fill="#A5C3DD"/>
      <path d="M1005 305 L960 280 L1055 285 L1100 310 Z" fill="#B8D3EA"/>
      <path d="M1100 310 L1055 285 L1150 295 L1200 320 Z" fill="#A5C3DD"/>
      <path d="M0 395 L155 335 L245 320 L340 305 L435 295 L530 285 L625 277 L720 287 L815 293 L910 300 L1005 305 L1100 310 L1200 320 L1200 500 L0 500 Z" fill="#8DB2D1"/>
    </g>
    
    {/* Middle mountains - flat 2.0 with varied peaks */}
    <g opacity="0.65">
      <path d="M0 405 L115 340 L160 365 L0 425 Z" fill="#92BCD8"/>
      <path d="M160 365 L115 340 L240 325 L285 350 Z" fill="#7DA7CA"/>
      <path d="M285 350 L240 325 L365 312 L410 337 Z" fill="#92BCD8"/>
      <path d="M410 337 L365 312 L490 305 L535 330 Z" fill="#7DA7CA"/>
      <path d="M535 330 L490 305 L615 298 L660 323 Z" fill="#92BCD8"/>
      <path d="M660 323 L615 298 L740 308 L785 333 Z" fill="#7DA7CA"/>
      <path d="M785 333 L740 308 L865 318 L910 343 Z" fill="#92BCD8"/>
      <path d="M910 343 L865 318 L990 325 L1035 350 Z" fill="#7DA7CA"/>
      <path d="M1035 350 L990 325 L1115 332 L1200 355 Z" fill="#92BCD8"/>
      <path d="M0 425 L160 365 L285 350 L410 337 L535 330 L660 323 L785 333 L910 343 L1035 350 L1200 355 L1200 500 L0 500 Z" fill="#6A94B8"/>
    </g>
    
    {/* Front mountains with snow caps - flat 2.0 enhanced */}
    <g opacity="0.78">
      <path d="M0 440 L125 368 L168 393 L0 458 Z" fill="#6D9DC2"/>
      <path d="M168 393 L125 368 L260 350 L303 375 Z" fill="#5888AD"/>
      <path d="M303 375 L260 350 L395 338 L438 363 Z" fill="#6D9DC2"/>
      <path d="M438 363 L395 338 L530 328 L573 353 Z" fill="#5888AD"/>
      <path d="M573 353 L530 328 L665 335 L708 360 Z" fill="#6D9DC2"/>
      <path d="M708 360 L665 335 L800 343 L843 368 Z" fill="#5888AD"/>
      <path d="M843 368 L800 343 L935 352 L978 377 Z" fill="#6D9DC2"/>
      <path d="M978 377 L935 352 L1070 358 L1113 383 Z" fill="#5888AD"/>
      <path d="M1113 383 L1070 358 L1200 365 L1200 388 Z" fill="#6D9DC2"/>
      <path d="M0 458 L168 393 L303 375 L438 363 L573 353 L708 360 L843 368 L978 377 L1113 383 L1200 388 L1200 500 L0 500 Z" fill="#4D769B"/>
    </g>
    
    {/* Snow caps on front mountains - enhanced with more peaks */}
    <g opacity="0.95">
      <path d="M125 368 L152 385 L98 385 Z" fill="white"/>
      <path d="M125 368 L140 377 L110 377 Z" fill="#F0F8FF" opacity="0.9"/>
      <path d="M125 368 L133 373 L117 373 Z" fill="#E6F3FF" opacity="0.7"/>
      
      <path d="M395 338 L425 358 L365 358 Z" fill="white"/>
      <path d="M395 338 L412 349 L378 349 Z" fill="#F0F8FF" opacity="0.9"/>
      <path d="M395 338 L404 344 L386 344 Z" fill="#E6F3FF" opacity="0.7"/>
      
      <path d="M665 335 L700 357 L630 357 Z" fill="white"/>
      <path d="M665 335 L684 347 L646 347 Z" fill="#F0F8FF" opacity="0.9"/>
      <path d="M665 335 L675 341 L655 341 Z" fill="#E6F3FF" opacity="0.7"/>
      
      <path d="M935 352 L970 373 L900 373 Z" fill="white"/>
      <path d="M935 352 L954 363 L916 363 Z" fill="#F0F8FF" opacity="0.9"/>
      <path d="M935 352 L945 358 L925 358 Z" fill="#E6F3FF" opacity="0.7"/>
    </g>
    
    {/* Rolling hills - flat 2.0 layered */}
    <path d="M0 462 L150 452 L300 445 L450 440 L600 448 L750 442 L900 438 L1050 445 L1200 450 L1200 500 L0 500 Z" 
          fill="#7DBF3C"/>
    <path d="M0 462 L150 452 L300 445 L450 440 L600 448 L750 442 L900 438 L1050 445 L1200 450 L1200 478 L0 478 Z" 
          fill="#6AA82E" opacity="0.35"/>
    <path d="M0 480 L200 475 L400 470 L600 474 L800 477 L1000 472 L1200 467 L1200 500 L0 500 Z" 
          fill="#6FB236"/>
    
    {/* Trees with flat 2.0 depth and shadows */}
    <g>
      {/* Tree 1 with shadow */}
      <ellipse cx="187" cy="487" rx="11" ry="3" fill="#5A9428" opacity="0.3"/>
      <rect x="180" y="450" width="12" height="35" fill="#6D4C41"/>
      <rect x="180" y="450" width="4" height="35" fill="#5A3D34"/>
      <path d="M186 450 L168 450 L186 420 L204 450 Z" fill="#2E7D32"/>
      <path d="M186 450 L168 450 L186 432 Z" fill="#1B5E20"/>
      <path d="M186 435 L170 435 L186 410 L202 435 Z" fill="#388E3C"/>
      <path d="M186 435 L170 435 L186 420 Z" fill="#2E7D32"/>
      
      {/* Tree 2 with shadow */}
      <ellipse cx="526" cy="488" rx="9" ry="3" fill="#5A9428" opacity="0.3"/>
      <rect x="520" y="455" width="10" height="30" fill="#6D4C41"/>
      <rect x="520" y="455" width="3.5" height="30" fill="#5A3D34"/>
      <path d="M525 455 L510 455 L525 430 L540 455 Z" fill="#2E7D32"/>
      <path d="M525 455 L510 455 L525 440 Z" fill="#1B5E20"/>
      <path d="M525 442 L512 442 L525 420 L538 442 Z" fill="#388E3C"/>
      <path d="M525 442 L512 442 L525 430 Z" fill="#2E7D32"/>
      
      {/* Tree 3 with shadow */}
      <ellipse cx="857" cy="484" rx="10" ry="3" fill="#5A9428" opacity="0.3"/>
      <rect x="850" y="448" width="11" height="33" fill="#6D4C41"/>
      <rect x="850" y="448" width="4" height="33" fill="#5A3D34"/>
      <path d="M855.5 448 L839 448 L855.5 418 L872 448 Z" fill="#2E7D32"/>
      <path d="M855.5 448 L839 448 L855.5 430 Z" fill="#1B5E20"/>
      <path d="M855.5 433 L841 433 L855.5 408 L870 433 Z" fill="#388E3C"/>
      <path d="M855.5 433 L841 433 L855.5 419 Z" fill="#2E7D32"/>
      
      {/* Tree 4 with shadow */}
      <ellipse cx="1086" cy="485" rx="9" ry="3" fill="#5A9428" opacity="0.3"/>
      <rect x="1080" y="452" width="10" height="30" fill="#6D4C41"/>
      <rect x="1080" y="452" width="3.5" height="30" fill="#5A3D34"/>
      <path d="M1085 452 L1070 452 L1085 427 L1100 452 Z" fill="#2E7D32"/>
      <path d="M1085 452 L1070 452 L1085 437 Z" fill="#1B5E20"/>
      <path d="M1085 439 L1072 439 L1085 417 L1098 439 Z" fill="#388E3C"/>
      <path d="M1085 439 L1072 439 L1085 427 Z" fill="#2E7D32"/>
    </g>
    
    {/* Small house - flat 2.0 with depth */}
    <g>
      <ellipse cx="947.5" cy="501" rx="30" ry="4" fill="#6FB236" opacity="0.25"/>
      {/* House side (darker) */}
      <path d="M975 455 L975 500 L920 500 L920 475 Z" fill="#D4956A"/>
      {/* House front (lighter) */}
      <rect x="920" y="455" width="55" height="45" fill="#E8A87C"/>
      {/* Roof side (darker) */}
      <path d="M983 455 L947.5 430 L947.5 430 L975 455 Z" fill="#A81828"/>
      {/* Roof front (lighter) */}
      <path d="M912 455 L947.5 430 L983 455 Z" fill="#C41E3A"/>
      {/* Door with depth */}
      <rect x="936" y="475" width="15" height="25" fill="#5D4037"/>
      <rect x="935" y="475" width="15" height="25" fill="#795548"/>
      {/* Window with depth */}
      <rect x="956" y="465" width="12" height="12" fill="#6BA5C7" opacity="0.8"/>
      <rect x="955" y="465" width="12" height="12" fill="#90CAF9" opacity="0.75"/>
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
    
    {/* Mountain silhouettes - flat 2.0 layered */}
    <g opacity="0.82">
      <path d="M0 370 L120 300 L175 325 L0 390 Z" fill="#152535"/>
      <path d="M175 325 L120 300 L235 280 L290 305 Z" fill="#0D1B2A"/>
      <path d="M290 305 L235 280 L350 260 L405 285 Z" fill="#152535"/>
      <path d="M405 285 L350 260 L465 250 L520 275 Z" fill="#0D1B2A"/>
      <path d="M520 275 L465 250 L580 240 L635 265 Z" fill="#152535"/>
      <path d="M635 265 L580 240 L695 250 L750 275 Z" fill="#0D1B2A"/>
      <path d="M750 275 L695 250 L810 260 L865 285 Z" fill="#152535"/>
      <path d="M865 285 L810 260 L925 255 L980 280 Z" fill="#0D1B2A"/>
      <path d="M980 280 L925 255 L1040 265 L1200 290 Z" fill="#152535"/>
      <path d="M0 390 L175 325 L290 305 L405 285 L520 275 L635 265 L750 275 L865 285 L980 280 L1200 290 L1200 500 L0 500 Z" fill="#0A1420"/>
    </g>
    <g opacity="0.88">
      <path d="M0 395 L130 330 L180 355 L0 420 Z" fill="#1F2E40"/>
      <path d="M180 355 L130 330 L270 315 L320 340 Z" fill="#152030"/>
      <path d="M320 340 L270 315 L410 300 L460 325 Z" fill="#1F2E40"/>
      <path d="M460 325 L410 300 L550 290 L600 315 Z" fill="#152030"/>
      <path d="M600 315 L550 290 L690 300 L740 325 Z" fill="#1F2E40"/>
      <path d="M740 325 L690 300 L830 310 L880 335 Z" fill="#152030"/>
      <path d="M880 335 L830 310 L970 320 L1200 345 Z" fill="#1F2E40"/>
      <path d="M0 420 L180 355 L320 340 L460 325 L600 315 L740 325 L880 335 L1200 345 L1200 500 L0 500 Z" fill="#0F1820"/>
    </g>
    <g opacity="0.92">
      <path d="M0 420 L120 355 L170 380 L0 445 Z" fill="#293847"/>
      <path d="M170 380 L120 355 L260 340 L310 365 Z" fill="#1F2A37"/>
      <path d="M310 365 L260 340 L400 330 L450 355 Z" fill="#293847"/>
      <path d="M450 355 L400 330 L540 325 L590 350 Z" fill="#1F2A37"/>
      <path d="M590 350 L540 325 L680 335 L730 360 Z" fill="#293847"/>
      <path d="M730 360 L680 335 L820 345 L870 370 Z" fill="#1F2A37"/>
      <path d="M870 370 L820 345 L960 355 L1200 380 Z" fill="#293847"/>
      <path d="M0 445 L170 380 L310 365 L450 355 L590 350 L730 360 L870 370 L1200 380 L1200 500 L0 500 Z" fill="#151F2C"/>
    </g>
    
    {/* Dark hills - flat 2.0 layered */}
    <path d="M0 452 L150 442 L300 435 L450 430 L600 438 L750 432 L900 428 L1050 435 L1200 440 L1200 500 L0 500 Z" 
          fill="#1A2735"/>
    <path d="M0 452 L150 442 L300 435 L450 430 L600 438 L750 432 L900 428 L1050 435 L1200 440 L1200 475 L0 475 Z" 
          fill="#121D28" opacity="0.4"/>
    
    {/* Tree silhouettes - flat 2.0 with depth */}
    <g>
      <ellipse cx="187" cy="478" rx="11" ry="3" fill="#0A1420" opacity="0.4"/>
      <rect x="180" y="440" width="12" height="35" fill="#0A1118"/>
      <rect x="180" y="440" width="4" height="35" fill="#050810"/>
      <path d="M186 440 L168 440 L186 410 L204 440 Z" fill="#0F1821"/>
      <path d="M186 440 L168 440 L186 422 Z" fill="#08100C"/>
      
      <ellipse cx="526" cy="478" rx="9" ry="3" fill="#0A1420" opacity="0.4"/>
      <rect x="520" y="445" width="10" height="30" fill="#0A1118"/>
      <rect x="520" y="445" width="3.5" height="30" fill="#050810"/>
      <path d="M525 445 L510 445 L525 420 L540 445 Z" fill="#0F1821"/>
      <path d="M525 445 L510 445 L525 430 Z" fill="#08100C"/>
      
      <ellipse cx="857" cy="474" rx="10" ry="3" fill="#0A1420" opacity="0.4"/>
      <rect x="850" y="438" width="11" height="33" fill="#0A1118"/>
      <rect x="850" y="438" width="4" height="33" fill="#050810"/>
      <path d="M855.5 438 L839 438 L855.5 408 L872 438 Z" fill="#0F1821"/>
      <path d="M855.5 438 L839 438 L855.5 420 Z" fill="#08100C"/>
    </g>
    
    {/* House with warm window light - flat 2.0 with depth */}
    <g>
      <ellipse cx="947.5" cy="491" rx="30" ry="4" fill="#0A1420" opacity="0.45"/>
      {/* House side (darker) */}
      <path d="M975 445 L975 490 L920 490 L920 465 Z" fill="#12141F"/>
      {/* House front (lighter) */}
      <rect x="920" y="445" width="55" height="45" fill="#1A1A2E"/>
      {/* Roof side (darker) */}
      <path d="M983 445 L947.5 420 L947.5 420 L975 445 Z" fill="#08080F"/>
      {/* Roof front (lighter) */}
      <path d="M912 445 L947.5 420 L983 445 Z" fill="#0F0F1E"/>
      {/* Door with depth */}
      <rect x="936" y="465" width="15" height="25" fill="#06060D"/>
      <rect x="935" y="465" width="15" height="25" fill="#0D0D1A"/>
      {/* Glowing window with enhanced depth */}
      <rect x="956" y="455" width="12" height="12" fill="#FF8C1A"/>
      <rect x="955" y="455" width="12" height="12" fill="#FFB347" opacity="0.95"/>
      <rect x="955" y="455" width="12" height="12" fill="#FFD700" opacity="0.4" className="animate-pulse-slow"/>
    </g>
  </svg>
);
