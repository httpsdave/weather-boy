import React from 'react';

export const LightDrizzle: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 1200 500" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="drizzleSkyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#7A8C9E', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#A5B5C5', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <rect width="1200" height="500" fill="url(#drizzleSkyGradient)" />
    
    {/* Clouds */}
    <g className="animate-float" opacity="0.85">
      <ellipse cx="250" cy="90" rx="65" ry="42" fill="#C0C8D0"/>
      <ellipse cx="310" cy="85" rx="60" ry="40" fill="#C0C8D0"/>
      <ellipse cx="365" cy="93" rx="55" ry="38" fill="#C0C8D0"/>
    </g>
    
    <g className="animate-float-delayed" opacity="0.88">
      <ellipse cx="750" cy="110" rx="70" ry="45" fill="#B8C0C8"/>
      <ellipse cx="815" cy="105" rx="65" ry="42" fill="#B8C0C8"/>
      <ellipse cx="875" cy="113" rx="60" ry="40" fill="#B8C0C8"/>
    </g>
    
    {/* Light drizzle drops */}
    <g className="animate-rain" opacity="0.4">
      <line x1="150" y1="200" x2="145" y2="240" stroke="#7AA5C5" strokeWidth="1.5"/>
      <line x1="280" y1="180" x2="275" y2="220" stroke="#7AA5C5" strokeWidth="1.5"/>
      <line x1="410" y1="210" x2="405" y2="250" stroke="#7AA5C5" strokeWidth="1.5"/>
      <line x1="540" y1="190" x2="535" y2="230" stroke="#7AA5C5" strokeWidth="1.5"/>
      <line x1="670" y1="205" x2="665" y2="245" stroke="#7AA5C5" strokeWidth="1.5"/>
      <line x1="800" y1="185" x2="795" y2="225" stroke="#7AA5C5" strokeWidth="1.5"/>
      <line x1="930" y1="200" x2="925" y2="240" stroke="#7AA5C5" strokeWidth="1.5"/>
      <line x1="1060" y1="195" x2="1055" y2="235" stroke="#7AA5C5" strokeWidth="1.5"/>
    </g>
    
    {/* Mountains - flat 2.0 with layered faces */}
    <g opacity="0.65">
      <path d="M0 385 L110 325 L155 350 L0 405 Z" fill="#7F8F9D"/>
      <path d="M155 350 L110 325 L250 310 L295 335 Z" fill="#6F7F8D"/>
      <path d="M295 335 L250 310 L390 300 L435 325 Z" fill="#7F8F9D"/>
      <path d="M435 325 L390 300 L530 295 L575 320 Z" fill="#6F7F8D"/>
      <path d="M575 320 L530 295 L670 305 L715 330 Z" fill="#7F8F9D"/>
      <path d="M715 330 L670 305 L810 310 L855 335 Z" fill="#6F7F8D"/>
      <path d="M855 335 L810 310 L950 315 L995 340 Z" fill="#7F8F9D"/>
      <path d="M995 340 L950 315 L1090 320 L1200 345 Z" fill="#6F7F8D"/>
      <path d="M0 405 L155 350 L295 335 L435 325 L575 320 L715 330 L855 335 L995 340 L1200 345 L1200 500 L0 500 Z" fill="#5F6F7D"/>
    </g>
    <g opacity="0.75">
      <path d="M0 410 L125 350 L165 375 L0 430 Z" fill="#6A7A88"/>
      <path d="M165 375 L125 350 L285 338 L325 363 Z" fill="#5A6A78"/>
      <path d="M325 363 L285 338 L445 330 L485 355 Z" fill="#6A7A88"/>
      <path d="M485 355 L445 330 L605 327 L645 352 Z" fill="#5A6A78"/>
      <path d="M645 352 L605 327 L765 335 L805 360 Z" fill="#6A7A88"/>
      <path d="M805 360 L765 335 L925 342 L965 367 Z" fill="#5A6A78"/>
      <path d="M965 367 L925 342 L1085 348 L1200 370 Z" fill="#6A7A88"/>
      <path d="M0 430 L165 375 L325 363 L485 355 L645 352 L805 360 L965 367 L1200 370 L1200 500 L0 500 Z" fill="#4A5A68"/>
    </g>
    
    {/* Hills - flat 2.0 layered */}
    <path d="M0 448 L150 438 L300 433 L450 428 L600 435 L750 430 L900 427 L1050 433 L1200 437 L1200 500 L0 500 Z" 
          fill="#5F7D62"/>
    <path d="M0 448 L150 438 L300 433 L450 428 L600 435 L750 430 L900 427 L1050 433 L1200 437 L1200 470 L0 470 Z" 
          fill="#4F6D52" opacity="0.4"/>
    <path d="M0 473 L200 468 L400 463 L600 467 L800 470 L1000 465 L1200 460 L1200 500 L0 500 Z" 
          fill="#456348"/>
    
    {/* Trees - flat 2.0 with depth and shadows */}
    <g>
      <ellipse cx="226" cy="488" rx="9" ry="3" fill="#3A5A40" opacity="0.3"/>
      <rect x="220" y="455" width="10" height="30" fill="#5A4A3A"/>
      <rect x="220" y="455" width="3.5" height="30" fill="#4A3A2A"/>
      <path d="M225 455 L210 455 L225 430 L240 455 Z" fill="#3A5030"/>
      <path d="M225 455 L210 455 L225 440 Z" fill="#2A4020"/>
      
      <ellipse cx="686" cy="485" rx="10" ry="3" fill="#3A5A40" opacity="0.3"/>
      <rect x="680" y="450" width="11" height="32" fill="#5A4A3A"/>
      <rect x="680" y="450" width="4" height="32" fill="#4A3A2A"/>
      <path d="M685.5 450 L669 450 L685.5 422 L702 450 Z" fill="#3A5030"/>
      <path d="M685.5 450 L669 450 L685.5 433 Z" fill="#2A4020"/>
    </g>
  </svg>
);

export const ModerateRain: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 1200 500" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="rainSkyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#5A6C7E', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#8A9AA8', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <rect width="1200" height="500" fill="url(#rainSkyGradient)" />
    
    {/* Dark rain clouds */}
    <g className="animate-float" opacity="0.9">
      <ellipse cx="200" cy="80" rx="75" ry="48" fill="#6B7B8C"/>
      <ellipse cx="270" cy="75" rx="70" ry="45" fill="#6B7B8C"/>
      <ellipse cx="335" cy="83" rx="65" ry="42" fill="#6B7B8C"/>
      <ellipse cx="265" cy="95" rx="60" ry="38" fill="#5D6D7C"/>
    </g>
    
    <g className="animate-float-delayed" opacity="0.92">
      <ellipse cx="650" cy="100" rx="80" ry="50" fill="#707F90"/>
      <ellipse cx="725" cy="95" rx="75" ry="48" fill="#707F90"/>
      <ellipse cx="795" cy="103" rx="70" ry="45" fill="#707F90"/>
      <ellipse cx="720" cy="115" rx="65" ry="42" fill="#626F80"/>
    </g>
    
    <g className="animate-float" opacity="0.9">
      <ellipse cx="1000" cy="90" rx="72" ry="46" fill="#6B7B8C"/>
      <ellipse cx="1065" cy="85" rx="68" ry="44" fill="#6B7B8C"/>
      <ellipse cx="1125" cy="93" rx="63" ry="41" fill="#6B7B8C"/>
    </g>
    
    {/* Moderate rain */}
    <g className="animate-rain" opacity="0.6">
      <line x1="100" y1="180" x2="93" y2="240" stroke="#6A95B5" strokeWidth="2.5"/>
      <line x1="180" y1="200" x2="173" y2="260" stroke="#6A95B5" strokeWidth="2.5"/>
      <line x1="260" y1="170" x2="253" y2="230" stroke="#6A95B5" strokeWidth="2.5"/>
      <line x1="340" y1="190" x2="333" y2="250" stroke="#6A95B5" strokeWidth="2.5"/>
      <line x1="420" y1="185" x2="413" y2="245" stroke="#6A95B5" strokeWidth="2.5"/>
      <line x1="500" y1="195" x2="493" y2="255" stroke="#6A95B5" strokeWidth="2.5"/>
      <line x1="580" y1="175" x2="573" y2="235" stroke="#6A95B5" strokeWidth="2.5"/>
      <line x1="660" y1="188" x2="653" y2="248" stroke="#6A95B5" strokeWidth="2.5"/>
      <line x1="740" y1="192" x2="733" y2="252" stroke="#6A95B5" strokeWidth="2.5"/>
      <line x1="820" y1="178" x2="813" y2="238" stroke="#6A95B5" strokeWidth="2.5"/>
      <line x1="900" y1="198" x2="893" y2="258" stroke="#6A95B5" strokeWidth="2.5"/>
      <line x1="980" y1="182" x2="973" y2="242" stroke="#6A95B5" strokeWidth="2.5"/>
      <line x1="1060" y1="190" x2="1053" y2="250" stroke="#6A95B5" strokeWidth="2.5"/>
      <line x1="1140" y1="185" x2="1133" y2="245" stroke="#6A95B5" strokeWidth="2.5"/>
    </g>
    
    {/* Mountains - flat 2.0 */}
    <g opacity="0.7">
      <path d="M0 395 L110 330 L155 355 L0 415 Z" fill="#606E7D"/>
      <path d="M155 355 L110 330 L250 315 L295 340 Z" fill="#505E6D"/>
      <path d="M295 340 L250 315 L390 305 L435 330 Z" fill="#606E7D"/>
      <path d="M435 330 L390 305 L530 300 L575 325 Z" fill="#505E6D"/>
      <path d="M575 325 L530 300 L670 310 L715 335 Z" fill="#606E7D"/>
      <path d="M715 335 L670 310 L810 315 L855 340 Z" fill="#505E6D"/>
      <path d="M855 340 L810 315 L950 320 L995 345 Z" fill="#606E7D"/>
      <path d="M995 345 L950 320 L1090 325 L1200 350 Z" fill="#505E6D"/>
      <path d="M0 415 L155 355 L295 340 L435 330 L575 325 L715 335 L855 340 L995 345 L1200 350 L1200 500 L0 500 Z" fill="#405563"/>
    </g>
    <g opacity="0.8">
      <path d="M0 420 L125 360 L165 385 L0 440 Z" fill="#4F5D6C"/>
      <path d="M165 385 L125 360 L285 348 L325 373 Z" fill="#3F4D5C"/>
      <path d="M325 373 L285 348 L445 340 L485 365 Z" fill="#4F5D6C"/>
      <path d="M485 365 L445 340 L605 337 L645 362 Z" fill="#3F4D5C"/>
      <path d="M645 362 L605 337 L765 345 L805 370 Z" fill="#4F5D6C"/>
      <path d="M805 370 L765 345 L925 352 L965 377 Z" fill="#3F4D5C"/>
      <path d="M965 377 L925 352 L1085 358 L1200 380 Z" fill="#4F5D6C"/>
      <path d="M0 440 L165 385 L325 373 L485 365 L645 362 L805 370 L965 377 L1200 380 L1200 500 L0 500 Z" fill="#2F3D4C"/>
    </g>
    
    {/* Hills - flat 2.0 layered */}
    <path d="M0 453 L150 443 L300 438 L450 433 L600 440 L750 435 L900 432 L1050 438 L1200 442 L1200 500 L0 500 Z" 
          fill="#4D6155"/>
    <path d="M0 453 L150 443 L300 438 L450 433 L600 440 L750 435 L900 432 L1050 438 L1200 442 L1200 473 L0 473 Z" 
          fill="#3D5145" opacity="0.4"/>
    <path d="M0 475 L200 470 L400 465 L600 469 L800 472 L1000 467 L1200 462 L1200 500 L0 500 Z" 
          fill="#35493F"/>
    
    {/* Trees - flat 2.0 with depth */}
    <g>
      <ellipse cx="286" cy="488" rx="9" ry="3" fill="#2A4030" opacity="0.3"/>
      <rect x="280" y="455" width="10" height="30" fill="#4A3A2A"/>
      <rect x="280" y="455" width="3.5" height="30" fill="#3A2A1A"/>
      <path d="M285 455 L270 455 L285 430 L300 455 Z" fill="#2A4020"/>
      <path d="M285 455 L270 455 L285 440 Z" fill="#1A3010"/>
      
      <ellipse cx="756" cy="485" rx="10" ry="3" fill="#2A4030" opacity="0.3"/>
      <rect x="750" y="450" width="11" height="32" fill="#4A3A2A"/>
      <rect x="750" y="450" width="4" height="32" fill="#3A2A1A"/>
      <path d="M755.5 450 L739 450 L755.5 422 L772 450 Z" fill="#2A4020"/>
      <path d="M755.5 450 L739 450 L755.5 433 Z" fill="#1A3010"/>
    </g>
  </svg>
);

export const HeavyRain: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 1200 500" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="heavyRainSkyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#3A4A5C', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#5A6A7C', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <rect width="1200" height="500" fill="url(#heavyRainSkyGradient)" />
    
    {/* Very dark storm clouds */}
    <g className="animate-float" opacity="0.95">
      <ellipse cx="180" cy="70" rx="85" ry="55" fill="#4A5563"/>
      <ellipse cx="260" cy="65" rx="80" ry="52" fill="#4A5563"/>
      <ellipse cx="335" cy="73" rx="75" ry="50" fill="#4A5563"/>
      <ellipse cx="255" cy="88" rx="70" ry="45" fill="#3C4651"/>
    </g>
    
    <g className="animate-float-delayed" opacity="0.97">
      <ellipse cx="550" cy="90" rx="90" ry="58" fill="#505D6B"/>
      <ellipse cx="635" cy="85" rx="85" ry="55" fill="#505D6B"/>
      <ellipse cx="715" cy="93" rx="80" ry="52" fill="#505D6B"/>
      <ellipse cx="630" cy="108" rx="75" ry="48" fill="#424F5C"/>
    </g>
    
    <g className="animate-float" opacity="0.95">
      <ellipse cx="950" cy="80" rx="82" ry="53" fill="#4A5563"/>
      <ellipse cx="1025" cy="75" rx="78" ry="51" fill="#4A5563"/>
      <ellipse cx="1095" cy="83" rx="73" ry="48" fill="#4A5563"/>
    </g>
    
    {/* Heavy rain - denser pattern */}
    <g className="animate-rain" opacity="0.75">
      {/* Row 1 */}
      <line x1="80" y1="160" x2="70" y2="240" stroke="#5A85A5" strokeWidth="3"/>
      <line x1="140" y1="180" x2="130" y2="260" stroke="#5A85A5" strokeWidth="3"/>
      <line x1="200" y1="170" x2="190" y2="250" stroke="#5A85A5" strokeWidth="3"/>
      <line x1="260" y1="190" x2="250" y2="270" stroke="#5A85A5" strokeWidth="3"/>
      <line x1="320" y1="165" x2="310" y2="245" stroke="#5A85A5" strokeWidth="3"/>
      <line x1="380" y1="185" x2="370" y2="265" stroke="#5A85A5" strokeWidth="3"/>
      <line x1="440" y1="175" x2="430" y2="255" stroke="#5A85A5" strokeWidth="3"/>
      <line x1="500" y1="195" x2="490" y2="275" stroke="#5A85A5" strokeWidth="3"/>
      <line x1="560" y1="168" x2="550" y2="248" stroke="#5A85A5" strokeWidth="3"/>
      <line x1="620" y1="188" x2="610" y2="268" stroke="#5A85A5" strokeWidth="3"/>
      <line x1="680" y1="178" x2="670" y2="258" stroke="#5A85A5" strokeWidth="3"/>
      <line x1="740" y1="192" x2="730" y2="272" stroke="#5A85A5" strokeWidth="3"/>
      <line x1="800" y1="172" x2="790" y2="252" stroke="#5A85A5" strokeWidth="3"/>
      <line x1="860" y1="186" x2="850" y2="266" stroke="#5A85A5" strokeWidth="3"/>
      <line x1="920" y1="182" x2="910" y2="262" stroke="#5A85A5" strokeWidth="3"/>
      <line x1="980" y1="176" x2="970" y2="256" stroke="#5A85A5" strokeWidth="3"/>
      <line x1="1040" y1="190" x2="1030" y2="270" stroke="#5A85A5" strokeWidth="3"/>
      <line x1="1100" y1="185" x2="1090" y2="265" stroke="#5A85A5" strokeWidth="3"/>
      
      {/* Row 2 - offset */}
      <line x1="110" y1="220" x2="100" y2="300" stroke="#5A85A5" strokeWidth="3"/>
      <line x1="170" y1="210" x2="160" y2="290" stroke="#5A85A5" strokeWidth="3"/>
      <line x1="230" y1="225" x2="220" y2="305" stroke="#5A85A5" strokeWidth="3"/>
      <line x1="290" y1="215" x2="280" y2="295" stroke="#5A85A5" strokeWidth="3"/>
      <line x1="350" y1="230" x2="340" y2="310" stroke="#5A85A5" strokeWidth="3"/>
      <line x1="410" y1="220" x2="400" y2="300" stroke="#5A85A5" strokeWidth="3"/>
      <line x1="470" y1="212" x2="460" y2="292" stroke="#5A85A5" strokeWidth="3"/>
      <line x1="530" y1="228" x2="520" y2="308" stroke="#5A85A5" strokeWidth="3"/>
      <line x1="590" y1="218" x2="580" y2="298" stroke="#5A85A5" strokeWidth="3"/>
      <line x1="650" y1="222" x2="640" y2="302" stroke="#5A85A5" strokeWidth="3"/>
      <line x1="710" y1="216" x2="700" y2="296" stroke="#5A85A5" strokeWidth="3"/>
      <line x1="770" y1="226" x2="760" y2="306" stroke="#5A85A5" strokeWidth="3"/>
      <line x1="830" y1="214" x2="820" y2="294" stroke="#5A85A5" strokeWidth="3"/>
      <line x1="890" y1="224" x2="880" y2="304" stroke="#5A85A5" strokeWidth="3"/>
      <line x1="950" y1="218" x2="940" y2="298" stroke="#5A85A5" strokeWidth="3"/>
      <line x1="1010" y1="228" x2="1000" y2="308" stroke="#5A85A5" strokeWidth="3"/>
      <line x1="1070" y1="220" x2="1060" y2="300" stroke="#5A85A5" strokeWidth="3"/>
    </g>
    
    {/* Mountains barely visible - flat 2.0 */}
    <g opacity="0.65">
      <path d="M0 405 L110 345 L155 370 L0 425 Z" fill="#3F4E5C"/>
      <path d="M155 370 L110 345 L250 330 L295 355 Z" fill="#2F3E4C"/>
      <path d="M295 355 L250 330 L390 320 L435 345 Z" fill="#3F4E5C"/>
      <path d="M435 345 L390 320 L530 315 L575 340 Z" fill="#2F3E4C"/>
      <path d="M575 340 L530 315 L670 325 L715 350 Z" fill="#3F4E5C"/>
      <path d="M715 350 L670 325 L810 330 L855 355 Z" fill="#2F3E4C"/>
      <path d="M855 355 L810 330 L950 335 L995 360 Z" fill="#3F4E5C"/>
      <path d="M995 360 L950 335 L1090 340 L1200 365 Z" fill="#2F3E4C"/>
      <path d="M0 425 L155 370 L295 355 L435 345 L575 340 L715 350 L855 355 L995 360 L1200 365 L1200 500 L0 500 Z" fill="#1F2E3C"/>
    </g>
    <g opacity="0.75">
      <path d="M0 430 L125 370 L165 395 L0 450 Z" fill="#2F3E4D"/>
      <path d="M165 395 L125 370 L285 358 L325 383 Z" fill="#1F2E3D"/>
      <path d="M325 383 L285 358 L445 350 L485 375 Z" fill="#2F3E4D"/>
      <path d="M485 375 L445 350 L605 347 L645 372 Z" fill="#1F2E3D"/>
      <path d="M645 372 L605 347 L765 355 L805 380 Z" fill="#2F3E4D"/>
      <path d="M805 380 L765 355 L925 362 L965 387 Z" fill="#1F2E3D"/>
      <path d="M965 387 L925 362 L1085 368 L1200 390 Z" fill="#2F3E4D"/>
      <path d="M0 450 L165 395 L325 383 L485 375 L645 372 L805 380 L965 387 L1200 390 L1200 500 L0 500 Z" fill="#0F1E2D"/>
    </g>
    
    {/* Dark hills - flat 2.0 layered */}
    <path d="M0 458 L150 448 L300 443 L450 438 L600 445 L750 440 L900 437 L1050 443 L1200 447 L1200 500 L0 500 Z" 
          fill="#2C4135"/>
    <path d="M0 458 L150 448 L300 443 L450 438 L600 445 L750 440 L900 437 L1050 443 L1200 447 L1200 478 L0 478 Z" 
          fill="#1C3125" opacity="0.4"/>
    
    {/* Tree silhouettes - flat 2.0 */}
    <g>
      <ellipse cx="356" cy="491" rx="9" ry="2.5" fill="#0F1F15" opacity="0.4"/>
      <rect x="350" y="460" width="10" height="28" fill="#2A2A1A"/>
      <rect x="350" y="460" width="3.5" height="28" fill="#1A1A0A"/>
      <path d="M355 460 L340 460 L355 438 L370 460 Z" fill="#1A2A10"/>
      <path d="M355 460 L340 460 L355 446 Z" fill="#0A1A05"/>
      
      <ellipse cx="856" cy="491" rx="10" ry="2.5" fill="#0F1F15" opacity="0.4"/>
      <rect x="850" y="458" width="11" height="30" fill="#2A2A1A"/>
      <rect x="850" y="458" width="4" height="30" fill="#1A1A0A"/>
      <path d="M855.5 458 L839 458 L855.5 432 L872 458 Z" fill="#1A2A10"/>
      <path d="M855.5 458 L839 458 L855.5 442 Z" fill="#0A1A05"/>
    </g>
  </svg>
);

export const LightDrizzleDay = LightDrizzle;

export const LightDrizzleNight: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 1200 500" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="drizzleNightSkyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#2a3a4e', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#3f4f63', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <rect width="1200" height="500" fill="url(#drizzleNightSkyGradient)" />
    
    {/* Clouds */}
    <g className="animate-float" opacity="0.75">
      <ellipse cx="250" cy="90" rx="65" ry="42" fill="#505860"/>
      <ellipse cx="310" cy="85" rx="60" ry="40" fill="#505860"/>
      <ellipse cx="365" cy="93" rx="55" ry="38" fill="#505860"/>
    </g>
    
    <g className="animate-float-delayed" opacity="0.78">
      <ellipse cx="750" cy="110" rx="70" ry="45" fill="#485058"/>
      <ellipse cx="815" cy="105" rx="65" ry="42" fill="#485058"/>
      <ellipse cx="875" cy="113" rx="60" ry="40" fill="#485058"/>
    </g>
    
    {/* Light drizzle drops */}
    <g className="animate-rain" opacity="0.4">
      <line x1="150" y1="200" x2="145" y2="240" stroke="#5a7595" strokeWidth="1.5"/>
      <line x1="280" y1="180" x2="275" y2="220" stroke="#5a7595" strokeWidth="1.5"/>
      <line x1="410" y1="210" x2="405" y2="250" stroke="#5a7595" strokeWidth="1.5"/>
      <line x1="540" y1="190" x2="535" y2="230" stroke="#5a7595" strokeWidth="1.5"/>
      <line x1="670" y1="205" x2="665" y2="245" stroke="#5a7595" strokeWidth="1.5"/>
      <line x1="800" y1="185" x2="795" y2="225" stroke="#5a7595" strokeWidth="1.5"/>
      <line x1="930" y1="200" x2="925" y2="240" stroke="#5a7595" strokeWidth="1.5"/>
      <line x1="1060" y1="195" x2="1055" y2="235" stroke="#5a7595" strokeWidth="1.5"/>
    </g>
    
    {/* Mountains - flat 2.0 */}
    <g opacity="0.75">
      <path d="M0 385 L110 330 L155 355 L0 405 Z" fill="#2E3C48"/>
      <path d="M155 355 L110 330 L250 315 L295 340 Z" fill="#242F3D"/>
      <path d="M295 340 L250 315 L390 305 L435 330 Z" fill="#2E3C48"/>
      <path d="M435 330 L390 305 L530 300 L575 325 Z" fill="#242F3D"/>
      <path d="M575 325 L530 300 L670 310 L715 335 Z" fill="#2E3C48"/>
      <path d="M715 335 L670 310 L810 315 L855 340 Z" fill="#242F3D"/>
      <path d="M855 340 L810 315 L950 320 L995 345 Z" fill="#2E3C48"/>
      <path d="M995 345 L950 320 L1090 325 L1200 350 Z" fill="#242F3D"/>
      <path d="M0 405 L155 355 L295 340 L435 330 L575 325 L715 335 L855 340 L995 345 L1200 350 L1200 500 L0 500 Z" fill="#1A2733"/>
    </g>
    <g opacity="0.8">
      <path d="M0 410 L125 355 L165 380 L0 430 Z" fill="#23313D"/>
      <path d="M165 380 L125 355 L285 343 L325 368 Z" fill="#19242F"/>
      <path d="M325 368 L285 343 L445 335 L485 360 Z" fill="#23313D"/>
      <path d="M485 360 L445 335 L605 332 L645 357 Z" fill="#19242F"/>
      <path d="M645 357 L605 332 L765 340 L805 365 Z" fill="#23313D"/>
      <path d="M805 365 L765 340 L925 347 L965 372 Z" fill="#19242F"/>
      <path d="M965 372 L925 347 L1085 353 L1200 375 Z" fill="#23313D"/>
      <path d="M0 430 L165 380 L325 368 L485 360 L645 357 L805 365 L965 372 L1200 375 L1200 500 L0 500 Z" fill="#0F1A25"/>
    </g>
    
    {/* Hills - flat 2.0 layered */}
    <path d="M0 448 L150 438 L300 433 L450 428 L600 435 L750 430 L900 427 L1050 433 L1200 437 L1200 500 L0 500 Z" 
          fill="#2D3F33"/>
    <path d="M0 448 L150 438 L300 433 L450 428 L600 435 L750 430 L900 427 L1050 433 L1200 437 L1200 470 L0 470 Z" 
          fill="#1D2F23" opacity="0.4"/>
    <path d="M0 473 L200 468 L400 463 L600 467 L800 470 L1000 465 L1200 460 L1200 500 L0 500 Z" 
          fill="#192921"/>
    
    {/* Trees - flat 2.0 with depth */}
    <g>
      <ellipse cx="226" cy="488" rx="9" ry="3" fill="#0F1F15" opacity="0.4"/>
      <rect x="220" y="455" width="10" height="30" fill="#2a2520"/>
      <rect x="220" y="455" width="3.5" height="30" fill="#1a1510"/>
      <path d="M225 455 L210 455 L225 430 L240 455 Z" fill="#1a2520"/>
      <path d="M225 455 L210 455 L225 440 Z" fill="#0a1510"/>
      
      <ellipse cx="686" cy="485" rx="10" ry="3" fill="#0F1F15" opacity="0.4"/>
      <rect x="680" y="450" width="11" height="32" fill="#2a2520"/>
      <rect x="680" y="450" width="4" height="32" fill="#1a1510"/>
      <path d="M685.5 450 L669 450 L685.5 422 L702 450 Z" fill="#1a2520"/>
      <path d="M685.5 450 L669 450 L685.5 433 Z" fill="#0a1510"/>
    </g>
  </svg>
);

export const ModerateRainDay = ModerateRain;

export const ModerateRainNight: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 1200 500" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="rainNightSkyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#1f2f3e', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#2f3f4e', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <rect width="1200" height="500" fill="url(#rainNightSkyGradient)" />
    
    {/* Dark rain clouds */}
    <g className="animate-float" opacity="0.8">
      <ellipse cx="200" cy="80" rx="75" ry="48" fill="#3a4552"/>
      <ellipse cx="270" cy="75" rx="70" ry="45" fill="#3a4552"/>
      <ellipse cx="335" cy="83" rx="65" ry="42" fill="#3a4552"/>
      <ellipse cx="265" cy="95" rx="60" ry="38" fill="#2f3a47"/>
    </g>
    
    <g className="animate-float-delayed" opacity="0.82">
      <ellipse cx="650" cy="100" rx="80" ry="50" fill="#3f4a57"/>
      <ellipse cx="725" cy="95" rx="75" ry="48" fill="#3f4a57"/>
      <ellipse cx="795" cy="103" rx="70" ry="45" fill="#3f4a57"/>
      <ellipse cx="720" cy="115" rx="65" ry="42" fill="#343f4c"/>
    </g>
    
    <g className="animate-float" opacity="0.8">
      <ellipse cx="1000" cy="90" rx="72" ry="46" fill="#3a4552"/>
      <ellipse cx="1065" cy="85" rx="68" ry="44" fill="#3a4552"/>
      <ellipse cx="1125" cy="93" rx="63" ry="41" fill="#3a4552"/>
    </g>
    
    {/* Moderate rain */}
    <g className="animate-rain" opacity="0.6">
      <line x1="100" y1="180" x2="93" y2="240" stroke="#4a6585" strokeWidth="2.5"/>
      <line x1="180" y1="200" x2="173" y2="260" stroke="#4a6585" strokeWidth="2.5"/>
      <line x1="260" y1="170" x2="253" y2="230" stroke="#4a6585" strokeWidth="2.5"/>
      <line x1="340" y1="190" x2="333" y2="250" stroke="#4a6585" strokeWidth="2.5"/>
      <line x1="420" y1="185" x2="413" y2="245" stroke="#4a6585" strokeWidth="2.5"/>
      <line x1="500" y1="195" x2="493" y2="255" stroke="#4a6585" strokeWidth="2.5"/>
      <line x1="580" y1="175" x2="573" y2="235" stroke="#4a6585" strokeWidth="2.5"/>
      <line x1="660" y1="188" x2="653" y2="248" stroke="#4a6585" strokeWidth="2.5"/>
      <line x1="740" y1="192" x2="733" y2="252" stroke="#4a6585" strokeWidth="2.5"/>
      <line x1="820" y1="178" x2="813" y2="238" stroke="#4a6585" strokeWidth="2.5"/>
      <line x1="900" y1="198" x2="893" y2="258" stroke="#4a6585" strokeWidth="2.5"/>
      <line x1="980" y1="182" x2="973" y2="242" stroke="#4a6585" strokeWidth="2.5"/>
      <line x1="1060" y1="190" x2="1053" y2="250" stroke="#4a6585" strokeWidth="2.5"/>
      <line x1="1140" y1="185" x2="1133" y2="245" stroke="#4a6585" strokeWidth="2.5"/>
    </g>
    
    {/* Mountains - flat 2.0 */}
    <g opacity="0.75">
      <path d="M0 395 L110 335 L155 360 L0 415 Z" fill="#273542"/>
      <path d="M155 360 L110 335 L250 320 L295 345 Z" fill="#1D2832"/>
      <path d="M295 345 L250 320 L390 310 L435 335 Z" fill="#273542"/>
      <path d="M435 335 L390 310 L530 305 L575 330 Z" fill="#1D2832"/>
      <path d="M575 330 L530 305 L670 315 L715 340 Z" fill="#273542"/>
      <path d="M715 340 L670 315 L810 320 L855 345 Z" fill="#1D2832"/>
      <path d="M855 345 L810 320 L950 325 L995 350 Z" fill="#273542"/>
      <path d="M995 350 L950 325 L1090 330 L1200 355 Z" fill="#1D2832"/>
      <path d="M0 415 L155 360 L295 345 L435 335 L575 330 L715 340 L855 345 L995 350 L1200 355 L1200 500 L0 500 Z" fill="#131E28"/>
    </g>
    <g opacity="0.85">
      <path d="M0 420 L125 365 L165 390 L0 440 Z" fill="#1E2A37"/>
      <path d="M165 390 L125 365 L285 353 L325 378 Z" fill="#14202D"/>
      <path d="M325 378 L285 353 L445 345 L485 370 Z" fill="#1E2A37"/>
      <path d="M485 370 L445 345 L605 342 L645 367 Z" fill="#14202D"/>
      <path d="M645 367 L605 342 L765 350 L805 375 Z" fill="#1E2A37"/>
      <path d="M805 375 L765 350 L925 357 L965 382 Z" fill="#14202D"/>
      <path d="M965 382 L925 357 L1085 363 L1200 385 Z" fill="#1E2A37"/>
      <path d="M0 440 L165 390 L325 378 L485 370 L645 367 L805 375 L965 382 L1200 385 L1200 500 L0 500 Z" fill="#0A1620"/>
    </g>
    
    {/* Hills - flat 2.0 layered */}
    <path d="M0 453 L150 443 L300 438 L450 433 L600 440 L750 435 L900 432 L1050 438 L1200 442 L1200 500 L0 500 Z" 
          fill="#233228"/>
    <path d="M0 453 L150 443 L300 438 L450 433 L600 440 L750 435 L900 432 L1050 438 L1200 442 L1200 473 L0 473 Z" 
          fill="#19221E" opacity="0.4"/>
    <path d="M0 475 L200 470 L400 465 L600 469 L800 472 L1000 467 L1200 462 L1200 500 L0 500 Z" 
          fill="#111D16"/>
    
    {/* Trees - flat 2.0 with depth */}
    <g>
      <ellipse cx="286" cy="488" rx="9" ry="3" fill="#0A1510" opacity="0.4"/>
      <rect x="280" y="455" width="10" height="30" fill="#1a1a1a"/>
      <rect x="280" y="455" width="3.5" height="30" fill="#0a0a0a"/>
      <path d="M285 455 L270 455 L285 430 L300 455 Z" fill="#0f1f10"/>
      <path d="M285 455 L270 455 L285 440 Z" fill="#050f05"/>
      
      <ellipse cx="756" cy="485" rx="10" ry="3" fill="#0A1510" opacity="0.4"/>
      <rect x="750" y="450" width="11" height="32" fill="#1a1a1a"/>
      <rect x="750" y="450" width="4" height="32" fill="#0a0a0a"/>
      <path d="M755.5 450 L739 450 L755.5 422 L772 450 Z" fill="#0f1f10"/>
      <path d="M755.5 450 L739 450 L755.5 433 Z" fill="#050f05"/>
    </g>
  </svg>
);

export const HeavyRainDay = HeavyRain;

export const HeavyRainNight: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 1200 500" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="heavyRainNightSkyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#1a2532', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#2a3542', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <rect width="1200" height="500" fill="url(#heavyRainNightSkyGradient)" />
    
    {/* Very dark storm clouds */}
    <g className="animate-float" opacity="0.85">
      <ellipse cx="180" cy="70" rx="85" ry="55" fill="#2a3543"/>
      <ellipse cx="260" cy="65" rx="80" ry="52" fill="#2a3543"/>
      <ellipse cx="335" cy="73" rx="75" ry="50" fill="#2a3543"/>
      <ellipse cx="255" cy="88" rx="70" ry="45" fill="#1f2a37"/>
    </g>
    
    <g className="animate-float-delayed" opacity="0.87">
      <ellipse cx="550" cy="90" rx="90" ry="58" fill="#2f3a48"/>
      <ellipse cx="635" cy="85" rx="85" ry="55" fill="#2f3a48"/>
      <ellipse cx="715" cy="93" rx="80" ry="52" fill="#2f3a48"/>
      <ellipse cx="630" cy="108" rx="75" ry="48" fill="#242f3c"/>
    </g>
    
    <g className="animate-float" opacity="0.85">
      <ellipse cx="950" cy="80" rx="82" ry="53" fill="#2a3543"/>
      <ellipse cx="1025" cy="75" rx="78" ry="51" fill="#2a3543"/>
      <ellipse cx="1095" cy="83" rx="73" ry="48" fill="#2a3543"/>
    </g>
    
    {/* Heavy rain - denser pattern */}
    <g className="animate-rain" opacity="0.7">
      {/* Row 1 */}
      <line x1="80" y1="160" x2="70" y2="240" stroke="#3a5575" strokeWidth="3"/>
      <line x1="140" y1="180" x2="130" y2="260" stroke="#3a5575" strokeWidth="3"/>
      <line x1="200" y1="170" x2="190" y2="250" stroke="#3a5575" strokeWidth="3"/>
      <line x1="260" y1="190" x2="250" y2="270" stroke="#3a5575" strokeWidth="3"/>
      <line x1="320" y1="165" x2="310" y2="245" stroke="#3a5575" strokeWidth="3"/>
      <line x1="380" y1="185" x2="370" y2="265" stroke="#3a5575" strokeWidth="3"/>
      <line x1="440" y1="175" x2="430" y2="255" stroke="#3a5575" strokeWidth="3"/>
      <line x1="500" y1="195" x2="490" y2="275" stroke="#3a5575" strokeWidth="3"/>
      <line x1="560" y1="168" x2="550" y2="248" stroke="#3a5575" strokeWidth="3"/>
      <line x1="620" y1="188" x2="610" y2="268" stroke="#3a5575" strokeWidth="3"/>
      <line x1="680" y1="178" x2="670" y2="258" stroke="#3a5575" strokeWidth="3"/>
      <line x1="740" y1="192" x2="730" y2="272" stroke="#3a5575" strokeWidth="3"/>
      <line x1="800" y1="172" x2="790" y2="252" stroke="#3a5575" strokeWidth="3"/>
      <line x1="860" y1="186" x2="850" y2="266" stroke="#3a5575" strokeWidth="3"/>
      <line x1="920" y1="182" x2="910" y2="262" stroke="#3a5575" strokeWidth="3"/>
      <line x1="980" y1="176" x2="970" y2="256" stroke="#3a5575" strokeWidth="3"/>
      <line x1="1040" y1="190" x2="1030" y2="270" stroke="#3a5575" strokeWidth="3"/>
      <line x1="1100" y1="185" x2="1090" y2="265" stroke="#3a5575" strokeWidth="3"/>
      
      {/* Row 2 - offset */}
      <line x1="110" y1="220" x2="100" y2="300" stroke="#3a5575" strokeWidth="3"/>
      <line x1="170" y1="210" x2="160" y2="290" stroke="#3a5575" strokeWidth="3"/>
      <line x1="230" y1="225" x2="220" y2="305" stroke="#3a5575" strokeWidth="3"/>
      <line x1="290" y1="215" x2="280" y2="295" stroke="#3a5575" strokeWidth="3"/>
      <line x1="350" y1="230" x2="340" y2="310" stroke="#3a5575" strokeWidth="3"/>
      <line x1="410" y1="220" x2="400" y2="300" stroke="#3a5575" strokeWidth="3"/>
      <line x1="470" y1="212" x2="460" y2="292" stroke="#3a5575" strokeWidth="3"/>
      <line x1="530" y1="228" x2="520" y2="308" stroke="#3a5575" strokeWidth="3"/>
      <line x1="590" y1="218" x2="580" y2="298" stroke="#3a5575" strokeWidth="3"/>
      <line x1="650" y1="222" x2="640" y2="302" stroke="#3a5575" strokeWidth="3"/>
      <line x1="710" y1="216" x2="700" y2="296" stroke="#3a5575" strokeWidth="3"/>
      <line x1="770" y1="226" x2="760" y2="306" stroke="#3a5575" strokeWidth="3"/>
      <line x1="830" y1="214" x2="820" y2="294" stroke="#3a5575" strokeWidth="3"/>
      <line x1="890" y1="224" x2="880" y2="304" stroke="#3a5575" strokeWidth="3"/>
      <line x1="950" y1="218" x2="940" y2="298" stroke="#3a5575" strokeWidth="3"/>
      <line x1="1010" y1="228" x2="1000" y2="308" stroke="#3a5575" strokeWidth="3"/>
      <line x1="1070" y1="220" x2="1060" y2="300" stroke="#3a5575" strokeWidth="3"/>
    </g>
    
    {/* Mountains barely visible - flat 2.0 */}
    <g opacity="0.7">
      <path d="M0 405 L110 350 L155 375 L0 425 Z" fill="#1E2D38"/>
      <path d="M155 375 L110 350 L250 335 L295 360 Z" fill="#141E28"/>
      <path d="M295 360 L250 335 L390 325 L435 350 Z" fill="#1E2D38"/>
      <path d="M435 350 L390 325 L530 320 L575 345 Z" fill="#141E28"/>
      <path d="M575 345 L530 320 L670 330 L715 355 Z" fill="#1E2D38"/>
      <path d="M715 355 L670 330 L810 335 L855 360 Z" fill="#141E28"/>
      <path d="M855 360 L810 335 L950 340 L995 365 Z" fill="#1E2D38"/>
      <path d="M995 365 L950 340 L1090 345 L1200 370 Z" fill="#141E28"/>
      <path d="M0 425 L155 375 L295 360 L435 350 L575 345 L715 355 L855 360 L995 365 L1200 370 L1200 500 L0 500 Z" fill="#0A141E"/>
    </g>
    <g opacity="0.8">
      <path d="M0 430 L125 375 L165 400 L0 450 Z" fill="#14232E"/>
      <path d="M165 400 L125 375 L285 363 L325 388 Z" fill="#0A1924"/>
      <path d="M325 388 L285 363 L445 355 L485 380 Z" fill="#14232E"/>
      <path d="M485 380 L445 355 L605 352 L645 377 Z" fill="#0A1924"/>
      <path d="M645 377 L605 352 L765 360 L805 385 Z" fill="#14232E"/>
      <path d="M805 385 L765 360 L925 367 L965 392 Z" fill="#0A1924"/>
      <path d="M965 392 L925 367 L1085 373 L1200 395 Z" fill="#14232E"/>
      <path d="M0 450 L165 400 L325 388 L485 380 L645 377 L805 385 L965 392 L1200 395 L1200 500 L0 500 Z" fill="#040F1A"/>
    </g>
    
    {/* Dark hills - flat 2.0 layered */}
    <path d="M0 458 L150 448 L300 443 L450 438 L600 445 L750 440 L900 437 L1050 443 L1200 447 L1200 500 L0 500 Z" 
          fill="#0F2118"/>
    <path d="M0 458 L150 448 L300 443 L450 438 L600 445 L750 440 L900 437 L1050 443 L1200 447 L1200 478 L0 478 Z" 
          fill="#081710" opacity="0.4"/>
    
    {/* Tree silhouettes - flat 2.0 */}
    <g>
      <ellipse cx="356" cy="491" rx="9" ry="2.5" fill="#040A08" opacity="0.45"/>
      <rect x="350" y="460" width="10" height="28" fill="#0a0a0a"/>
      <rect x="350" y="460" width="3.5" height="28" fill="#000000"/>
      <path d="M355 460 L340 460 L355 438 L370 460 Z" fill="#050f05"/>
      <path d="M355 460 L340 460 L355 446 Z" fill="#020802"/>
      
      <ellipse cx="856" cy="491" rx="10" ry="2.5" fill="#040A08" opacity="0.45"/>
      <rect x="850" y="458" width="11" height="30" fill="#0a0a0a"/>
      <rect x="850" y="458" width="4" height="30" fill="#000000"/>
      <path d="M855.5 458 L839 458 L855.5 432 L872 458 Z" fill="#050f05"/>
      <path d="M855.5 458 L839 458 L855.5 442 Z" fill="#020802"/>
    </g>
  </svg>
);
