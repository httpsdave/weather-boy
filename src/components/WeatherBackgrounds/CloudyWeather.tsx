import React from 'react';

export const PartlyCloudy: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 1200 500" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    {/* Sky gradient */}
    <defs>
      <linearGradient id="partlyCloudySkyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#6BA3D0', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#B8D8F0', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <rect width="1200" height="500" fill="url(#partlyCloudySkyGradient)" />
    
    {/* Sun partially behind clouds */}
    <g className="animate-float" opacity="0.7">
      <circle cx="300" cy="110" r="45" fill="#FFD700"/>
      <circle cx="300" cy="110" r="38" fill="#FFA500"/>
    </g>
    
    {/* Multiple clouds with improved depth */}
    <g className="animate-float">
      <ellipse cx="250" cy="120" rx="55" ry="35" fill="white" opacity="0.98"/>
      <ellipse cx="295" cy="115" rx="60" ry="38" fill="white" opacity="1"/>
      <ellipse cx="340" cy="122" rx="50" ry="32" fill="white" opacity="0.98"/>
      <ellipse cx="280" cy="135" rx="45" ry="28" fill="#F8F9FA" opacity="0.95"/>
    </g>
    
    <g className="animate-float-delayed">
      <ellipse cx="750" cy="90" rx="60" ry="38" fill="white" opacity="0.96"/>
      <ellipse cx="800" cy="85" rx="55" ry="35" fill="white" opacity="0.98"/>
      <ellipse cx="840" cy="93" rx="50" ry="32" fill="white" opacity="0.96"/>
      <ellipse cx="790" cy="105" rx="48" ry="30" fill="#F5F7F9" opacity="0.92"/>
    </g>
    
    <g className="animate-float" opacity="0.92">
      <ellipse cx="950" cy="160" rx="50" ry="32" fill="white" opacity="0.98"/>
      <ellipse cx="990" cy="155" rx="48" ry="30" fill="white" opacity="1"/>
      <ellipse cx="1025" cy="163" rx="45" ry="28" fill="white" opacity="0.96"/>
    </g>
    
    {/* Mountains - flat 2.0 with distinct faces */}
    {/* Back mountain range */}
    <g opacity="0.6">
      <path d="M0 380 L120 300 L180 330 L0 400 Z" fill="#7B9AB5"/>
      <path d="M180 330 L120 300 L240 280 L300 310 Z" fill="#6888A8"/>
      <path d="M300 310 L240 280 L360 260 L420 290 Z" fill="#7B9AB5"/>
      <path d="M420 290 L360 260 L480 250 L540 280 Z" fill="#6888A8"/>
      <path d="M540 280 L480 250 L600 240 L660 270 Z" fill="#7B9AB5"/>
      <path d="M660 270 L600 240 L720 250 L780 280 Z" fill="#6888A8"/>
      <path d="M780 280 L720 250 L840 260 L900 290 Z" fill="#7B9AB5"/>
      <path d="M900 290 L840 260 L960 250 L1020 280 Z" fill="#6888A8"/>
      <path d="M1020 280 L960 250 L1080 260 L1200 290 Z" fill="#7B9AB5"/>
      <path d="M0 400 L180 330 L300 310 L420 290 L540 280 L660 270 L780 280 L900 290 L1020 280 L1200 290 L1200 500 L0 500 Z" fill="#5A7A94"/>
    </g>
    {/* Front mountain range */}
    <g opacity="0.75">
      <path d="M0 420 L150 340 L200 365 L0 445 Z" fill="#6B8FAF"/>
      <path d="M200 365 L150 340 L300 320 L350 345 Z" fill="#5A7D9D"/>
      <path d="M350 345 L300 320 L450 305 L500 330 Z" fill="#6B8FAF"/>
      <path d="M500 330 L450 305 L600 295 L650 320 Z" fill="#5A7D9D"/>
      <path d="M650 320 L600 295 L750 285 L800 310 Z" fill="#6B8FAF"/>
      <path d="M800 310 L750 285 L900 300 L950 325 Z" fill="#5A7D9D"/>
      <path d="M950 325 L900 300 L1050 310 L1200 340 Z" fill="#6B8FAF"/>
      <path d="M0 445 L200 365 L350 345 L500 330 L650 320 L800 310 L950 325 L1200 340 L1200 500 L0 500 Z" fill="#496988"/>
    </g>
    
    {/* Hills - layered flat 2.0 style */}
    <path d="M0 445 L150 435 L300 425 L450 420 L600 428 L750 422 L900 418 L1050 425 L1200 430 L1200 500 L0 500 Z" 
          fill="#6FA168"/>
    <path d="M0 445 L150 435 L300 425 L450 420 L600 428 L750 422 L900 418 L1050 425 L1200 430 L1200 465 L0 465 Z" 
          fill="#5D8E56" opacity="0.4"/>
    <path d="M0 468 L200 463 L400 458 L600 462 L800 465 L1000 460 L1200 455 L1200 500 L0 500 Z" 
          fill="#5A8B54"/>
    
    {/* Trees - flat 2.0 with depth */}
    <g>
      {/* Tree 1 with shadow */}
      <ellipse cx="207" cy="485" rx="10" ry="3" fill="#4A7844" opacity="0.3"/>
      <rect x="200" y="450" width="11" height="33" fill="#6D4C41"/>
      <rect x="200" y="450" width="4" height="33" fill="#5A3D34"/>
      <path d="M205.5 450 L188 450 L205.5 422 L223 450 Z" fill="#2E7D32"/>
      <path d="M205.5 450 L188 450 L205.5 434 Z" fill="#1B5E20"/>
      <path d="M205.5 436 L191 436 L205.5 412 L220 436 Z" fill="#388E3C"/>
      <path d="M205.5 436 L191 436 L205.5 422 Z" fill="#2E7D32"/>
      
      {/* Tree 2 with shadow */}
      <ellipse cx="486" cy="488" rx="9" ry="3" fill="#4A7844" opacity="0.3"/>
      <rect x="480" y="455" width="10" height="30" fill="#6D4C41"/>
      <rect x="480" y="455" width="3.5" height="30" fill="#5A3D34"/>
      <path d="M485 455 L470 455 L485 430 L500 455 Z" fill="#2E7D32"/>
      <path d="M485 455 L470 455 L485 441 Z" fill="#1B5E20"/>
      
      {/* Tree 3 with shadow */}
      <ellipse cx="828" cy="486" rx="11" ry="3" fill="#4A7844" opacity="0.3"/>
      <rect x="820" y="448" width="12" height="35" fill="#6D4C41"/>
      <rect x="820" y="448" width="4" height="35" fill="#5A3D34"/>
      <path d="M826 448 L808 448 L826 418 L844 448 Z" fill="#2E7D32"/>
      <path d="M826 448 L808 448 L826 430 Z" fill="#1B5E20"/>
      <path d="M826 433 L810 433 L826 408 L842 433 Z" fill="#388E3C"/>
      <path d="M826 433 L810 433 L826 419 Z" fill="#2E7D32"/>
      
      {/* Tree 4 with shadow */}
      <ellipse cx="1056" cy="485" rx="9" ry="3" fill="#4A7844" opacity="0.3"/>
      <rect x="1050" y="452" width="10" height="30" fill="#6D4C41"/>
      <rect x="1050" y="452" width="3.5" height="30" fill="#5A3D34"/>
      <path d="M1055 452 L1040 452 L1055 427 L1070 452 Z" fill="#2E7D32"/>
      <path d="M1055 452 L1040 452 L1055 438 Z" fill="#1B5E20"/>
    </g>
    
    {/* Small house - flat 2.0 with depth */}
    <g>
      <ellipse cx="675" cy="498" rx="28" ry="4" fill="#5A8B54" opacity="0.25"/>
      {/* House side (darker) */}
      <path d="M700 455 L700 497 L650 497 L650 475 Z" fill="#B8956A"/>
      {/* House front (lighter) */}
      <rect x="650" y="455" width="50" height="42" fill="#D4A574"/>
      {/* Roof side (darker) */}
      <path d="M707 455 L675 432 L675 432 L700 455 Z" fill="#9A2820"/>
      {/* Roof front (lighter) */}
      <path d="M643 455 L675 432 L707 455 Z" fill="#B8342A"/>
      {/* Door with depth */}
      <rect x="664" y="473" width="14" height="24" fill="#5D4037"/>
      <rect x="663" y="473" width="14" height="24" fill="#795548"/>
      {/* Window with depth */}
      <rect x="683" y="464" width="11" height="11" fill="#6BA5C7" opacity="0.7"/>
      <rect x="682" y="464" width="11" height="11" fill="#87CEEB" opacity="0.75"/>
    </g>
  </svg>
);

export const Overcast: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 1200 500" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    {/* Dark gray sky */}
    <defs>
      <linearGradient id="overcastSkyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#7A8A99', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#A8B5C2', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <rect width="1200" height="500" fill="url(#overcastSkyGradient)" />
    
    {/* Dense cloud coverage with enhanced depth */}
    <g className="animate-float" opacity="0.95">
      <ellipse cx="100" cy="80" rx="70" ry="45" fill="#C8D0D8"/>
      <ellipse cx="160" cy="75" rx="65" ry="42" fill="#C8D0D8"/>
      <ellipse cx="210" cy="82" rx="60" ry="40" fill="#C8D0D8"/>
      <ellipse cx="145" cy="95" rx="55" ry="35" fill="#BDC5CD"/>
    </g>
    
    <g className="animate-float-delayed" opacity="0.98">
      <ellipse cx="350" cy="100" rx="75" ry="48" fill="#CDD5DD"/>
      <ellipse cx="415" cy="95" rx="70" ry="45" fill="#CDD5DD"/>
      <ellipse cx="475" cy="103" rx="65" ry="42" fill="#CDD5DD"/>
      <ellipse cx="410" cy="115" rx="60" ry="38" fill="#C2C4D0"/>
    </g>
    
    <g className="animate-float" opacity="0.96">
      <ellipse cx="650" cy="70" rx="68" ry="44" fill="#C8D0D8"/>
      <ellipse cx="710" cy="65" rx="72" ry="46" fill="#C8D0D8"/>
      <ellipse cx="770" cy="73" rx="65" ry="42" fill="#C8D0D8"/>
    </g>
    
    <g className="animate-float-delayed" opacity="0.94">
      <ellipse cx="950" cy="110" rx="70" ry="45" fill="#C7CFD7"/>
      <ellipse cx="1010" cy="105" rx="68" ry="43" fill="#C7CFD7"/>
      <ellipse cx="1065" cy="113" rx="62" ry="40" fill="#C7CFD7"/>
      <ellipse cx="1005" cy="125" rx="58" ry="37" fill="#BDC5CD"/>
    </g>
    
    {/* Lower cloud layer */}
    <g className="animate-float" opacity="0.91">
      <ellipse cx="200" cy="160" rx="80" ry="50" fill="#B8C0C8"/>
      <ellipse cx="270" cy="155" rx="75" ry="48" fill="#B8C0C8"/>
      <ellipse cx="330" cy="163" rx="70" ry="45" fill="#B8C0C8"/>
    </g>
    
    <g className="animate-float-delayed" opacity="0.93">
      <ellipse cx="600" cy="140" rx="78" ry="50" fill="#BDC5CD"/>
      <ellipse cx="670" cy="135" rx="73" ry="47" fill="#BDC5CD"/>
      <ellipse cx="735" cy="143" rx="68" ry="44" fill="#BDC5CD"/>
    </g>
    
    {/* Distant mountains - flat 2.0 muted style */}
    <g opacity="0.65">
      <path d="M0 385 L100 315 L150 340 L0 405 Z" fill="#6F8290"/>
      <path d="M150 340 L100 315 L200 305 L250 330 Z" fill="#5F7280"/>
      <path d="M250 330 L200 305 L350 285 L400 310 Z" fill="#6F8290"/>
      <path d="M400 310 L350 285 L500 270 L550 295 Z" fill="#5F7280"/>
      <path d="M550 295 L500 270 L650 280 L700 305 Z" fill="#6F8290"/>
      <path d="M700 305 L650 280 L800 290 L850 315 Z" fill="#5F7280"/>
      <path d="M850 315 L800 290 L950 285 L1000 310 Z" fill="#6F8290"/>
      <path d="M1000 310 L950 285 L1100 295 L1200 320 Z" fill="#5F7280"/>
      <path d="M0 405 L150 340 L250 330 L400 310 L550 295 L700 305 L850 315 L1000 310 L1200 320 L1200 500 L0 500 Z" fill="#556575"/>
    </g>
    <g opacity="0.75">
      <path d="M0 425 L120 355 L180 375 L0 450 Z" fill="#5E7179"/>
      <path d="M180 375 L120 355 L280 345 L340 365 Z" fill="#4E6169"/>
      <path d="M340 365 L280 345 L440 335 L500 355 Z" fill="#5E7179"/>
      <path d="M500 355 L440 335 L600 330 L660 350 Z" fill="#4E6169"/>
      <path d="M660 350 L600 330 L760 340 L820 360 Z" fill="#5E7179"/>
      <path d="M820 360 L760 340 L920 345 L980 365 Z" fill="#4E6169"/>
      <path d="M980 365 L920 345 L1080 355 L1200 375 Z" fill="#5E7179"/>
      <path d="M0 450 L180 375 L340 365 L500 355 L660 350 L820 360 L980 365 L1200 375 L1200 500 L0 500 Z" fill="#445561"/>
    </g>
    
    {/* Hills - flat 2.0 layered */}
    <path d="M0 448 L150 438 L300 430 L450 425 L600 432 L750 427 L900 423 L1050 430 L1200 435 L1200 500 L0 500 Z" 
          fill="#536B54"/>
    <path d="M0 448 L150 438 L300 430 L450 425 L600 432 L750 427 L900 423 L1050 430 L1200 435 L1200 468 L0 468 Z" 
          fill="#44574A" opacity="0.4"/>
    <path d="M0 471 L200 466 L400 461 L600 465 L800 468 L1000 463 L1200 458 L1200 500 L0 500 Z" 
          fill="#455945"/>
    
    {/* Muted trees - flat 2.0 with subtle depth */}
    <g>
      <ellipse cx="357" cy="490" rx="10" ry="3" fill="#3A4A3A" opacity="0.3"/>
      <rect x="350" y="455" width="11" height="32" fill="#4A4034"/>
      <rect x="350" y="455" width="4" height="32" fill="#3A3028"/>
      <path d="M355.5 455 L340 455 L355.5 427 L371 455 Z" fill="#3A4A2E"/>
      <path d="M355.5 455 L340 455 L355.5 439 Z" fill="#2A3A1E"/>
      
      <ellipse cx="758" cy="488" rx="11" ry="3" fill="#3A4A3A" opacity="0.3"/>
      <rect x="750" y="450" width="12" height="35" fill="#4A4034"/>
      <rect x="750" y="450" width="4" height="35" fill="#3A3028"/>
      <path d="M756 450 L738 450 L756 420 L774 450 Z" fill="#3A4A2E"/>
      <path d="M756 450 L738 450 L756 432 Z" fill="#2A3A1E"/>
      <path d="M756 435 L740 435 L756 410 L772 435 Z" fill="#4A5A38"/>
      <path d="M756 435 L740 435 L756 421 Z" fill="#3A4A28"/>
    </g>
  </svg>
);

export const PartlyCloudyDay = PartlyCloudy;

export const PartlyCloudyNight: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 1200 500" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    {/* Night sky gradient */}
    <defs>
      <linearGradient id="partlyCloudyNightSkyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#1a2332', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#2d3e50', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <rect width="1200" height="500" fill="url(#partlyCloudyNightSkyGradient)" />
    
    {/* Stars */}
    <circle cx="150" cy="60" r="2" fill="white" opacity="0.9"/>
    <circle cx="280" cy="45" r="1.5" fill="white" opacity="0.8"/>
    <circle cx="520" cy="70" r="2" fill="white" opacity="0.9"/>
    <circle cx="680" cy="55" r="1.5" fill="white" opacity="0.7"/>
    <circle cx="850" cy="40" r="2" fill="white" opacity="0.95"/>
    <circle cx="1000" cy="65" r="1.5" fill="white" opacity="0.8"/>
    <circle cx="1120" cy="50" r="2" fill="white" opacity="0.85"/>
    
    {/* Moon partially behind clouds */}
    <g className="animate-float" opacity="0.85">
      <circle cx="300" cy="110" r="42" fill="#f0e6d2"/>
      <circle cx="308" cy="105" r="38" fill="#e8dcc0"/>
      {/* Moon craters */}
      <circle cx="295" cy="105" r="6" fill="#d4c4a8" opacity="0.3"/>
      <circle cx="310" cy="115" r="4" fill="#d4c4a8" opacity="0.25"/>
    </g>
    
    {/* Multiple clouds with night coloring - improved depth */}
    <g className="animate-float">
      <ellipse cx="250" cy="120" rx="55" ry="35" fill="#8a9db0" opacity="0.78"/>
      <ellipse cx="295" cy="115" rx="60" ry="38" fill="#8a9db0" opacity="0.82"/>
      <ellipse cx="340" cy="122" rx="50" ry="32" fill="#8a9db0" opacity="0.78"/>
      <ellipse cx="280" cy="135" rx="45" ry="28" fill="#7a8d9f" opacity="0.72"/>
    </g>
    
    <g className="animate-float-delayed">
      <ellipse cx="750" cy="90" rx="60" ry="38" fill="#8a9db0" opacity="0.75"/>
      <ellipse cx="800" cy="85" rx="55" ry="35" fill="#8a9db0" opacity="0.78"/>
      <ellipse cx="840" cy="93" rx="50" ry="32" fill="#8a9db0" opacity="0.75"/>
      <ellipse cx="790" cy="105" rx="48" ry="30" fill="#7a8d9f" opacity="0.68"/>
    </g>
    
    <g className="animate-float" opacity="0.7">
      <ellipse cx="950" cy="160" rx="50" ry="32" fill="#8a9db0" opacity="0.82"/>
      <ellipse cx="990" cy="155" rx="48" ry="30" fill="#8a9db0" opacity="0.85"/>
      <ellipse cx="1025" cy="163" rx="45" ry="28" fill="#8a9db0" opacity="0.78"/>
    </g>
    
    {/* Dark mountains - flat 2.0 style */}
    <g opacity="0.75">
      <path d="M0 380 L120 305 L175 330 L0 400 Z" fill="#2D4558"/>
      <path d="M175 330 L120 305 L235 285 L290 310 Z" fill="#1F3545"/>
      <path d="M290 310 L235 285 L350 265 L405 290 Z" fill="#2D4558"/>
      <path d="M405 290 L350 265 L465 255 L520 280 Z" fill="#1F3545"/>
      <path d="M520 280 L465 255 L580 245 L635 270 Z" fill="#2D4558"/>
      <path d="M635 270 L580 245 L695 255 L750 280 Z" fill="#1F3545"/>
      <path d="M750 280 L695 255 L810 265 L865 290 Z" fill="#2D4558"/>
      <path d="M865 290 L810 265 L925 260 L980 285 Z" fill="#1F3545"/>
      <path d="M980 285 L925 260 L1040 270 L1200 295 Z" fill="#2D4558"/>
      <path d="M0 400 L175 330 L290 310 L405 290 L520 280 L635 270 L750 280 L865 290 L980 285 L1200 295 L1200 500 L0 500 Z" fill="#192838"/>
    </g>
    <g opacity="0.85">
      <path d="M0 420 L140 345 L190 365 L0 440 Z" fill="#263A4D"/>
      <path d="M190 365 L140 345 L280 330 L330 350 Z" fill="#1A2A3D"/>
      <path d="M330 350 L280 330 L420 315 L470 335 Z" fill="#263A4D"/>
      <path d="M470 335 L420 315 L560 305 L610 325 Z" fill="#1A2A3D"/>
      <path d="M610 325 L560 305 L700 295 L750 315 Z" fill="#263A4D"/>
      <path d="M750 315 L700 295 L840 305 L890 325 Z" fill="#1A2A3D"/>
      <path d="M890 325 L840 305 L980 315 L1200 340 Z" fill="#263A4D"/>
      <path d="M0 440 L190 365 L330 350 L470 335 L610 325 L750 315 L890 325 L1200 340 L1200 500 L0 500 Z" fill="#14232E"/>
    </g>
    
    {/* Dark hills - flat 2.0 layered */}
    <path d="M0 445 L150 435 L300 428 L450 423 L600 430 L750 425 L900 420 L1050 427 L1200 432 L1200 500 L0 500 Z" 
          fill="#2A4536"/>
    <path d="M0 445 L150 435 L300 428 L450 423 L600 430 L750 425 L900 420 L1050 427 L1200 432 L1200 465 L0 465 Z" 
          fill="#1F3528" opacity="0.4"/>
    <path d="M0 468 L200 463 L400 458 L600 462 L800 465 L1000 460 L1200 455 L1200 500 L0 500 Z" 
          fill="#1D3326"/>
    
    {/* Dark trees - flat 2.0 with depth */}
    <g>
      <ellipse cx="207" cy="485" rx="10" ry="3" fill="#0F1F18" opacity="0.4"/>
      <rect x="200" y="450" width="11" height="33" fill="#2d2520"/>
      <rect x="200" y="450" width="4" height="33" fill="#1D1510"/>
      <path d="M205.5 450 L188 450 L205.5 422 L223 450 Z" fill="#1a3520"/>
      <path d="M205.5 450 L188 450 L205.5 434 Z" fill="#0F2510"/>
      <path d="M205.5 436 L191 436 L205.5 412 L220 436 Z" fill="#234528"/>
      <path d="M205.5 436 L191 436 L205.5 422 Z" fill="#183518"/>
      
      <ellipse cx="486" cy="488" rx="9" ry="3" fill="#0F1F18" opacity="0.4"/>
      <rect x="480" y="455" width="10" height="30" fill="#2d2520"/>
      <rect x="480" y="455" width="3.5" height="30" fill="#1D1510"/>
      <path d="M485 455 L470 455 L485 430 L500 455 Z" fill="#1a3520"/>
      <path d="M485 455 L470 455 L485 441 Z" fill="#0F2510"/>
      
      <ellipse cx="828" cy="486" rx="11" ry="3" fill="#0F1F18" opacity="0.4"/>
      <rect x="820" y="448" width="12" height="35" fill="#2d2520"/>
      <rect x="820" y="448" width="4" height="35" fill="#1D1510"/>
      <path d="M826 448 L808 448 L826 418 L844 448 Z" fill="#1a3520"/>
      <path d="M826 448 L808 448 L826 430 Z" fill="#0F2510"/>
      <path d="M826 433 L810 433 L826 408 L842 433 Z" fill="#234528"/>
      <path d="M826 433 L810 433 L826 419 Z" fill="#183518"/>
      
      <ellipse cx="1056" cy="485" rx="9" ry="3" fill="#0F1F18" opacity="0.4"/>
      <rect x="1050" y="452" width="10" height="30" fill="#2d2520"/>
      <rect x="1050" y="452" width="3.5" height="30" fill="#1D1510"/>
      <path d="M1055 452 L1040 452 L1055 427 L1070 452 Z" fill="#1a3520"/>
      <path d="M1055 452 L1040 452 L1055 438 Z" fill="#0F2510"/>
    </g>
    
    {/* Small house - flat 2.0 with depth and warm window */}
    <g>
      <ellipse cx="675" cy="498" rx="28" ry="4" fill="#1D3326" opacity="0.35"/>
      {/* House side (darker) */}
      <path d="M700 455 L700 497 L650 497 L650 475 Z" fill="#2F3A45"/>
      {/* House front (lighter) */}
      <rect x="650" y="455" width="50" height="42" fill="#3a4550"/>
      {/* Roof side (darker) */}
      <path d="M707 455 L675 432 L675 432 L700 455 Z" fill="#1A1410"/>
      {/* Roof front (lighter) */}
      <path d="M643 455 L675 432 L707 455 Z" fill="#2a2220"/>
      {/* Door with depth */}
      <rect x="664" y="473" width="14" height="24" fill="#1D1510"/>
      <rect x="663" y="473" width="14" height="24" fill="#2d2520"/>
      {/* Glowing window */}
      <rect x="683" y="464" width="11" height="11" fill="#ffaa33"/>
      <rect x="682" y="464" width="11" height="11" fill="#ffcc66" opacity="0.85"/>
      <rect x="682" y="464" width="11" height="11" fill="#fff9e6" opacity="0.3"/>
    </g>
  </svg>
);

export const OvercastDay = Overcast;

export const OvercastNight: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 1200 500" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    {/* Dark night sky */}
    <defs>
      <linearGradient id="overcastNightSkyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#2a3540', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#4a5560', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <rect width="1200" height="500" fill="url(#overcastNightSkyGradient)" />
    
    {/* Dense cloud coverage - darker for night with better depth */}
    <g className="animate-float" opacity="0.88">
      <ellipse cx="100" cy="80" rx="70" ry="45" fill="#626D78"/>
      <ellipse cx="160" cy="75" rx="65" ry="42" fill="#626D78"/>
      <ellipse cx="210" cy="82" rx="60" ry="40" fill="#626D78"/>
      <ellipse cx="145" cy="95" rx="55" ry="35" fill="#525D68"/>
    </g>
    
    <g className="animate-float-delayed" opacity="0.92">
      <ellipse cx="350" cy="100" rx="75" ry="48" fill="#687078"/>
      <ellipse cx="415" cy="95" rx="70" ry="45" fill="#687078"/>
      <ellipse cx="475" cy="103" rx="65" ry="42" fill="#687078"/>
      <ellipse cx="410" cy="115" rx="60" ry="38" fill="#5d6570"/>
    </g>
    
    <g className="animate-float" opacity="0.9">
      <ellipse cx="650" cy="70" rx="68" ry="44" fill="#626D78"/>
      <ellipse cx="710" cy="65" rx="72" ry="46" fill="#626D78"/>
      <ellipse cx="770" cy="73" rx="65" ry="42" fill="#626D78"/>
    </g>
    
    <g className="animate-float-delayed" opacity="0.88">
      <ellipse cx="950" cy="110" rx="70" ry="45" fill="#676F78"/>
      <ellipse cx="1010" cy="105" rx="68" ry="43" fill="#676F78"/>
      <ellipse cx="1065" cy="113" rx="62" ry="40" fill="#676F78"/>
      <ellipse cx="1005" cy="125" rx="58" ry="37" fill="#575F68"/>
    </g>
    
    {/* Lower cloud layer */}
    <g className="animate-float" opacity="0.84">
      <ellipse cx="200" cy="160" rx="80" ry="50" fill="#525D68"/>
      <ellipse cx="270" cy="155" rx="75" ry="48" fill="#525D68"/>
      <ellipse cx="330" cy="163" rx="70" ry="45" fill="#525D68"/>
    </g>
    
    <g className="animate-float-delayed" opacity="0.86">
      <ellipse cx="600" cy="140" rx="78" ry="50" fill="#586068"/>
      <ellipse cx="670" cy="135" rx="73" ry="47" fill="#586068"/>
      <ellipse cx="735" cy="143" rx="68" ry="44" fill="#586068"/>
    </g>
    
    {/* Very dark mountains - flat 2.0 style */}
    <g opacity="0.82">
      <path d="M0 385 L100 320 L150 345 L0 405 Z" fill="#2A3845"/>
      <path d="M150 345 L100 320 L200 310 L250 335 Z" fill="#1C2832"/>
      <path d="M250 335 L200 310 L350 290 L400 315 Z" fill="#2A3845"/>
      <path d="M400 315 L350 290 L500 275 L550 300 Z" fill="#1C2832"/>
      <path d="M550 300 L500 275 L650 285 L700 310 Z" fill="#2A3845"/>
      <path d="M700 310 L650 285 L800 295 L850 320 Z" fill="#1C2832"/>
      <path d="M850 320 L800 295 L950 290 L1000 315 Z" fill="#2A3845"/>
      <path d="M1000 315 L950 290 L1100 300 L1200 325 Z" fill="#1C2832"/>
      <path d="M0 405 L150 345 L250 335 L400 315 L550 300 L700 310 L850 320 L1000 315 L1200 325 L1200 500 L0 500 Z" fill="#141E28"/>
    </g>
    <g opacity="0.88">
      <path d="M0 425 L110 360 L165 380 L0 450 Z" fill="#232F3C"/>
      <path d="M165 380 L110 360 L270 350 L325 370 Z" fill="#171F2C"/>
      <path d="M325 370 L270 350 L430 340 L485 360 Z" fill="#232F3C"/>
      <path d="M485 360 L430 340 L590 335 L645 355 Z" fill="#171F2C"/>
      <path d="M645 355 L590 335 L750 345 L805 365 Z" fill="#232F3C"/>
      <path d="M805 365 L750 345 L910 350 L965 370 Z" fill="#171F2C"/>
      <path d="M965 370 L910 350 L1070 360 L1200 380 Z" fill="#232F3C"/>
      <path d="M0 450 L165 380 L325 370 L485 360 L645 355 L805 365 L965 370 L1200 380 L1200 500 L0 500 Z" fill="#0F171E"/>
    </g>
    
    {/* Dark hills - flat 2.0 layered */}
    <path d="M0 448 L150 438 L300 431 L450 426 L600 433 L750 428 L900 424 L1050 431 L1200 436 L1200 500 L0 500 Z" 
          fill="#283A30"/>
    <path d="M0 448 L150 438 L300 431 L450 426 L600 433 L750 428 L900 424 L1050 431 L1200 436 L1200 468 L0 468 Z" 
          fill="#1A2A20" opacity="0.4"/>
    <path d="M0 471 L200 466 L400 461 L600 465 L800 468 L1000 463 L1200 458 L1200 500 L0 500 Z" 
          fill="#1C2E24"/>
    
    {/* Very dark trees - flat 2.0 with subtle depth */}
    <g>
      <ellipse cx="357" cy="490" rx="10" ry="3" fill="#0A1510" opacity="0.4"/>
      <rect x="350" y="455" width="11" height="32" fill="#202020"/>
      <rect x="350" y="455" width="4" height="32" fill="#101010"/>
      <path d="M355.5 455 L340 455 L355.5 427 L371 455 Z" fill="#1a2520"/>
      <path d="M355.5 455 L340 455 L355.5 439 Z" fill="#0F1810"/>
      
      <ellipse cx="758" cy="488" rx="11" ry="3" fill="#0A1510" opacity="0.4"/>
      <rect x="750" y="450" width="12" height="35" fill="#202020"/>
      <rect x="750" y="450" width="4" height="35" fill="#101010"/>
      <path d="M756 450 L738 450 L756 420 L774 450 Z" fill="#1a2520"/>
      <path d="M756 450 L738 450 L756 432 Z" fill="#0F1810"/>
      <path d="M756 435 L740 435 L756 410 L772 435 Z" fill="#1f3028"/>
      <path d="M756 435 L740 435 L756 421 Z" fill="#142018"/>
    </g>
  </svg>
);
