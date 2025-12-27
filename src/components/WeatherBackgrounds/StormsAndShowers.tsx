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
    
    {/* Mountains */}
    <path d="M0 370 L200 300 L400 340 L600 280 L800 320 L1000 260 L1200 300 L1200 500 L0 500 Z" 
          fill="#8095A5" opacity="0.6"/>
    <path d="M0 400 L180 330 L360 380 L540 320 L720 370 L900 310 L1080 360 L1200 330 L1200 500 L0 500 Z" 
          fill="#708595" opacity="0.7"/>
    
    {/* Hills */}
    <path d="M0 445 L300 425 L600 435 L900 420 L1200 430 L1200 500 L0 500 Z" 
          fill="#628568" opacity="0.8"/>
    <path d="M0 468 L400 458 L800 463 L1200 453 L1200 500 L0 500 Z" 
          fill="#527558" opacity="0.85"/>
    
    {/* Trees */}
    <g opacity="0.75">
      <rect x="280" y="455" width="10" height="30" fill="#5A4A3A"/>
      <path d="M285 455 L268 455 L276.5 430 Z" fill="#2A4A30"/>
      
      <rect x="880" y="450" width="11" height="32" fill="#5A4A3A"/>
      <path d="M885.5 450 L867 450 L876.25 422 Z" fill="#2A4A30"/>
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
    
    {/* Mountains */}
    <path d="M0 380 L200 310 L400 350 L600 290 L800 330 L1000 270 L1200 310 L1200 500 L0 500 Z" 
          fill="#4A5A65" opacity="0.65"/>
    <path d="M0 410 L180 340 L360 390 L540 330 L720 380 L900 320 L1080 370 L1200 340 L1200 500 L0 500 Z" 
          fill="#3A4A55" opacity="0.75"/>
    
    {/* Hills */}
    <path d="M0 450 L300 430 L600 440 L900 425 L1200 435 L1200 500 L0 500 Z" 
          fill="#3A5540" opacity="0.8"/>
    <path d="M0 470 L400 460 L800 465 L1200 455 L1200 500 L0 500 Z" 
          fill="#2A4530" opacity="0.85"/>
    
    {/* Trees */}
    <g opacity="0.6">
      <rect x="320" y="458" width="10" height="28" fill="#3A2A1A"/>
      <path d="M325 458 L308 458 L316.5 435 Z" fill="#1A3010"/>
      
      <rect x="920" y="456" width="11" height="30" fill="#3A2A1A"/>
      <path d="M925.5 456 L907 456 L916.25 432 Z" fill="#1A3010"/>
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
    
    {/* Mountains barely visible */}
    <path d="M0 390 L200 320 L400 360 L600 300 L800 340 L1000 280 L1200 320 L1200 500 L0 500 Z" 
          fill="#2A3A45" opacity="0.6"/>
    <path d="M0 420 L180 350 L360 400 L540 340 L720 390 L900 330 L1080 380 L1200 350 L1200 500 L0 500 Z" 
          fill="#1A2A35" opacity="0.7"/>
    
    {/* Very dark hills */}
    <path d="M0 455 L300 435 L600 445 L900 430 L1200 440 L1200 500 L0 500 Z" 
          fill="#1A2820" opacity="0.85"/>
    <path d="M0 472 L400 462 L800 467 L1200 457 L1200 500 L0 500 Z" 
          fill="#0A1810" opacity="0.9"/>
    
    {/* Tree silhouettes */}
    <g opacity="0.5">
      <rect x="400" y="462" width="9" height="25" fill="#0A0A0A"/>
      <path d="M404.5 462 L388 462 L396.25 442 Z" fill="#050505"/>
      
      <rect x="1000" y="460" width="10" height="28" fill="#0A0A0A"/>
      <path d="M1005 460 L988 460 L996.5 437 Z" fill="#050505"/>
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
    
    {/* Mountains */}
    <path d="M0 370 L200 300 L400 340 L600 280 L800 320 L1000 260 L1200 300 L1200 500 L0 500 Z" 
          fill="#2a3a45" opacity="0.7"/>
    <path d="M0 400 L180 330 L360 380 L540 320 L720 370 L900 310 L1080 360 L1200 330 L1200 500 L0 500 Z" 
          fill="#1f2f3a" opacity="0.75"/>
    
    {/* Hills */}
    <path d="M0 445 L300 425 L600 435 L900 420 L1200 430 L1200 500 L0 500 Z" 
          fill="#2a3a30" opacity="0.8"/>
    <path d="M0 468 L400 458 L800 463 L1200 453 L1200 500 L0 500 Z" 
          fill="#1f2f25" opacity="0.85"/>
    
    {/* Trees */}
    <g opacity="0.65">
      <rect x="280" y="455" width="10" height="30" fill="#2a2520"/>
      <path d="M285 455 L268 455 L276.5 430 Z" fill="#1a2518"/>
      
      <rect x="880" y="450" width="11" height="32" fill="#2a2520"/>
      <path d="M885.5 450 L867 450 L876.25 422 Z" fill="#1a2518"/>
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
    
    {/* Mountains */}
    <path d="M0 380 L200 310 L400 350 L600 290 L800 330 L1000 270 L1200 310 L1200 500 L0 500 Z" 
          fill="#1a2530" opacity="0.7"/>
    <path d="M0 410 L180 340 L360 390 L540 330 L720 380 L900 320 L1080 370 L1200 340 L1200 500 L0 500 Z" 
          fill="#0f1a25" opacity="0.8"/>
    
    {/* Hills */}
    <path d="M0 450 L300 430 L600 440 L900 425 L1200 435 L1200 500 L0 500 Z" 
          fill="#1a2520" opacity="0.85"/>
    <path d="M0 470 L400 460 L800 465 L1200 455 L1200 500 L0 500 Z" 
          fill="#0f1a15" opacity="0.9"/>
    
    {/* Trees */}
    <g opacity="0.5">
      <rect x="320" y="458" width="10" height="28" fill="#0a0a0a"/>
      <path d="M325 458 L308 458 L316.5 435 Z" fill="#050f05"/>
      
      <rect x="920" y="456" width="11" height="30" fill="#0a0a0a"/>
      <path d="M925.5 456 L907 456 L916.25 432 Z" fill="#050f05"/>
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
    
    {/* Mountains barely visible */}
    <path d="M0 390 L200 320 L400 360 L600 300 L800 340 L1000 280 L1200 320 L1200 500 L0 500 Z" 
          fill="#0f1a25" opacity="0.65"/>
    <path d="M0 420 L180 350 L360 400 L540 340 L720 390 L900 330 L1080 380 L1200 350 L1200 500 L0 500 Z" 
          fill="#050f1a" opacity="0.75"/>
    
    {/* Very dark hills */}
    <path d="M0 455 L300 435 L600 445 L900 430 L1200 440 L1200 500 L0 500 Z" 
          fill="#050f08" opacity="0.9"/>
    <path d="M0 472 L400 462 L800 467 L1200 457 L1200 500 L0 500 Z" 
          fill="#000a05" opacity="0.95"/>
    
    {/* Tree silhouettes */}
    <g opacity="0.4">
      <rect x="400" y="462" width="9" height="25" fill="#000000"/>
      <path d="M404.5 462 L388 462 L396.25 442 Z" fill="#000000"/>
      
      <rect x="1000" y="460" width="10" height="28" fill="#000000"/>
      <path d="M1005 460 L988 460 L996.5 437 Z" fill="#000000"/>
    </g>
  </svg>
);
