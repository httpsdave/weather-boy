import React from 'react';

export const LightShowers: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 1200 500" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="lightShowersSkyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#6A8AA0', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#9AB0C0', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <rect width="1200" height="500" fill="url(#lightShowersSkyGradient)" />
    
    {/* Scattered clouds with breaks */}
    <g className="animate-float" opacity="0.85">
      <ellipse cx="200" cy="90" rx="65" ry="42" fill="#B8C5D0"/>
      <ellipse cx="260" cy="85" rx="60" ry="40" fill="#B8C5D0"/>
      <ellipse cx="315" cy="93" rx="55" ry="38" fill="#B8C5D0"/>
    </g>
    
    {/* Sun peeking through */}
    <g className="animate-float" opacity="0.5">
      <circle cx="480" cy="100" r="42" fill="#FFD700"/>
      <circle cx="480" cy="100" r="35" fill="#FFA500"/>
    </g>
    
    <g className="animate-float-delayed" opacity="0.88">
      <ellipse cx="750" cy="105" rx="68" ry="44" fill="#B0BDC8"/>
      <ellipse cx="815" cy="100" rx="63" ry="41" fill="#B0BDC8"/>
      <ellipse cx="875" cy="108" rx="58" ry="38" fill="#B0BDC8"/>
    </g>
    
    {/* Shower patches - localized rain */}
    <g className="animate-rain" opacity="0.55">
      {/* Left shower */}
      <line x1="160" y1="160" x2="153" y2="220" stroke="#6A9AB5" strokeWidth="2.5"/>
      <line x1="200" y1="170" x2="193" y2="230" stroke="#6A9AB5" strokeWidth="2.5"/>
      <line x1="240" y1="165" x2="233" y2="225" stroke="#6A9AB5" strokeWidth="2.5"/>
      <line x1="280" y1="175" x2="273" y2="235" stroke="#6A9AB5" strokeWidth="2.5"/>
      
      {/* Middle shower */}
      <line x1="700" y1="165" x2="693" y2="225" stroke="#6A9AB5" strokeWidth="2.5"/>
      <line x1="740" y1="172" x2="733" y2="232" stroke="#6A9AB5" strokeWidth="2.5"/>
      <line x1="780" y1="168" x2="773" y2="228" stroke="#6A9AB5" strokeWidth="2.5"/>
      <line x1="820" y1="176" x2="813" y2="236" stroke="#6A9AB5" strokeWidth="2.5"/>
      <line x1="860" y1="170" x2="853" y2="230" stroke="#6A9AB5" strokeWidth="2.5"/>
    </g>
    
    {/* Mountains - flat 2.0 */}
    <g opacity="0.7">
      <path d="M0 370 L110 310 L155 335 L0 390 Z" fill="#8EA2B2"/>
      <path d="M155 335 L110 310 L250 295 L295 320 Z" fill="#7E92A2"/>
      <path d="M295 320 L250 295 L390 285 L435 310 Z" fill="#8EA2B2"/>
      <path d="M435 310 L390 285 L530 280 L575 305 Z" fill="#7E92A2"/>
      <path d="M575 305 L530 280 L670 290 L715 315 Z" fill="#8EA2B2"/>
      <path d="M715 315 L670 290 L810 295 L855 320 Z" fill="#7E92A2"/>
      <path d="M855 320 L810 295 L950 300 L995 325 Z" fill="#8EA2B2"/>
      <path d="M995 325 L950 300 L1090 305 L1200 330 Z" fill="#7E92A2"/>
      <path d="M0 390 L155 335 L295 320 L435 310 L575 305 L715 315 L855 320 L995 325 L1200 330 L1200 500 L0 500 Z" fill="#6E8292"/>
    </g>
    <g opacity="0.78">
      <path d="M0 400 L125 340 L165 365 L0 420 Z" fill="#7A8E9E"/>
      <path d="M165 365 L125 340 L285 328 L325 353 Z" fill="#6A7E8E"/>
      <path d="M325 353 L285 328 L445 320 L485 345 Z" fill="#7A8E9E"/>
      <path d="M485 345 L445 320 L605 317 L645 342 Z" fill="#6A7E8E"/>
      <path d="M645 342 L605 317 L765 325 L805 350 Z" fill="#7A8E9E"/>
      <path d="M805 350 L765 325 L925 332 L965 357 Z" fill="#6A7E8E"/>
      <path d="M965 357 L925 332 L1085 338 L1200 360 Z" fill="#7A8E9E"/>
      <path d="M0 420 L165 365 L325 353 L485 345 L645 342 L805 350 L965 357 L1200 360 L1200 500 L0 500 Z" fill="#5A6E7E"/>
    </g>
    
    {/* Hills - flat 2.0 layered */}
    <path d="M0 445 L150 435 L300 430 L450 425 L600 432 L750 427 L900 424 L1050 430 L1200 434 L1200 500 L0 500 Z" 
          fill="#628568"/>
    <path d="M0 445 L150 435 L300 430 L450 425 L600 432 L750 427 L900 424 L1050 430 L1200 434 L1200 468 L0 468 Z" 
          fill="#527558" opacity="0.4"/>
    <path d="M0 470 L200 465 L400 460 L600 464 L800 467 L1000 462 L1200 457 L1200 500 L0 500 Z" 
          fill="#527558"/>
    
    {/* Trees - flat 2.0 with depth */}
    <g>
      <ellipse cx="285" cy="488" rx="9" ry="3" fill="#4A6050" opacity="0.3"/>
      <rect x="280" y="455" width="10" height="30" fill="#5A4A3A"/>
      <rect x="280" y="455" width="3.5" height="30" fill="#4A3A2A"/>
      <path d="M285 455 L270 455 L285 430 L300 455 Z" fill="#2A4A30"/>
      <path d="M285 455 L270 455 L285 440 Z" fill="#1A3A20"/>
      
      <ellipse cx="885.5" cy="485" rx="10" ry="3" fill="#4A6050" opacity="0.3"/>
      <rect x="880" y="450" width="11" height="32" fill="#5A4A3A"/>
      <rect x="880" y="450" width="4" height="32" fill="#4A3A2A"/>
      <path d="M885.5 450 L869 450 L885.5 422 L902 450 Z" fill="#2A4A30"/>
      <path d="M885.5 450 L869 450 L885.5 433 Z" fill="#1A3A20"/>
    </g>
  </svg>
);

export const HeavyShowers: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 1200 500" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="heavyShowersSkyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#4A5A6C', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#6A7A8C', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <rect width="1200" height="500" fill="url(#heavyShowersSkyGradient)" />
    
    {/* Dark shower clouds */}
    <g className="animate-float" opacity="0.95">
      <ellipse cx="180" cy="75" rx="80" ry="52" fill="#606C78"/>
      <ellipse cx="255" cy="70" rx="75" ry="50" fill="#606C78"/>
      <ellipse cx="325" cy="78" rx="70" ry="48" fill="#606C78"/>
      <ellipse cx="250" cy="92" rx="65" ry="42" fill="#505C68"/>
    </g>
    
    <g className="animate-float-delayed" opacity="0.97">
      <ellipse cx="650" cy="85" rx="85" ry="55" fill="#656D79"/>
      <ellipse cx="730" cy="80" rx="80" ry="52" fill="#656D79"/>
      <ellipse cx="805" cy="88" rx="75" ry="50" fill="#656D79"/>
      <ellipse cx="725" cy="102" rx="70" ry="45" fill="#555D69"/>
    </g>
    
    <g className="animate-float" opacity="0.95">
      <ellipse cx="1000" cy="80" rx="78" ry="51" fill="#606C78"/>
      <ellipse cx="1070" cy="75" rx="73" ry="48" fill="#606C78"/>
      <ellipse cx="1135" cy="83" rx="68" ry="46" fill="#606C78"/>
    </g>
    
    {/* Heavy shower bursts */}
    <g className="animate-rain" opacity="0.75">
      {/* Left burst */}
      <line x1="120" y1="150" x2="110" y2="230" stroke="#5A8AA5" strokeWidth="3.5"/>
      <line x1="160" y1="160" x2="150" y2="240" stroke="#5A8AA5" strokeWidth="3.5"/>
      <line x1="200" y1="155" x2="190" y2="235" stroke="#5A8AA5" strokeWidth="3.5"/>
      <line x1="240" y1="165" x2="230" y2="245" stroke="#5A8AA5" strokeWidth="3.5"/>
      <line x1="280" y1="158" x2="270" y2="238" stroke="#5A8AA5" strokeWidth="3.5"/>
      <line x1="320" y1="168" x2="310" y2="248" stroke="#5A8AA5" strokeWidth="3.5"/>
      
      {/* Middle burst */}
      <line x1="600" y1="155" x2="590" y2="235" stroke="#5A8AA5" strokeWidth="3.5"/>
      <line x1="640" y1="162" x2="630" y2="242" stroke="#5A8AA5" strokeWidth="3.5"/>
      <line x1="680" y1="158" x2="670" y2="238" stroke="#5A8AA5" strokeWidth="3.5"/>
      <line x1="720" y1="166" x2="710" y2="246" stroke="#5A8AA5" strokeWidth="3.5"/>
      <line x1="760" y1="160" x2="750" y2="240" stroke="#5A8AA5" strokeWidth="3.5"/>
      <line x1="800" y1="170" x2="790" y2="250" stroke="#5A8AA5" strokeWidth="3.5"/>
      
      {/* Right burst */}
      <line x1="960" y1="158" x2="950" y2="238" stroke="#5A8AA5" strokeWidth="3.5"/>
      <line x1="1000" y1="165" x2="990" y2="245" stroke="#5A8AA5" strokeWidth="3.5"/>
      <line x1="1040" y1="160" x2="1030" y2="240" stroke="#5A8AA5" strokeWidth="3.5"/>
      <line x1="1080" y1="168" x2="1070" y2="248" stroke="#5A8AA5" strokeWidth="3.5"/>
      <line x1="1120" y1="163" x2="1110" y2="243" stroke="#5A8AA5" strokeWidth="3.5"/>
    </g>
    
    {/* Mountains - flat 2.0 */}
    <g opacity="0.72">
      <path d="M0 380 L110 315 L155 340 L0 400 Z" fill="#546270"/>
      <path d="M155 340 L110 315 L250 300 L295 325 Z" fill="#445260"/>
      <path d="M295 325 L250 300 L390 290 L435 315 Z" fill="#546270"/>
      <path d="M435 315 L390 290 L530 285 L575 310 Z" fill="#445260"/>
      <path d="M575 310 L530 285 L670 295 L715 320 Z" fill="#546270"/>
      <path d="M715 320 L670 295 L810 300 L855 325 Z" fill="#445260"/>
      <path d="M855 325 L810 300 L950 305 L995 330 Z" fill="#546270"/>
      <path d="M995 330 L950 305 L1090 310 L1200 335 Z" fill="#445260"/>
      <path d="M0 400 L155 340 L295 325 L435 315 L575 310 L715 320 L855 325 L995 330 L1200 335 L1200 500 L0 500 Z" fill="#344250"/>
    </g>
    <g opacity="0.8">
      <path d="M0 410 L125 350 L165 375 L0 430 Z" fill="#3E4E5C"/>
      <path d="M165 375 L125 350 L285 338 L325 363 Z" fill="#2E3E4C"/>
      <path d="M325 363 L285 338 L445 330 L485 355 Z" fill="#3E4E5C"/>
      <path d="M485 355 L445 330 L605 327 L645 352 Z" fill="#2E3E4C"/>
      <path d="M645 352 L605 327 L765 335 L805 360 Z" fill="#3E4E5C"/>
      <path d="M805 360 L765 335 L925 342 L965 367 Z" fill="#2E3E4C"/>
      <path d="M965 367 L925 342 L1085 348 L1200 370 Z" fill="#3E4E5C"/>
      <path d="M0 430 L165 375 L325 363 L485 355 L645 352 L805 360 L965 367 L1200 370 L1200 500 L0 500 Z" fill="#1E2E3C"/>
    </g>
    
    {/* Hills - flat 2.0 layered */}
    <path d="M0 450 L150 440 L300 435 L450 430 L600 437 L750 432 L900 429 L1050 435 L1200 439 L1200 500 L0 500 Z" 
          fill="#3A5540"/>
    <path d="M0 450 L150 440 L300 435 L450 430 L600 437 L750 432 L900 429 L1050 435 L1200 439 L1200 472 L0 472 Z" 
          fill="#2A4530" opacity="0.4"/>
    <path d="M0 473 L200 468 L400 463 L600 467 L800 470 L1000 465 L1200 460 L1200 500 L0 500 Z" 
          fill="#2A4530"/>
    
    {/* Trees - flat 2.0 with depth */}
    <g>
      <ellipse cx="325" cy="488" rx="9" ry="2.5" fill="#1A3020" opacity="0.35"/>
      <rect x="320" y="458" width="10" height="28" fill="#3A2A1A"/>
      <rect x="320" y="458" width="3.5" height="28" fill="#2A1A0A"/>
      <path d="M325 458 L310 458 L325 435 L340 458 Z" fill="#1A3010"/>
      <path d="M325 458 L310 458 L325 444 Z" fill="#0A2000"/>
      
      <ellipse cx="925.5" cy="488" rx="10" ry="2.5" fill="#1A3020" opacity="0.35"/>
      <rect x="920" y="456" width="11" height="30" fill="#3A2A1A"/>
      <rect x="920" y="456" width="4" height="30" fill="#2A1A0A"/>
      <path d="M925.5 456 L908 456 L925.5 432 L943 456 Z" fill="#1A3010"/>
      <path d="M925.5 456 L908 456 L925.5 441 Z" fill="#0A2000"/>
    </g>
  </svg>
);

export const Thunderstorm: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 1200 500" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="thunderstormSkyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#2A3A4C', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#4A5A6C', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <rect width="1200" height="500" fill="url(#thunderstormSkyGradient)" />
    
    {/* Very dark storm clouds */}
    <g className="animate-float" opacity="0.98">
      <ellipse cx="150" cy="65" rx="90" ry="58" fill="#3A4552"/>
      <ellipse cx="235" cy="60" rx="85" ry="55" fill="#3A4552"/>
      <ellipse cx="315" cy="68" rx="80" ry="52" fill="#3A4552"/>
      <ellipse cx="230" cy="83" rx="75" ry="48" fill="#2A3542"/>
    </g>
    
    <g className="animate-float-delayed" opacity="1">
      <ellipse cx="550" cy="75" rx="95" ry="62" fill="#404855"/>
      <ellipse cx="640" cy="70" rx="90" ry="58" fill="#404855"/>
      <ellipse cx="725" cy="78" rx="85" ry="55" fill="#404855"/>
      <ellipse cx="635" cy="93" rx="80" ry="52" fill="#303845"/>
    </g>
    
    <g className="animate-float" opacity="0.98">
      <ellipse cx="950" cy="70" rx="88" ry="57" fill="#3A4552"/>
      <ellipse cx="1030" cy="65" rx="83" ry="54" fill="#3A4552"/>
      <ellipse cx="1105" cy="73" rx="78" ry="51" fill="#3A4552"/>
    </g>
    
    {/* Lightning bolts */}
    <g opacity="0.85">
      <path d="M280 100 L260 160 L280 160 L250 240" stroke="#FFE44D" strokeWidth="5" fill="none" strokeLinecap="round"/>
      <path d="M280 100 L260 160 L280 160 L250 240" stroke="#FFF8DC" strokeWidth="2" fill="none" strokeLinecap="round"/>
      
      <path d="M750 110 L730 170 L750 170 L720 250" stroke="#FFE44D" strokeWidth="5" fill="none" strokeLinecap="round"/>
      <path d="M750 110 L730 170 L750 170 L720 250" stroke="#FFF8DC" strokeWidth="2" fill="none" strokeLinecap="round"/>
    </g>
    
    {/* Heavy rain */}
    <g className="animate-rain" opacity="0.8">
      <line x1="100" y1="170" x2="88" y2="260" stroke="#5080A0" strokeWidth="3.5"/>
      <line x1="160" y1="180" x2="148" y2="270" stroke="#5080A0" strokeWidth="3.5"/>
      <line x1="220" y1="175" x2="208" y2="265" stroke="#5080A0" strokeWidth="3.5"/>
      <line x1="340" y1="185" x2="328" y2="275" stroke="#5080A0" strokeWidth="3.5"/>
      <line x1="400" y1="178" x2="388" y2="268" stroke="#5080A0" strokeWidth="3.5"/>
      <line x1="460" y1="188" x2="448" y2="278" stroke="#5080A0" strokeWidth="3.5"/>
      <line x1="520" y1="182" x2="508" y2="272" stroke="#5080A0" strokeWidth="3.5"/>
      <line x1="580" y1="192" x2="568" y2="282" stroke="#5080A0" strokeWidth="3.5"/>
      <line x1="640" y1="176" x2="628" y2="266" stroke="#5080A0" strokeWidth="3.5"/>
      <line x1="780" y1="186" x2="768" y2="276" stroke="#5080A0" strokeWidth="3.5"/>
      <line x1="840" y1="180" x2="828" y2="270" stroke="#5080A0" strokeWidth="3.5"/>
      <line x1="900" y1="190" x2="888" y2="280" stroke="#5080A0" strokeWidth="3.5"/>
      <line x1="960" y1="184" x2="948" y2="274" stroke="#5080A0" strokeWidth="3.5"/>
      <line x1="1020" y1="194" x2="1008" y2="284" stroke="#5080A0" strokeWidth="3.5"/>
      <line x1="1080" y1="188" x2="1068" y2="278" stroke="#5080A0" strokeWidth="3.5"/>
      <line x1="1140" y1="182" x2="1128" y2="272" stroke="#5080A0" strokeWidth="3.5"/>
    </g>
    
    {/* Mountains barely visible - flat 2.0 */}
    <g opacity="0.68">
      <path d="M0 390 L110 325 L155 350 L0 410 Z" fill="#2E3E4C"/>
      <path d="M155 350 L110 325 L250 310 L295 335 Z" fill="#1E2E3C"/>
      <path d="M295 335 L250 310 L390 300 L435 325 Z" fill="#2E3E4C"/>
      <path d="M435 325 L390 300 L530 295 L575 320 Z" fill="#1E2E3C"/>
      <path d="M575 320 L530 295 L670 305 L715 330 Z" fill="#2E3E4C"/>
      <path d="M715 330 L670 305 L810 310 L855 335 Z" fill="#1E2E3C"/>
      <path d="M855 335 L810 310 L950 315 L995 340 Z" fill="#2E3E4C"/>
      <path d="M995 340 L950 315 L1090 320 L1200 345 Z" fill="#1E2E3C"/>
      <path d="M0 410 L155 350 L295 335 L435 325 L575 320 L715 330 L855 335 L995 340 L1200 345 L1200 500 L0 500 Z" fill="#0E1E2C"/>
    </g>
    <g opacity="0.75">
      <path d="M0 420 L125 360 L165 385 L0 440 Z" fill="#1E2E3C"/>
      <path d="M165 385 L125 360 L285 348 L325 373 Z" fill="#0E1E2C"/>
      <path d="M325 373 L285 348 L445 340 L485 365 Z" fill="#1E2E3C"/>
      <path d="M485 365 L445 340 L605 337 L645 362 Z" fill="#0E1E2C"/>
      <path d="M645 362 L605 337 L765 345 L805 370 Z" fill="#1E2E3C"/>
      <path d="M805 370 L765 345 L925 352 L965 377 Z" fill="#0E1E2C"/>
      <path d="M965 377 L925 352 L1085 358 L1200 380 Z" fill="#1E2E3C"/>
      <path d="M0 440 L165 385 L325 373 L485 365 L645 362 L805 370 L965 377 L1200 380 L1200 500 L0 500 Z" fill="#091525"/>
    </g>
    
    {/* Very dark hills - flat 2.0 layered */}
    <path d="M0 455 L150 445 L300 440 L450 435 L600 442 L750 437 L900 434 L1050 440 L1200 444 L1200 500 L0 500 Z" 
          fill="#1A2820"/>
    <path d="M0 455 L150 445 L300 440 L450 435 L600 442 L750 437 L900 434 L1050 440 L1200 444 L1200 478 L0 478 Z" 
          fill="#0A1810" opacity="0.4"/>
    <path d="M0 480 L200 475 L400 470 L600 474 L800 477 L1000 472 L1200 467 L1200 500 L0 500 Z" 
          fill="#0A1810"/>
    
    {/* Tree silhouettes - flat 2.0 */}
    <g>
      <ellipse cx="404.5" cy="490" rx="8" ry="2" fill="#040A08" opacity="0.45"/>
      <rect x="400" y="462" width="9" height="25" fill="#0A0A0A"/>
      <rect x="400" y="462" width="3.2" height="25" fill="#000000"/>
      <path d="M404.5 462 L390 462 L404.5 442 L419 462 Z" fill="#050505"/>
      <path d="M404.5 462 L390 462 L404.5 450 Z" fill="#020202"/>
      
      <ellipse cx="1005" cy="490" rx="9" ry="2" fill="#040A08" opacity="0.45"/>
      <rect x="1000" y="460" width="10" height="28" fill="#0A0A0A"/>
      <rect x="1000" y="460" width="3.5" height="28" fill="#000000"/>
      <path d="M1005 460 L990 460 L1005 437 L1020 460 Z" fill="#050505"/>
      <path d="M1005 460 L990 460 L1005 446 Z" fill="#020202"/>
    </g>
  </svg>
);

export const LightShowersDay = LightShowers;

export const LightShowersNight: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 1200 500" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="lightShowersNightSkyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#2a3a4e', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#3f4f63', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <rect width="1200" height="500" fill="url(#lightShowersNightSkyGradient)" />
    
    {/* Scattered clouds with breaks */}
    <g className="animate-float" opacity="0.75">
      <ellipse cx="200" cy="90" rx="65" ry="42" fill="#3a4a58"/>
      <ellipse cx="260" cy="85" rx="60" ry="40" fill="#3a4a58"/>
      <ellipse cx="315" cy="93" rx="55" ry="38" fill="#3a4a58"/>
    </g>
    
    {/* Moon peeking through */}
    <g className="animate-float" opacity="0.5">
      <circle cx="480" cy="100" r="40" fill="#f0e6d2"/>
      <circle cx="488" cy="95" r="36" fill="#e8dcc0"/>
    </g>
    
    <g className="animate-float-delayed" opacity="0.78">
      <ellipse cx="750" cy="105" rx="68" ry="44" fill="#3f4f5d"/>
      <ellipse cx="815" cy="100" rx="63" ry="41" fill="#3f4f5d"/>
      <ellipse cx="875" cy="108" rx="58" ry="38" fill="#3f4f5d"/>
    </g>
    
    {/* Shower patches - localized rain */}
    <g className="animate-rain" opacity="0.55">
      {/* Left shower */}
      <line x1="160" y1="160" x2="153" y2="220" stroke="#4a6a85" strokeWidth="2.5"/>
      <line x1="200" y1="170" x2="193" y2="230" stroke="#4a6a85" strokeWidth="2.5"/>
      <line x1="240" y1="165" x2="233" y2="225" stroke="#4a6a85" strokeWidth="2.5"/>
      <line x1="280" y1="175" x2="273" y2="235" stroke="#4a6a85" strokeWidth="2.5"/>
      
      {/* Middle shower */}
      <line x1="700" y1="165" x2="693" y2="225" stroke="#4a6a85" strokeWidth="2.5"/>
      <line x1="740" y1="172" x2="733" y2="232" stroke="#4a6a85" strokeWidth="2.5"/>
      <line x1="780" y1="168" x2="773" y2="228" stroke="#4a6a85" strokeWidth="2.5"/>
      <line x1="820" y1="176" x2="813" y2="236" stroke="#4a6a85" strokeWidth="2.5"/>
      <line x1="860" y1="170" x2="853" y2="230" stroke="#4a6a85" strokeWidth="2.5"/>
    </g>
    
    {/* Mountains - flat 2.0 */}
    <g opacity="0.75">
      <path d="M0 370 L110 310 L155 335 L0 390 Z" fill="#2E3E4C"/>
      <path d="M155 335 L110 310 L250 295 L295 320 Z" fill="#242F3D"/>
      <path d="M295 320 L250 295 L390 285 L435 310 Z" fill="#2E3E4C"/>
      <path d="M435 310 L390 285 L530 280 L575 305 Z" fill="#242F3D"/>
      <path d="M575 305 L530 280 L670 290 L715 315 Z" fill="#2E3E4C"/>
      <path d="M715 315 L670 290 L810 295 L855 320 Z" fill="#242F3D"/>
      <path d="M855 320 L810 295 L950 300 L995 325 Z" fill="#2E3E4C"/>
      <path d="M995 325 L950 300 L1090 305 L1200 330 Z" fill="#242F3D"/>
      <path d="M0 390 L155 335 L295 320 L435 310 L575 305 L715 315 L855 320 L995 325 L1200 330 L1200 500 L0 500 Z" fill="#1A2530"/>
    </g>
    <g opacity="0.8">
      <path d="M0 400 L125 340 L165 365 L0 420 Z" fill="#22333E"/>
      <path d="M165 365 L125 340 L285 328 L325 353 Z" fill="#18262F"/>
      <path d="M325 353 L285 328 L445 320 L485 345 Z" fill="#22333E"/>
      <path d="M485 345 L445 320 L605 317 L645 342 Z" fill="#18262F"/>
      <path d="M645 342 L605 317 L765 325 L805 350 Z" fill="#22333E"/>
      <path d="M805 350 L765 325 L925 332 L965 357 Z" fill="#18262F"/>
      <path d="M965 357 L925 332 L1085 338 L1200 360 Z" fill="#22333E"/>
      <path d="M0 420 L165 365 L325 353 L485 345 L645 342 L805 350 L965 357 L1200 360 L1200 500 L0 500 Z" fill="#0E1C28"/>
    </g>
    
    {/* Hills - flat 2.0 layered */}
    <path d="M0 445 L150 435 L300 430 L450 425 L600 432 L750 427 L900 424 L1050 430 L1200 434 L1200 500 L0 500 Z" 
          fill="#2A3A30"/>
    <path d="M0 445 L150 435 L300 430 L450 425 L600 432 L750 427 L900 424 L1050 430 L1200 434 L1200 468 L0 468 Z" 
          fill="#1F2F25" opacity="0.4"/>
    <path d="M0 470 L200 465 L400 460 L600 464 L800 467 L1000 462 L1200 457 L1200 500 L0 500 Z" 
          fill="#1F2F25"/>
    
    {/* Trees - flat 2.0 with depth */}
    <g>
      <ellipse cx="285" cy="488" rx="9" ry="3" fill="#1A2A20" opacity="0.35"/>
      <rect x="280" y="455" width="10" height="30" fill="#2A2520"/>
      <rect x="280" y="455" width="3.5" height="30" fill="#1A1510"/>
      <path d="M285 455 L270 455 L285 430 L300 455 Z" fill="#1A2518"/>
      <path d="M285 455 L270 455 L285 440 Z" fill="#0A1508"/>
      
      <ellipse cx="885.5" cy="485" rx="10" ry="3" fill="#1A2A20" opacity="0.35"/>
      <rect x="880" y="450" width="11" height="32" fill="#2A2520"/>
      <rect x="880" y="450" width="4" height="32" fill="#1A1510"/>
      <path d="M885.5 450 L869 450 L885.5 422 L902 450 Z" fill="#1A2518"/>
      <path d="M885.5 450 L869 450 L885.5 433 Z" fill="#0A1508"/>
    </g>
  </svg>
);

export const HeavyShowersDay = HeavyShowers;

export const HeavyShowersNight: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 1200 500" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="heavyShowersNightSkyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#1f2f3e', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#2f3f4e', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <rect width="1200" height="500" fill="url(#heavyShowersNightSkyGradient)" />
    
    {/* Dark shower clouds */}
    <g className="animate-float" opacity="0.85">
      <ellipse cx="180" cy="75" rx="80" ry="52" fill="#2a3a48"/>
      <ellipse cx="255" cy="70" rx="75" ry="50" fill="#2a3a48"/>
      <ellipse cx="325" cy="78" rx="70" ry="48" fill="#2a3a48"/>
      <ellipse cx="250" cy="92" rx="65" ry="42" fill="#1f2f3d"/>
    </g>
    
    <g className="animate-float-delayed" opacity="0.87">
      <ellipse cx="650" cy="85" rx="85" ry="55" fill="#2f3f4d"/>
      <ellipse cx="730" cy="80" rx="80" ry="52" fill="#2f3f4d"/>
      <ellipse cx="805" cy="88" rx="75" ry="50" fill="#2f3f4d"/>
      <ellipse cx="725" cy="102" rx="70" ry="45" fill="#242f3c"/>
    </g>
    
    <g className="animate-float" opacity="0.85">
      <ellipse cx="1000" cy="80" rx="78" ry="51" fill="#2a3a48"/>
      <ellipse cx="1070" cy="75" rx="73" ry="48" fill="#2a3a48"/>
      <ellipse cx="1135" cy="83" rx="68" ry="46" fill="#2a3a48"/>
    </g>
    
    {/* Heavy shower bursts */}
    <g className="animate-rain" opacity="0.7">
      {/* Left burst */}
      <line x1="120" y1="150" x2="110" y2="230" stroke="#3a5a75" strokeWidth="3.5"/>
      <line x1="160" y1="160" x2="150" y2="240" stroke="#3a5a75" strokeWidth="3.5"/>
      <line x1="200" y1="155" x2="190" y2="235" stroke="#3a5a75" strokeWidth="3.5"/>
      <line x1="240" y1="165" x2="230" y2="245" stroke="#3a5a75" strokeWidth="3.5"/>
      <line x1="280" y1="158" x2="270" y2="238" stroke="#3a5a75" strokeWidth="3.5"/>
      <line x1="320" y1="168" x2="310" y2="248" stroke="#3a5a75" strokeWidth="3.5"/>
      
      {/* Middle burst */}
      <line x1="600" y1="155" x2="590" y2="235" stroke="#3a5a75" strokeWidth="3.5"/>
      <line x1="640" y1="162" x2="630" y2="242" stroke="#3a5a75" strokeWidth="3.5"/>
      <line x1="680" y1="158" x2="670" y2="238" stroke="#3a5a75" strokeWidth="3.5"/>
      <line x1="720" y1="166" x2="710" y2="246" stroke="#3a5a75" strokeWidth="3.5"/>
      <line x1="760" y1="160" x2="750" y2="240" stroke="#3a5a75" strokeWidth="3.5"/>
      <line x1="800" y1="170" x2="790" y2="250" stroke="#3a5a75" strokeWidth="3.5"/>
      
      {/* Right burst */}
      <line x1="960" y1="158" x2="950" y2="238" stroke="#3a5a75" strokeWidth="3.5"/>
      <line x1="1000" y1="165" x2="990" y2="245" stroke="#3a5a75" strokeWidth="3.5"/>
      <line x1="1040" y1="160" x2="1030" y2="240" stroke="#3a5a75" strokeWidth="3.5"/>
      <line x1="1080" y1="168" x2="1070" y2="248" stroke="#3a5a75" strokeWidth="3.5"/>
      <line x1="1120" y1="163" x2="1110" y2="243" stroke="#3a5a75" strokeWidth="3.5"/>
    </g>
    
    {/* Mountains - flat 2.0 */}
    <g opacity="0.75">
      <path d="M0 380 L110 315 L155 340 L0 400 Z" fill="#1E2D38"/>
      <path d="M155 340 L110 315 L250 300 L295 325 Z" fill="#14202B"/>
      <path d="M295 325 L250 300 L390 290 L435 315 Z" fill="#1E2D38"/>
      <path d="M435 315 L390 290 L530 285 L575 310 Z" fill="#14202B"/>
      <path d="M575 310 L530 285 L670 295 L715 320 Z" fill="#1E2D38"/>
      <path d="M715 320 L670 295 L810 300 L855 325 Z" fill="#14202B"/>
      <path d="M855 325 L810 300 L950 305 L995 330 Z" fill="#1E2D38"/>
      <path d="M995 330 L950 305 L1090 310 L1200 335 Z" fill="#14202B"/>
      <path d="M0 400 L155 340 L295 325 L435 315 L575 310 L715 320 L855 325 L995 330 L1200 335 L1200 500 L0 500 Z" fill="#0A161E"/>
    </g>
    <g opacity="0.82">
      <path d="M0 410 L125 350 L165 375 L0 430 Z" fill="#12212C"/>
      <path d="M165 375 L125 350 L285 338 L325 363 Z" fill="#08141F"/>
      <path d="M325 363 L285 338 L445 330 L485 355 Z" fill="#12212C"/>
      <path d="M485 355 L445 330 L605 327 L645 352 Z" fill="#08141F"/>
      <path d="M645 352 L605 327 L765 335 L805 360 Z" fill="#12212C"/>
      <path d="M805 360 L765 335 L925 342 L965 367 Z" fill="#08141F"/>
      <path d="M965 367 L925 342 L1085 348 L1200 370 Z" fill="#12212C"/>
      <path d="M0 430 L165 375 L325 363 L485 355 L645 352 L805 360 L965 367 L1200 370 L1200 500 L0 500 Z" fill="#040F18"/>
    </g>
    
    {/* Hills - flat 2.0 layered */}
    <path d="M0 450 L150 440 L300 435 L450 430 L600 437 L750 432 L900 429 L1050 435 L1200 439 L1200 500 L0 500 Z" 
          fill="#1A2520"/>
    <path d="M0 450 L150 440 L300 435 L450 430 L600 437 L750 432 L900 429 L1050 435 L1200 439 L1200 472 L0 472 Z" 
          fill="#0F1A15" opacity="0.4"/>
    <path d="M0 473 L200 468 L400 463 L600 467 L800 470 L1000 465 L1200 460 L1200 500 L0 500 Z" 
          fill="#0F1A15"/>
    
    {/* Trees - flat 2.0 with depth */}
    <g>
      <ellipse cx="325" cy="488" rx="9" ry="2.5" fill="#0A1510" opacity="0.4"/>
      <rect x="320" y="458" width="10" height="28" fill="#0A0A0A"/>
      <rect x="320" y="458" width="3.5" height="28" fill="#000000"/>
      <path d="M325 458 L310 458 L325 435 L340 458 Z" fill="#050F05"/>
      <path d="M325 458 L310 458 L325 444 Z" fill="#020802"/>
      
      <ellipse cx="925.5" cy="488" rx="10" ry="2.5" fill="#0A1510" opacity="0.4"/>
      <rect x="920" y="456" width="11" height="30" fill="#0A0A0A"/>
      <rect x="920" y="456" width="4" height="30" fill="#000000"/>
      <path d="M925.5 456 L908 456 L925.5 432 L943 456 Z" fill="#050F05"/>
      <path d="M925.5 456 L908 456 L925.5 441 Z" fill="#020802"/>
    </g>
  </svg>
);

export const ThunderstormDay = Thunderstorm;

export const ThunderstormNight: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 1200 500" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="thunderstormNightSkyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#0a1522', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#1a253e', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <rect width="1200" height="500" fill="url(#thunderstormNightSkyGradient)" />
    
    {/* Very dark storm clouds */}
    <g className="animate-float" opacity="0.95">
      <ellipse cx="150" cy="65" rx="90" ry="58" fill="#1a2532"/>
      <ellipse cx="235" cy="60" rx="85" ry="55" fill="#1a2532"/>
      <ellipse cx="315" cy="68" rx="80" ry="52" fill="#1a2532"/>
      <ellipse cx="230" cy="83" rx="75" ry="48" fill="#0f1a27"/>
    </g>
    
    <g className="animate-float-delayed" opacity="0.98">
      <ellipse cx="550" cy="75" rx="95" ry="62" fill="#1f2a37"/>
      <ellipse cx="640" cy="70" rx="90" ry="58" fill="#1f2a37"/>
      <ellipse cx="725" cy="78" rx="85" ry="55" fill="#1f2a37"/>
      <ellipse cx="635" cy="93" rx="80" ry="52" fill="#14202d"/>
    </g>
    
    <g className="animate-float" opacity="0.95">
      <ellipse cx="950" cy="70" rx="88" ry="57" fill="#1a2532"/>
      <ellipse cx="1030" cy="65" rx="83" ry="54" fill="#1a2532"/>
      <ellipse cx="1105" cy="73" rx="78" ry="51" fill="#1a2532"/>
    </g>
    
    {/* Lightning bolts - brighter at night */}
    <g opacity="0.95">
      <path d="M280 100 L260 160 L280 160 L250 240" stroke="#FFE44D" strokeWidth="6" fill="none" strokeLinecap="round"/>
      <path d="M280 100 L260 160 L280 160 L250 240" stroke="#FFFACD" strokeWidth="3" fill="none" strokeLinecap="round"/>
      
      <path d="M750 110 L730 170 L750 170 L720 250" stroke="#FFE44D" strokeWidth="6" fill="none" strokeLinecap="round"/>
      <path d="M750 110 L730 170 L750 170 L720 250" stroke="#FFFACD" strokeWidth="3" fill="none" strokeLinecap="round"/>
    </g>
    
    {/* Heavy rain */}
    <g className="animate-rain" opacity="0.75">
      <line x1="100" y1="170" x2="88" y2="260" stroke="#2a4a60" strokeWidth="3.5"/>
      <line x1="160" y1="180" x2="148" y2="270" stroke="#2a4a60" strokeWidth="3.5"/>
      <line x1="220" y1="175" x2="208" y2="265" stroke="#2a4a60" strokeWidth="3.5"/>
      <line x1="340" y1="185" x2="328" y2="275" stroke="#2a4a60" strokeWidth="3.5"/>
      <line x1="400" y1="178" x2="388" y2="268" stroke="#2a4a60" strokeWidth="3.5"/>
      <line x1="460" y1="188" x2="448" y2="278" stroke="#2a4a60" strokeWidth="3.5"/>
      <line x1="520" y1="182" x2="508" y2="272" stroke="#2a4a60" strokeWidth="3.5"/>
      <line x1="580" y1="192" x2="568" y2="282" stroke="#2a4a60" strokeWidth="3.5"/>
      <line x1="640" y1="176" x2="628" y2="266" stroke="#2a4a60" strokeWidth="3.5"/>
      <line x1="780" y1="186" x2="768" y2="276" stroke="#2a4a60" strokeWidth="3.5"/>
      <line x1="840" y1="180" x2="828" y2="270" stroke="#2a4a60" strokeWidth="3.5"/>
      <line x1="900" y1="190" x2="888" y2="280" stroke="#2a4a60" strokeWidth="3.5"/>
      <line x1="960" y1="184" x2="948" y2="274" stroke="#2a4a60" strokeWidth="3.5"/>
      <line x1="1020" y1="194" x2="1008" y2="284" stroke="#2a4a60" strokeWidth="3.5"/>
      <line x1="1080" y1="188" x2="1068" y2="278" stroke="#2a4a60" strokeWidth="3.5"/>
      <line x1="1140" y1="182" x2="1128" y2="272" stroke="#2a4a60" strokeWidth="3.5"/>
    </g>
    
    {/* Mountains barely visible - flat 2.0 */}
    <g opacity="0.7">
      <path d="M0 390 L110 325 L155 350 L0 410 Z" fill="#0F1E28"/>
      <path d="M155 350 L110 325 L250 310 L295 335 Z" fill="#08131D"/>
      <path d="M295 335 L250 310 L390 300 L435 325 Z" fill="#0F1E28"/>
      <path d="M435 325 L390 300 L530 295 L575 320 Z" fill="#08131D"/>
      <path d="M575 320 L530 295 L670 305 L715 330 Z" fill="#0F1E28"/>
      <path d="M715 330 L670 305 L810 310 L855 335 Z" fill="#08131D"/>
      <path d="M855 335 L810 310 L950 315 L995 340 Z" fill="#0F1E28"/>
      <path d="M995 340 L950 315 L1090 320 L1200 345 Z" fill="#08131D"/>
      <path d="M0 410 L155 350 L295 335 L435 325 L575 320 L715 330 L855 335 L995 340 L1200 345 L1200 500 L0 500 Z" fill="#040D15"/>
    </g>
    <g opacity="0.77">
      <path d="M0 420 L125 360 L165 385 L0 440 Z" fill="#08141F"/>
      <path d="M165 385 L125 360 L285 348 L325 373 Z" fill="#040A15"/>
      <path d="M325 373 L285 348 L445 340 L485 365 Z" fill="#08141F"/>
      <path d="M485 365 L445 340 L605 337 L645 362 Z" fill="#040A15"/>
      <path d="M645 362 L605 337 L765 345 L805 370 Z" fill="#08141F"/>
      <path d="M805 370 L765 345 L925 352 L965 377 Z" fill="#040A15"/>
      <path d="M965 377 L925 352 L1085 358 L1200 380 Z" fill="#08141F"/>
      <path d="M0 440 L165 385 L325 373 L485 365 L645 362 L805 370 L965 377 L1200 380 L1200 500 L0 500 Z" fill="#02070E"/>
    </g>
    
    {/* Very dark hills - flat 2.0 layered */}
    <path d="M0 455 L150 445 L300 440 L450 435 L600 442 L750 437 L900 434 L1050 440 L1200 444 L1200 500 L0 500 Z" 
          fill="#050F08"/>
    <path d="M0 455 L150 445 L300 440 L450 435 L600 442 L750 437 L900 434 L1050 440 L1200 444 L1200 478 L0 478 Z" 
          fill="#000A05" opacity="0.5"/>
    <path d="M0 480 L200 475 L400 470 L600 474 L800 477 L1000 472 L1200 467 L1200 500 L0 500 Z" 
          fill="#000A05"/>
    
    {/* Tree silhouettes - flat 2.0 */}
    <g>
      <ellipse cx="404.5" cy="490" rx="8" ry="2" fill="#000000" opacity="0.5"/>
      <rect x="400" y="462" width="9" height="25" fill="#000000"/>
      <rect x="400" y="462" width="3.2" height="25" fill="#000000"/>
      <path d="M404.5 462 L390 462 L404.5 442 L419 462 Z" fill="#000000"/>
      <path d="M404.5 462 L390 462 L404.5 450 Z" fill="#000000"/>
      
      <ellipse cx="1005" cy="490" rx="9" ry="2" fill="#000000" opacity="0.5"/>
      <rect x="1000" y="460" width="10" height="28" fill="#000000"/>
      <rect x="1000" y="460" width="3.5" height="28" fill="#000000"/>
      <path d="M1005 460 L990 460 L1005 437 L1020 460 Z" fill="#000000"/>
      <path d="M1005 460 L990 460 L1005 446 Z" fill="#000000"/>
    </g>
  </svg>
);
